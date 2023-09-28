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
                <Row className="pt-4">
                    <Col xl={6} sm={6} xs={6}>
                        <Link className="navbar-brand me-lg-4 mb-2 me-auto d-flex align-items-center pt-0" to="#">
                            <img src={logo} height="30" alt="" />
                        </Link>
                        <div className="row">
                            <div className="col">
                                <h3 className="mb-3 fs-15 fw-semibold ">
                                    Smartdash - байгууллагад зориулсан дата мэдээллийн веб
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3 style={{ color: '#3C64C7' }} className="mb-3 fs-18 fw-semibold text-uppercase">
                                    хаяг
                                </h3>
                                <h3 className="mb-3 fs-15 fw-semibold">
                                    УБ, СБД, 1-р хороо, Юнескогийн гудамж, МПМ цогцолбор
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col xl={1} sm={1} xs={1} />

                    <Col xl={5} sm={5} xs={5}>
                        <div className="row">
                            <h3
                                className="mb-3 fs-18 fw-semibold text-uppercase"
                                style={{ paddingBottom: '10px', color: '#3C64C7' }}>
                                Холбоо барих
                            </h3>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                <li style={{ marginBottom: '10px', fontSize: '16px' }}>
                                    <span style={{ fontWeight: 600 }}>Үйлчилгээний нэгдсэн төв:</span> 2222
                                </li>
                                <li style={{ marginBottom: '10px', fontSize: '16px' }}>
                                    <span style={{ fontWeight: 600 }}>Бусад сүлжээ:</span> 1800-2222, 1900-2222
                                </li>
                                <li style={{ fontSize: '16px' }}>
                                    <span style={{ fontWeight: 600 }}>Имэйл: </span>
                                    <a
                                        href="mailto:accountmanagers@mobicom.mn"
                                        style={{ color: '#333', textDecoration: 'none' }}>
                                        accountmanagers@mobicom.mn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
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
