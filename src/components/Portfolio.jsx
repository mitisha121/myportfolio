import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { SideNav, Nav } from 'react-sidenav'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <SideNav defaultSelectedPath="1">
                    <Nav id="1">
                    Item 1
                    </Nav>
                    <Nav id="2">
                    Item 2
                    </Nav>
                    <Nav id="3">
                    Item 3
                    </Nav>
                </SideNav>
            </div>
        );
    }
}