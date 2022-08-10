import React, { Component } from 'react';
import './assets/css/Template.css';
import Weather from './Weather.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Cal from './Calendar';
import Headlines from './Headlines';

class Template extends Component {
 
    render () {
        return (
            <div id='template'>
                <Container fluid>
                    <Row id="top-row">
                        <Col>
                            <Card id="notes">Notes</Card>
                        </Col>

                        <Col>
                            <Card id="reminders">Reminders</Card>
                        </Col>

                        <Col>
                            <Card id="notifications">Notifications</Card>
                        </Col>

                    </Row>

                    <Row id="bottom-row">
                        
                        <Col>
                            <Card id="weatherbox">
                                <Weather />
                            </Card>
                        </Col>

                        <Col>
                            <Card id="calendarbox">
                                <Cal />
                            </Card>
                        </Col>

                        <Col>
                            <Card id="headlinebox">
                                <Headlines />
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Template;

