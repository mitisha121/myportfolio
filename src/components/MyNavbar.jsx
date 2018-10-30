import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import './MyNavbar.css';

export default class MyNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> Mitisha Ganesha Dodderi </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            About
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/portfolio" to="/portfolio">
                            Portfolio
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/contac" to="/contact">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}