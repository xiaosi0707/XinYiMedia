import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Case from '@/views/case'
import About from '@/views/about'
import CaseDetail from '@/views/case-detail'
import AdminIndex from '@/admin/views/index'
import NotFoundComponent from '@/views/no-found'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/case',
      component: Case,
      meta: {
        title: '案例中心'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/case-detail',
      component: CaseDetail,
      meta: {
        title: '案例详情'
      }
    },
    {
      path: '/admin',
      component: AdminIndex,
      meta: {
        title: '咨询列表'
      }
    },
    { path: '*',
      component: NotFoundComponent
    }
  ]
})
router.afterEach((to, from) => {
  let { title } = to.meta
  if (title) {
    document.title = `新逸传媒 - ${title}`
  }
})

export default router
