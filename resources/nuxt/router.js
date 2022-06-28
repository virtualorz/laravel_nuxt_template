import Index from '~/pages/index'
import Page2 from '~/pages/page2'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
          title: '這裡是首頁',
          parent: 'root',
          inMenu: 'left',
          icon: 'fas fa-cog',
          permission: false
        }
      },
      {
        path: '/page2',
        name: 'system.page2',
        component: Page2,
        meta: {
          title: '這裡是第二頁',
          parent: 'index',
          inMenu: 'left',
          permission: true
        }
      },
    ]
  })
}
