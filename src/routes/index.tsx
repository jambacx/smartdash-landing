import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

// components
import Root from './Root';
import PrivateRoute from './PrivateRoute';

// lazy load all the views
// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const SignUp = React.lazy(() => import('../pages/auth/SignUp'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));

// home
const Home = React.lazy(() => import('../pages/landings/Startup'));

// landings
const App = React.lazy(() => import('../pages/landings/App'));
const Saas = React.lazy(() => import('../pages/landings/Saas/Saas'));
const Saas2 = React.lazy(() => import('../pages/landings/Saas/Saas2'));
const Startup = React.lazy(() => import('../pages/landings/Startup'));
const Software = React.lazy(() => import('../pages/landings/Software'));

const Agency = React.lazy(() => import('../pages/landings/Agency'));
const Coworking = React.lazy(() => import('../pages/landings/Coworking'));
const Crypto = React.lazy(() => import('../pages/landings/Crypto'));
const Marketing = React.lazy(() => import('../pages/landings/Marketing'));
const Portfolio = React.lazy(() => import('../pages/landings/Portfolio'));

// pages
const Dashboard = React.lazy(() => import('../pages/other/account/Dashboard'));
const Settings = React.lazy(() => import('../pages/other/account/Settings'));

const Blog = React.lazy(() => import('../pages/other/Blog'));
const BlogPost = React.lazy(() => import('../pages/other/BlogPost'));

const Company = React.lazy(() => import('../pages/other/Company'));
const Contact = React.lazy(() => import('../pages/other/Contact'));
const Career = React.lazy(() => import('../pages/other/Career'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));

const PortfolioGrid = React.lazy(() => import('../pages/other/portfolio/PortfolioGrid'));
const PortfolioMasonry = React.lazy(() => import('../pages/other/portfolio/PortfolioMasonry'));
const PortfolioItem = React.lazy(() => import('../pages/other/portfolio/PortfolioItem'));

const HelpDesk = React.lazy(() => import('../pages/other/HelpDesk'));

// docs
const Introduction = React.lazy(() => import('../pages/docs/Introduction'));
const QuickStart = React.lazy(() => import('../pages/docs/QuickStart'));
const Customization = React.lazy(() => import('../pages/docs/Customization'));
const Routing = React.lazy(() => import('../pages/docs/Routing'));
const CodeSpliting = React.lazy(() => import('../pages/docs/CodeSpliting'));
const ChangeLog = React.lazy(() => import('../pages/docs/ChangeLog'));

const Colors = React.lazy(() => import('../pages/docs/Colors'));
const Typography = React.lazy(() => import('../pages/docs/Typography'));

const Bootstrap = React.lazy(() => import('../pages/docs/Bootstrap'));
const Custom = React.lazy(() => import('../pages/docs/Custom'));
const Plugins = React.lazy(() => import('../pages/docs/Plugins'));

const Navbars = React.lazy(() => import('../pages/docs/Navbars'));
const Heros = React.lazy(() => import('../pages/docs/Heros'));

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
            ],
        },
    ]);
};

export default AllRoutes;
