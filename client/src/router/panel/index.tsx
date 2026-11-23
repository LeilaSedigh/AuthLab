import { Navigate } from "react-router-dom";
import PanelLayout from "../../pages/panel/panelLayout";
import Home from "../../pages/panel/home";
import About from "../../pages/panel/about";

export const panelRouter = [
    {
        path: '/',
        element: <PanelLayout />,
        children: [
            { index: true, element: <Navigate to='/home' replace={true} /> },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
        ]
    }]