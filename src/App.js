import React from 'react';
import SideBarMenu from './components/SideBarMenu';
import Navbar from './components/Navbar'
import { Grid, Cell } from "styled-css-grid";
import Styled from 'styled-components';
import Canvas from './components/Canvas';

import Ticketmaster from './components/Ticketmaster';
import {Login} from './components/Login';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';

import {useRoutes} from 'hookrouter';

const routes = {
  '/': () => <Ticketmaster />,
  '/login': () => <Login />,
  '/contact' : () => <Contact />
}

const RouteResult = () => {
  const result = useRoutes(routes);
  return result || <NoMatch />;
}

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

const App = () => (
  <Grid
    columns = {5} 
    rows = {"minmax(100px, auto)"}
    >
    
    <StyledSideBar>
      <Cell width={1}>
          <SideBarMenu />
      </Cell>
      </StyledSideBar>

    <Cell width={3}>
      <StyledNavBar>
        <Cell row={1}>
          <Navbar />
        </Cell>
      </StyledNavBar>
      <Cell>
          <RouteResult />
      </Cell>

    </Cell>

  </Grid>
);

export default App;

