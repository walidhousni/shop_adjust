<template>
  <ul class="productsList">
    <li v-for="(product, index) in allProducts" :key="index" class="product">
     <img :src="product.img" class="product-img" alt="">
     <span class="exclusive" v-if="!product.isExclusive">Exclusive</span>
     <router-link to="/product-details">
     <h2 class="product-name"
     @click="addCurrentProduct(product)">
     {{ product.title }}
     </h2>
     </router-link>
     <div class="product-price">
       <span>$ {{product.price}}</span>
       <span>{{product.category}}</span>
     </div>

     <Button buttonColor=" btn-large add-cart"
     :IconCart="true"
     @click.native="addProductToCart(product)">
       Add To Cart
     </Button>
    </li>
  </ul>
</template>


<script>
  import { mapActions, mapState } from 'vuex';
  import Button from './Button.vue';


  export default {
    props: ['products'],

    components: {
      Button,
    },
    methods: {
      ...mapActions([
        'addProduct',
        'currentProduct',
      ]),

      addProductToCart(product) {
        this.addProduct(product);
      },
      addCurrentProduct(product) {
        this.currentProduct(product);
      },
    },
    mounted () {
      this.$store.dispatch('loadProducts')
    },
    computed: mapState([
      'allProducts',
    ])
  };
</script>

<style scoped>
 .productsList {
   width: 65%;
   max-width: 1000px;
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   padding: 0;
 }

 .product {
   width: 300px;
   list-style: none;
   box-sizing: border-box;
   padding: 1em;
   margin: 1em 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   border-radius: 7px;
 }

 .exclusive {
    width: 100px;
    border: 1px solid #8e44ad;
    background: #8e44ad;
    position: absolute;
    margin-top: 25px;
    left: 300px;
    font-size: 1em;
    color: #fff;
    text-align: center;
 }

 .product-img {
   border-bottom: 1px solid #c5c5c5;
 }

 .product-name {
  font-size: 1.2em;
    font-weight: 600;
    color: grey;
 }

 .product-name:hover {
   cursor: pointer;
   text-decoration: underline;
 }

 .product-price {
   width: 100%;
   align-self: flex-start;
   display: flex;
   justify-content: space-between;
   margin-bottom: .5em;
 }
</style>
