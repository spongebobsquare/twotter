<template>
  <div>
    <img :src="imgArr[index]" alt="">
    <a class="left" @click="prev" v-show="index>0" href="javascript:void(0)"> &lt; </a>
    <a href="javascript:void(0)" class="right" @click="next" v-show="index<imgArr.length-1"> &gt; </a>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  data() {
    return {
      imgArr: [
        require('/src/assets/images/1.jpg'),
        require("../assets/images/2.jpg"),
        require("../assets/images/3.jpg"),
        require("../assets/images/4.jpg"),
        require("../assets/images/5.jpg"),
        require("../assets/images/6.jpg"),
        require("../assets/images/7.jpg"),
        require("../assets/images/8.jpg"),
        require("../assets/images/9.jpg"),
        require("../assets/images/10.jpg"),
      ],
      index: 0,
      // nowImage:require(this.imgArr[this.index]),

    }
  },

  methods: {
    prev() {
      this.index--;
    },
    next() {
      this.index++;
    }
  }
}
</script>

<style scoped>
div {
  position: relative;
  width: 960px;
  height: 518px;
  margin: 10px auto;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}

a {
  display: block;
  width: 30px;
  height: 30px;
  background-color: #fff;
  opacity: 0.8;
  color: red;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
}

.left {
  position: absolute;
  left: 0;
  top: 285px;
}

.right {
  position: absolute;
  right: 0;
  top: 285px;
}
</style>
