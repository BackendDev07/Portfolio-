import Login from '../Pages/Login'
import Home from '../Pages/Home'

export const routes = [
    {
        id: 1,
        path: '/',
        component: <Login/>
    },
    {
        id: 2,
        path: '/',
        component: <Home/>
    },
]