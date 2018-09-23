<template>
  <div class="container">
   <Menu>
    <Button
    buttonColor="btn btn-small btn-info btn-popup"
    :IconCart="true"
    @click.native="showCartPopup()">
    Cart
     <span class="btn-circle" v-if="hasProduct()">
       {{ getProductsInCart.length }}
     </span>
    </Button>
    <transition name="appear">
      <CartPopup class="cart" v-if="getCartPopup" />
    </transition>
   </Menu>
   <transition  name="leave">
      <router-view></router-view>
   </transition>
   <Background v-if="getCartPopup" @click.native="showCartPopup"/>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Menu from './components/CategoryMenu.vue';
  import Button from './components/Button.vue';
  import CartPopup from './components/CartPopup.vue';
  import Background from './components/Background.vue';

 export default {
   components: {
     Menu,
     Button,
     CartPopup,
     Background
   },
   methods: {
     ...mapActions([
       'showOrHiddenPopupCart',
     ]),
     hasProduct() {
       return this.getProductsInCart.length > 0;
     },
     showCartPopup() {
         this.showOrHiddenPopupCart();
     },
   },
   computed: {
     ...mapGetters([
       'getProductsInCart',
       'getCartPopup',
     ]),
   },
 };
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
body {
  font-family: 'Open Sans', sans-serif;
  background-color: #FAFAFA;
}

a {
  color: #000;
  text-decoration: none;
}

.container {
  width: 100%;
}

.cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }
  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
  .appear-enter-active {
    animation: appear-animation .5s;
  }
  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }
  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
</style>
