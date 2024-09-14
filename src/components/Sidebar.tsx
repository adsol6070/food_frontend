import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaTachometerAlt, FaRegGem, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { theme } from "../constants/theme";

const SidebarComponent = ({ isCollapsed }) => {
  return (
    <Sidebar
      breakPoint="md"
      backgroundColor={theme.colors.almostWhite}
      width="282px"
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
            fontSize: "15px",
            alignItems: "center",
            ...theme.fonts.bold,
            ":hover": {
              color: theme.colors.orangeYellow,
              background: theme.colors.whiteSmoke,
            },
          },
        }}
      >
        <MenuItem
          icon={<FaTachometerAlt size="20" />}
          component={<Link to="/dashboard" />}
          rootStyles={{
            color: theme.colors.orangeYellow,
          }}
        >
          Dashboard
        </MenuItem>
        <SubMenu label={"Orders"} icon={<FaRegGem size="20" />}>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/orders" />}
          >
            List
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/orders/details" />}
          >
            Detail
          </MenuItem>
        </SubMenu>
        <SubMenu label={"Foods"} icon={<FaRegGem size="20" />}>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/food" />}
          >
            List
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/food/detail" />}
          >
            Detail
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/food/create" />}
          >
            Add
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/food/edit" />}
          >
            Edit
          </MenuItem>
        </SubMenu>
        <SubMenu label={"Customer"} icon={<FaRegGem size="20" />}>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/feature-1" />}
          >
            List
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/feature-1" />}
          >
            Detail
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/feature-1" />}
          >
            Add
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/feature-1" />}
          >
            Edit
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<FaRegUser size="20" />}
          component={<Link to="/profile" />}
        >
          Wallet
        </MenuItem>
        <MenuItem
          icon={<FaRegUser size="20" />}
          component={<Link to="/settings" />}
        >
          Setting
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
