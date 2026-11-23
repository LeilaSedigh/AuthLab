
import type React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { panelRouter } from "./panel";
import authRouter from "./auth";

const Router: React.FC = () => {
    const router = false
        ? createBrowserRouter(panelRouter)
        : createBrowserRouter(authRouter);

    return <RouterProvider router={router} />;
};

export default Router;
