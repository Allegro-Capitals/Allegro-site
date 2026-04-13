import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
console.log('User:', process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // testing this
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Error with smtp-mail.outlook.com:", error);
    
    // Fallback test
    const t2 = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    t2.verify(function (e2, s2) {
      if (e2) {
        console.log("Error with smtp.office365.com:", e2);
      } else {
        console.log("Success with smtp.office365.com!");
      }
    });

  } else {
    console.log("Server is ready to take our messages with smtp-mail.outlook.com");
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email from Outlook",
      text: "This is a test to see if Outlook is working."
    }, (err, info) => {
      if (err) {
        console.error("Error sending test email:", err);
      } else {
        console.log("Test email sent success:", info.messageId);
      }
    });
  }
});
