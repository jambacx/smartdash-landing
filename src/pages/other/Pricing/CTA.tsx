import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="section py-6 position-relative">
            <Container>
                <Row data-aos="fade-up">
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">Still have a question?</h1>
                        <p className="text-muted mx-auto">Explore your most suitable option below</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
