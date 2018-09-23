<template>
<ProductsList :products="getSweaters"/>
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
        'getSweaters',
      ]),
    },
  };
</script>

<style>

</style>
