import { Button, Col, Container, Row } from 'react-bootstrap';

// images
import Startup from 'assets/images/hero/startup1.svg';
import { Link } from 'react-router-dom';

const Hero4 = () => {
    return (
        <section className="hero-4 pt-7 pb-3 py-sm-7 overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} md={6}>
                        <h1 className="hero-title">
                            Сошиал аналитик
                            <span className="highlight highlight-warning d-inline-block">үйлчилгээ</span>
                        </h1>
                        <p className="mt-4 fs-17">AI Solution powered by Mobicom corporation</p>
                        <div className="pt-3 pt-sm-5">
                            <a
                                href="https://www.admin.smartdash.mn/authentication/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary">
                                Нэвтрэх
                            </a>

                            <Button variant="outline-primary" className="ms-2">
                                Дэлгэрэнгүй
                            </Button>
                        </div>
                    </Col>
                    <Col lg={7} md={6}>
                        <div className="img-container text-end pt-5 pt-sm-0">
                            <img
                                src={Startup}
                                alt="startup"
                                className="img-fluid"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="shape bottom">
                <svg
                    width="1440px"
                    height="40px"
                    viewBox="0 0 1440 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="shape-b" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="curve" fill="#fff">
                            <path
                                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                                id="Path"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Hero4;
