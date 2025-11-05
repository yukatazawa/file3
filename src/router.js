import { createRouter, createWebHistory } from 'vue-router'
import MemberList from './views/MemberList.vue'
import ConfirmPage from './views/ConfirmPage.vue' 
import ResultPage from './views/ResultPage.vue' 

const routes = [
    { path: '/', component: MemberList },
    { path: '/confirm', component: ConfirmPage },
    { path: '/result', component: ResultPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
