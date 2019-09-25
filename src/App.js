import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import {Container} from './components/container';

const App = () => (
  <Wrapper>
    <Container>
    <Navbar />
    </Container>
  </Wrapper>
);

export default App;
