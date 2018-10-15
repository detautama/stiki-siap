import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Siperi from '@/components/Siperi'
import Syntesis from '@/components/Syntesis'
import Dikti from '@/components/Dikti'
import EJournal from '@/components/EJournal'
import UKM from '@/components/UKM'
import Chat from '@/components/Chat'
import TelpDosen from '@/components/TelpDosen'
import Kalender from '@/components/Kalender'
import StikiZen from '@/components/StikiZen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stikizen',
      name: 'StikiZen',
      component: StikiZen
    },
    {
      path: '/kalender',
      name: 'Kalender',
      component: Kalender
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/siperi',
      name: 'Siperi',
      component: Siperi
    },
    {
      path: '/syntesis',
      name: 'Syntesis',
      component: Syntesis
    },
    {
      path: '/dikti',
      name: 'Dikti',
      component: Dikti
    },
    {
      path: '/e-journal',
      name: 'EJournal',
      component: EJournal
    },
    {
      path: '/ukm',
      name: 'UKM',
      component: UKM
    },
    {
      path: '/telp-dosen',
      name: 'TelpDosen',
      component: TelpDosen
    }
  ]
})
