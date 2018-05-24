import VuePage from './vue'
import Layout from './Layout'
import Home from './Home'
import ReactPage from './react'
import ButtonPage from './ButtonPage'

const routes = [{
    path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
        { path: 'vue', component: VuePage },
        { path: 'react', component: ReactPage},
        { path: 'button', component: ButtonPage}
    ]
}]

export default routes