import { BrowserRouter } from 'react-router-dom';

// routes
import AllRoutes from '.';

const Routes = () => {
    return (
        <BrowserRouter>
            <div className="header-7">
                <AllRoutes />
            </div>
        </BrowserRouter>
    );
};

export default Routes;
