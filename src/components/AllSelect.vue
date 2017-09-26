<template>
  <div class="w-100 vh-100 bg-black-30 flex justify-center items-center f3">
    <div class="w-60 br3 pa3 bg-white flex flex-column" >
      <p class="w-100 tc lh-copy pb2 b bb b--black-20">采购清单</p>
      <main class="h-100 pl3 flex flex-column overflow-auto">
        <div class="bb b--black-20 pv3">
          <input type="checkbox" name="" v-model="allSelected">
          <span class="ml4">全选</span>
        </div>
        <!-- 商品单行 -->
        <section v-for="(p,index) in products" :key='index'
          class="flex items-center pv3 bb b--black-20">
          <input type="checkbox" v-model="checks[index]">
          <div class="flex justify-between w-100 ml4 lh-copy">
            <section class="flex items-center">
              <div class="pr3">{{p.name}}</div>
              <div>￥{{p.price}}</div>
            </section>
            <section class="flex mr4 items-center">
              <button class="ph2 pv1 f3 pointer" @click='increase(index)'>+</button>
              <div class="w2 tc">
                {{p.num}}
              </div>
              <button class="ph2 pv1 f3 pointer" @click='decrease(index)'>-</button>
            </section>
          </div>
        </section>
        <!-- 商品单行 -->
        <section class="mt3 flex justify-between">
          <div class="pt2" style="margin-left: 2.8rem">
            总价： ￥<span>{{sumPrice}}</span>
          </div>
          <input
            class="bg-dark-red dim pointer bn tracked-mega ph3 mr4 pv2 br2 white"
            type="button" value="下单"
          />
        </section>
      </main>
    </div>
  </div>
</template>
<script>
const products = [
  { name: '花甲粉丝', price: 100, num: 1 },
  { name: '羊肉串', price: 200, num: 3 },
  { name: '蛋仔冰淇淋', price: 300, num: 1 },
  { name: '烤猪蹄', price: 400, num: 1 },
]
export default {
  data() {
    return {
      products,
      checks: new Array(products.length).fill(false),
    }
  },
  computed: {
    allSelected: {
      get() {
        return this.checks.indexOf(false) === -1
      },
      set() {
        if (this.checks.indexOf(false) === -1) {
          this.checks = this.checks.map(v => (v = false))
        } else {
          this.checks = this.checks.map(v => (v = true))
        }
      },
    },
    sumPrice() {
      return this.products
        .map(p => p.price * p.num)
        .filter((p, index) => this.checks[index] === true)
        .reduce((a, b) => a + b, 0)
    },
  },
  methods: {
    increase(index) {
      this.products[index].num++
    },
    decrease(index) {
      if (this.products[index].num > 0) {
        this.products[index].num--
      }
    },
  },
  mounted() {
    //do something after mounting vue instance
  },
}
</script>
<style scoped>
</style>
