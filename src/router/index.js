import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import IncomeDetail from '@/components/IncomeDetail'
import CashDetail from '@/components/CashDetail'
import GeneralizeLink from '@/components/GeneralizeLink'
import GoCash from '@/components/GoCash'
import SelledProduct from '@/components/SelledProduct'
import InvitedMebber from '@/components/InvitedMebber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/incomeDetail',
      name: 'IncomeDetail',
      component: IncomeDetail
    },
    {
      path: '/cashDetail',
      name: 'CashDetail',
      component: CashDetail
    },
    {
      path: '/generalizeLink',
      name: 'GeneralizeLink',
      component: GeneralizeLink
    },
    {
      path: '/goCash',
      name: 'GoCash',
      component: GoCash
    },
    {
      path: '/selledProduct',
      name: 'SelledProduct',
      component: SelledProduct
    },
    {
      path: '/invitedMebber',
      name: 'InvitedMebber',
      component: InvitedMebber
    },
  ]
})
