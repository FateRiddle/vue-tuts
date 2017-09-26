<template>
    <div id="todo" class="flex vh-100 justify-center bg-black-20 f3">
      <main class="bg-white w-70 h-100 flex flex-column items-center">
        <div class="mv5">
            <input ref='input' v-model="inputText" @keyup.enter="addTodo(inputText)" />
            <span @click="addTodo(inputText)"
              class="pointer f3 pa2"
            > + </span>
        </div>
        <ul class="list pl0 h-50">
            <li v-for="t in filteredTodos" :key="t.id"
              :class="{green:t.completed}" style="min-width: 300px;"
            >
              <label class="dib pa2 pointer">
                <input type="checkbox" v-model="t.completed">
                {{t.text}}
              </label>
            </li>
        </ul>
        <ul class="flex list pl0">
          <li v-for="f in filters"
            class='pointer pa2'
            :class="{'bb b--red bw1':f.value === filter}" @click="changeFilter(f.value)">{{f.text}}
          </li>
        </ul>
      </main>

    </div>
</template>

<script>
let nextId = 4
export default {
  name: 'todo',
  data() {
    return {
      inputText: '',
      todos: [
        { id: 1, text: 'vue培训', completed: false },
        { id: 2, text: 'o2o页面', completed: true },
        { id: 3, text: '读三体', completed: false },
      ],
      filter: 'all',
    }
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(
        t =>
          this.filter === 'all' ||
          (this.filter === 'active' && !t.completed) ||
          (this.filter === 'completed' && t.completed)
      )
    },
    filters() {
      return [
        { value: 'all', text: '全部' },
        { value: 'active', text: '未完成' },
        { value: 'completed', text: '完成' },
      ]
    },
  },
  methods: {
    addTodo(text) {
      if (!text) {
        this.$refs.input.placeholder = '写点啥吧'
        return
      }
      this.todos.push({ id: nextId++, text, completed: false })
      this.inputText = ''
      this.$refs.input.placeholder = ''
    },
    changeFilter(filter) {
      this.filter = filter
    },
  },
}
</script>

<style scoped>

</style>
