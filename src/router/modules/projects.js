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
          }
        ]
}

export default projectsRouter
