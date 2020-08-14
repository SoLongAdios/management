import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../pages/Login"

Vue.use(VueRouter)
//一级路由
const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Dgd_page',
    name: 'Dgd_page',
    component: () => import('../pages/Dgd_page'),

    //二级路由
    children: [{
        //首页  
        path: "/Dgd_page/index",
        name: "/Dgd_page/index",
        component: () => import("../pages/main/Index")
      },
      //订单管理
      {
        path: "/Dgd_page/order",
        name: "/Dgd_page/order",
        component: () => import("../pages/main/Order")
      },
      //商品管理
      //商品列表
      {
        path: "/Dgd_page/goods_list",
        name: "/Dgd_page/goods_list",
        component: () => import("../pages/main/Goods_list")
      },
      //商品添加
      {
        path: "/Dgd_page/goods_add",
        name: "/Dgd_page/goods_add",
        component: () => import("../pages/main/Goods_add")
      },
      //商品分类
      {
        path: "/Dgd_page/goods_class",
        name: "/Dgd_page/goods_class",
        component: () => import("../pages/main/Goods_class")
      },
      //店铺管理Store
      {
        path: "/Dgd_page/store",
        name: "/Dgd_page/store",
        component: () => import("../pages/main/Store")
      },
      //账号管理
      //账号列表
      {
        path: "/Dgd_page/account_list",
        name: "/Dgd_page/account_list",
        component: () => import("../pages/main/Account_list")
      },
      //添加账号
      {
        path: "/Dgd_page/account_add",
        name: "/Dgd_page/account_add",
        component: () => import("../pages/main/Account_add")
      },
      //修改密码

      {
        path: "/Dgd_page/account_pwd",
        name: "/Dgd_page/account_pwd",
        component: () => import("../pages/main/Account_pwd")
      },
      //销售统计
      //商品统计
      {
        path: "/Dgd_page/stat_goos",
        name: "/Dgd_page/stat_goos",
        component: () => import("../pages/main/Stat_goos")
      },
      //订单统计
      {
        path: "/Dgd_page/stat_order",
        name: "/Dgd_page/stat_order",
        component: () => import("../pages/main/Stat_order")
      },
       //管理员
       {
        path: "/Dgd_page/admin",
        name: "/Dgd_page/admin",
        component: () => import("../pages/main/Admin")
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router