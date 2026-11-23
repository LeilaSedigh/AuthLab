import { Outlet } from "react-router-dom";
import type { FC } from "react";

const Panelayout: FC = () => {
    return (
        <div>
            <header>header</header>
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </div>
    )
}

export default Panelayout;