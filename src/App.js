import React from 'react';
import './App.css';
import SideBarMenu from './SideBarMenu';

import Container from 'react-bootstrap/Container';

import Jumbotron from './Jumbotron';


const App = () => (
  <Container className="p-3">
    <SideBarMenu />
    <Jumbotron />
  </Container>
  
);

export default App;
