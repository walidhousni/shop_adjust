<template>
  <button :class="buttonColor">
  <slot></slot>
  <img v-if="IconCart" class="cart-size" src="../assets/images/cart.png" alt="Icon">
  </button>
</template>

<script>
  export default {
    props: ['buttonColor' , 'IconCart'],
  };
</script>

<style scoped>
  .btn {
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 3px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  .cart-size {
    width: 15px;
    height: 15px;
    text-align: center;
  }

  .btn-small {
    padding: .5em 2em;
  }

  .btn-medium {
    padding: .7em 4.5em;
  }

  .btn-large {
    background-color: #8e44ad;
  }

  .btn-info {
    background-color: #2D9CDB;
  }

  .add-cart {
    background: #fff;
    border-color: #8e44ad !important;
    cursor: pointer;
    line-height: 1.5;
    padding: 0.8em 1.8em;
    letter-spacing: 0.05rem;
    color: #000;
  }

  .btn-success {
    background-color: #27ae60;
  }

  .btn img {
    max-width: 20px;
    margin-left: .5em;
  }
</style>
