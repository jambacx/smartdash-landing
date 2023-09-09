import { BrowserRouter } from 'react-router-dom';

// routes
import AllRoutes from '.';
import Navbar3 from 'components/navbars/Navbar3';
import Footer from 'pages/landings/Startup/Footer';

const Routes = () => {
    return (
        <BrowserRouter>
            <div className="header-7">
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <AllRoutes />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Routes;
