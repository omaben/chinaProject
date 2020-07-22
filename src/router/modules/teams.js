/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const teamsRouter = {
  
        path: '/teams',
        component: Layout,
        meta: {
            icon: 'tree'
          },
        children: [
          {
            path: 'list',
            component: () => import('@/views/teams/'),
            meta: { title: 'Teams', noCache: true }
          }
        ]
}

export default teamsRouter
