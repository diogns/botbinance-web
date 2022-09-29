import Home from './pages/Home/Home';
import User from './pages/User/User';
import Pair from './pages/Pair/Pair';



const pageList = [

    {
        name: 'User',
        path: '/user/',
        component: User,
    },
    {
        name: 'Pair',
        path: '/pair/',
        component: Pair,
    },
    {
        name: 'Home',
        path: '/',
        component: Home,
    },

];

export default pageList;
