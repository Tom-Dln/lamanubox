import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Etape1 = () => {
    return (
        <>
            <Container className="pt-5">
                <Row>
                    <Col>
                        <h1 className="text-center fw-bold mb-5">Bienvenue dans notre <span className="text-primary">Assistant de Configuration !</span></h1>
                        <p className="fs-5">
                            Durant la suite de ce processus, nous allons vous aider à déterminer la taille dont vous avez besoin pour votre futur box de stockage.
                            Afin de nous aider dans cette tâche vous devez répondre à quelques questions et nous expliquer ce que vous devez entroposer.
                        </p>
                        <p className="text-center fs-3 mt-5">Vous êtes prêt ?</p>
                        <Button href="/assistant/etape-2" variant="success" size="lg" className="w-ft fs-1 d-block mx-auto">Oui ! C'est parti !</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Etape1;