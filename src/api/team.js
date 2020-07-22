import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/team/list',
    method: 'get',
    params: query
  })
}

export function fetchTeam(id) {
  return request({
    url: '/vue-element-admin/team/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/team/pv',
    method: 'get',
    params: { pv }
  })
}

export function createTeam(data) {
  return request({
    url: '/vue-element-admin/team/create',
    method: 'post',
    data
  })
}

export function updateTeam(data) {
  return request({
    url: '/vue-element-admin/team/update',
    method: 'post',
    data
  })
}
