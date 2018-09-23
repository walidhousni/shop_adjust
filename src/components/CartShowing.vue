<template>
  <div class="box">
    <span>There's No Products here! choose any products and comeback</span>
    <div class="box-item">
      <img src="" alt="" class="item-thumb">
      <h3 class="item-name">product.name</h3>
      <span class="item-amount">Amount: 1</span>
      <span class="item-price">$ product.price</span>
    </div>
    <div class="cart-info">
      <span>Total: $ ,00</span>
      <router-link to="/checkout" >
      <Button
      buttonColor="btn btn-small btn-info"

      >
       View Cart
      </Button>
      </router-link>
    </div>
  </div>
</template>


<script>
  import Button from './Button.vue';

  export default {
    components: {
      Button,
    }
  }
</script>

<style scoped>
  .box {
    width: 400px;
    height: auto;
    background-color: #FAFAFA;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1em .5em;
    position: absolute;
    z-index: 1;
  }

  .box:after {
    content: '';
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    background: inherit;
    position: absolute;
    top: -15px;
    right: 15px;
  }

  .box-item {
    width: 100%;
    height: 130px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 0 .5em;
    margin-top: .3em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .item-thumb {
    max-width: 70%;
    grid-column: 1/2;
    grid-row: 1/4;
    align-self: center;
  }

  .item-name {
    grid-column: 2/4;
    grid-row: 1/2;
    font-weight: normal;
  }

  .item-amount {
    grid-column: 2/3;
    grid-row: 2/4;
    color: #ddd;
  }

  .cart-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
