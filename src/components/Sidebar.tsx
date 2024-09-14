import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaTachometerAlt, FaGem, FaList, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarComponent = ({ isCollapsed }) => {
  return (
    <Sidebar
      breakPoint="md"
      backgroundColor="red"
      transitionDuration={500}
      collapsed={isCollapsed}
    >
      <Menu>
        <MenuItem
          icon={<FaTachometerAlt />}
          component={<Link to="/dashboard" />}
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
