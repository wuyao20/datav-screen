<template>
  <div class="order-map">
    <div class="loading" v-if="loading">加载中...</div>
    <vue-echarts :options="options" v-else></vue-echarts>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import * as ECharts from 'echarts'
import 'echarts-gl'
import VueEcharts from '@/components/VueEcharts/VueEcharts'
import { geoJS } from '@/utils/geo'

export default {
  name: 'OrderMap',
  components: { VueEcharts },
  setup (props) {
    /* eslint-disable */
    const year = ['新沂', '邳州', '睢宁', '铜山', '贾汪', '丰县', '沛县']
    const geoGpsMap = {
      '1': [118.442596, 34.368223],
      '2': [117.987263, 34.330074],
      '3': [117.938234, 33.950179],
      '4': [117.193144, 34.179853],
      '5': [117.457928, 34.438525],
      '6': [116.611077, 34.701913],
      '7': [116.946253, 34.761245]
    }
    const geoCoordMap = {
      '新沂': [118.442596, 34.368223],
      '邳州': [117.987263, 34.330074],
      '睢宁': [117.938234, 33.950179],
      '铜山': [117.193144, 34.179853],
      '贾汪': [117.457928, 34.438525],
      '丰县': [116.611077, 34.701913],
      '沛县': [116.946253, 34.761245]
    }
    const d1 = {
      '新沂': 10041,
      '邳州': 4093,
      '睢宁': 1157,
      '铜山': 4903,
      '贾汪': 2667,
      '丰县': 8331,
      '沛县': 23727,

    }
    const d2 = {
      '新沂': 23727,
      '邳州': 8331,
      '睢宁': 1157,
      '铜山': 4903,
      '贾汪': 800,
      '丰县': 900,
      '沛县': 1000,

    }
    const d3 = {
      '新沂': 1000,
      '邳州': 4093,
      '睢宁': 1157,
      '铜山': 3000,
      '贾汪': 2667,
      '丰县': 3333,
      '沛县': 2222
    }
    const d4 = {
      '新沂': 6666,
      '邳州': 4093,
      '睢宁': 2344,
      '铜山': 4903,
      '贾汪': 4313,
      '丰县': 8331,
      '沛县': 4321
    }
    const d5 = {
      '新沂': 5234,
      '邳州': 3214,
      '睢宁': 3214,
      '铜山': 2413,
      '贾汪': 5321,
      '丰县': 7413,
      '沛县': 7431

    }
    const d6 = {
      '新沂': 4543,
      '邳州': 7743,
      '睢宁': 13332,
      '铜山': 3215,
      '贾汪': 7543,
      '丰县': 8432,
      '沛县': 3125
    }
    const colors = [
      ['#1DE9B6', '#1DE9B6', '#FFDB5C', '#FFDB5C', '#04B9FF', '#04B9FF'],
      ['#1DE9B6', '#F46E36', '#04B9FF', '#5DBD32', '#FFC809', '#FB95D5', '#BDA29A', '#6E7074', '#546570', '#C4CCD3'],
      ['#37A2DA', '#67E0E3', '#32C5E9', '#9FE6B8', '#FFDB5C', '#FF9F7F', '#FB7293', '#E062AE', '#E690D1', '#E7BCF3', '#9D96F5', '#8378EA', '#8378EA'],
      ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53', '#EEDD78', '#73A373', '#73B9BC', '#7289AB', '#91CA8C', '#F49F42']
    ]
    const colorIndex = 2

    const mapData = [
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]
    /* 柱子Y名称 */
    const categoryData = []
    const barData = []
    for (let key in geoCoordMap) {
      mapData[0].push({
        'year': '新沂',
        'name': key,
        'value': d1[key] / 100,
        'value1': d1[key] / 100
      })
      mapData[1].push({
        'year': '邳州',
        'name': key,
        'value': d1[key] / 100,
        'value1': d2[key] / 100
      })
      mapData[2].push({
        'year': '睢宁',
        'name': key,
        'value': d3[key] / 100,
        'value1': d3[key] / 100
      })
      mapData[3].push({
        'year': '铜山',
        'name': key,
        'value': d3[key] / 100,
        'value1': d4[key] / 100
      })
      mapData[4].push({
        'year': '贾汪',
        'name': key,
        'value': d5[key] / 100,
        'value1': d5[key] / 100
      })
      mapData[5].push({
        'year': '丰县',
        'name': key,
        'value': d5[key] / 100,
        'value1': d6[key] / 100
      })
      mapData[6].push({
        'year': '沛县',
        'name': key,
        'value': d5[key] / 100,
        'value1': d6[key] / 100
      })
    }
    for (let i = 0; i < mapData.length; i++) {
      mapData[i].sort(function sortNumber (a, b) {
        return a.value - b.value
      })
      barData.push([])
      categoryData.push([])
      for (let j = 0; j < mapData[i].length; j++) {
        barData[i].push(mapData[i][j].value1)
        categoryData[i].push(mapData[i][j].name)
      }
    }
    const convertData = function (data) {
      let res = []
      for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    }
    console.log(convertData(mapData[0]))
    const convertToLineData = function (data, gps) {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const dataItem = data[i]
        const toCoord = geoCoordMap[dataItem.name]
        const fromCoord = gps // 郑州
        //  var toCoord = geoGps[Math.random()*3];
        if (fromCoord && toCoord) {
          res.push([{
            coord: fromCoord,
            value: dataItem.value
          }, {
            coord: toCoord
          }])
        }
      }
      return res
    }
    /* eslint-enable */
    const loading = ref(true)
    const options = ref({})
    const update = () => {
      ECharts.registerMap('xuzhou', geoJS)
      const _options = {
        timeline: {
          axisType: 'category',
          data: year,
          autoPlay: true,
          playInterval: 3000,
          left: '10%',
          right: '5%',
          bottom: '3%',
          width: '80%',
          label: {
            normal: {
              textStyle: {
                color: '#ddd'
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          symbolSize: 10,
          lineStyle: {
            color: '#555'
          },
          checkpointStyle: {
            borderColor: '#777',
            borderWidth: 2
          },
          controlStyle: {
            showNextBtn: true,
            showPrevBtn: true,
            normal: {
              color: '#666',
              borderColor: '#666'
            },
            emphasis: {
              color: '#aaa',
              borderColor: '#aaa'
            }
          }
        },
        baseOption: {
          backgroundColor: '#424446',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              shadowStyle: {
                color: 'rgba(150, 150, 150, 0.1)'
              }
            }
          },
          grid: {
            right: '5%',
            top: '15%',
            bottom: '15%',
            width: '20%'
          },
          geo: {
            map: 'xuzhou',
            zoom: 1.1,
            roam: true,
            scaleLimit: {
              min: 0.5,
              max: 3
            },
            label: {
              normal: {
                show: false
              }
            },
            center: [117.860369, 34.309244],
            itemStyle: {
              normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
              },
              emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
              }
            }
          }
        },
        options: []
      }
      for (let i = 0; i < year.length; i++) {
        _options.options.push({
          title: [{
            text: '徐州联通销售大盘',
            subtext: '数据由市场部提供',
            left: '2%',
            top: '2%',
            textStyle: {
              color: '#fff',
              fontSize: 35,
              fontWeight: 700
            }
          }, {
            id: 'statistic',
            text: year[i] + '销售额统计情况',
            left: '75%',
            top: '8%',
            textStyle: {
              color: '#fff',
              fontSize: 25
            }
          }],
          xAxis: {
            type: 'value',
            position: 'top',
            min: 0,
            boundaryGap: false,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: 2,
              textStyle: {
                color: '#aaa'
              }
            }
          },
          yAxis: {
            type: 'category',
            data: categoryData[i],
            axisLine: {
              lineStyle: {
                color: '#ddd'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#ddd'
              }
            }
          },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(mapData[i]),
              symbolSize: function (val) {
                return val[2] / 3
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  fontSize: 33,
                  formatter: '{b}',
                  position: 'right',
                  show: true,
                  color: colors[colorIndex][i]
                }
              },
              itemStyle: {
                normal: {
                  color: colors[colorIndex][i],
                  shadowBlur: 10,
                  shadowColor: colors[colorIndex][i]
                }
              },
              zlevel: 1
            },
            { // 地图线的动画效果
              type: 'lines',
              zlevel: 2,
              effect: {
                show: true,
                period: 4, // 箭头指向速度，值越小速度越快
                trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', // 箭头图标
                symbolSize: 3 // 图标大小
              },
              lineStyle: {
                normal: {
                  color: colors[colorIndex][i],
                  width: 0.1, // 尾迹线条宽度
                  opacity: 0.5, // 尾迹线条透明度
                  curveness: 0.3 // 尾迹线条曲直度
                }
              },
              data: convertToLineData(mapData[i], geoGpsMap[i + 1])
            },
            {
              type: 'bar',
              data: barData[i],
              itemStyle: {
                normal: {
                  color: colors[colorIndex][i]
                }
              }
            }]
        })
      }
      options.value = _options
      loading.value = false
    }
    onMounted(() => {
      update()
    })
    return {
      options,
      loading
    }
  }
}
</script>

<style lang="stylus" scoped>
.order-map
  width 100%
  height 100%

  .loading
    display flex
    justify-content center
    align-items center
    width 100%
    height 100%
    font-size 36px
    background rgb(48, 48, 48)
    color #fff
</style>
