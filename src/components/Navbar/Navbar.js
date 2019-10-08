import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { StyledNavbar, NavbarButton, LinkList } from './navbar-css';

const Navbar = () => {
    const [value, setToggle] = useState(false);
    const dropdownStyle = { display: value ? 'block' : 'none' };
    return (
        <>
            <StyledNavbar>
                <NavbarButton onClick={() => setToggle(!value)}>
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
            </StyledNavbar>
        </>
    );
};

export default Navbar;
