import React from 'react';
import './App.css';
import SideBarMenu from './components/SideBarMenu';
import Wrapper from './components/Wrapper';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Wrapper>
    <SideBarMenu />
  </Wrapper>
);

export default App;
