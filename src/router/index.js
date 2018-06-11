import Vue from 'vue'
import Router from 'vue-router'
import ListAndForm from '@/components/ListAndForm'
import SetupWizard from '@/pages/SetupWizard/SetupWizard'
import Report from '@/components/Report'
import POS from '@/components/POS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list/:doctype',
      name: 'List',
      component: ListAndForm,
      props: true
    },
    {
      path: '/edit/:doctype/:name',
      name: 'Form',
      component: ListAndForm,
      props: true
    },
    {
      path: '/setup-wizard',
      name: 'SetupWizard',
      components: {
        setup: SetupWizard
      }
    },
    {
      path: '/report/:reportName',
      name: 'Report',
      component: Report,
      props: true
    },
    {
      path: '/pos/',
      name: 'POS',
      component: POS,
      props: true
    }
    // {
    //   path: '/table/:doctype',
    //   name: '',
    //   component: ''
    // },
    // {
    //   path: '/print/:doctype/:name',
    //   name: '',
    //   component: ''
    // },
    // {
    //   path: '/new/:doctype',
    //   name: '',
    //   component: ''
    // }
  ]
})
