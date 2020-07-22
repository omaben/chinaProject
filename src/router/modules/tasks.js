/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const tasksRouter = {
  path: '/tasks',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Tasks',
  meta: {
    title: 'Tasks',
    icon: 'list'
  },
  children: [
    {
      path: 'all',
      component: () => import('@/views/tasks/index'),
      meta: { title: 'All Boards', noCache: true }
    },
    {
      path: 'importantTask',
      component: () => import('@/views/tasks/importants'),
      meta: { title: 'Importants Board', noCache: true }
    },
  ]
}

export default tasksRouter
