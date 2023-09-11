import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import logo from 'assets/images/logo.png';

const Footer = () => {
    console.log();

    return (
        <section className="py-5 bg-gradient3 position-relative">
            <Container>
                <Row>
                    <Col xl={3} sm={4} xs={6}>
                        <div className="row">
                            <div className="col-auto">
                                <FeatherIcon icon="airplay" className="icon icon-sm" />
                            </div>
                            <div className="col">
                                <h6 className="mb-3  fs-14 fw-semibold text-uppercase">Үйлчилгээний нэгдсэн төв:</h6>
                                <p className="text-muted">2222</p>
                                {/* </div> */}
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} sm={4} xs={6}>
                        <div className="row">
                            <div className="col-auto">
                                <FeatherIcon icon="mail" className="icon icon-sm" />
                            </div>
                            <div className="col">
                                <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase"> И-мэйл хаяг:</h6>
                                <p className="text-muted">merchant@mobicom.mn</p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} sm={4} xs={6}>
                        <div className="row">
                            <div className="col-auto">
                                <FeatherIcon icon="phone" className="icon icon-sm" />
                            </div>
                            <div className="col">
                                <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase"> Холбогдох утас:</h6>
                                <p className="text-muted">75759944 (Ажлын цагаар)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} sm={4} xs={6}>
                        <div className="row">
                            <div className="col-auto">
                                <FeatherIcon icon="navigation" className="icon icon-sm" />
                            </div>
                            <div className="col">
                                <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase"> Манай хаяг:</h6>
                                <p className="text-muted">УБ, СБД, 1-р хороо, Юнескогийн гудамж, МПМ цогцолбор</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Col xl={12} className="mt-3">
                    <Link className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" to="#">
                        <img src={logo} height="30" alt="" />
                    </Link>
                    {/* <p className="text-muted w-50">Сошиал орчноо өөрийн хүссэнээр ухаалгаар удирдах боломж</p> */}
                </Col>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={8}>
                        <p className="pb-0 mb-0 text-muted">
                            © {new Date().getFullYear()} Mobicom corporation. All rights reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
