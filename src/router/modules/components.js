/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const editorsRouter = {
  path: '/Editor',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Editor',
  meta: {
    title: 'Editor',
    icon: 'component'
  },
  children: [
        {
          path: '/editor/project1/jsonEditor',
          component: () => import('@/views/components-demo/json-editor'),
          name: 'jsonEditor',
          meta: { title: 'test.json' }
        },
        
        {
          path: '/editor/project1/html',
          component: () => import('@/views/components-demo/html-editor'),
          name: 'htmlEditor',
          meta: { title: 'test.html' }
        },
        {
          path: '/editor/project1/js',
          component: () => import('@/views/components-demo/js-editor'),
          name: 'JSEditor',
          meta: { title: 'test.js' }
    }
  ]
}

export default editorsRouter
