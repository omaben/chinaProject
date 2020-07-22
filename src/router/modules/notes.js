/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const notesRouter = {
  path: '/notes',
  component: Layout,
  meta: {
    title: 'Notes',
    icon: 'clipboard'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/notes/list'),
      meta: { title: 'List Notes', noCache: true }
    },
    {
      path: 'importantNote',
      component: () => import('@/views/notes/importants'),
      meta: { title: 'Importants Notes', noCache: true }
    },
  ]
}

export default notesRouter
