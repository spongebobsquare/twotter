<template>
  <div id="app">
    <nav>
      <div class="navigation_logo">Twotter</div>
      <div class="navigation_user">{{ user.userName }}</div>
    </nav>
    <User-profile/>
  </div>

</template>

<script>
import UserProfile from "@/components/UserProfile";

export default {
  name: 'App',
  components: {
    UserProfile,
  },
  data(){
    return{
      user:{
        userName:"Happy Doggy"
      }
    };
  }

}
</script>

<style lang="scss">

#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;

  nav{
    background-color: deeppink;
    padding:20px 3%;
    display: flex;
    justify-content: space-between;
    align-items:center;

    color: #fff;
    font-weight: bold;

    .navigation_logo{
      font-size: 24px;
      letter-spacing: 1px;
    }
  }
}

</style>
