import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import FAQContent from 'components/FAQContent';

const FAQs = () => {
    return (
        <section className="section py-6 pt-sm-6 position-relative">
            <Container data-aos="fade-up" data-aos-duration="2000">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            FAQs
                        </Badge>
                        <h1 className="display-5 fw-medium">Түгээмэл асуулт хариулт</h1>
                        <p className="text-muted mx-auto">Манай үйлчлүүлэгчдийн асуудаг түгээмэл асуултууд</p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col md={10} lg={8}>
                        <FAQContent />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col xs="auto">
                        <div className="rounded d-inline-block py-2 px-3 alert bg-light">
                            <div className="align-items-center">
                                <div className="text-dark">
                                    Нэмэлт асуух хүсэлтэй зүйл байвал бидэнтэй холбогдоно уу?
                                    {/* <Link to="#">Бидэнтэй холбоо барина уу</Link> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQs;
