// components
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import ContactUs from './ContactUs';
import Navbar3 from 'components/navbars/Navbar3';
import Footer from 'pages/landings/Startup/Footer';

const Contact = () => {
    return (
        <>
            <div className="header-7 bg-gradient2">
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero />
            </div>
            <ContactUs />

            <BackToTop />
            <Footer />
        </>
    );
};

export default Contact;
