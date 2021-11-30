import React from 'react';
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import caroussel_1 from '../assets/caroussel_1.jpeg';
import cameraSurveillance from '../assets/icons/camera-surveillance.png'
import lumiereclignotante from '../assets/icons/lumiere-clignotante.png'
import cartesecurisee from '../assets/icons/carte-securisee.png'

const Home = () => {
    return (
        <>
            <Container className="pt-5 pb-5">
                <Row xs={1} md={2}>
                    <Col md={5} className="d-flex flex-column justify-content-center">
                        <h2 className="fs-1 fw-bold mb-4">Des boxes <span className="text-primary">à vos dimensions</span></h2>
                        <p className="fs-4">Trouvez une solution de stockage adapté à vos besoins grâce à notre assistant.</p>
                        <Button href="/assistant/etape-1" variant="primary" className="p-3 my-3 d-flex align-items-center w-ft">
                            <i className="fas fa-search fs-2"></i>
                            <p className="m-0 ps-2 fs-5">Calculer votre besoin</p>
                        </Button>
                    </Col>
                    <Col md={7}>
                        <Carousel controls={false} fade>
                            <Carousel.Item>
                                <img className="d-block w-100 rounded" src={caroussel_1} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 rounded" src={caroussel_1} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 rounded" src={caroussel_1} alt="First slide" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Container className="bg-secondary" fluid>
                <Container>
                    <Row xs={1} md={3} className="pt-5">
                        <Col>
                            <Image src={cameraSurveillance} fluid className="px-5 pb-4 "/>
                            <p className="text-center text-white fs-5">Sécurisés par vidéosurveillance</p>
                        </Col>
                        <Col>
                            <Image src={lumiereclignotante} fluid className="px-5 pb-4 "/>
                            <p className="text-center text-white fs-5">Alarme vol et incendie</p>
                        </Col>
                        <Col>
                            <Image src={cartesecurisee} fluid className="px-5 pb-4 "/>
                            <p className="text-center text-white fs-5">Accessible 7j/7 par badge</p>
                        </Col>
                    </Row>


                </Container>
            </Container>

        </>
    );
};

export default Home;