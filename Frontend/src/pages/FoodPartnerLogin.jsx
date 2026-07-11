import { Link } from "react-router-dom";
import "../styles/auth.css";

const FoodPartnerLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Partner Login</h1>
        <p>Manage your restaurant.</p>

        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="restaurant@example.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="auth-links">
          <p>Want to join as a partner?</p>

          <Link to="/food-partner/register">Register as Food Partner</Link>

          <Link to="/user/register">Register as Customer</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
