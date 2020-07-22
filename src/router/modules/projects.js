/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const projectsRouter = {

  path: '/projects',
  component: Layout,
  meta: {
    icon: 'tab'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/projects/'),
      meta: { title: 'Projects', noCache: true }
    },
    {
      path: ':id',
      hidden: true,
      component: () => import('@/views/projects/singleProject'),
      meta: { title: 'Project', noCache: true }
    }
  ]
}

export default projectsRouter
