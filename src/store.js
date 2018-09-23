import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios)


export default new Vuex.Store({
  state: {
    allProducts: [],
    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showCartPopup: false,
  },


  getters: {
    getShirts: state => {
      const data = state.allProducts
      const filteredShirts = data.filter((element) => element.category === "shirt")
      return filteredShirts;
    },
    getSweaters: state => {
      const data = state.allProducts
      const filteredSweaters = data.filter((element) => element.category === "sweater")
      return filteredSweaters;
    },
    getShoes: state => {
      const data = state.allProducts
      const filteredShoes = data.filter((element) => element.category === "shoes")
      return filteredShoes;
    },
    getBags: state => {
      const data = state.allProducts
      const filteredBags = data.filter((element) => element.category  === "bag" )
      return filteredBags;
    },
    getProducts: state => state.product,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getCartPopup: state => state.showCartPopup,
  },

  mutations: {
    SET_PRODUCTS (state, allProducts) {
      state.allProducts = allProducts
    },
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal =  !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showCartPopup = !state.showCartPopup;
    },
  },

  actions: {
    loadProducts ({commit}) {
      axios.get('https://api.myjson.com/bins/100mm1')
      .then(r => r.data)
      .then(allProducts => {
        commit('SET_PRODUCTS', allProducts)
      })
   },

   showOrHiddenPopupCart: (context) => {
     context.commit('SHOW_POPUP_CART');
   },
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },

  },
});
