<template>
  <div id="app">
    <Result :totalQuestion="getTotalQuestion"
            :points="getPoints"
            v-if="isFinish"
    />
    <Questions v-else/>
  </div>
</template>

<script>
import Questions from "./components/Questions/Questions";
import Result from "./components/Result/Result";
import {mapGetters} from "vuex";

export default {
  name: 'App',
  components: {
    Result,
    Questions
  },
  computed: mapGetters(['isFinish','getPoints', 'getTotalQuestion']),
}
</script>

<style lang="sass">
body
  margin: 0
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  box-sizing: border-box

#app
  background-color: #eeeeee
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

</style>
