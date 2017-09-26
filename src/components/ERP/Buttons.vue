<template>
  <ul id="buttons" class="flex list">
    <li v-for="(b,index) in buttons">
      <div v-if='index === 0' class='pa2'>
        <el-button type="primary" @click='search' >{{b}}</el-button>
      </div>
      <div v-else class="pa2">
        <el-button>{{b}}</el-button>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'buttons',
  props: ['buttons', 'search'],
  data: () => ({}),
}
</script>
<style scoped>
</style>
