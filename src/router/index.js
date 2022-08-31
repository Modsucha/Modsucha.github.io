import { createRouter, createWebHistory } from 'vue-router'
import CartList from '../views/CartShop.vue';
import ProductList from '../views/HomeShop.vue';
import ProductListItem from '../views/ShopGroup.vue';
import ListProduct from '../views/ShopProduct.vue';
const routes = [
    
  {
    path: '/',
    redirect: ProductList
  },
  {
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/group-shop',
    component: ProductListItem
  },{
    path: '/listProduct/:id',
    component: ListProduct
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
