import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/Home'
import MultimediaPage from '@/components/pages/Multimedia'
import NavigationPage from '@/components/pages/Navigation'
import HVACPage from '@/components/pages/HVAC'
import ConnectivityPage from '@/components/pages/Connectivity'
import ClimatizationPage from '@/components/pages/Climatization'
import AppsPage from '@/components/pages/Apps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/apps',
      name: 'Apps',
      component: AppsPage
    },
    {
      path: '/multimedia',
      name: 'Multimedia',
      component: MultimediaPage
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: NavigationPage
    },
    {
      path: '/hvac',
      name: 'Hvac',
      component: HVACPage
    },
    {
      path: '/connectivity',
      name: 'Connectivity',
      component: ConnectivityPage
    },
    {
      path: '/climatization',
      name: 'Climatization',
      component: ClimatizationPage
    }
  ]
})
