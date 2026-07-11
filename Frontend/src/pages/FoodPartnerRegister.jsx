import { Link } from "react-router-dom";
import "../styles/auth.css";

const FoodPartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Become a Partner</h1>
        <p>Register your restaurant.</p>

        <form>
          <div className="form-group">
            <label>Restaurant Name</label>
            <input type="text" placeholder="Restaurant Name" />
          </div>

          <div className="form-group">
            <label>Owner Name</label>
            <input type="text" placeholder="Owner Name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="restaurant@example.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>

          <button type="submit">Create Partner Account</button>
        </form>

        <div className="auth-links">
          <p>Already have a partner account?</p>

          <Link to="/food-partner/login">Login as Food Partner</Link>

          <Link to="/user/login">Login as Customer</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
