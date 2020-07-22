/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const documentsRouter = {
  path: '/documents',
  component: Layout,
  meta: {
    title: 'Documents',
    icon: 'documentation'
  },
  children: [
    {
        path: 'listFolder',
        component: () => import('@/views/documents/index'),
        meta: { title: 'List Folders', noCache: true }
      },
    {
      path: 'listDocument',
      component: () => import('@/views/documents/list'),
      meta: { title: 'List Documents', noCache: true }
    },
    {
      path: 'importantDocument',
      component: () => import('@/views/documents/importants'),
      meta: { title: 'Importants Folder', noCache: true }
    },
  ]
}

export default documentsRouter
