import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/task/list',
    method: 'get',
    params: query
  })
}

export function fetchTask(id) {
  return request({
    url: '/vue-element-admin/task/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/task/pv',
    method: 'get',
    params: { pv }
  })
}

export function createTask(data) {
  return request({
    url: '/vue-element-admin/task/create',
    method: 'post',
    data
  })
}

export function updateTask(data) {
  return request({
    url: '/vue-element-admin/task/update',
    method: 'post',
    data
  })
}
