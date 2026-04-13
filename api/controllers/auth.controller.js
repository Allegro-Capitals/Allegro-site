import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    // 1. Production-level explicit admin bypass
    const allowedAdmins = ['contact@allegroadvisors.com', 'krushi.bandi@allegroadvisors.com'];
    if (allowedAdmins.includes(email)) {
      if (password === 'Allegro@123#') {
        const token = jwt.sign(
          { id: 'admin-bypass', isAdmin: true },
          process.env.JWT_SECRET,
          { expiresIn: '10m' } // Token expires in 10 minutes
        );

        return res
          .status(200)
          .cookie('access_token', token, {
            httpOnly: true,
            maxAge: 10 * 60 * 1000, // 10 minutes session
          })
          .json({ _id: 'admin-bypass', username: 'Super Admin', email, isAdmin: true });
      } else {
        return next(errorHandler(400, 'Invalid password'));
      }
    }

    // 2. Standard DB fallback
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
