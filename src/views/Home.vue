<template>
  <div class="home">
    <loading v-if="load">
      <div>数据大屏加载中...</div>
    </loading>
    <container :options="{ width: 3840, height: 2160 }" v-else>
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-users
              :today-user="todayUser"
              :growth-last-month="growthLastMonth"
              :growth-last-day="growthLastDay">
            </total-users>
          </div>
          <div class="left2">
            <average-age :data="ageData" :avgAge="averageAge"></average-age>
          </div>
          <div class="left3">
            <total-device :data="deviceData"></total-device>
          </div>
          <div class="left4">
            <total-gender :data="genderData"></total-gender>
          </div>
          <div class="left5">
            <total-rider :data="riderData"></total-rider>
          </div>
          <div class="left6">
            <hot-category :data="hotCategory"></hot-category>
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerData"></center-header>
          </div>
          <div class="right-top2">333</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">333</div>
              <div class="right-left2">333</div>
              <div class="right-left3">333</div>
            </div>
            <div class="right-right">
              <div class="right-right1">333</div>
              <div class="right-right2">333</div>
              <div class="right-right3">333</div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@/components/loading/index'
import Container from '@/components/container/Container'
import TopHeader from '@/components/TopHeader/index'
import TotalUsers from '@/components/totalUsers/index'
import AverageAge from '@/components/AverageAge/index'

import { ref, onMounted } from 'vue'
import useScreenData from '@/hooks/useScreenData'
import 'echarts/lib/chart/bar'
import TotalDevice from '@/components/TotalDevice/TotalDevice'
import TotalGender from '@/components/TotalGender/TotalGender'
import TotalRider from '@/components/TotalRider/TotalRider'
import HotCategory from '@/components/HotCategory/HotCategory'
import CenterHeader from '@/components/CenterHeader/CenterHeader'
export default {
  name: 'Home',
  components: {
    CenterHeader,
    HotCategory,
    TotalRider,
    TotalGender,
    TotalDevice,
    Container,
    Loading,
    TopHeader,
    TotalUsers,
    AverageAge
  },
  setup () {
    const load = ref(true)

    onMounted(() => {
      setTimeout(() => {
        load.value = false
      }, 2500)
    })

    return {
      load,
      ...useScreenData()
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  background rgb(29, 29, 29)
  color #fff
  font-size 48px

  #container {
    display: flex;
    flex-direction: column;

    .header {
      height: 167px;
      margin-top: 10px;
    }

    .separator {
      width: 100%;
      height: 10px;
      background: rgb(92, 88, 89);
      filter: blur(0px);
      backdrop-filter: blur(0px);
    }

    .center {
      flex: 1;
      display: flex;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        margin: 0 10px;
        box-sizing: border-box;
        background: rgb(60, 61, 64);

        .left1, .left2, .left3, .left4, .left5, .left6 {
          padding-bottom: 20px;
        }

        .left1 {
          height: 300px;
        }

        .left2 {
          height: 320px;
        }

        .left3 {
          height: 280px;
        }

        .left4 {
          height: 230px;
        }

        .left5 {
          height: 360px;
        }

        .left6 {
          height: 360px;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 10px;
        max-width: 2960px;
        overflow: hidden;

        .right-top1 {
          height: 206px;
          margin-bottom: 20px;
        }

        .right-top2 {
          height: 48px;
          margin-bottom: 20px;
        }

        .right-bottom {
          flex: 1;
          display: flex;

          .right-left {
            display: flex;
            flex-direction: column;
            width: 1917px;

            .right-left1 {
              height: 999px;
            }

            .right-left2 {
              height: 80px;
              padding-top: 20px;
              box-sizing: border-box;
            }

            .right-left3 {
              height: 350px;
              margin-top: 10px;

              .dv-border-box-8 {
                width: 100%;
                height: 100%;
                padding: 5px;
                box-sizing: border-box;
                background: rgb(66, 68, 70);
                border-radius: 10px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, .3);
              }
            }

            .right-left4 {
              height: 220px;
              margin-top: 10px;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            .right-right1 {
              width: 100%;
              height: 999px;
              padding-right: 10px;
              box-sizing: border-box;
            }

            .right-right2 {
              width: 100%;
              height: 650px;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
</style>
