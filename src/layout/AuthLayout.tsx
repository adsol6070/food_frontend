import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <header>
        <h1>Auth Section</h1> {/* Can be a logo or branding */}
      </header>
      <main>
        <Outlet /> {/* Content for login/register */}
      </main>
      <footer>© 2024 Your Company</footer>
    </div>
  );
};

export default AuthLayout;
