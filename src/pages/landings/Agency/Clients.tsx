import { Badge, Col, Container, Row } from 'react-bootstrap';

// images
import amazon from 'assets/images/brands/mobicom.svg';
import google from 'assets/images/brands/voo.svg';
import paypal from 'assets/images/brands/be.png';

const brands = [amazon, google, paypal];

const Clients = () => {
    return (
        <section className="section py-4 py-sm-8 bg-soft-primary position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row className="py-4">
                    <Col lg={11}>
                        <Row>
                            <Col lg={12}>
                                <Badge pill bg="" className="badge-soft-primary px-2 py-1 mb-2">
                                    Манай харилцагчид
                                </Badge>
                            </Col>
                            <Col lg={6}>
                                <h1 className="display-5 fw-semibold mb-1">
                                    Доорх хуудсууд Сошиал аналитик үйлчилгээг ашиглаж байна.
                                </h1>
                            </Col>
                            <Col lg={6} className="ps-6">
                                <p className="mt-2 text-secondary" style={{ textAlign: 'justify' }}>
                                    Та манай үйлчилгээг сонгосноор байгууллагынхаа сошиал хуудсанд анализ хийж,
                                    хэрэглэгчдийнхээ дуу хоолойг сонсон, сошиал сувгуудаа ухаалгаар удирдах боломжтой.
                                    Таны нийтэлсэн постууд хэрэглэгчдэд хэрхэн нөлөөлж буйг харах, мөн санал,
                                    сэтгэгдлүүдэд шууд хариу өгөх зэрэг олон боломжийг багтааснаараа онцлогтой.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <img src={amazon} alt="brand" height="48" className="mb-2 mt-2 mb-xl-0" />
                            </Col>
                            <Col>
                                <img src={google} alt="brand" height="48" className="mb-2 mt-2 mb-xl-0" />
                            </Col>
                            <Col>
                                <img src={paypal} alt="brand" height="60" className="mb-2 mb-xl-0" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="divider bottom d-none d-sm-block"></div>
        </section>
    );
};

export default Clients;
