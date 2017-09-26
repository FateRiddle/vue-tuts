<template>
  <div id="trick" class="vh-100 flex flex-wrap justify-center items-start f1">

    <div class="flex flex-wrap mt7 w-100 justify-center">
      <div class="w-100 tc pv4">{{hidden?'脑筋急转弯':'二进制下'}}</div>
      <span> 1 + 1 = </span>
      <input v-if='hidden' class="w3 mh3" v-model="answer" />
      <span v-if='hidden'>?</span>
      <input v-else class="w3 mh3" value='10' />
    </div>

    <div v-if='answer == 2' class="red">
      {{hidden?'等于2，我还问你干嘛╮(╯_╰)╭':'等于10，问的是二进制'}}
      <button v-if='hidden' @click='showAnswer' class="pa2 pointer">
        正确答案
      </button>
      <button v-else @click='refresh' class="pa2 pointer">
        刷新
      </button>
    </div>
    <div v-else-if='answer' class="red">
      当然等于2啊，还能等于几╮(╯_╰)╭
    </div>
  </div>
</template>
<script>
export default {
  name: 'trick',
  data: () => ({
    answer: '',
    hidden: true,
  }),
  methods: {
    showAnswer() {
      this.hidden = false
    },
    refresh() {
      this.answer = ''
      this.hidden = true
    },
  },
}
</script>
<style scoped>
</style>
