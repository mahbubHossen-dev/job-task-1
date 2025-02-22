import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PrivateLayout from "../MainLayout/PrivateLayout";
import AddTask from "../Pages/AddTask";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <PrivateLayout><Home></Home></PrivateLayout>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/addTask',
                element: <PrivateLayout><AddTask></AddTask></PrivateLayout>
            }
        ]
    },

])

export default router