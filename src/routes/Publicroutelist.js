import Home from '../components/frontend/Home';
import About from '../components/frontend/About';
import Contact from '../components/frontend/Contact';
import Page403 from '../components/errors/Page403';
import Page404 from '../components/errors/Page404';
import Thankyou from '../components/frontend/Thankyou';

import coachLogin from '../components/frontend/auth/coach/Login';
import studentLogin from '../components/frontend/auth/student/Login';


const publicRoutesList = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/contact', exact: true, name: 'Contact', component: Contact },
    { path: '/403', exact: true, name: 'Page403', component: Page403 },
    { path: '/404', exact: true, name: 'Page404', component: Page404 },
    { path: '/thank-you', exact: true, name: 'Thankyou', component: Thankyou },

    { path: '/student-login', exact: true, name: 'Login', component: studentLogin },
    { path: '/coach-login', exact: true, name: 'Login', component: coachLogin },
    
];

export default publicRoutesList;