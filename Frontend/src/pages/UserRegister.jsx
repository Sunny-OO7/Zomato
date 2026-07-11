import { Link } from "react-router-dom";
import "../styles/auth.css";

const UserRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Register as a customer.</p>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>

          <button type="submit">Create Account</button>
        </form>

        <div className="auth-links">
          <p>Already have an account?</p>

          <Link to="/user/login">Login as Customer</Link>

          <Link to="/food-partner/login">Login as Food Partner</Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
