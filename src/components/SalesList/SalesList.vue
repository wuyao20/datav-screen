<template>
  <div class="sales-list">
    <div class="title">区域销售大盘环比分析</div>
    <div class="list">
      <base-scroll-list :config="config"/>
    </div>
  </div>
</template>

<script>
import BaseScrollList from './BaseScrollList'
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'SalesList',
  props: {
    data: Array
  },
  components: {
    BaseScrollList
  },
  setup (props) {
    const config = ref({})

    const update = () => {
      const data = []
      const aligns = []
      const headerIndexData = []
      for (let i = 0; i < props.data.length; i++) {
        data[i] = []
        aligns[i] = 'center'
        if (i % 2 === 0) {
          headerIndexData[i] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        } else {
          headerIndexData[i] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="width:15px;height:15px;background:rgb(38,88,104);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        }
        for (let j = 0; j < 5; j++) {
          let text = ''
          switch (j) {
            case 0:
              text = props.data[i].order
              break
            case 1:
              text = props.data[i].shop
              break
            case 2:
              text = props.data[i].rider
              break
            case 3:
              text = props.data[i].newShop
              break
            case 4:
              text = props.data[i].avgOrder
              break
            default:
          }
          if (j === 1 || j === 3) {
            data[i].push(`<div style="color:rgb(178,209,126)">${text}</div>`)
          } else {
            data[i].push(`<div>${text}</div>`)
          }
        }
      }
      config.value = {
        headerData: ['城市订单量', '店铺数', '接单骑手人数', '新店铺数量', '人均订单量'], // 表头
        data, // 表格数据
        rowNum: 12, // 显示行数
        aligns, // 表格排序
        headerIndex: true, // 是否显示序号
        headerIndexContent: '', // 序号列表头文字
        headerIndexData, // 序号列内容
        headerBGC: 'rgb(80, 80, 80)', // 表头背景色
        headerHeight: 55, // 表头高度
        headerFontSize: 24, // 表头文字大小
        rowBg: ['rgb(40, 40, 40)', 'rgb(55, 55, 55)'], // 奇偶行背景色
        rowFontSize: 24, // 表格文字大小
        rowColor: '#fff'
      }
    }
    onMounted(() => {
      update()
    })
    const stop = watch(() => props.data, () => {
      update()
      stop()
    })
    return {
      config
    }
  }
}
</script>

<style lang="stylus" scoped>
.sales-list {
  width: 100%;
  height: 100%;
  background: rgb(55, 55, 55);
  padding: 20px 40px;
  box-sizing: border-box;

  .title {
    font-size: 36px;
    margin-left: 20px;
  }

  .list {
    width: 100%;
    height: 880px;
    font-size: 32px;
    margin-top: 20px;
    padding: 30px 0;
    box-sizing: border-box;
    background: rgb(40, 40, 40);
  }
}
</style>
