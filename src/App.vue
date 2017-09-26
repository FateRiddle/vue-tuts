<template>
  <div id="app">
    <div v-if='realPage === 1'>
      <TodoList />
    </div>
    <div v-if='realPage === 2'>
      <ERP />
    </div>
    <div v-if='realPage === 3'>
      <Trick />
    </div>
    <div v-if='realPage === 4'>
      <Timer />
    </div>
    <div v-if='realPage === 5'>
      <Board />
    </div>
    <div v-if='realPage === 6'>
      <AllSelect />
    </div>
    <div v-if='realPage === 7'>
      <Counter />
    </div>
    <div v-if='realPage === 8'>
      <TodoPractice />
    </div>

    <section class="fixed bottom-0 w-100 flex justify-end mb3">
      <button class="f1 pa3 mr4 pointer hover-black black-50" @click='previous'>
        <
      </button>
      <button class="f1 pa3 mr4 pointer hover-black black-50" @click='next'>
        >
      </button>
    </section>
  </div>
</template>

<script>
import Timer from './components/Timer'
import Board from './components/Board'
import AllSelect from './components/AllSelect'
import TodoList from './components/TodoList'
import TodoPractice from './components/TodoPractice'
import Counter from './components/Counter'
import ERP from './components/ERP'
import Trick from './components/Trick'

export default {
  name: 'app',
  data: () => ({
    page: 1,
    length: 8,
  }),
  computed: {
    realPage() {
      const page = this.page % this.length
      return page > 0 ? page : page + this.length
    },
  },
  methods: {
    previous() {
      this.page--
    },
    next() {
      this.page++
    },
  },
  components: {
    Timer,
    Board,
    AllSelect,
    TodoList,
    TodoPractice,
    Counter,
    ERP,
    Trick,
  },
  updated() {
    //do something after updating vue instance
    console.log(this.realPage)
  },
  mounted() {
    //do something after mounting vue instance
    console.log(this.realPage)
  },
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>
