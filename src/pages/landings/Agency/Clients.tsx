import { Badge, Col, Container, Row } from 'react-bootstrap';

// images
import amazon from 'assets/images/brands/mobicom.svg';
import google from 'assets/images/brands/voo.svg';
import paypal from 'assets/images/brands/paypal.svg';
import spotify from 'assets/images/brands/spotify.svg';
import shopify from 'assets/images/brands/shopify.svg';

const brands = [amazon, google, paypal, spotify, shopify];

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
                                    Доорх байгуулагууд манай үйлчилгээг идэвхитэй хэрэглэж байна.
                                </h1>
                            </Col>
                            <Col lg={6} className="ps-6">
                                <p className="mt-2 text-secondary" style={{ textAlign: 'justify' }}>
                                    Манай үйлчилгээний тусламжтай өөрийн сошиал медиад анализ хийж, хэрэглэгчдийнхээ дуу
                                    хоолойг сонсон хамгийн ухаалгаар өөрийн сошиал сувгуудаа удирдах боломжтой. Тухайн
                                    үйлчилгээ нь хэрэглэгчдэд хэрхэн нөлөөлж буй болон санал сэтгэгдэл, сэтгэгдэлд шууд
                                    хариу өгөх зэрэг олон боломжуудтай.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            {(brands || []).map((brand, index) => {
                                return (
                                    <Col key={index.toString()}>
                                        <img src={brand} alt="brand" height="48" className="mb-2 mb-xl-0" />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="divider bottom d-none d-sm-block"></div>
        </section>
    );
};

export default Clients;
