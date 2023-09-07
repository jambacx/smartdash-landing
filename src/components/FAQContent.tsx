import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
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
            <Card.Header>
                <h5 className={containerClass}>
                    {children} <FeatherIcon icon="chevron-down" className="icon-xs accordion-arrow" />
                </h5>
            </Card.Header>
        </Link>
    );
};

const FAQContent = () => {
    const faqs = [
        {
            question: 'Social analyzer програмыг ашигласнаар ямар давуу талтай вэ?',
            ans: 'Танд маркетингийн идэвхжүүлэлтийн үр дүнг хэмжих, хэрэглэгчдийн сэтгэл ханамж болон санал хүсэлтэд цаг алдалгүй хариулах хэрэгцээ байдаг бол AI-д суурилсан Comment analyzer систем хамгийн хялбар шийдэл болж чадна. Энэхүү үйлчилгээ нь фейсбүүк хуудасны сэтгэгдлүүдийг эерэг, сөрөг, асуулт зэргээр ангилснаар хэрэглэгчдэд хариу шууд өгөхөд хялбар болохоос гадна маркетингийн кампанит ажлаа сайжруулах боломжийг олгох давуу талтай.',
        },
        {
            question: 'Системд хэрхэн бүртгүүлэх вэ?',
            ans: 'Та манай байгууллагын аккаунт менежерт буюу accountmanagers@mobicom.mn хаягт хандан систем ашиглах хүсэлт гаргаснаар танд нэвтрэх нэр болон нууц үг үүсгэн өгөх юм.',
        },
        {
            question: 'Facebook хуудсаа хэрхэн холбох вэ?',
            ans: 'Хэрэглэгчийн бүртгэл үүсгэсний дараагаар  Facebook хуудас холбох зааврыг бид илгээн систем админ холболт хийнэ.',
        },
        {
            question: 'Нууцлалын аюулгүй байдлыг хэрхэн хангасан бэ?',
            ans: 'Манай технологи дата мэдээллээ олон улсын хэмжээнд зөвшөөрөгдсөн үүлэн технологи ашиглан хэрэглэгчдийнхээ дата мэдээллийн аюулгүй байдлыг хангана. Мөн дата мэдээлэл нь зөвхөн нийтэд ил байх мэдээлэл дээр анализ хийх тул нууц мэдээлэлд хамааралгүй байна.',
        },
        {
            question: 'Систем ашиглах явцад серверийн алдаа гарсан тохиолдолд хаашаа хандах вэ?',
            ans: 'Та манай аккаунт менежерт хандан системээ шалгуулах боломжтой.',
        },
    ];

    return (
        <div id="faqContent">
            <Accordion defaultActiveKey="0" className="custom-accordionwitharrow" id="accordionExample">
                {(faqs || []).map((item, index) => {
                    return (
                        <Card className="mb-2 border rounded-sm" key={index.toString()}>
                            <CustomToggle
                                eventKey={String(index)}
                                containerClass="my-1 fw-medium"
                                linkClass="text-dark">
                                {item.question}
                            </CustomToggle>
                            <Accordion.Collapse eventKey={String(index)}>
                                <Card.Body className="text-muted pt-1">{item.ans}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default FAQContent;
