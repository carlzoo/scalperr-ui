import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import {Home} from './Home'
import {Login} from './Login'
import {NoMatch} from './NoMatch'
import {Contact} from './Contact'
import {FaHome, FaSignInAlt, FaQuestionCircle} from 'react-icons/fa';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideBarMenu = () => (
  <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = selected === '/' ? '/' : '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/">
                    <NavItem eventKey="/">
                        <NavIcon>
                          <FaHome />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="login">
                        <NavIcon>
                            <FaSignInAlt />
                        </NavIcon>
                        <NavText>
                            Login
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contact">
                        <NavIcon>
                            <FaQuestionCircle />
                        </NavIcon>
                        <NavText>
                            Support
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
              <Switch>
                <Route exact path="/" component={props => <Home />} />
                <Route exact path="/Home" component={props => <Home />} />
                <Route path="/login" component={props => <Login />} />
                <Route path="/contact" component={props => <Contact />} />
                <Route component={NoMatch} />
              </Switch>
            </main>
        </React.Fragment>
    )}
    />
</Router>
);
  
export default SideBarMenu;