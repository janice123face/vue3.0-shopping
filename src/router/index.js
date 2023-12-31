import { createRouter, createWebHashHistory } from 'vue-router'
import IndexHome from '../components/IndexHome.vue'
import CheckPhone from '../components/signUp/CheckPhone.vue'
import InputInfo from '../components/signUp/InputInfo.vue'
import SignUpDone from '../components/signUp/SignUpDone.vue'

const routes = [
  {
    path: '/',
    name: 'IndexHome',
    component: IndexHome
  },
  {
    path: '/Login', // 登录
    name: 'Login',
    component: () => import('../components/LoginCom.vue')
  },
  {
    path: '/SignUp', // 注册
    name: 'SignUp',
    component: () => import('../components/SignUp.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: CheckPhone
      },
      {
        path: 'checkPhone',
        name: 'CheckPhone',
        component: CheckPhone
      },
      {
        path: 'inputInfo',
        name: 'InputInfo',
        component: InputInfo
      },
      {
        path: 'signUpDone',
        name: 'SignUpDone',
        component: SignUpDone
      }
    ]
  },
  {
    path: '/FreeBack', // 反馈页面
    name: 'FreeBack',
    component: () => import('../components/FreeBack.vue')
  },
  {
    path: '/SearchCom', // 搜索
    name: 'SearchCom',
    component: () => import('../components/SearchCom.vue')
  },
  {
    path: '/HomeNav', // 菜单/侧边
    name: 'HomeNav',
    component: () => import('../components/nav/HomeNav.vue')
  },
  {
    path: '/GoodList',
    name: 'GoodList',
    component: () => import('../components/GoodList.vue')
  },
  {
    path: '/GoodsDetail/:id',
    name: 'GoodsDetail',
    component: () => import('../components/GoodsDetail')
  },
  {
    path: '/MerChant',
    name: 'MerChant',
    component: () => import('../components/MerChant')
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: () => import('../components/ShoppingCart')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
