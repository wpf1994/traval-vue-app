import Vue from 'vue'

export const touristList = ({ commit }, page, count) => {
  Vue.http.post('http://192.168.1.77:8098/DRMP/f/attenceInfo/depUserList/getData', {userId: 'fc2d389ccf77495182857f4d299be6d4', userName: '12313', token: 'yqKPI109L298KHPUfwbyjw=='}).then(response => {
    commit('TOURIST_LIST_INFO')
  }, response => {

  })
}
