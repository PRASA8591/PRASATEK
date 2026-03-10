# PrasaTek | System Solutions

Welcome to the **PrasaTek System Solutions** official website repository! This is a modern, fast, and responsive web application built for a professional PC repair and custom computer build business. It features a fully dynamic frontend integrated with a powerful Firebase backend and a secure admin dashboard.

## 🌟 Key Features

### 🖥️ Customer-Facing Frontend (`index.html`)
- **Modern & Responsive UI**: Glassmorphism design system using raw CSS, fully compatible down to mobile breakpoints (`max-width: 768px`).
- **Dynamic Product Carousel**: An intelligent auto-scrolling horizontal product slider that automatically pauses on hover/touch interactions and features manual loop navigation bounds.
- **Detailed Product Modals**: Clicking on any product instantly triggers a highly detailed modal overlay containing imagery, exact pricing, rich descriptions, and a direct inquiry hook.
- **Bilingual Interface**: Seamless instant toggle between English and Sinhala languages with native toast notification feedback.
- **Live Google Maps Integration**: Embedded iframe dynamically rendering your up-to-date shop location.
- **WhatsApp Direct Inquiries**: Quick-inquiry forms instantly route leads directly to the configured WhatsApp phone number.
- **Client Reviews**: A dynamic review section showcasing approved client testimonials, with a completely anonymous review submission form.

### 🔐 Admin Dashboard (`admin.html`)
- **Secure Authentication**: Firebase Authentication protects the dashboard (`adminlog.html`) equipped with automatic 15-minute inactivity timeouts and session lockdown variables.
- **Comprehensive CRUD Management**: 
  - Manage **Services** and **Products** visually. Add items with detailed descriptions, exact images, and matching Sinhala language inputs.
  - Dedicated **Edit Modals**: Click the `<i class="fa-solid fa-pen"></i>` button on any item to safely modify its live dataset without having to delete and re-upload.
- **Review Moderation Portal**: Segregated dashboard tracking *Pending Approvals* vs. *Approved Reviews*.
- **Live Configurations**: Remotely update the shop's public Email, Phone Number, Physical Address, and Google Map Embed URL in real-time.

## 🛠️ Technology Stack

1. **Frontend**: HTML5, Vanilla JavaScript (ESM Modules), Custom CSS (`style.css`).
2. **Backend Services & Database**: Google Firebase Cloud Firestore (`V10.7.1`).
3. **Authentication**: Google Firebase Auth.
4. **Icons & Typography**: FontAwesome v6.4, Google Fonts (Poppins).

## 🚀 Setup & Execution

Since this web application uses strictly Vanilla web languages paired with Cloud Firestore:
1. **No Node Modules Required**: The application runs entirely natively in the browser without needing a complex build step like React or Next.js!
2. **Local Testing**: Simply serve the root folder via any standard Live Server (e.g., VSCode Live Server extension, or Python's `http.server`). 
   *Note: Directly opening `index.html` via `file://` protocols might trigger CORS boundaries on Firebase ES Modules depending on browser policies.*

## 📂 File Structure

- `index.html` - The primary client-facing Single Page Application.
- `style.css` - Unified design configurations mapping CSS variables, carousels, modals, grids, and mobile queries.
- `site.js` - Main client logic handling dynamic database fetches, language toggles, review submissions, and auto-scroll hooks.
- `admin.html` - The protected admin control panel interface.
- `adminlog.html` - The administrative login portal.
- `admin.js` / `login.js` - Dedicated logic trees handling administrator sessions and data pushes.
- `firebaseconfig.js` - Environment architecture keys.

---
*© 2026 PrasaTek System Solutions. All Rights Reserved.*
