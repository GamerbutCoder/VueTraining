<template>
  <div id="product">
      <navbar />
      <h1>Products page</h1>
  </div>
</template>

<script>
import navBar from '@/components/navbar.vue'
export default {
    name: 'products',
    components:{
        navbar: navBar
    },
}
</script>

<style>

</style>