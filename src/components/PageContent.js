import React from 'react';
import Navbar from './Navbar';
import Styled from 'styled-components';
import image from '../assets/canvas.jpg';

import Ticketmaster from './Ticketmaster';
import Login from './Login';
import Contact from './Contact';
import NoMatch from './NoMatch';

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

const StyledPageContent = Styled.div `
  margin: auto;
`;

const PageContent = () => (
  <StyledPageContent>
      <StyledNavBar>
        <Navbar />
      </StyledNavBar>
      <NavBarPadding />
      <Canvas>
        <img src={image} alt="Concert" />
        <h1>{canvasLabel[usePath()]}</h1>
      </Canvas>
      <RouteResult />
  </StyledPageContent>
);

export default PageContent;