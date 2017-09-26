<template>
  <div class="">
    <transition-group name='board' tag='div' class="board center mt4 flex flex-wrap">
      <div v-for="item in items" :key="item" class="item ba flex justify-center items-center" :class="paint(item)?'bg-blue':'bg-light-blue'">
        {{ num(item) }}
      </div>
    </transition-group>
    <button type="button"
      class="db center white bg-blue br2 tracked-mega pa3 outline-0 pointer mt3 bn dim f3"
      @click='shuffle'
    >点我</button>
  </div>

</template>

<script>
let k = 1
const items = new Array(81).fill(0).map(i => k++)
import _ from 'lodash'
export default {
  name: 'hello',
  data() {
    return {
      items,
    }
  },
  computed: {},
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items)
    },
    num(item) {
      return (item - 1) % 9 + 1
    },
    paint(item) {
      return this.items.indexOf(item) % 2 === 0
    },
  },
  mounted() {
    //do something after mounting vue instance
    console.log('haha', this.items)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .board {
    height: 36rem;
    width: 36rem;
  }
  .item {
    width: 4rem;
    height: 4rem;
  }
  .board-move {
    transition: transform 1.5s;
  }
</style>
