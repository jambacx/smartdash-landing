import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Root from './Root';
import PrivateRoute from './PrivateRoute';

const Login = React.lazy(() => import('../pages/auth/Login'));

// home
const Home = React.lazy(() => import('../pages/landings/Startup'));

const Contact = React.lazy(() => import('../pages/other/Contact'));

const HelpDesk = React.lazy(() => import('../pages/other/HelpDesk'));

// docs

const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <Root />,
        },
        {
            path: '/',
            children: [
                {
                    path: 'home',
                    element: <LoadComponent component={Home} />,
                },
                { path: 'contact', element: <LoadComponent component={Contact} /> },
                { path: 'help', element: <LoadComponent component={HelpDesk} /> },
                { path: 'auth/login', element: <LoadComponent component={Login} /> },
            ],
        },
    ]);
};

export default AllRoutes;
