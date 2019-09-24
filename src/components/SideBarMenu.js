import React from 'react';
import {FaHome, FaKey, FaQuestionCircle, FaBars} from 'react-icons/fa';
import "./sidebar.css"
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
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 15px;
    margin-inline-end: 0px;
    margin-bottom: 1rem;

    li a 
    {
        padding: 10px 10px 30px 10px;
        text-decoration: none;
        font-size: 1.1rem;
        color: #f1f1f1;
        display: block;
        transition: 0.53s;
        text-align: left;

        :hover {
            color: #7386D5;
            background: #fff;
        }
    }

    li
    {
        margin-top: 10px;
    }
`;


class SideBarMenu extends React.Component 
{
    state = 
    {
        state :
        {
            showNav: false
        }
    }

    openNavClick = e => 
    {
        e.preventDefault();
        this.openNav();
    }

    closeNavClick = e =>
    {
        e.preventDefault();
        this.closeNav();
    }

    toggleNavClick = e =>
    {
        e.preventDefault();
        this.toggleNav();
    }

    openNav = () =>
    {
        this.setState
        ({
            showNav: true
        })
    }

    closeNav = () =>
    {
        this.setState({
            showNav: false
        })
    }

    toggleNav = () =>
    {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    render()
    {
        const { showNav } = this.state;
        let sideNavStyle = { width: showNav ? "250px" : "75px" }
        let menuTextStyle = {display: !showNav ? "none" : "inline-block" }
        let menuLineStyle = {display: !showNav ? "inline" : "none" }

        return (
            <React.Fragment>
                <StyledSideBar style={sideNavStyle}>
                    <SideBarHeader>
                        <MenuButton onClick={this.toggleNavClick}>
                            <FaBars style= {menuLineStyle}/>
                            <MenuText style= {menuTextStyle} >Menu</MenuText>
                        </MenuButton>
                    </SideBarHeader>

                    <LinkList>
                    
                        <li>
                            <a href="#">
                            <FaHome />
                            <div style = {menuTextStyle} >Home</div>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <FaKey />
                                <div style = {menuTextStyle} >Login</div>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <FaQuestionCircle />
                                <div style = {menuTextStyle} >Support</div>
                            </a>
                        </li>

                    </LinkList>
                </StyledSideBar>
            </React.Fragment>
        )
    }
}
  
export default SideBarMenu;