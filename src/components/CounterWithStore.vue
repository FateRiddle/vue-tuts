<template>
  <div class="flex flex-wrap justify-center items-center vh-100" style="font-size: 6rem">
      <div class='f1'>vuex 计数器</div>
      <div class="tc w-100">{{count}}</div>
      <button class="ph3 ma2 pointer" @click="ADD">+</button>
      <button class="ph3 ma2 pointer" @click="MINUS">-</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'todolist',
  computed: {
    ...mapState({
      count: state => state.count,
    }),
  },
  methods: {
    ...mapMutations(['ADD', 'MINUS']),
  },
}
</script>
<style scoped>
</style>
