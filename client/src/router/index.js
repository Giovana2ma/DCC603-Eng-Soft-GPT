import { createRouter, createWebHistory } from 'vue-router'
import MiddlewareStylesheet from "./middleware/middlewareStylesheet";

import LandinPageComponent from '../components/LandinPageComponent.vue'
import HowItWorks from '../components/HowItWorks.vue'
import RecommendationPage from '../components/RecommendationPage.vue'
import DoubleRecommendationPage from '../components/DoubleRecommendationPage.vue'

const routes = [
    {
        path: '/',
        name: "Home",
        component: LandinPageComponent,
        meta: {
            stylesheet: 'home'
        }
    },
    {
        path: '/howItWorks',
        name: "howItWorks",
        component: HowItWorks,
        meta: {
            stylesheet: 'howItWorks'
        }
    },
    {
        path: '/singleRecomendation',
        name: "Recommend",
        component: RecommendationPage,
        meta: {
            stylesheet: 'singleRec'
        }
    },
    {
        path: '/doubleRecomendation',
        name: "Double Recommend",
        component: DoubleRecommendationPage,
        meta: {
            stylesheet: 'doubleRec'
        }
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach(MiddlewareStylesheet);
export default router