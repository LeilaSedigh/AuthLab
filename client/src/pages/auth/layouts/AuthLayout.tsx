import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <section className="auth-layout__brand" aria-labelledby="auth-brand-title">
        <h2 id="auth-brand-title">AuthLab</h2>
        <p>فضای یادگیری ورود و ثبت‌نام</p>
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
