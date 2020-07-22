/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chatRouter = {
  
        path: '/chat',
        component: Layout,
        meta: {
            icon: 'wechat'
          },
        children: [
          {
            path: 'list',
            component: () => import('@/views/chat/'),
            meta: { title: 'Chat', noCache: true }
          }
        ]
}

export default chatRouter
