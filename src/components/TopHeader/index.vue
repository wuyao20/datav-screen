<template>
  <div class="top-header">
    <img class="logo"
         src="https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/54149aa06f26afcf26f42d66c999ee8b.png">
    <!--    <img class="logo" src="../../assets/unicom.jpeg">-->
    <div class="logo-text">
      <div class="cn-text">徐州联通数据大盘</div>
      <div class="en-text">XUZHOU Unicom Overview of Business Data</div>
    </div>
    <div class="right-text">
      <svg class="unicom" viewBox="0 0 1024 1024" width="150" height="150">
        <path id="path1"
              d="M739.844892 323.049949c24.489902-45.276966 20.034455-92.044098-14.118948-141.038953-51.222578-41.574129-102.445157-49.732412-153.652683-25.242511l-60.871027 59.395914-63.85136-57.168191c-40.82152-25.980068-88.341261-20.787065-142.52912 14.841452-45.292018 47.519741-52.697692 96.514597-22.277231 147.722123l60.871027-40.083963c-6.668117-17.821785-4.440394-33.415846 6.683169-48.257298 10.386006-14.841452 30.435514-17.821785 60.133471-8.158283l43.049243 39.331354-43.7868 47.504689 51.960135 53.450301 49.732412-48.257298 47.504689 47.504689 59.380861-56.415581-48.242246-42.311686 34.89096-40.82152c27.470234-14.841452 47.489637-14.841452 60.118418 0 16.331618 13.351286 20.049508 31.910628 9.648449 54.925415l-165.528855 174.454799L343.430604 281.490872l-60.871027 40.083963 175.192356 187.053476L281.069411 697.171954c-28.207791 43.801852-23.014788 93.549316 16.331618 149.227341 53.435249 41.574129 102.445157 46.014523 148.474732 13.351286l63.836308-57.153138 60.133471 55.678024c57.168191 30.420462 108.390769 22.984683 153.667735-22.277231l-57.905747-37.871292c-20.049508 9.678554-40.851624 8.173335-62.361194-4.440394l-35.643569-40.836572 48.257298-42.311686-58.643304-56.415581-48.257298 47.504689-48.994855-48.242246-52.697692 53.450301 44.524357 47.504689-43.7868 39.331354c-28.222843 14.841452-48.27235 15.579009-61.623637 2.96528-16.316566-14.118948-18.544289-34.168455-5.193003-59.380861l165.543907-172.949581 167.77163 171.459415c14.118948 25.99512 10.401058 46.767132-8.89584 62.361194l57.905747 37.871292c37.103631-37.871292 41.574129-84.60832 14.103895-140.286344l-173.70219-184.840806L739.844892 323.049949 739.844892 323.049949z"
        >
          <animate attributeName="fill" from="none" to="red" dur="5s" repeatCount="indefinite"></animate>
        </path>
        <path id="path2"
              d="M764.334793 455.193062l-57.905747-57.905747-54.925415 58.643304 57.9208 56.415581-52.712744 54.187858 50.469969 59.410966 59.395914-59.410966 57.890695-54.187858-0.722505-1.475114c11.123563-23.752345 30.420462-36.381126 57.153138-37.85624 28.207791 2.96528 42.326738 16.331618 43.034191 37.85624 1.490166 20.772012-12.613729 34.138351-43.034191 40.083963-25.980068-5.208055-45.292018-18.559341-56.430634-38.593797l-57.890695 54.187858c40.82152 43.801852 77.940203 65.326474 110.60344 64.588917 66.801588-2.96528 106.900603-31.92568 119.514332-88.341261 14.841452-48.979803 2.212671-91.291489-38.593797-126.182449-48.994855-34.153403-101.7076-34.153403-156.633015-0.752609L764.334793 455.193062 764.334793 455.193062z"
        >
          <animate attributeName="fill" from="none" to="red" dur="5s" repeatCount="indefinite"></animate>
        </path>
        <path id="path3"
              d="M373.866118 452.965339l-55.678024-58.643304-57.905747 57.890695-37.103631-39.331354c-54.940467-33.400794-107.63816-33.400794-156.633015 0.737557-40.82152 34.89096-54.187858 77.202646-39.331354 126.182449 13.351286 56.445686 53.435249 85.375981 120.251889 88.341261L143.748346 547.974717c-30.435514-5.945612-44.539409-19.296898-43.064295-40.083963 0.752609-21.539674 14.856504-34.89096 43.064295-37.871292 25.980068 1.490166 43.801852 14.856504 51.222578 39.346406l0.737557 2.227723c-7.420726 18.544289-25.242511 31.158019-51.960135 36.366074l3.717889 80.167926c32.663237 0.737557 69.78192-20.787065 111.340997-64.558812l59.395914 59.350757 50.485021-59.350757-52.697692-54.20291L373.866118 452.965339 373.866118 452.965339z"
        >
          <animate attributeName="fill" from="none" to="red" dur="5s" repeatCount="indefinite"></animate>
        </path>
      </svg>
      <div class="date">{{ date }}</div>
      <div class="time">{{ time }}</div>
    </div>
  </div>
</template>

<script>
import { clock as useClock } from '../../utils/clock'

export default {
  name: 'index',
  setup () {
    const {
      date,
      time
    } = useClock()
    return {
      date,
      time
    }
  }
}
</script>

<style lang="stylus" scoped>
.top-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(36, 31, 32);
  padding: 0 64px;
  box-sizing: border-box;

  .logo {
    width: 395px;
    height: 99px;
  }

  .logo-text {
    flex: 1;
    margin-left: 40px;

    .cn-text {
      color: rgb(255, 255, 255);
      font-weight: bold;
      font-size: 60px;
      letter-spacing: 2px;
    }

    .en-text {
      color: rgb(255, 255, 255);
      font-size: 35px;
      letter-spacing: 1px;
    }
  }

  .right-text {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    /*.unicom {
      #path1 {
        fill: none;
        stroke: #333;
        stroke-width: 1;
        animation: logo1 5s linear infinite forwards;
      }

      #path2 {
        fill: none;
        stroke: #333;
        stroke-width: 1;
        animation: logo1 5s linear infinite forwards;
      }
      #path3 {
        fill: none;
        stroke: #333;
        stroke-width: 1;
        animation: logo1 5s linear infinite forwards;
      }
      @keyframes logo1 {
        from {
          fill none
          stroke-dasharray: 5459;
          stroke-dashoffset: 5459;
        }
        to {
          fill red
          stroke-dasharray: 5459;
          stroke-dashoffset: 0;
        }
      }
      @keyframes logo2 {
        from {
          fill none
          stroke-dasharray: 1569;
          stroke-dashoffset: 1569;
        }
        to {
          fill red
          stroke-dasharray: 1569;
          stroke-dashoffset: 0;
        }
      }
      @keyframes logo3 {
        from {
          fill none
          stroke-dasharray: 1566;
          stroke-dashoffset: 1566;
        }
        to {
          fill red
          stroke-dasharray: 1566;
          stroke-dashoffset: 0;
        }
      }
    }
*/
    img {
      width: 363px;
      height: 150px;
    }

    .date {
      width: 330px;
      text-align: right;
      font-size: 52px;
      color: rgb(255, 255, 255);
      font-family: DIN;
      font-weight: 500;
    }

    .time {
      width: 220px;
      font-size: 52px;
      color: rgb(197, 251, 121);
      font-family: DIN;
      font-weight: 500;
      margin-left: 30px;
    }

  }
}
</style>
