
import { Outlet } from "react-router-dom";
import { ShieldTick } from "iconsax-react";

const AuthLayout = () => {
    return (
        <div className="auth-layout">

            <section className="auth-layout__brand">

                <div className="auth-brand__logo">
                    <ShieldTick
                        size={50}
                        color="#16c9a5"
                        variant="Bold"
                    />

                    <h2>
                        Auth<span>Lab</span>
                    </h2>
                </div>

                <div className="auth-brand__content">
                    <h1>
                        Your Access.
                        <span>Our Priority.</span>
                    </h1>

                    <p>
                        Secure. Simple. Modern.
                        <br />
                        Welcome to AuthLab.
                    </p>
                </div>

            </section>

            <main className="auth-layout__main">

                <div className="auth-layout__card">
                    <Outlet />
                </div>

            </main>

        </div>
    );
};

export default AuthLayout;
