# 🚀 Next.js Boilerplate

A modern **Next.js** starter template with **TypeScript, ESLint, Prettier, Stylelint, Tailwind CSS, and ShadCN UI** – optimized for best practices, scalability, and developer experience.

---

## 🏗 Custom FSD Architecture

This project follows a **custom Feature-Sliced Design (FSD)** architecture, ensuring **modularity, maintainability, and scalability**.

### 📂 Project Structure

📦 app/  
 ├── (app)/ # Main application pages  
 ├── (pages)/ # Page-level components  
 ├── \_widgets/ # Complex UI elements (combining features/entities)  
 ├── \_features/ # Independent features & logic  
 ├── \_entities/ # Core business logic and domain models  
 ├── \_shared/ # Reusable UI components, utilities, hooks

This structure helps **separate concerns** and **improve scalability**, making the app easy to maintain as it grows.

---

## ✨ Features

- ⚡ **Next.js 15 + React 19** – High-performance rendering and modern React features.
- 📂 **Custom FSD Architecture** – Modular structure for scalable development.
- 🎨 **Tailwind CSS + ShadCN UI** – Utility-first styling with accessible UI components.
- ✅ **TypeScript** – Static typing for better reliability and maintainability.
- 🛠 **Linting & Formatting** – Preconfigured **ESLint, Prettier, and Stylelint** for clean and consistent code.

---

## 📥 Installation & Setup

### 1️⃣ Clone the repository without Git history

```sh
git clone --depth=1 https://github.com/plesh9/next-boilerplate.git my-project && rm -rf my-project/.git
```

### 2️⃣ Navigate to the project directory

```sh
cd my-project
```

### 3️⃣ Install dependencies

```sh
pnpm install  # Or use npm install / yarn install
```

### 4️⃣ Run the development server

```sh
pnpm dev  # Or use npm run dev / yarn dev
```

🚀 **The project will be available at `http://localhost:3000`**.
