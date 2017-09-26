<template>
  <div id="todolist" class="flex vh-100 justify-center bg-black-20 f3">
    <main class="bg-white w-70 h-100 flex flex-column items-center">
      <div class="mv5">
          <input ref='input' v-model="inputText"
            @keyup.enter='addTodo'
          />
          <span @click='addTodo'
            class="pointer f3 pa2"
          > + </span>
      </div>
      <button class='self-start pa1 ml6 mb3 f5'
        @click='clearCompletedTodos'
      >
        清除已完成
      </button>

      <ul class="list pl0 h-50">
          <li v-for="t in filteredTodos"
            style="min-width: 300px;"
          >
            <label class="dib pa2 pointer"
              :class="{green:t.completed}"
            >
              <input type="checkbox" v-model="t.completed">
              {{t.text}}
            </label>
          </li>
      </ul>

      <ul class="flex list pl0">
        <li v-for='f in filters'
          @click='changeFilter(f.value)'
          class='pointer pa2'
          :class='{"bb b--red bw1":f.value === filter}'
        >
          {{f.text}}
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
let nextId = 4
export default {
  name: 'todolist',
  data: () => ({
    inputText: '',
    todos: [
      { id: 1, text: '吃饭', completed: true },
      { id: 2, text: '睡觉', completed: false },
      { id: 3, text: '打豆豆', completed: false },
    ],
    filter: 'all', //'completed'/'active'
  }),
  computed: {
    filters() {
      return [
        { value: 'all', text: '全部' },
        { value: 'active', text: '未完成' },
        { value: 'completed', text: '完成' },
      ]
    },
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      return this.todos.filter(
        t =>
          (t.completed && this.filter === 'completed') ||
          (!t.completed && this.filter === 'active')
      )
    },
  },
  methods: {
    addTodo() {
      if (this.inputText) {
        this.todos.push({
          id: nextId++,
          text: this.inputText,
          completed: false,
        })
        this.inputText = ''
        this.$refs.input.placeholder = ''
      } else {
        this.$refs.input.placeholder = '写点啥吧'
      }
    },
    changeFilter(value) {
      this.filter = value
    },
    clearCompletedTodos() {
      this.todos = this.todos.filter(t => !t.completed)
    },
  },
}
</script>
<!-- 静态页面 -->
<!-- 组件划分 -->
<!-- 状态 -->
<!-- 交互 -->








<!-- inputText: '',
todos: [
  { id: 1, text: 'vue培训', completed: false },
  { id: 2, text: 'o2o页面', completed: true },
  { id: 3, text: '读三体', completed: false },
],
filter: 'all', -->
