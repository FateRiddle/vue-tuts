<template>
    <div class="flex flex-wrap justify-center items-center vh-100" style="font-size: 6rem">
        <div class='f1'>计数器</div>
        <div class="tc w-100">{{counter}}</div>
        <button class="ph3 ma2 pointer" @click="add">+</button>
        <button class="ph3 ma2 pointer" @click="minus">-</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add() {
      this.counter++
    },
    minus() {
      this.counter--
    },
  },
}
</script>
