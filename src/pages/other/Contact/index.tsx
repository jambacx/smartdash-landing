// components
import { Navbar1 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { Footer2 } from 'components/footer';

import Hero from './Hero';
import ContactUs from './ContactUs';

const Contact = () => {
    return (
        <>
            <div className="header-7 bg-gradient2 mt-3">
                <Hero />
            </div>

            {/* contact us */}
            <ContactUs />

            <BackToTop />
        </>
    );
};

export default Contact;
