# React + Vite Todo App

This is a simple Todo application built with React and Vite, using Material-UI components and local storage for data persistence.

## Features

- Add new todos
- Mark todos as complete
- Delete todos
- Persist todos in local storage
- Responsive design with Material-UI

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
- You have a Windows/Linux/Mac machine.

## Installing and Running the Todo App

To install and run this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/skylarshi123/ToDoListWithREACT.git
   ```

2. Navigate to the project directory:
   ```
   cd react-vite-todos
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the app.

## Building for Production

To build the app for production, run:

```
npm run build
```

This will generate a `dist` folder with all the production files.

## Project Structure

- `src/App.jsx`: Main application component
- `src/main.jsx`: Entry point of the application
- `src/Navbar.jsx`: Navigation bar component
- `src/TodoList.jsx`: Component for rendering the list of todos
- `src/TodoItem.jsx`: Component for individual todo items
- `src/TodoForm.jsx`: Component for adding new todos

## Dependencies

- React
- Vite
- Material-UI
- React DOM