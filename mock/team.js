import Mock from 'mockjs'

const List = []
const countTeam = 10

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < countTeam; i++) {
  List.push(Mock.mock({
    id: i+1,
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    'reviewer|1': ['User1', 'User2', 'User3', 'User4'],
    'users|1':[['User1', 'User2'],['User2','User3', 'User4']],
    'title|1': ['TEAM1', 'TEAM2', 'TEAM3', 'TEAM4','TEAM5', 'TEAM6', 'TEAM7', 'TEAM8','TEAM9', 'TEAM10', 'TEAM11', 'TEAM12'],
    organisation:'@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'projectId|1': [[1,3,5,10,15,2,12],[8,9,22,25],[1,3,5,2,12]],
    'type': ['T1', 'T2', 'T3', 'T4'],
    'status|1': ['inProgress', 'finish'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(1, 100)',
    image_uri,
    platforms: ['a-platform']
  }))
}

export default [
  {
    url: '/vue-element-admin/team/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/team/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const team of List) {
        if (team.id === +id) {
          return {
            code: 20000,
            data: team
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/team/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/team/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/team/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

