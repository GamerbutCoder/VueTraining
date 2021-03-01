<template>

  <dic id="user">
      <navbar />
      <h1>User page</h1>

  </dic>
</template>

<script>
import navBar from '@/views/navbar.vue'
export default {
    name: 'user',
    components:{
        navbar: navBar
    },
    mounted(){
        const route  = this.$route
        console.log(route)
        console.log(route.path.split("/")[2])
    }
}
</script>

<style>

</style>