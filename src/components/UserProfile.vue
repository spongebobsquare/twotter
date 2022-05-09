<template>
  <div class="user-profile">
    <div>
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ user.userName }}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong>{{ followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot"/>
    </div>

    <div class="user-profile__twoots-wrapper">
      <TwootItem
          v-for="twoot in user.twoots"
          :key="twoot.id"
          :username="user.userName"
          :twoot="twoot"
          @favorite="toggleFavorite"
      />
    </div>
  </div>

</template>

<script>
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel";

export default {
  name: 'UserProfile',
  components: {
    TwootItem,
    CreateTwootPanel,
  },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        userName: "happy doggy",
        firstName: "happy",
        lastName: "doggy",
        email: "idonthaveanemail",
        isAdmin: true,
        twoots: [
          {id: 1, content: "Im amazing!!!!!"},
          {id: 2, content: "Dont forget to subscribe to Peanuts!!!"}
        ],
      },
    };
  },

  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (newFollowerCount > oldFollowerCount) {
        console.log("You have gained 1 more followers!")
      }
    },
  },

  computed: {

  },

  methods: {
    followUser() {
      this.followers++;
    },

    toggleFavorite(id) {
      console.log("Favourited Twoot #" + id);
    },

    addTwoot(newTwootContent){
      this.user.twoots.unshift({
        id:this.user.twoots.length+1,
        content:newTwootContent,
      });
    }
  },

  mounted() {
    this.followUser();
  }
}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
  padding: 50px 3%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    /*margin-right: 0px;*/
    padding: 20px 0 20px 20px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    margin-bottom: auto;

    h1 {
      margin-bottom: 10px;
      margin-top: 0;
      font-size: 28px;
    }

    .user-profile__admin-badge {
      background-color: mediumpurple;
      color: #fff;
      margin-bottom: 10px;
      margin-right: auto;
      padding: 2px 10px;
      border-radius: 5px;
      font-weight: bold;
    }

    .user-profile__follower-count{
      //margin-bottom: 20px;
    }
  }

  .user-profile__twoots-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }
}


</style>
