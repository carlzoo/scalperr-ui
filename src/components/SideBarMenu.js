import React, { useState } from 'react';
import { FaHome, FaKey, FaQuestionCircle, FaBars } from 'react-icons/fa';
import './sidebar.css';
import Styled from 'styled-components';

const StyledSideBar = Styled.div`
    height: 100%;
    width: 0;  /* to be set in js */
    position: fixed;
    overflow-x: hidden;
    z-index: var(--sidenav-z-index);
    top: 0;
    left: 0;
    background: #7386D5;
    padding-top: 3.5rem;
    transition: 0.5s;
`;

const SideBarHeader = Styled.div`
    padding: 20px;
    background: #6d7fcc;
    position: absolute;
    top: 0rem;
    right: 0rem;
    font-size: 2.2rem;
    width: 100%;
`;

const MenuButton = Styled.button`
    background-color: #7386D5;
    font-weight: 400;
    display: inline-block;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    box-shadow: none;
    outline: none !important;
    margin-left: 35px;

    :not(:disabled):not(.disabled)
    {
        cursor: pointer
    }

    :hover
    {
        background-color: #3CFF33;
    }
`;

const MenuText = Styled.span`
    font-size: 2em;
    color: #ff33cc;
    float: right!important;
    font-weight: 500;
    line-height: 1.2;
`;

const LinkList = Styled.ul`
    padding:20px 0;
    border-bottom: 1px solid #447748b;
    list-style: none;
    margin-bottom: 1em;
    display: block;
    margin-block-end: 1em;
    margin-inline-end: 0px;
    margin-bottom: 1rem;
`;

function SideBarMenu() {
  const [showNav, setShowNav] = useState(true);

  const sideNavStyle = { width: showNav ? '150px' : '75px' };
  const menuLineStyle = { display: !showNav ? 'inline' : 'none' };

  const MenuText = Styled.span`
    font-size: 2em;
    color: #ff33cc;
    float: right!important;
    font-weight: 500;
    line-height: 1.2;
    display: ${!showNav ? 'none' : 'inline-block'};
  `;

  var StyledListItem = Styled.li`
    justify-content: ${showNav ? 'flex-start' : 'center' };
    background: ${props => (window.location.pathname === props.href ? "#fff" : "#6d7fcc")};
    color: ${props => (window.location.pathname === props.href ? "#7386df" : "#fff")};

    padding: 20px 10px;
    margin-top: 10px;
    display:flex;
    align-item:center;

    :hover{
      background: #fff;
    }

    a 
    {
        text-decoration: none;
        font-size: 1.1rem;
        color: ${props => (window.location.pathname === props.href ? "#7386df" : "#f1f1f1")};
        display: flex;
        align-item:center;
        transition: 0.53s;
        text-align: left;

        :hover{
          color: ${props => (window.location.pathname === props.href ? "#fff" : "#7386df")};
        }

        svg{
          padding-right:10px;
          align-self:center;
        }

        :visited {
          color: ${props => (window.location.pathname === props.href ? "#7386df" : "#f1f1f1")};
        }

        span {
          display: ${!showNav ? 'none' : 'inline-block'};
        }
    }
  `;

  return (
    <>
      <StyledSideBar style={sideNavStyle}>
        <SideBarHeader>
          <MenuButton onClick={() => setShowNav(!showNav)}>
            <FaBars style={menuLineStyle} />
            <MenuText>Menu</MenuText>
          </MenuButton>
        </SideBarHeader>

        <LinkList>
          <StyledListItem href="/">
            <a href="/">
              <FaHome />
              <span>Home</span>
            </a>
          </StyledListItem>

          <StyledListItem href="/login">
            <a href="/login">
              <FaKey />
              <span>Login</span>
            </a>
          </StyledListItem>

          <StyledListItem href="/contact">
            <a href="/contact">
              <FaQuestionCircle />
              <span>Support</span>
            </a>
          </StyledListItem>
        </LinkList>
      </StyledSideBar>
    </>
  );
}

export default SideBarMenu;
