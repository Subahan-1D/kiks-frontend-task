# 🛍️ Zavisoft Frontend Implementation Task

## 📌 Overview

This project is a frontend implementation based on the provided Figma design for Zavisoft’s Frontend Task.

The application includes:

- 🏠 Landing Page (Product Listing)
- 📄 Product Detail Page
- 🗂️ Product Categories List
- 📱 Fully Responsive Design (Mobile & Desktop)
- 🔄 API Integration using Platzi Fake Store API
- ⚡ Loading, Error, and Empty State Handling

The UI has been implemented with close attention to layout, spacing, typography, and responsiveness as per the Figma design.

---

## 🚀 Live Demo

🔗 Live URL: **[Add Your Deployment Link Here]**

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit
- **Data Fetching:** RTK Query
- **Styling:** Tailwind CSS
- **Component Library:** (If used, mention here)

---

## 🌐 API Endpoints Used

Products:
```
https://fakeapi.platzi.com/en/rest/products/
```

Categories:
```
https://fakeapi.platzi.com/en/rest/categories/
```

---

## ✅ Implemented Features

### 🏠 Landing Page
- Fetch product list from API
- Responsive product grid layout
- Category section with custom pagination
- Loading, Error & Empty states

### 📄 Product Details Page
- Dynamic routing using product ID
- Fetch single product data
- Clean and responsive UI layout

### 🗂️ Categories Section
- Fetch categories from API
- Custom pagination (2 items visible at a time)
- Previous/Next button disable handling

---

## 📁 Project Structure

```
src/
│
├── app/
│   ├── page.tsx
│   ├── product/[id]/page.tsx
│
├── components/
│   ├── common/
│   ├── product/
│   ├── category/
│
├── redux/
│   ├── api/baseApi.ts
│   ├── features/product/
│   ├── features/category/
│   └── store.ts
│
└── styles/
```

The project follows a modular and scalable architecture.

---

## 🧠 State Management & Data Flow

- Redux Toolkit for global state management
- RTK Query for API integration
- Tag-based caching and invalidation
- Clean separation between UI and data logic

---

## 🎨 UI & Responsiveness

- Pixel-accurate implementation from Figma
- Mobile-first responsive design
- Tailwind utility-based styling
- Hover effects and transitions where appropriate

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/Subahan-1D/kiks-frontend-task.git
cd kiks-frontend-task
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

Visit:
```
http://localhost:3000
```

---

## 🔄 UI State Handling

Each API request includes:

- ⏳ Loading State
- ❌ Error State
- 📭 Empty State
- 📦 Success State

Ensuring smooth user experience.

---

## 📝 Commit Strategy

Commits are structured and meaningful, such as:

- setup redux store
- integrate product api
- add category list with custom pagination
- implement loading and error states
- responsive fixes

---

## 📌 Notes

- Clean component-based architecture
- Reusable UI components
- Optimized image handling with Next.js Image
- Focused on maintainability and scalability

---

## 👨‍💻 Author

Name  : Md.Subahan Ali
Frontend Developer 
