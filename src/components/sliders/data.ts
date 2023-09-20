// types
import { Slide, Slide1 } from './types';

// images
import Avatar1 from '../../assets/images/avatars/img-8.jpg';
import Avatar2 from '../../assets/images/avatars/img-5.jpg';
import Amazon from '../../assets/images/brands/amazon.svg';
import Google from '../../assets/images/brands/google.svg';

import saas1 from '../../assets/images/hero/saas1.png';
import saas2 from '../../assets/images/hero/saas2.jpg';
import saas3 from '../../assets/images/hero/saas3.jpg';

const slides: Slide[] = [
    {
        statement:
            ' This app is a truly blessing for all professionals! A day to day project management was never easy for me.But with prompt, I can manage more than 100 projects easily.',
        customer: {
            avatar: Avatar1,
            name: 'Cersei Lannister',
            designation: 'Senior Project Manager',
        },
        logo: Amazon,
    },
    {
        statement:
            'It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others.Simply loved it!',
        customer: {
            avatar: Avatar2,
            name: 'John Stark',
            designation: 'Engineering Director',
        },
        logo: Google,
    },
];

const slides1: Slide1[] = [
    {
        image: saas1,
        slideTitle: 'Сэтгэл ханамжийг нэмэгдүүлэх',
        description:
            'Хэрэглэгчдийн сэтгэл ханамжинд бодитоор дүгнэлт хийж, таны маркетингад үр дүн авчран хэрэглэгчдэд нөлөөлөх.',
    },
    // {
    //     image: saas2,
    //     slideTitle: 'The best way to showcase your mobile app',
    //     description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    // },
    // {
    //     image: saas3,
    //     slideTitle: 'Smart Solution that convert Lead to Customer',
    //     description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    // },
];

export { slides, slides1 };
