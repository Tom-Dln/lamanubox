import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import calibration from '../assets/calibration.jpg';

const Comparatif = () => {
    return (
        <>
            <Container>
                <Row xs={1} md={1} lg={2}>
                    <Col>
                        <Card className="text-center">
                            <Card.Img variant="top" src={calibration} />
                            <Card.Body>
                                <Card.Title>Vous voulez estimer votre besoin ?</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Assistant d'estimation</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Img variant="top" src={calibration} />
                            <Card.Body>
                                <Card.Title>Vous connaissez votre besoin ?</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Voir nos Boxes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Comparatif;