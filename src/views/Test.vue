<template>
  <div style="width: 800px; height: 700px">
    <vue-echarts :options="options"></vue-echarts>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { geoJS } from '@/utils/geo'
import * as ECharts from 'echarts'
import 'echarts-gl'
import VueEcharts from '@/components/VueEcharts/VueEcharts'

export default {
  components: { VueEcharts },
  setup () {
    const options = ref({})
    const update = () => {
      const centers = []
      geoJS.features.map(item => {
        if (item.properties) {
          centers.push({
            [item.properties.name]: item.properties.center
          })
        }
      })
      ECharts.registerMap('xuzhou', geoJS)
      options.value = {
        geo: [{
          map: 'xuzhou',
          zoom: 1,
          roam: true,
          scaleLimit: {
            min: 0,
            max: 3
          },
          itemStyle: {
            areaColor: '#013c62',
            shadowColor: '#013c62',
            shadowBlur: 20,
            shadowOffsetX: -5,
            shadowOffsetY: 15
          }
        }],
        series: [{
          type: 'map',
          map: 'xuzhou',
          label: {
            position: 'insideRight ',
            show: true,
            color: '#fff',
            emphasis: {
              color: '#fff',
              show: true
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#2980b9',
              borderWidth: 1,
              areaColor: '#12235c'
            },
            emphasis: {
              areaColor: '#fa8c16',
              borderWidth: 0
            }
          }
        }],
        data: centers.map(centerItem => {
          const key = Object.keys(centerItem)[0]
          return {
            name: key,
            value: Math.random() * 100
          }
        })
      }
    }
    onMounted(() => {
      update()
      console.log(geoJS)
    })
    return {
      options
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
