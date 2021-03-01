<template>
  <div id="login">
      <navbar />
      <h1>Login Page</h1>
      <div v-if="($store.getters.islogin==false)">
        <input type="text" placeholder="username" v-model="uname"> <br> <br>
        <input type="password" placeholder="password" v-model="pwd"> <br> <br>
        <input type="submit" @click="onsubmit">
      </div>
      <div v-else>
          <h2>Already Logged In</h2>
          <button @click = "getBack">Go Back</button>
      </div>

     
  </div>
</template>

<script>
import axios from 'axios'
import navBar from '@/components/navbar.vue'
//import Products from '@/views/products.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'login',
    components:{
        navbar: navBar
    },
   
    data(){
        return {
            uname: '',
            pwd: ''
        }
    },
    methods: {
        onsubmit(){
            
            const obj = {
                userName: this.uname,
                password: this.pwd
            }
            console.log(this.uname+" "+this.pwd)
            axios.post("http://localhost:8080/login",obj).then((res)=>{
                console.log(res)
            })
            if(this.uname===this.pwd){
                this.$store.dispatch('setLoginAction',true)
                this.$router.go(-1)
                //this.$router.push(Products)
            }
            
            this.pwd = ''
            this.uname = ''
        },
        getBack () {
            this.$router.go(-1);
        }
    },
    computed: {
        ...mapGetters(['isLogin'])
    }
}
</script>

<style lang="scss">
    #login{
        text-align: center;
    }
</style>
    
