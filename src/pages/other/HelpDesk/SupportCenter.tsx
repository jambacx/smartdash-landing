import { Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

const SupportCenter = () => {
    return (
        <Card className="rounded border sticky-el">
            <Card.Body className="px-5 py-4">
                <h4 className="fw-medium">
                    <FeatherIcon className="icon icon-sm text-muted me-3" icon="life-buoy" />
                    Тусламж
                </h4>
                <h5 className="text-muted fw-normal mb-4 pb-3">
                    <span className="fw-medium">Танд тусламж хэрэгтэй байна уу?</span> Та доорх хаягаар тусламж авна уу.
                </h5>
                <h5 className="fw-normal">
                    <Link to="/pages/contact" className="text-muted">
                        <FeatherIcon className="icon-xs me-2" icon="message-square" />
                        Харилцагч хариуцсан менежер
                    </Link>
                </h5>
                <h5 className="fw-normal mt-3">
                    <Link to="#" className="text-muted">
                        <FeatherIcon className="icon-xs me-2" icon="mail" />
                        accountmanagers@mobicom.mn
                    </Link>
                </h5>
                <h5 className="fw-normal mt-3">
                    <Link to="#" className="text-muted">
                        <FeatherIcon className="icon-xs me-2" icon="phone" />
                        2222, 1800-2222, 1900-2222
                    </Link>
                </h5>
            </Card.Body>
        </Card>
    );
};

export default SupportCenter;
