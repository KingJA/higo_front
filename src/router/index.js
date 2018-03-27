import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import IncomeDetail from '@/components/IncomeDetail'
import CashDetail from '@/components/CashDetail/CashDetail'
import GeneralizeLink from '@/components/GeneralizeLink/GeneralizeLink'
import GoCash from '@/components/GoCash/GoCash'
import SelledProduct from '@/components/SelledProduct'
import InvitedMebber from '@/components/InvitedMember/InvitedMember'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
