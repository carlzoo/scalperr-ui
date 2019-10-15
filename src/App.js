import React from 'react';
import SideBarMenu from './components/SideBarMenu';
import Navbar from './components/Navbar';
import Styled from 'styled-components';
import Wrapper from './components/Wrapper';
// eslint-disable-next-line no-unused-vars
import Canvas from './components/Canvas';

import Ticketmaster from './components/Ticketmaster';
import Login from './components/Login';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';

import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <Ticketmaster />,
  '/login': () => <Login />,
  '/contact': () => <Contact />,
};

const RouteResult = () => {
  const result = useRoutes(routes);
  return result || <NoMatch />;
};

const StyledSideBar = Styled.div`
  @media (max-width: 768px) {
    display:none;
  }
`;

const StyledNavBar = Styled.div`
  @media (min-width: 768px) {
    display:none;
  }
`;

const NavBarPadding = Styled.div`
  padding-top: 65px;

  @media (min-width: 768px) {
    padding-top: 15px;
  }
`;

const App = () => (
  <Wrapper>
    <StyledSideBar>
      <SideBarMenu />
    </StyledSideBar>

    <div>
      <StyledNavBar>
        <Navbar />
      </StyledNavBar>
      <NavBarPadding />
      <RouteResult />
    </div>
  </Wrapper>
);

export default App;
