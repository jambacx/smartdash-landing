// components
import { Navbar3 } from '../../../components/navbars';
import BackToTop from '../../../components/BackToTop';

import Hero from './Hero';
import Benefits from './Benefits';

// dummy data
import { benefits } from './data';
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
            {/* <CTA /> */}

            {/* footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Career;
