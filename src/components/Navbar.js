import React from 'react';
import Styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {ContainerFluid} from './container';

const StyledNavbar = Styled.nav`
    background-color: #6d7fcc!important;
    padding: .5rem 1rem;
    justify-content: space-between;
    display: flex;
    align-items:center;
    position: relative;
    flex-wrap: wrap;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.1);

    a {
        color: #fff
    }

    @media (min-width: 768px) {
	
        display: none;
    }
`;

const NavbarButton = Styled.button`
    .btn:not(:disabled):not(.disabled)
    {
        cursor: pointer;
    }

    -webkit-appearance: button;
    margin-left: auto!important;
    display: inline-block!important;
    color: #fff
    background-color: #343a40;
    border-color: #343a40;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    svg
    {
        :not(:root)
        {
            overflow:visible;
        }
        width: .875em;

        display:inline-block;
        font-size: inherit;
        height: 1em;
        vertical-align: -.125em;
    }
`;

const LinkList=Styled.ul`
    padding:20px 0;
    list-style:none;

    li
    {
        flex-basis: 100%;
        flex-grow: 1;
        align-items: center;

        a {
            text-decoration: none;
            display: block;
            float: left;
            clear: left;
            padding: 1em 0;
        }
    }
`;

class Navbar extends React.Component
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
        let dropdownStyle = {display: showNav ? "block" : "none" }

        return (
            <React.Fragment>
                <StyledNavbar>
                    <ContainerFluid>
                    <div className="navNarrow">
                        <NavbarButton onClick={this.toggleNav} >
                            <FaBars />
                        </NavbarButton>
                        <LinkList style={dropdownStyle}>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </LinkList>
                    </div>
                    </ContainerFluid>
                </StyledNavbar>
            </React.Fragment>
        )
    }
}

export default Navbar;