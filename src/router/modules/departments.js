/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const departmentsRouter = {
  
        path: '/departments',
        component: Layout,
        meta: {
            icon: 'tree-table'
          },
        children: [
          {
            path: 'list',
            component: () => import('@/views/departments/'),
            meta: { title: 'Departments', noCache: true }
          }
        ]
}

export default departmentsRouter
