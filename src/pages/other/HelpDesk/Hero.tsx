import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-7 py-sm-7 bg-gradient2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title">Тусламж</h1>
                        <p className="fs-17 text-muted pt-4">
                            Та манай Smartdash үйлчилгээний талаар илүү дэлгэрэнгүй мэдээлэл авахыг хүсвэл байгууллагын
                            харилцагч хариуцсан менежертэй шууд холбогдох, эсвэл accountmanagers@mobicom.mn хаяг руу
                            хандаарай.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
