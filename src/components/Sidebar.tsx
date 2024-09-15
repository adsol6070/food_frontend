import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { theme } from "../constants/theme";
import { FiHome } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { LuSettings, LuWallet2 } from "react-icons/lu";
import { MdOutlineFastfood, MdOutlineFormatListNumbered } from "react-icons/md";

const SidebarComponent = ({ isCollapsed }) => {
  return (
    <Sidebar
      breakPoint="md"
      backgroundColor={theme.colors.almostWhite}
      width="282px"
      transitionDuration={500}
      collapsed={isCollapsed}
      toggled={true}
      onBackdropClick={() => console.log("Clicked")}
    >
      {/* Company Logo and Name Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "flex-start",
          padding: "0 20px",
          marginBottom: "20px",
          borderBottom: `1px solid ${theme.colors.whiteSmoke}`,
          height: "69px", // Ensures enough height for vertical centering
        }}
      >
        <img
          src={""}
          alt="logo"
          style={{
            height: "40px",
            width: "40px",
            marginRight: isCollapsed ? "0" : "20px",
            transition: "margin-right 0.3s",
            objectFit: "contain",
          }}
        />
        {!isCollapsed && (
          <h2
            style={{
              ...theme.fonts.bold,
              margin: 0,
              lineHeight: "1.2",
            }}
          >
            Adsol
          </h2>
        )}
      </div>

      <Menu
        closeOnClick={true}
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
          icon={<FiHome size="22" />}
          component={<Link to="/dashboard" />}
          rootStyles={{
            color: theme.colors.orangeYellow,
          }}
        >
          Dashboard
        </MenuItem>
        <SubMenu
          label={"Orders"}
          icon={<MdOutlineFormatListNumbered size="22" />}
        >
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
        <SubMenu label={"Foods"} icon={<MdOutlineFastfood size="22" />}>
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
        <SubMenu label={"Customer"} icon={<GoPeople size="22" />}>
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
          icon={<LuWallet2 size="22" />}
          component={<Link to="/profile" />}
        >
          Wallet
        </MenuItem>
        <MenuItem
          icon={<LuSettings size="22" />}
          component={<Link to="/settings" />}
        >
          Setting
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
