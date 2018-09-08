import { TOURIST_LIST_INFO } from './mutation-types'
import logoUrl from '../assets/logo.png'

export default {
  [TOURIST_LIST_INFO] (state, data) {
    console.log(data)
    state.touristList = [
      {imgage: logoUrl, title: '牛角玩', content: '这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点'},
      {imgage: logoUrl, title: '牛角玩', content: '这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点这是一个好的时间和地点'},
      {imgage: logoUrl, title: '牛角玩', content: '这是一个好的时间和地点'}
    ]
  }
}
