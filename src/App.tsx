import { useEffect } from 'react';

import AOS from 'aos';

// routes
import Routes from './routes/Routes';
import { Navbar3 } from 'components/navbars';

// helpers
import { configureFakeBackend } from './helpers';

import './assets/scss/theme.scss';

const App = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    configureFakeBackend();
    return (
        <>
            <Routes />
        </>
    );
};

export default App;
