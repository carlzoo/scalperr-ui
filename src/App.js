import React from 'react';
import SideBarMenu from './components/SideBarMenu';
import Wrapper from './components/Wrapper';
import Ticketmaster from './components/Ticketmaster';


const App = () => (
  <Wrapper>
    <SideBarMenu />
    <Ticketmaster />
  </Wrapper>
);

export default App;
