import { Navigate } from "react-router-dom";
import PanelLayout from "../../pages/panel/panelLayout";
import Dashdoard from "../../pages/panel/dashboard";
import Profile from "../../pages/panel/profile";
import Settings from "../../pages/panel/setting";

export const panelRouter = [
    {
        path: '/',
        element: <PanelLayout />,
        children: [
            { index: true, element: <Navigate to='/dashdoard' replace={true} /> },
            {
                path: 'dashboard',
                element: <Dashdoard />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
        ]
    }]