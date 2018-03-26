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
      component: Main,
      children:[{
        path: '/selledProduct',
        component: SelledProduct
      },
        {
          path: '/invitedMebber',
          component: InvitedMebber
        }]

    },
    {
      path: '/incomeDetail',
      component: IncomeDetail
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
