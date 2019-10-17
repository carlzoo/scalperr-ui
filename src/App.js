import React from 'react';
import PageContent from './components/PageContent';
import Styled from 'styled-components';
import Wrapper from './components/Wrapper';
import SideBarMenu from './components/SideBarMenu';

const StyledSideBar = Styled.div`
  @media (max-width: 768px) {
    display:none;
  }
`;

const App = () => (
  <Wrapper>
    <StyledSideBar>
      <SideBarMenu />
    </StyledSideBar>

    <PageContent />
  </Wrapper>
);

export default App;
