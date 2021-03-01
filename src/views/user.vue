<template>
   
  <div id="user">
      <navbar />
      <div v-if="this.$store.getters.islogin">
        <h1>User page</h1>
      </div>
      <div v-else>
          <h3>Login to Proceed to User Page</h3>
          <button @click="goToLogin">Login</button>
      </div>
      
      

  </div>
   
</template>

<script>
import navBar from '@/components/navbar.vue'
export default {
    name: 'user',
    components:{
        navbar: navBar
    },
    mounted(){
        const route  = this.$route
        console.log(route)
        console.log(route.path.split("/")[2])
    },
    methods: {
        goToLogin (){
            this.$router.push("/login")
        }
    }
}
</script>

<style>
    #user{
        text-align: center;
    }
</style>