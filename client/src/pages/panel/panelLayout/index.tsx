
import { Outlet, NavLink } from "react-router-dom";
import type { FC } from "react";

const PanelLayout: FC = () => {
    return (
        <div className="panel-layout">

            {/* Sidebar */}
            <aside className="panel-sidebar">

                <div className="panel-sidebar__brand">
                    <div className="panel-sidebar__logo">A</div>

                    <h2>
                        Auth<span>Lab</span>
                    </h2>
                </div>

                <nav className="panel-sidebar__nav">

                    <span className="panel-sidebar__label">
                        MENU
                    </span>

                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) =>
                            `panel-sidebar__link ${isActive ? "active" : ""}`
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `panel-sidebar__link ${isActive ? "active" : ""}`
                        }
                    >
                        Profile
                    </NavLink>

                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `panel-sidebar__link ${isActive ? "active" : ""}`
                        }
                    >
                        Settings
                    </NavLink>

                </nav>

                <div className="panel-sidebar__footer">
                    <span>AuthLab Dashboard</span>
                    <small>Version 1.0.0</small>
                </div>

            </aside>

            {/* Main Content */}
            <div className="panel-content">

                <header className="panel-header">

                    <div className="panel-header__title">
                        <span>Workspace</span>
                        <h3>Dashboard</h3>
                    </div>

                    <div className="panel-header__user">
                        <div className="panel-header__avatar">
                            A
                        </div>

                        <div className="panel-header__user-info">
                            <strong>Admin User</strong>
                            <span>Administrator</span>
                        </div>
                    </div>

                </header>

                <main className="panel-main">
                    <Outlet />
                </main>

                <footer className="panel-footer">
                    © 2026 AuthLab. All rights reserved.
                </footer>

            </div>

        </div>
    );
};

export default PanelLayout;