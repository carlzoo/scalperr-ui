import React from 'react';
import SideBarMenu from './components/SideBarMenu';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar'
import { Grid, Cell } from "styled-css-grid";
import Styled from 'styled-components';

const StyledSideBar = Styled.div`
  @media (max-width: 768px) {
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
      <Navbar />
      asdf
    </Cell>

  </Grid>
);

export default App;

