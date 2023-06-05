import Home from '../page/Home/index.js'
import Vehicles from '../page/Vehicles/index.js'

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/vehicles', component: Vehicles}
]

const privateRoute = []

export {publicRoutes, privateRoute}