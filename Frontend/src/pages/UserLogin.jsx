import { Link } from "react-router-dom";
import "../styles/auth.css";

const UserLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Login as a customer.</p>

        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="auth-links">
          <p>New here?</p>

          <Link to="/user/register">Register as Customer</Link>

          <Link to="/food-partner/register">Register as Food Partner</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
