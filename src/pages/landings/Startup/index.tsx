import { Navbar3 } from 'components/navbars';
import { Hero4 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import Footer from './Footer';
import { features } from './data';
import Features1 from '../Saas/Features1';
import Features3 from '../Saas/Features3';
import FAQs from '../Saas/FAQs';
import Clients from '../Agency/Clients';

const Startup = () => {
    return (
        <>
            <div className="header-7">
                {/* <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" /> */}
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

            <Clients />
            <FAQs />

            {/* CTA - footer */}

            <BackToTop />
        </>
    );
};

export default Startup;
