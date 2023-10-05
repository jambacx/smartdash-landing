// component
import { Navbar1 } from 'components/navbars';
import { Hero5 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import Services from './Services';
import Portfolios from './Portfolio';
import Clients from './Clients';
import Blog from './Blog';
import Vacancies from './Vacancies';
import Footer from './Footer';

import { blogPosts, jobDetails, services } from './data';
import { projects } from '../Portfolio/data';

const Agency = () => {
    return (
        <>
            <div className="header-4">
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-outline-secondary btn-sm" />
                <Hero5 />
            </div>

            <Services services={services} />
            <Portfolios portfolios={projects} />
            <Clients />
            <Blog blogs={blogPosts} />
            <Vacancies jobDetails={jobDetails} />
            <Footer />

            <BackToTop variant="secondary" />
        </>
    );
};

export default Agency;
