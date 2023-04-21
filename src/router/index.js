import { createRouter, createWebHistory } from 'vue-router'
import productPage from '../views/productPage.vue'
import productDetailsPage from '../views/productDetails.vue'
import cartPage from '../views/cartPage.vue'
const routes = [
  {
    path:'/products',
    name:'products',
    component:productPage
  },
  {
    path:'/products/:id',
    name:'productDetails',
    component:productDetailsPage
  },
  {
    path:'/cart',
    name:'cart',
    component:cartPage
  },
  {
    path:'/',
    redirect:'/products'

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
