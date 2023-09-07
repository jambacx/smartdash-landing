// components
import { Navbar3 } from 'components/navbars';
import { Hero4 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import ClientsReview from './ClientsReview';
import Integrations from './Integration';
import Pricing from './Pricing';
import Footer from './Footer';

// data
import { integrations, planFeatures, features } from './data';
import Features1 from '../Saas/Features1';
import Features2 from '../Saas/Features2';
import Features3 from '../Saas/Features3';
import FAQs from '../Saas/FAQs';

const Startup = () => {
    return (
        <>
            <div className="header-7">
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero4 />
            </div>

            {/* clients - reviews  */}
            {/* <ClientsReview /> */}

            {/* features */}
            <Features1 features={features} />

            {/* <Features2 /> */}

            <Features3 />

            {/* integration */}
            {/* <Integrations integrations={integrations} /> */}

            {/* <Pricing planFeatures={planFeatures} /> */}
            <FAQs />

            {/* CTA - footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Startup;
