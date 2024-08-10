import { Link } from "react-router-dom";
import logo from "./cel_logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100vw",
            paddingRight: "2rem",
          }}
        >
          <div className="logo">
            <img src={logo} alt="Logo" width="50" height="50" />
            <nav>
              <h1>Central Electronics Limited</h1>
            </nav>
          </div>

          <nav>
            <ul style={{ display: "flex", gap: "10px" }}>
              <Link to="/">Home</Link>
              <Link to="/user">Sign Up</Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;