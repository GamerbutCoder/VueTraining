<template>
  <nav id="navbar">
      <router-link to="/login">Login</router-link>
      <router-link to="/user">User</router-link>
      <router-link to="/">Products</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
    #navbar{
        display: flex;
        flex-direction:row-reverse;
        background-color: rgb(240, 142, 85);
        height: 40px;
    }
    a {
        text-decoration: none;
        padding: 10px;
        
    }
</style>