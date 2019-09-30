import React from 'react';
import {Home} from '../Home'
import {Login} from './Login'
import {NoMatch} from '../NoMatch'
import {Contact} from '../Contact'
import {FaHome, FaKey, FaQuestionCircle} from 'react-icons/fa';
import {Button, Nav, ListGroup} from 'react-bootstrap';
import './sidebar.css';

const SideBarMenu = () => (
    <Nav id="sidebar">
        <div className="sidebar-header">
            
            <Button type="button" id="sidebarCollapse" className="btn navbar-btn">
                    <h3 className="float-right" id="menutext">Menu</h3>
                    <i className="fas fa-align-left" id="menulines"></i>
                    
            </Button>
                    
        </div>

        <ListGroup className="list-unstyled components">
            <ListGroup.Item className="active">
                <a href="#homeSubmenu">
                    <FaHome />
                    <span className="sidebar-linktext">Home</span>
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a href="#">
                    <FaKey />
                    <span className="sidebar-linktext">Login</span>
                </a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a href="#">
                    <FaQuestionCircle />
                    <span className="sidebar-linktext">Support</span>
                </a>
            </ListGroup.Item>
        </ListGroup>
    </Nav>
);
  
export default SideBarMenu;