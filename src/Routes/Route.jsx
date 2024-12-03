import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import App from "../App"
import Home from '../HomeLayout/Home';
import AddCoffee from '../Components/AddCoffee';
import UpdateCoffee from '../Components/UpdateCoffee';
import Login from '../Authentication/Login';
import SingUp from '../Authentication/SingUp';
import MainLayout from '../HomeLayout/MainLayout';
import User from '../Components/User';



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // loader: ()=>fetch('http://localhost:5000/coffee')
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            }, {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>,
            }, {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/singUp',
                element: <SingUp></SingUp>
            }, {
                path: '/user',
                element: <User></User>,
                loader: ()=> fetch('http://localhost:5000/users')
            }

        ]
    },
]);


















export default router;