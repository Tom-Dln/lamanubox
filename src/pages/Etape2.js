import React from 'react';
import { Button, Card, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap';

const Etape2 = () => {
    return (
        <>
            <Container className="pt-5">
                <Row className="mb-5">
                    <Col className="d-flex justify-content-between align-items-center">
                        <p className="m-0">Progression</p>
                        <ProgressBar animated striped variant="success" now={25} label={`25%`} className="w-50" />
                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col xs={{ order: 'last' }} md={{ order: 'first' }}>
                        <Card className="mb-4">
                            <Card.Header as="h4" className="d-flex justify-content-between align-items-center py-3">
                                Ajouter des objets à votre stockage
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formName">
                                            <Form.Label>Nom de l'objet</Form.Label>
                                            <Form.Control type="text" placeholder="ex : Carton" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formLength">
                                            <Form.Label>Longeur (en cm)</Form.Label>
                                            <Form.Control type="number" placeholder="ex : 80" min="1" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formWidth">
                                            <Form.Label>Largeur (en cm)</Form.Label>
                                            <Form.Control type="number" placeholder="ex : 50" min="1" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formHeight">
                                            <Form.Label>Hauteur (en cm)</Form.Label>
                                            <Form.Control type="number" placeholder="ex : 50" min="1" />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Cet objet est-il empilable ?</Form.Label>
                                            <Form.Check
                                                type="radio"
                                                name="radioStackable"
                                                id="radioStackable1"
                                                label="Oui, cet objet est empilable."
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="radioStackable"
                                                id="radioStackable2"
                                                label="Non, cet objet est trop fragile."
                                            />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Valider
                                        </Button>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-3">
                        <Card className="mb-4">
                            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
                                <span>Carton A15</span>
                                <Button variant="danger"><i class="fas fa-times-circle"></i></Button>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Dimensions : 80 cm x 50cm x 50cm
                                </Card.Text>
                                <Card.Text className="text-success">
                                    <i className="fas fa-check-circle me-2"></i> Empilable
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mb-4">
                            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
                                <span>Piano à queue</span>
                                <Button variant="danger"><i class="fas fa-times-circle"></i></Button>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Dimensions : 200 cm x 120cm x 80cm
                                </Card.Text>
                                <Card.Text className="text-danger">
                                    <i className="fas fa-times-circle me-2"></i> Empilable
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Etape2;