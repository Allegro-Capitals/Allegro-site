
---
puppeteer:
  pdf:
    format: A4
    displayHeaderFooter: true
    headerTemplate: "<div style='font-size: 10px; text-align: right; width: 100%; padding-right: 20px;'>Allegro Advisors Admin Panel Guide</div>"
    footerTemplate: "<div style='font-size: 10px; text-align: center; width: 100%;'>Page <span class='pageNumber'></span> of <span class='totalPages'></span></div>"
    margin:
      top: 60px
      bottom: 60px
      right: 40px
      left: 40px
---

<div style="text-align: center; margin-top: 150px; margin-bottom: 200px;">
  <h1>Allegro Advisors</h1>
  <h2>Admin Panel Employee Guide</h2>
  <br>
  <i>Internal Operations & Content Management Documentation</i>
  <br><br>
  <div style="width: 300px; height: 150px; border: 2px dashed #ccc; margin: 0 auto; display: flex; align-items: center; justify-content: center; color: #777;">
    [Insert Screenshot: Company_Logo.png]
  </div>
</div>

<div style="page-break-after: always;"></div>

## Table of Contents
1. [Authentication & User Roles](#1-authentication--user-roles)
2. [Team Members Module](#2-team-members-module)
3. [Transactions Module](#3-transactions-module)
4. [Newsletter Module](#4-newsletter-module)
5. [Content Management](#5-content-management)
6. [Dashboard Overview](#6-dashboard-overview)

<div style="page-break-after: always;"></div>

## 1. Authentication & User Roles

### Login System
The Allegro Advisors admin panel is restricted to authorized employees and freelancers. All access requires authentication via the secure login portal.

> **[📝 Note]**
> If you have forgotten your password or cannot log in, please contact the IT Administrator to issue a password reset link.

<div style="width: 100%; height: 250px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center; color: #777; margin: 15px 0;">
  [Insert Screenshot: Login_Screen.png]
</div>

### Role-Based Access
Our admin panel operates on a strict Role-Based Access Control (RBAC) system. Depending on your responsibilities, you will be assigned one of the following roles:

- **Admin**: Full access. Can create, edit, delete records, and manage other users and their roles.
- **Editor**: Can add or edit content and operational data across all modules, but **cannot delete** existing records or users.
- **Viewer**: Read-only access to view dashboards, content, and data. Cannot modify or delete any information.

---

## 2. Team Members Module

This module allows administrators to manage employee and freelancer profiles that might be displayed on the platform or used for internal attribution.

### Add a Team Member
To add a new team member:
1. Navigate to "Team Members" from the sidebar menu.
2. Click the **"Add New Member"** button at the top right.
3. Fill out the mandatory fields.
4. Upload a profile image.
5. Click **"Save"**.

> **[⚠️ Warning]**
> All newly added members will instantly be visible in the system based on their assigned status (Active/Inactive). Ensure data is accurate before saving.

### Mandatory Fields & Validation Rules
- **Full Name**: Cannot be blank. Alphabetical characters only.
- **Role/Title**: Free text, but should conform to standard company titles.
- **Email**: Must be a valid email format.

### Upload/Update Images (Cloudinary)
Images are hosted and managed via Cloudinary, ensuring fast and optimized delivery.
- Click the image upload placeholder.
- Select a file from your local computer.
- Once the image uploads to Cloudinary, a preview will be shown.

### Edit and Delete Members
- **Edit**: Click the "Edit" (pencil) icon next to a member to update their profile.
- **Delete**: Click the "Delete" (trash) icon. 
  > **[🛑 Callout - Admins Only]**: You will be prompted with a confirmation dialog. Deleted profiles cannot be recovered.

<div style="width: 100%; height: 250px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center; color: #777; margin: 15px 0;">
  [Insert Screenshot: Team_Members_Dashboard.png]
</div>

---

## 3. Transactions Module

The Transactions Module handles records of real estate or financial transactions processed by Allegro Advisors.

### Add New Transaction
Navigate to **Transactions** > **Add New**. You must provide comprehensive details about the transaction, including dates, values, and associated parties.

### Uploading Related Images
Transactions often require photographic documentation. Four specific image slots are available:
1. **representingPic**: Image of the broker or representative.
2. **party2Pic**: Image of the secondary party/counterparty.
3. **assetPic**: Main photo of the asset in question (e.g., property, asset class).
4. **mainPic**: The hero or banner image representing the transaction overall.

**Cloudinary Upload Flow**:
1. Select the image slot you wish to fill.
2. The file selector opens. Choose the image file.
3. Wait for the upload progress bar to finish; the Cloudinary URL is automatically generated and bound to the transaction record.

### Status Updates
Transactions progress through different stages (e.g., Pending, Completed, Cancelled). Update the status using the dropdown selector inside the transaction edit view.

### Table View Explanation
The main Transactions dashboard provides a quick-glance data table with columns:
- **ID**: Unique transaction identifier.
- **Date**: Date the transaction was recorded or finalized.
- **Asset**: Short description of the asset.
- **Status**: The current state of the transaction.
- **Actions**: Edit or View icons.

<div style="width: 100%; height: 250px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center; color: #777; margin: 15px 0;">
  [Insert Screenshot: Transaction_Details.png]
</div>

---

## 4. Newsletter Module

Manage outgoing communications and company newsletters here.

### Add & Edit Newsletter
- **Add**: Click "Create Newsletter". Give it a Subject, Date, and fill in the Body content.
- **Edit**: Drafts and sent newsletters can be edited for future reference.

### Attachments/Images Handling
You can attach images within the newsletter body. These are also routed through Cloudinary to ensure they are accessible externally via email clients without breaking. 

### Publishing Rules
- Newsletters can be saved as **Draft** or **Published**.
- Published newsletters are locked from further editing to maintain a reliable record of what was sent.
- **Deleting** a newsletter removes the record from the admin panel completely (Admin access required).

> **[📝 Note]**
> Always send a test email to yourself to verify image rendering and text formatting before clicking "Publish".

---

## 5. Content Management

The Content Management module allows Editors and Admins to manipulate the public-facing areas of the Allegro Advisors website.

### Updating Text Blocks & Images
Sections such as the Homepage text, "About Us", or promotional banners can be edited.
1. Select the page you wish to edit from the Content tree.
2. Modify the text inside the provided text fields.
3. To update banners, upload a new image replacing the existing one (Cloudinary integration applies).

### Real-Time Preview & Saving Rules
- **Real-Time Preview**: Any changes made to text blocks will be reflected instantly in the side-by-side preview panel (if applicable) for standard pages.
- **Auto-save vs Manual save**: 
  - **Drafts**: Some fields have auto-save functionality to prevent data loss.
  - **Live Changes**: To push text or image updates to the live website, you must **Manually Save** by clicking the "Publish Changes" button.

<div style="width: 100%; height: 250px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center; color: #777; margin: 15px 0;">
  [Insert Screenshot: Content_Editor.png]
</div>

---

## 6. Dashboard Overview

The dashboard is the landing page immediately following a successful login.

### Navigation Layout
- **Top Bar**: Shows your user profile, role, and a quick logout button.
- **Left Sidebar**: Primary navigation to all modules (Transactions, Team Members, Content, Newsletters).

### Basic KPIs
The top of the dashboard displays key metrics at a glance:
- Total Transactions (Month/Year)
- Total Active Team Members
- Recent Newsletters Sent

### Quick Actions
Below the KPIs are shortcut buttons to jump straight into common tasks:
- *Add Transaction*
- *Draft Newsletter*
- *Edit Homepage Content*

<div style="width: 100%; height: 250px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center; color: #777; margin: 15px 0;">
  [Insert Screenshot: Dashboard_Home.png]
</div>
