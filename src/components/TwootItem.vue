<template>
  <div class="twoot-item" @click="favoriteTwoot(twoot.id)">
    <div class="user-profile__twoot">
      <div class="twoot-item__user">
        @{{ username }}
      </div>
      <div class="twoot-item__content">
        {{ twoot.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwootItem",

  props:{
    username:{
      type: String,
      required: true,
    },

    twoot:{
      type:Object,
      required: true,
    }
  },

  methods:{
    favoriteTwoot(id){
      this.$emit("favorite", id);
    }
  }

};
</script>

<style lang="scss" scoped>
.twoot-item{
  padding:15px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover{
    transform: scale(1.1,1.1);
  }

  .twoot-item__user{
    font-weight: bold;
    margin-bottom: 5px;
  }

  .twoot-item__content{
    color: #888;
  }
}





</style>
