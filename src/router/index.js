import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Guide from '@/components/guide/Guide'
import WayArea from '@/components/wayArea/WayArea'
import About from '@/components/public/About'
import Food from '@/components/home/food/Food'
import Hotel from '@/components/home/hotel/Hotel'
import GoWay from '@/components/home/goWay/GoWay'
import Play from '@/components/home/play/Play'
import PlayDetail from '@/components/home/play/playDetail/PlayDetail'
import Person from '@/components/person/person'
import PersonHome from '@/components/person/personHome'
import SignIn from '@/components/person/signIn/SignIn'
import LogoIn from '@/components/person/logoIn/LogoIn'
import HotelDetail from '@/components/home/food/children/HotelDetail'
import HotelRoomDetail from '@/components/home/hotel/children/HotelRoomDetail'
import HotelPictureList from '@/components/home/food/children/children/HotelPictureList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/wayArea',
      name: 'WayArea',
      component: WayArea
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: Hotel
    },
    {
      path: '/goWay',
      name: 'GoWay',
      component: GoWay
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/playDetail/:id',
      name: 'PlayDetail',
      component: PlayDetail
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/personHome',
      name: 'PersonHome',
      component: PersonHome
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/logoIn',
      name: 'LogoIn',
      component: LogoIn
    },
    {
      path: '/hotelDetail',
      name: 'HotelDetail',
      component: HotelDetail
    },
    {
      path: '/hotelRoomDetail',
      name: 'HotelRoomDetail',
      component: HotelRoomDetail
    },
    {
      path: '/hotelPictureList',
      name: 'HotelPictureList',
      component: HotelPictureList
    }
  ]
})
