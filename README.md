# Task Management Application

This is a Task Management Application where users can manage their tasks by adding, editing, deleting, and reordering tasks with a drag-and-drop interface. The tasks are categorized into To-Do, In Progress, and Done. Users can also set due dates for tasks, and the app features dark mode, color indicators for overdue tasks, and a simple activity log to track changes.







## Live

https://job-task-22470.web.app/


## Key Features

- Authentication: Firebase Google Sign-In for user authentication.
- Task Management:
- Users can add, edit, delete, and reorder tasks.
- Tasks are categorized into To-Do, In Progress, and Done.
- Drag-and-drop functionality to move tasks between categories and reorder within categories.
- Tasks can have due dates, with overdue tasks appearing in red.
- Dark Mode Toggle: Users can switch between light and dark modes.
- Activity Log: A simple log to track changes made to tasks (e.g., "Task moved to Done").


## 🛠 Skills
Technologies Used

Frontend:

react
react-dom
vite
react-beautiful-dnd
firebase
tailwindcss

Backend:
express
mongodb
firebase-admin
dotenv

### NPM package

  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongodb": "^6.13.0"
  }



## ⚡ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/cinemavibe.git
cd cinemavibe
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Frontend Environment Setup

Create a `.env.local` file and add your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 4️⃣ Backend Environment Setup

Create a `.env` file in the backend folder and add:

```env
NODE_ENV=development
PORT=YourPort
```

### 5️⃣ Run the Project

```bash
npm run dev
