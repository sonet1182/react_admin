import CourseList from '../components/coach/courses/CourseList';
import Dashboard from '../components/coach/Dashboard';
import Profile from '../components/coach/Profile';
import StudentList from '../components/coach/students/StudentList';


const routes = [
    { path: '/coach', exact: true, name: 'Coach' },
    { path: '/coach/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/coach/profile', exact: true, name: 'Profile', component: Profile },
    { path: '/coach/courses/list', exact: true, name: 'studentList', component: CourseList },
    { path: '/coach/student/list', exact: true, name: 'studentList', component: StudentList },
];

export default routes;