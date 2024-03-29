import { Col, Row } from 'react-bootstrap';

// components
import FAQContent from 'components/FAQContent';

const FAQs = () => {
    return (
        <>
            <h4 className="fw-semibold mb-0">Түгээмэл асуулт хариулт</h4>
            <p className="text-muted mx-auto">Манай үйлчлүүлэгчдийн асуудаг түгээмэл асуултууд</p>
            <Row className="mt-3">
                <Col lg={10}>
                    <div className="mt-3 mb-lg-0 mb-4">
                        <FAQContent />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default FAQs;
