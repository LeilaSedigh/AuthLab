import { Navigate } from "react-router-dom";
import AuthLayout from "../../pages/auth/layouts/AuthLayout";
import React from "react";
const Login = React.lazy(async () => await import('../../pages/auth/login/Login'));
const Register = React.lazy(async () => await import('../../pages/auth/register/Register'));


const authRouter = [
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='login' replace={true} />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            { path: '*', element: <Navigate to='/login' replace={true} /> },
        ],
    }]

export default authRouter;