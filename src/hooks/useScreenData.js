import { ref, onUnmounted, onMounted } from 'vue'

const ageMockData = [
  {
    startValue: 0,
    value: 121107,
    axis: '0-20',
    color: 'rgb(116,116,49)'
  },
  {
    startValue: 0,
    value: 330831,
    axis: '20-30',
    color: 'rgb(190,245,99)'
  },
  {
    startValue: 0,
    value: 551238,
    axis: '30-50',
    color: 'rgb(202,252,137)'
  },
  {
    startValue: 0,
    value: 31088,
    axis: '>50',
    color: 'rgb(251,253,142)'
  }
]

const random = function (val) {
  return Math.floor(Math.random() * val)
}

const deviceMockData = {
  totalDevices: 1070909,
  devices: [
    {
      key: 'Android',
      value: 423676
    },
    {
      key: 'ios',
      value: 373581
    },
    {
      key: 'PC',
      value: 273652
    }
  ]
}
export default function () {
  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)
  const ageData = ref(ageMockData)
  const averageAge = ref(28)
  const deviceData = ref(deviceMockData)
  let task

  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 10
      growthLastDay.value = growthLastDay.value + 1
      growthLastMonth.value = growthLastMonth.value + 1
      averageAge.value = averageAge.value + 1
      const _ageData = [...ageData.value]
      _ageData.forEach(item => {
        item.startValue = item.value
        item.value = item.value + random(100)
      })
      ageData.value = _ageData

      const _deviceData = Object.assign({}, deviceData.value)
      _deviceData.totalDevices = _deviceData.totalDevices + 10
      _deviceData.devices.forEach(item => {
        item.value += random(100)
      })
      deviceData.value = _deviceData
    }, 3000)
  })

  onUnmounted(() => {
    task && clearInterval(task)
  })
  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageData,
    averageAge,
    deviceData
  }
}
