<template>
  <div id="erp" class="flex vh-100 w-100">
    <!-- :data='tree' -->
    <Sidebar :data='tree' />
    <div class="flex-auto flex flex-column">
      <!-- :buttons='buttons' :search='search' -->
      <Buttons :buttons='buttons' :search='search'/>
      <!-- :tableData='tableData'  -->
      <MyTable :tableData='tableData' />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Buttons from './Buttons'
import MyTable from './Table'
import Tabs from './Tabs'
export default {
  name: 'erp',
  data: () => ({
    buttons: ['查询', 'sadfsd入', '开单', '上传Excel'],
    tableData: [],
    tree: [
      {
        label: '采购管理',
        children: [
          {
            label: '采购操作',
            children: [
              {
                label: '采购到货',
              },
            ],
          },
        ],
      },
      {
        label: '仓储管理',
        children: [
          {
            label: '库存操作',
            children: [
              {
                label: '仓储分货',
              },
            ],
          },
          {
            label: '库存报表',
            children: [
              {
                label: '调拨入库表',
              },
            ],
          },
        ],
      },
      {
        label: '客户管理',
        children: [
          {
            label: '客户操作',
            children: [
              {
                label: '客户存款',
              },
            ],
          },
          {
            label: '客户报表',
            children: [
              {
                label: '定金余额表',
              },
            ],
          },
        ],
      },
    ],
  }),
  methods: {
    search() {
      if (this.tableData.length === 0) {
        this.tableData = [
          {
            date: '2016-05-02',
            name: '荷包蛋',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '蛋炒饭',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '乔帮主',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '水煮肉片',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ]
      } else {
        this.tableData = []
      }
    },
  },
  components: {
    Sidebar,
    Buttons,
    MyTable,
    Tabs,
  },
}
</script>
<style scoped>
</style>
