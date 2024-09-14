import { useState } from "react";
import { Header } from "../components";
import SidebarComponent from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="main-layout" style={mainLayoutStyles}>
      {/* Full-width Header */}
      <Header onToggleSidebar={toggleSidebar} />

      {/* Sidebar and Main Content */}
      <div className="layout-body" style={layoutBodyStyles}>
        {/* Always render SidebarComponent and pass the correct prop */}
        <SidebarComponent isCollapsed={!isSidebarOpen} />
        <div className="content-wrapper" style={contentWrapperStyles}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// Styling objects
const mainLayoutStyles = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const layoutBodyStyles = {
  display: "flex",
  flex: 1,
  overflow: "hidden",
};

const contentWrapperStyles = {
  flex: 1,
  padding: "20px",
  overflowY: "auto",
  backgroundColor: "#EEEEFF",
};

export default MainLayout;
