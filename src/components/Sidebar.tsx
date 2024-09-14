import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaTachometerAlt, FaGem, FaList, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarComponent = ({ isCollapsed }) => {
  return (
    <Sidebar
      breakPoint="md"
      backgroundColor="#FCFCFC"
      transitionDuration={500}
      collapsed={isCollapsed}
      style={{
        paddingTop: "20px",
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            margin: "0px 10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ":hover": {
              color: "#CF9D47",
              background: "#EEEEFF",
            },
          },
        }}
      >
        <MenuItem
          icon={<FaTachometerAlt />}
          component={<Link to="/dashboard" />}
          rootStyles={{
            color: "#cf9d47",
          }}
        >
          Dashboard
        </MenuItem>
        <SubMenu label={"Features"} icon={<FaGem />}>
          <MenuItem icon={<FaList />} component={<Link to="/feature-1" />}>
            Feature 1
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<FaUser />} component={<Link to="/profile" />}>
          Profile
        </MenuItem>
        <MenuItem icon={<FaUser />} component={<Link to="/settings" />}>
          Settings
        </MenuItem>
        <MenuItem icon={<FaUser />} component={<Link to="/logout" />}>
          Logout
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
