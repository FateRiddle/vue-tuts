<template>
  <el-tree class="w-20"
    :data="data">
  </el-tree>
</template>
<script>
export default {
  name: 'sidebar',
  props: ['data'],
  data: () => ({}),
}
</script>
<style scoped>
</style>
