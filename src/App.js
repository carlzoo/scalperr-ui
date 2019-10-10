import React from 'react';
import SideBarMenu from './components/SideBarMenu';
import Navbar from './components/Navbar'
import { Grid, Cell } from "styled-css-grid";
import Styled from 'styled-components';
import Canvas from './components/Canvas';
import Ticketmaster from './components/Ticketmaster';

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
    columns = {"repeat(5, 1fr)"} 
    rows = {"minmax(100px, auto)"}
    >
    
    <StyledSideBar>
      <Cell width={1/5}>
        <SideBarMenu />
      </Cell>
    </StyledSideBar>

    <Cell width={4/5}>
      <StyledNavBar>
        <Cell row={1}>
          <Navbar />
        </Cell>
      </StyledNavBar>
      <Cell>
          <Ticketmaster />
      </Cell>

    </Cell>

  </Grid>
);

export default App;

