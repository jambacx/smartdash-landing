// components
import { Navbar1, Navbar3 } from '../../../components/navbars';
import BackToTop from '../../../components/BackToTop';
import { Footer1 } from '../../../components/footer';

import Hero from './Hero';
import Benefits from './Benefits';
import Culture from './Culture';
import Vacancies from './Vacancies';
import CTA from './CTA';

// dummy data
import { benefits, gallery, vacancies } from './data';
import Footer from 'pages/landings/Startup/Footer';

const Career = () => {
    return (
        <>
            <div className="bg-gradient2 position-relative">
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />

                <Hero />
            </div>

            {/* benefits */}
            <Benefits benefits={benefits} />

            {/* culture */}
            {/* <Culture gallery={gallery} /> */}

            {/* Job */}
            {/* <Vacancies vacancies={vacancies} /> */}

            {/* cta */}
            <CTA />

            {/* footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Career;
