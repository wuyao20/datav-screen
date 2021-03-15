import request from '../utils/request'

export function getUserData () {
  return request({
    url: '/screen/data',
    method: 'get'
  })
}

export function getMapData () {
  return request({
    url: 'https://geo.datav.aliyun.com/areas_v2/bound/320300_full.json',
    method: 'get'
  })
}
