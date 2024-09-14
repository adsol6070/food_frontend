import { FaSearch, FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ onToggleSidebar }) => {
  return (
    <>
      {/* Header */}
      <header style={headerStyles}>
        {/* Header Container */}
        <div style={headerInnerStyles}>
          {/* Hamburger Menu */}
          <button style={hamburgerButtonStyles} onClick={onToggleSidebar}>
            <FaBars />
          </button>

          {/* Logo Section */}
          <div style={logoContainer}>
            <Link to="/" style={logoStyle}>
              <img src="/logo.png" alt="Logo" style={logoImageStyle} />
              <span style={brandNameStyle}>MyApp</span>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div style={searchContainer}>
          <input type="text" placeholder="Search..." style={searchInputStyle} />
          <button style={searchButtonStyle}>
            <FaSearch />
          </button>
        </div>

        {/* Nav Links and User Actions */}
        <div style={navLinksContainer}>
          <Link to="/notifications" style={navIconStyle}>
            <FaBell />
          </Link>
          <Link to="/profile" style={navIconStyle}>
            <FaUserCircle />
          </Link>
        </div>
      </header>

      {/* Sidebar */}
      {/* <SidebarComponent isCollapsed={isSidebarCollapsed} /> */}
    </>
  );
};

// Inline styles for simplicity (you can also use CSS modules or external stylesheet)
const headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
  backgroundColor: "#FCFCFC",
  color: "#fff",
  borderBottom: "3px solid #EEEEFF",
};

const headerInnerStyles = {
  display: "flex",
  alignItems: "center",
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
  marginLeft: "10px",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#fff",
};

const logoImageStyle = {
  height: "40px",
  marginRight: "10px",
};

const brandNameStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#000",
};

const searchContainer = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "20px",
  padding: "5px",
};

const searchInputStyle = {
  border: "none",
  padding: "5px 10px",
  borderRadius: "20px",
  outline: "none",
  flex: 1,
};

const searchButtonStyle = {
  backgroundColor: "#4a90e2",
  border: "none",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
};

const navLinksContainer = {
  display: "flex",
  alignItems: "center",
};

const navIconStyle = {
  color: "#fff",
  fontSize: "24px",
  marginLeft: "20px",
  textDecoration: "none",
  cursor: "pointer",
};

const hamburgerButtonStyles = {
  background: "none",
  border: "none",
  color: "#000",
  fontSize: "24px",
  cursor: "pointer",
};

export default Header;
