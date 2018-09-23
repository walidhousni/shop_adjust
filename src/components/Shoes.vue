<template>
<ProductsList :products="getShoes" />
</template>


<script>
  import { mapGetters } from 'vuex';
  import ProductsList from './ProductsList';

  export default {
    components: {
      ProductsList,
    },

    computed: {
      ...mapGetters([
        'getShoes',
      ]),
    },
  };
</script>

<style>

</style>
