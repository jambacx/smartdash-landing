import { Col, Container, Row } from 'react-bootstrap';

// components
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import HelpLinks from './HelpLinks';
import FAQs from './FAQs';
import SupportCenter from './SupportCenter';
import { helpLinks } from './data';

const HelpDesk = () => {
    return (
        <>
            <div className="mt-3">
                <Hero />
            </div>

            <section className="section py-5 py-lg-8 mb-5 mb-sm-0 position-relative">
                <Container>
                    <Row>
                        <Col lg={8}>
                            {/* <HelpLinks helpLinks={helpLinks} /> */}
                            <FAQs />
                        </Col>
                        <Col lg={4}>
                            <SupportCenter />
                        </Col>
                    </Row>
                </Container>
            </section>
            <BackToTop />
        </>
    );
};

export default HelpDesk;
