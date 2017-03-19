import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mimi from '@/components/Mimi'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mimi',
      name: 'Mimi',
      component: Mimi
    }
  ]
})

Vue.use(Router)
Vue.router = router
export default router
