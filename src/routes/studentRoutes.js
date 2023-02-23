import Dashboard from '../components/student/Dashboard';


const routes = [
    { path: '/student', exact: true, name: 'student' },
    { path: '/student/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
];

export default routes;