<template>
<ProductsList :products="getBags" />
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
        'getBags',
      ]),
    },
  };
</script>

<style>

</style>
