import { FaSearch, FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { theme } from "../constants/theme";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ onToggleSidebar }) => {
  return (
    <>
      {/* Header */}
      <header style={headerStyles}>
        {/* Header Container */}
        <div style={headerInnerStyles}>
          {/* Hamburger Menu */}
          <button style={hamburgerButtonStyles} onClick={onToggleSidebar}>
            <RxHamburgerMenu />
          </button>
          <div style={searchContainer}>
            <button style={searchButtonStyle}>
              <FaSearch />
            </button>
            <input type="text" placeholder="search" style={searchInputStyle} />
          </div>
        </div>

        {/* Search Bar */}

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
    </>
  );
};

// Inline styles for simplicity (you can also use CSS modules or external stylesheet)
const headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 20px",
  height: "69px",
  backgroundColor: theme.colors.almostWhite,
  color: theme.colors.white,
  borderBottom: `3px solid ${theme.colors.whiteSmoke}`,
};

const headerInnerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};

const searchContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.white,
  borderRadius: "30px",
  border: "1px solid #afadab",
  padding: "2px",
};

const searchInputStyle = {
  border: "none",
  padding: "5px 10px",
  borderRadius: "20px",
  outline: "none",
  flex: 1,
};

const searchButtonStyle = {
  background: "transparent",
  border: "none",
  color: "#afadab",
  cursor: "pointer",
  textAlign: "center",
};

const navLinksContainer = {
  display: "flex",
  alignItems: "center",
};

const navIconStyle = {
  color: theme.colors.white,
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
