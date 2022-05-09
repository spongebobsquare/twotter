<template>
  <form action="" class="create-twoot-panel" @submit.prevent="createNewTwoot"
        :class="{'--exceed':newTwootCharacterCount>180}">

    <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)</label>
    <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"></textarea>

    <div class="create-twoot-panel__submit">
      <div class="create-twoot-type">
        <label for="newTwootType"><strong>Type: </strong></label>
        <select id="newTwootType" v-model="state.selectedTwootType">
          <option :value="option.value" v-for="(option,index) in state.twootTypes" :key="index">
            {{ option.name }}
          </option>
        </select>
      </div>
      <button id="postTwoot">Twoot It!</button>
    </div>


  </form>
</template>

<script>
import {reactive, computed} from 'vue'

export default {
  name: "CreateTwootPanel",
  setup(props, context) {
    const state = reactive({
      newTwootContent: 'hello',
      selectedTwootType: 'instant',
      twootTypes: [
        {value: 'instant', name: "Instant Twoot"},
        {value: 'draft', name: "Draft"},
      ]
    });

    const newTwootCharacterCount = computed(() => state.newTwootContent.length);

    function createNewTwoot() {
      if (state.newTwootContent && newTwootCharacterCount.value <= 180 &&state.selectedTwootType !== 'draft') {
        context.emit("add-twoot", state.newTwootContent);
        state.newTwootContent = '';
      }
    }

    return {
      state,
      newTwootCharacterCount,
      createNewTwoot,
    };
  },
}
</script>

<style lang="scss" scoped>
.create-twoot-panel {
  margin-top: 20px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;

  &.--exceed {
    color: red;
    border-color: red;

    button {
      background-color: red;
      color: #fff;
      border: none;
    }
  }

  textarea {
    border: 1px solid #DFE3E8;
    border-radius: 5px;
    //width: 90%;
    margin-bottom: 10px;
  }

  .create-twoot-panel__submit {
    display: flex;
    justify-content: space-between;

    .create-twoot-type {
      //margin-bottom: 20px;
    }

    #postTwoot {
      padding: 5px 20px;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      background-color: deeppink;
      color: #fff;
      font-weight: bold;
    }
  }


}

</style>
