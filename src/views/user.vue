<template>
   
  <div id="user">
      <navbar />
      <div v-if="this.$store.getters.islogin">
        <h1>User page  - Todo List</h1>
        <div v-for="todo in $store.getters.getTodos" :key = "todo.id">
            <div class="todocard">
                <!--p> <b>UserId:</b> {{todo.userId}}</p>
                <p> <b>Id:</b> {{todo.id}}</p-->
                <p><b>Task:</b> {{todo.title}}</p>
                <p class="done" v-if="todo.completed === true"><b>Completed:</b> {{todo.completed}}</p>
                <p class ="notdone" v-else> <b>Completed:</b> {{todo.completed}}</p>
            </div>
           
        </div>
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
    .done{
        margin:10px;
        padding: 10px;
        background-color:green ;
    }
    .notdone{
        margin:10px;
        padding: 10px;
        background-color:red ;
    }
    .todocard{
         margin:10px;
        padding: 10px;
        background-color: grey;
    }
    b{
        color:blue;
    }
</style>