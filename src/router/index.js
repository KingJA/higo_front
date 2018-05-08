import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/login/Login'
import IncomeDetail from '@/components/IncomeDetail/IncomeDetail'
import CashDetail from '@/components/CashDetail/CashDetail'
import GeneralizeLink from '@/components/GeneralizeLink/GeneralizeLink'
import GoCash from '@/components/GoCash/GoCash'
import SelledProduct from '@/components/SelledProduct/SelledProduct'
import InvitedMebber from '@/components/InvitedMember/InvitedMember'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      name: 'Main',
      path: '/main',
      component: Main
    },
    {
      path: '/incomeDetail',
      component: IncomeDetail,
      redirect: '/selledProduct',
      children: [{
        path: '/selledProduct',
        component: SelledProduct
      },
        {
          path: '/invitedMebber',
          component: InvitedMebber
        }]
    },
    {
      path: '/cashDetail',
      component: CashDetail
    },
    {
      path: '/generalizeLink',
      component: GeneralizeLink
    },
    {
      path: '/goCash',
      component: GoCash
    }
  ]
})
