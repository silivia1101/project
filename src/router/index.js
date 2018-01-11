import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Index from '@/components/index'
import MemberGold from '@/components/member-gold'
import MemberGoldTrail from '@/components/member-gold-trail'
import MemberDiamond from '@/components/member-diamond'
import InviteNum from '@/components/invite-num'
import InviteStudents from '@/components/invite-students'
import InviteMember from '@/components/invite-member'
import LotteryDraw from '@/components/lottery-draw'
import MoreActivity from '@/components/more-activity'
import TotalSummary from '@/components/total-summary'
import TotalSummaryTotal from '@/components/total-summary-total'
import TotalSummaryTotalInvite from '@/components/total-summary-total-invite'
import TotalSummaryTotalCash from '@/components/total-summary-total-cash'
import TotalSummaryTotalActivity from '@/components/total-summary-total-activity'
import TotalSummaryAvailable from '@/components/total-summary-available'
import TotalSummaryAvailableInvite from '@/components/total-summary-available-invite'
import TotalSummaryAvailableCash from '@/components/total-summary-available-cash'
import TotalSummaryAvailableActivity from '@/components/total-summary-available-activity'
import TotalSummaryAlready from '@/components/total-summary-already'
import TotalSummaryCash from '@/components/total-summary-cash'
import TotalSummarySelect from '@/components/total-summary-select'
import TotalSummarySelectBank from '@/components/total-summary-select-bank'
import TotalSummarySelectNet from '@/components/total-summary-select-net'

Vue.use(Router)
// Vue.prototype.$ajax = axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/member-gold',
      name: 'MemberGold',
      component: MemberGold
    },
    {
      path: '/member-gold-trail',
      name: 'MemberGoldTrail',
      component: MemberGoldTrail
    },
    {
      path: '/member-diamond',
      name: 'MemberDiamond',
      component: MemberDiamond
    },
    {
      path: '/invite-num',
      name: 'InviteNum',
      component: InviteNum
    },
    {
      path: '/invite-students',
      name: 'InviteStudents',
      component: InviteStudents
    },
    {
      path: '/invite-member',
      name: 'InviteMember',
      component: InviteMember
    },
    {
      path: '/lottery-draw',
      name: 'LotteryDraw',
      component: LotteryDraw
    },
    {
      path: '/more-activity',
      name: 'MoreActivity',
      component: MoreActivity
    },
    {
      path: '/total-summary',
      name: 'TotalSummary',
      component: TotalSummary
    },
    {
      path: '/total-summary-total',
      name: 'TotalSummaryTotal',
      component: TotalSummaryTotal
    },
    {
      path: '/total-summary-total-invite',
      name: 'TotalSummaryTotalInvite',
      component: TotalSummaryTotalInvite
    },
    {
      path: '/total-summary-total-cash',
      name: 'TotalSummaryTotalCash',
      component: TotalSummaryTotalCash
    },
    {
      path: '/total-summary-total-activity',
      name: 'TotalSummaryTotalActivity',
      component: TotalSummaryTotalActivity
    },
    {
      path: '/total-summary-available',
      name: 'TotalSummaryAvailable',
      component: TotalSummaryAvailable
    },
    {
      path: '/total-summary-available-invite',
      name: 'TotalSummaryAvailableInvite',
      component: TotalSummaryAvailableInvite
    },
    {
      path: '/total-summary-available-cash',
      name: 'TotalSummaryAvailableCash',
      component: TotalSummaryAvailableCash
    },
    {
      path: '/total-summary-available-activity',
      name: 'TotalSummaryAvailableActivity',
      component: TotalSummaryAvailableActivity
    },
    {
      path: '/total-summary-already',
      name: 'TotalSummaryAlready',
      component: TotalSummaryAlready
    },
    {
      path: '/total-summary-cash',
      name: 'TotalSummaryCash',
      component: TotalSummaryCash
    },
    {
      path: '/total-summary-select',
      name: 'TotalSummarySelect',
      component: TotalSummarySelect
    },
    {
      path: '/total-summary-select-bank',
      name: 'TotalSummarySelectBank',
      component: TotalSummarySelectBank
    },
    {
      path: '/total-summary-select-net',
      name: 'TotalSummarySelectNet',
      component: TotalSummarySelectNet
    }
  ]
})
