import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcon from 'feather-icons-react';

// components
import { FormInput } from 'components/form';

const ContactUs = () => {
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            fname: yup.string().required('Please enter first name'),
            lname: yup.string().required('Please enter last name'),
            email: yup.string().required('Please enter Email').email('Please enter valid Email'),
            message: yup.string().required('Please enter Message'),
        })
    );

    // form method
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    // handle form submission
    const onSubmit = () => {};

    return (
        <section className="section pb-lg-7 py-4 position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <Card className="shadow-none">
                            <Card.Body className="p-xl-5 p-0">
                                <h2 className="mb-2 mt-0 fw-medium">Санал хүсэлт илгээх</h2>
                                <p className="mb-5">Та доорх сувгаар бидэнтэй холбогдоорой.</p>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="fname"
                                                label="Нэр"
                                                placeholder="Нэр"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="lname"
                                                label="Овог"
                                                placeholder="Овог"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="email"
                                                name="email"
                                                label="Мэйл хаяг"
                                                placeholder="Мэйл хаяг"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="textarea"
                                                name="message"
                                                label="Хүсэлт"
                                                placeholder="Хүсэлтээ энд үлдээнэ үү..."
                                                rows={5}
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg="auto" className="mb-0">
                                            <Button type="submit">
                                                Илгээх
                                                <span className="icon icon-xs text-white ms-1">
                                                    <FeatherIcon icon="send" />
                                                </span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={{ offset: 1, span: 5 }}>
                        <div style={{ height: '520px' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyAZj66OEcOPULMI6izT48UjpfFzCbUdqjQ' }}
                                defaultZoom={12}
                                defaultCenter={{ lat: 47.91882117282365, lng: 106.91757515188598 }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 align-items-center">
                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
                                <FeatherIcon icon="mail" className="icon-dual-primary" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Мэйл хаяг</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    accountmanagers@mobicom.mn
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-orange avatar avatar-sm rounded icon icon-with-bg icon-xs text-orange me-3 flex-shrink-0">
                                <FeatherIcon icon="phone-call" className="icon-dual-orange" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Холбогдох дугаар</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    1800-2222, 1900-2222
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-info avatar avatar-sm rounded icon icon-with-bg icon-xs text-info me-3 flex-shrink-0">
                                <FeatherIcon icon="map-pin" className="icon-dual-info" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Хаяг байршил</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    {/* МПМ цогцолбор, Сүхбаатар дүүрэг, 13-р хороолол */}
                                    УБ, СБД, 1-р хороо, Юнескогийн гудамж, МПМ цогцолбор
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
