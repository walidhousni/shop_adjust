import Vue from 'vue';
import Router from 'vue-router';
import Products from '../components/Products.vue';
import Shirts from '../components/Shirts.vue';
import Bags from '../components/Bags.vue';
import Sweaters from '../components/Sweaters.vue';
import Shoes from '../components/Shoes.vue';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'Products',
      component: Products,
    },
    {
      path: '/shirts',
      name: 'Shirts',
      component: Shirts,
    },
    {
      path: '/bags',
      name: 'Bags',
      component: Bags
    },
    {
      path: '/sweaters',
      name: 'Sweaters',
      component: Sweaters
    },
    {
      path: '/shoes',
      name: 'Shoes',
      component: Shoes
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },
  ]
});
