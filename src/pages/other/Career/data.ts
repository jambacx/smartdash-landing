// types
import { Benefit, GalleryItem, Vacancy } from './types';

// images
import img1 from 'assets/images/photos/3.jpg';
import img2 from 'assets/images/photos/4.jpg';
import img3 from 'assets/images/photos/5.jpg';
import img4 from 'assets/images/photos/10.jpg';

const benefits: Benefit[] = [
    {
        icon: 'zap',
        title: 'Хиймэл оюун ухаан',
        description: "Компани болон таны хувийн фейсбүүк хуудасны пост, коммент, лайк зэрэг дата мэдээлэлд AI технологиор анализ хийх",
    },
    {
        icon: 'cloud',
        title: 'Үүлэн технологи',
        description: 'Олон улсын хэмжээнд зөвшөөрөгдсөн үүлэн технологи ашиглан, хэрэглэгчдийнхээ дата мэдээллийн аюулгүй байдлыг хангадаг',
    },
    {
        icon: 'search',
        title: 'Коммент анализ',
        description: "Сошиал хуудсанд анализ хийж, хэрэглэгчдийнхээ дуу хоолойг сонсон, сошиал сувгуудаа ухаалгаар удирдах",
    },
    {
        icon: 'alert-triangle',
        title: 'Сөрөг сэтгэгдэл мэдээллэх',
        description: 'Хэрэглэгчийн нийтлэл доорх сөрөг сэтгэгдлүүдэд анализ хийж, нэн даруй мэдээллэх',
    },
    {
        icon: 'users',
        title: 'Олон хуудас удирдах',
        description: 'Хэрэглэгч өөрийн олон пэйж хуудсуудыг хялбараар нэгэн зэрэг удирдах',
    },
    {
        icon: 'refresh-cw',
        title: 'Процесс автоматжуулалт',
        description: 'Таны өдөр тутамдаа хийж, цаг зарцуулдаг үйлдлүүдийг автоматжуулан хөнгөвчилсөн',
    },
];

const gallery: GalleryItem[] = [
    {
        id: 3,
        image: {
            src: img1,
            caption: 'Office Desks',
        },
    },
    {
        id: 4,
        image: {
            src: img2,
            caption: 'Meeting Room view',
        },
    },
    {
        id: 5,
        image: {
            src: img4,
            caption: 'Outside view',
        },
    },
    {
        id: 6,
        image: {
            src: img3,
            caption: 'A common seating area',
        },
    },
];

const vacancies: Vacancy[] = [
    {
        category: 'Engineering',
        jobs: [
            {
                designation: 'Techical Support Engineer',
                type: 'Remote',
            },
            {
                designation: 'Senior Software Engineer (Frontend)',
                type: 'Remote',
            },
            {
                designation: 'Senior Software Engineer (Backend)',
                type: 'Remote',
            },
            {
                designation: 'Engineering Manager',
                type: 'Remote',
            },
        ],
    },
    {
        category: 'Marketing',
        jobs: [
            {
                designation: 'Junior copywriter/editor',
                type: 'Remote',
            },
        ],
    },
];

export { benefits, gallery, vacancies };
