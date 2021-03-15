<template>
  <div class="echarts">
  </div>
</template>

<script>
import { watch, onMounted } from 'vue'
import * as Echarts from 'echarts'

export default {
  name: 'VueEcharts',
  props: {
    options: Object
  },
  setup (ctx) {
    let dom
    let chart
    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName('echarts')[0]
        chart = Echarts.init(dom)
      }
      chart.setOption(ctx.options)
    }
    onMounted(() => {
      initChart()
    })
    watch(() => ctx.options, () => {
      initChart()
      chart.setOption(ctx.options)
    })
  }
}
</script>

<style lang="stylus" scoped>
.echarts
  width 100%
  height 100%
</style>
