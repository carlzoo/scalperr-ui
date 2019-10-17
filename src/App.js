import React from 'react';
import SideBarMenu from './components/SideBarMenu';
import Navbar from './components/Navbar';
import Styled from 'styled-components';
import Wrapper from './components/Wrapper';
import image from './assets/canvas.jpg';

import Ticketmaster from './components/Ticketmaster';
import Login from './components/Login';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';

import { useRoutes, usePath } from 'hookrouter';

const routes = {
  '/': () => <Ticketmaster />,
  '/login': () => <Login />,
  '/contact': () => <Contact />,
};

const canvasLabel = {
  '/': "Search",
  '/login': "Login",
  '/contact': "Contact Support",
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

const Canvas = Styled.div`
width:100%;
height:200px;
position: relative;
margin-bottom:20px;
img{
  height: 100%;
  width: 100%;
  display: block;
  margin: auto;
  border-radius:5px;
}
h1{
  text-align: center;
  color:white;
  position: absolute
  top:50%;
  left:50%;
  transform: translate(-50%,50%);
  margin:0;
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
      <Canvas>
        <img src={image} alt="Concert" />
        <h1>{canvasLabel[usePath()]}</h1>
      </Canvas>
      <RouteResult />
    </div>
  </Wrapper>
);

export default App;
