<template>
  <div class="box">
  <header>
    <p>ImageSearch</p>
  </header>
    <div class="btn">
      <button>开始搜图</button>
      <Icon type="md-search" />
    </div>

  </div>
</template>

<!-- import Vue.js -->
<!--<script src="//unpkg.com/vue@2.6.14/dist/vue.min.js"></script>-->
<!-- import stylesheet -->


<script>
export default {
  name: "StartPage",
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div.box {
  /*position: relative;*/
  width: 100%;
  height: 800px;
  margin:0;
  background: url("../assets/images/Hydrangeas.jpg") no-repeat;
  background-size: cover;
}

header {
  /*position: relative;*/
  width: 100%;
  height: 90px;
  /*background-color: #000;*/
  background-color: rgba(0,0,0,0.5);
}

p {
  position:absolute;
  top:20%;
  left:3%;
  text-align: left;
  color: white;
  font-size: 32px;
  opacity: 1;

  padding-bottom: 3px;
  border-bottom: #ff8e2d 3px solid;
}

div.btn{
  position: relative;
  margin-top: 36%;
}
button{
  position: absolute;
  /*display: block;*/
  /*top: 36%;*/
  /*left: 40%;*/
  margin: 0 auto;
  width: 300px;
  height: 70px;
  border-radius: 60px;
  border:none;
  padding-left: 100px;

  background-color: #ff8e2d;

  line-height: 10%;
  text-align: left;


  font-size: 40px;
  color: #fff;
  font-weight: bold;
}
</style>
