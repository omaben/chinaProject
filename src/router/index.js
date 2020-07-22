import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import editorsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tasksRouter from './modules/tasks.js'
import documentsRouter from './modules/documents.js'
import projectsRouter from './modules/projects.js'

import teamsRouter from './modules/teams.js'
import departmentsRouter from './modules/departments.js'
import notesRouter from './modules/notes.js'
import usersRouter from './modules/users.js'
import chatRouter from './modules/chat.js'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/tasks/task',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/tasks/task',
        component: () => import('@/views/tasks/view'),
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    name: 'Home',
    meta: {
      icon: 'dashboard'
    },
    children: [
      {
        path: '/',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Home', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/documents',
    component: Layout,
    redirect: '/documents/listFolder',
    hidden: true,
    
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  projectsRouter,tasksRouter,documentsRouter,notesRouter,departmentsRouter,teamsRouter,usersRouter,editorsRouter,chatRouter
  // 404 page must be placed at the end !!!
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
