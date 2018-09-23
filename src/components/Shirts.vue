<template>
<ProductsList :products="getShirts" />
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
        'getShirts',
      ]),
    },
  };
</script>

<style>

</style>
