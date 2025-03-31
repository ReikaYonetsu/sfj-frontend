# SFJ Frontend

This is the frontend for the **Silfine Japan Quotation Programme**. It is a React-based web application that allows users to get solar quotations, track their quotation history, and manage their profiles. The UI closely follows a Figma design and supports localization (English and Japanese).

## Features

- Modern, responsive UI built with **React**, **Vite**, and **Tailwind CSS**
- Multi-step quotation form
- Authentication system (Login & Signup)
- Dashboard with navigation to quotation and history
- History page with downloadable quotation PDF
- i18n support for **English** and **Japanese**
- Protected routes (dashboard, quotation, history only accessible when logged in)

## Folder Structure

```bash
sfj-frontend/
├── public/
├── src/
│   ├── assets/                # Images and icons
│   ├── locales/               # i18n translation files
│   ├── pages/                 # All JSX page components
│   ├── App.jsx                # Main app routing
│   ├── i18n.js                # i18next configuration
│   ├── main.jsx               # React entry point
│   ├── App.css / index.css    # Global styling
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sfj-frontend.git
cd sfj-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Additional Notes

- Make sure the backend is running on `http://localhost:5001` as the frontend expects it to be available there.
- JWT tokens and userId are stored in `localStorage` to manage session and protected routes.
- You can switch languages using the language dropdown in the top-right corner.

---

Made with ❤️ for the Silfine Japan Solar Quotation Programme
