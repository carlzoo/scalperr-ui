import React from 'react';
import SideBarMenu from './components/SideBarMenu';
import Wrapper from './components/Wrapper';
import Ticketmaster from './components/Ticketmaster';
import Styled from 'styled-components';
import {Container} from './components/Container';

const Content = Styled.div`
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
`;

const App = () => (
  <Wrapper>
    <Container>
      <SideBarMenu />
    </Container>
    
    <Content>
        <Ticketmaster />
    </Content>
  </Wrapper>
);

export default App;
