<template>
  <div id="timer" class="w-100 vh-100 f1 flex justify-center items-center">
    <div>倒计时</div>
    <div class="w5 tc">{{tillBirthday}}</div>
    <div>秒</div>
  </div>
</template>
<script>
let updater = null
import moment from 'moment'
export default {
  name: 'timer',
  data: () => ({
    now: moment(),
  }),

  computed: {
    tillBirthday() {
      const doom = moment([2017, 9, 23])
      return doom.diff(this.now, 'seconds')
    },
  },
  mounted() {
    //do something after mounting vue instance
    updater = setInterval(() => (this.now = moment()), 500)
  },
  beforeDestroy() {
    //do something before destroying vue instance
    clearInterval(updater)
  },
}
</script>
<style scoped>
</style>
