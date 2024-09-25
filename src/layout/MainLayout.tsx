import { useState } from "react";
import styled from "styled-components"; // Import styled-components
import { Header } from "../components";
import SidebarComponent from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { theme } from "../constants/theme";

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean | null>(true);
  const [isToggled, setIsToggled] = useState<boolean | null>(true);

  const toggleSidebar = () => {
    if (window.innerWidth > 768) {
      setIsCollapsed((prevState) => !prevState);
      setIsToggled(null);
    } else {
      setIsToggled((prevState) => !prevState);
      setIsCollapsed(null);
    }
  };

  return (
    <MainContainer>
      <SidebarComponent
        isCollapsed={isCollapsed}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
      />
      <LayoutBody>
        <Header onToggleSidebar={toggleSidebar} />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </LayoutBody>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LayoutBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: ${theme.colors.whiteSmoke};
`;

export default MainLayout;
