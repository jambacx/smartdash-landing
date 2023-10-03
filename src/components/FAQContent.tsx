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
            question: 'Social comment analyzer программыг ашиглах нь ямар давуу талтай вэ?.',
            ans: 'Танд маркетингийн идэвхжүүлэлтийн үр дүнг хэмжих, хэрэглэгчдийн сэтгэл ханамж болон санал хүсэлтэд цаг алдалгүй хариулах хэрэгцээ байдаг бол AI-д суурилсан Social comment analyzer программ хамгийн хялбар шийдэл болж чадна. Энэхүү үйлчилгээ нь фейсбүүк хуудасны сэтгэгдлүүдийг эерэг, сөрөг, асуулт зэргээр ангилснаар хэрэглэгчдэд хариу шууд өгөхөд хялбар болохоос гадна маркетингийн кампанит ажлаа сайжруулах боломжийг олгох давуу талтай.',
        },
        {
            question: 'Системд хэрхэн бүртгүүлэх вэ?',
            ans: 'Та манай байгууллагын харилцагч хариуцсан менежер буюу accountmanagers@mobicom.mn хаяг руу хандан, систем ашиглах хүсэлт гаргаснаар танд Нэвтрэх нэр болон Нууц үг үүсгэж өгнө.',
        },
        {
            question: 'Facebook хуудсаа хэрхэн холбох вэ?',
            ans: 'Таны бүртгэлийг үүсгэсний дараа фейсбүүк хуудас холбох зааврыг илгээн, систем админ холболт хийнэ.',
        },
        {
            question: 'Нууцлалын аюулгүй байдлыг хэрхэн хангасан бэ?',
            ans: 'Бид олон улсын хэмжээнд зөвшөөрөгдсөн үүлэн технологи ашиглан, хэрэглэгчдийнхээ дата мэдээллийн аюулгүй байдлыг хангадаг. Мөн зөвхөн нийтэд ил мэдээлэлд анализ хийх тул нууц мэдээлэлд хамаарахгүй юм.',
        },
        {
            question: 'Систем ашиглах явцад серверийн алдаа гарсан тохиолдолд хаашаа хандах вэ?',
            ans: 'Та манай харилцагч хариуцсан менежерт хандан, системээ шалгуулах боломжтой.',
        },
        {
            question: ' Анх бүртгүүлж ороход dashboard дээрх мэдээлэл харагдах уу?',
            ans: 'Шинэ хэрэглэгчийн бүртгүүлснээс өмнөх 30 хоногийн мэдээллийг татан харуулах болно.',
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
