import React, { useContext } from 'react';
import { Row, Col, Container, Accordion, Badge, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// types
import { Feature } from './types';

// images
import saas1 from 'assets/images/hero/saas1.png';

type FeaturesProps = {
    features: Feature[];
    containerClass?: string;
};

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link
            to="#"
            className={classNames(linkClass, {
                collapsed: !isCurrentEventKey,
            })}
            onClick={decoratedOnClick}>
            {children}
        </Link>
    );
};

const FeaturesList = ({ item, index }: { item: Feature; index: number }) => {
    return (
        <div className={item.containerClass}>
            <span
                className={classNames(
                    'bg-soft-' + item.variant,
                    'avatar',
                    'avatar-sm',
                    'rounded-lg',
                    'icon',
                    'icon-with-bg',
                    'icon-xs',
                    'text-' + item.variant,
                    'me-3',
                    'flex-shrink-0'
                )}>
                <FeatherIcon icon={item.avatar} className={classNames('icon-dual-' + item.variant)} />
            </span>
            <div className="flex-grow-1">
                <CustomToggle eventKey={String(index)} containerClass="m-0" linkClass="text-dark h4">
                    {item.title}
                </CustomToggle>
                <Accordion.Collapse eventKey={String(index)}>
                    <div>
                        <p className="text-muted mt-1 mb-4">{item.description}</p>
                    </div>
                </Accordion.Collapse>
            </div>
        </div>
    );
};

const Features1 = ({ features, containerClass }: FeaturesProps) => {
    return (
        <section className={containerClass}>
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Боломжууд
                        </Badge>
                        <h1 className="display-5 fw-medium">Байгууллагынхаа сошиал хуудсыг ухаалгаар удирд</h1>
                        <p className="text-muted mx-auto">
                            Та байгууллагынхаа бүх фейсбүүк хуудсуудыг Smartdash вебээр хянах боломжтой.
                        </p>
                    </Col>
                </Row>

                <Row className="pt-5 align-items-center features-3">
                    <Col lg={6}>
                        <div className="img-content position-relative">
                            <div className="img-up mb-lg-0 mb-6">
                                <img
                                    src={saas1}
                                    alt=""
                                    className="img-fluid d-block rounded"
                                    data-aos="fade-right"
                                    data-aos-duration="200"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }}>
                        <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                            <Accordion defaultActiveKey="0">
                                {(features || []).map((item, index) => {
                                    return <FeaturesList key={index.toString()} item={item} index={index} />;
                                })}
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features1;
