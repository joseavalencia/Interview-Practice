# 📝 Todo List App

A simple and elegant Todo List application built with React and Vite, demonstrating CRUD operations and modern React patterns.

## ✨ Features

- **Create** - Add new todos with a simple form
- **Read** - View all your todos in a clean, organized list
- **Update** - Edit todo text inline with Enter key support
- **Delete** - Remove todos you no longer need
- **Toggle** - Mark todos as complete/incomplete
- **Responsive** - Works great on desktop and mobile

## 🚀 Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Custom Hooks** - Clean separation of logic and UI
- **CSS3** - Modern styling with flexbox

## 🏗️ Project Structure

```
src/
├── components/
│   ├── TodoList.jsx      # Main todo list component
│   └── TodoItem.jsx      # Individual todo item component
├── hooks/
│   └── useTodos.js       # Custom hook for todo management
├── App.jsx               # Root component
└── App.css              # Styling
```

## 🎯 Key React Concepts Demonstrated

- **useState Hook** - State management
- **Custom Hooks** - Logic separation and reusability
- **Component Composition** - Building complex UIs from simple parts
- **Props & Event Handling** - Component communication
- **Conditional Rendering** - Dynamic UI updates
- **Form Handling** - User input management

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🎨 Usage

- **Add Todo**: Type in the input field and press Enter or click "Add Todo"
- **Edit Todo**: Click the "Edit" button, modify the text, and press Enter or click "Save"
- **Complete Todo**: Check the checkbox to mark as complete
- **Delete Todo**: Click the "Delete" button to remove a todo

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
