/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usersRouter = {
  
        path: '/users',
        component: Layout,
        meta: {
            icon: 'user'
          },
        children: [
          {
            path: 'list',
            component: () => import('@/views/users/'),
            meta: { title: 'Users', noCache: true }
          }
        ]
}

export default usersRouter
