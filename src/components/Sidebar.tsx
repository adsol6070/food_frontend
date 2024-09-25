import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { theme } from "../constants/theme";
import { FiHome } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import {
  MdOutlineFastfood,
  MdOutlineFormatListNumbered,
  MdSecurity,
} from "react-icons/md";
import Logo from "../assets/images/logo-dark (1).png";
import { CiBarcode } from "react-icons/ci";
import { LiaTableSolid } from "react-icons/lia";
import { RiRestaurant2Line } from "react-icons/ri";
import { usePermissions } from "../common/context/PermissionContext";

const SidebarComponent = ({ isCollapsed, isToggled, setIsToggled }) => {
  const { permissions } = usePermissions();

  return (
    <Sidebar
      breakPoint="md"
      backgroundColor={theme.colors.almostWhite}
      width="282px"
      transitionDuration={500}
      collapsed={isCollapsed}
      toggled={isToggled}
      onBackdropClick={() => setIsToggled((prevState) => !prevState)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "flex-start",
          padding: "0 20px",
          marginBottom: "20px",
          borderBottom: `1px solid ${theme.colors.whiteSmoke}`,
          height: "69px",
        }}
      >
        <img
          src={Logo}
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
            component={<Link to="/food/createCategory" />}
          >
            Add Category
          </MenuItem>
        </SubMenu>

        <SubMenu
          label={"Clients"}
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
            component={<Link to="/client/menu" />}
          >
            Menu List
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/client/orders" />}
          >
            Orders
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/client/cart" />}
          >
            Cart
          </MenuItem>
        </SubMenu>

        <MenuItem
          icon={<MdSecurity size="22" />}
          component={<Link to="/permissions" />}
        >
          Permissions
        </MenuItem>
        <MenuItem
          icon={<CiBarcode size="22" />}
          component={<Link to="/client/barcodes" />}
        >
          Barcodes
        </MenuItem>
        <MenuItem
          icon={<LiaTableSolid size="22" />}
          component={<Link to="/client/tables" />}
        >
          Tables
        </MenuItem>

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

        <SubMenu label={"Restaurant"} icon={<RiRestaurant2Line size="22" />}>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/tenants" />}
          >
            All Restaurant
          </MenuItem>
          <MenuItem
            icon={
              <span
                style={{ fontSize: "16px", color: theme.colors.orangeYellow }}
              >
                -
              </span>
            }
            component={<Link to="/managers" />}
          >
            All Managers
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
