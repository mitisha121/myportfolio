import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
            <Grid>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={6} className="person-wrapper">
                        <Image src="images/me.jpg" circle responsive className="profile-pic" />
                    </Col>
                    <Col xs={12} sm={6} className="person-wrapper">
                        <h3> Mitisha Ganesha Dodderi </h3>
                        <p>MSCS at Northeastern University.</p>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}