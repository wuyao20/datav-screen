<template>
  <div :class="[className, 'echarts']">
  </div>
</template>

<script>
import { watch, onMounted } from 'vue'
import { v4 as uuid } from 'uuid'
import * as Echarts from 'echarts'

export default {
  name: 'VueEcharts',
  props: {
    options: Object
  },
  setup (ctx) {
    let dom
    let chart
    /* eslint-disable */
    let className = `echarts${uuid()}`
    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName(className)[0]
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
    return {
      className
    }
  }
}
</script>

<style lang="stylus" scoped>
.echarts
  width 100%
  height 100%
</style>
