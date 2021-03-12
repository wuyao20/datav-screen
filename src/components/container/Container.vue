<template>
  <div id="container" :ref="refName" :style="style">
    <button @click="changeStyle" style="font-size: 200px">change style</button>
    <slot></slot>
  </div>
</template>

<script>
import { debounce } from '@/utils'
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue'
export default {
  name: 'Container',
  props: {
    options: Object
  },
  setup (ctx) {
    const refName = 'container'
    const width = ref(0)
    const height = ref(0)
    const originWidth = ref(0)
    const originHeight = ref(0)
    let context, dom
    let observer

    const init = () => {
      return new Promise(resolve => {
        // nextTick下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
        nextTick(() => {
          dom = context.$refs[refName]
          // 获取大屏真实尺寸
          if (ctx.options && ctx.options.width && ctx.options.height) {
            width.value = ctx.options.width
            height.value = ctx.options.height
          } else {
            width.value = dom.clientWidth
            height.value = dom.clientHeight
          }
          // 获取画布尺寸
          if (!originWidth.value || !originHeight.value) {
            originWidth.value = window.screen.width
            originHeight.value = window.screen.height
          }
          resolve()
        })
      })
    }

    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`
        dom.style.height = `${height.value}px`
      } else {
        dom.style.width = `${originWidth.value}px`
        dom.style.height = `${originHeight.value}px`
      }
    }

    const updateScale = () => {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      // 获取大屏最终的宽高
      const realWidth = width.value || originWidth.value
      const realHeight = height.value || originHeight.value
      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight
      dom.style.transform = `scale(${widthScale}, ${heightScale})`
    }

    const onResize = async (e) => {
      console.log('onResize', e)
      await init()
      updateScale()
    }

    const initMutationObserver = () => {
      const MutationObserver = window.MutationObserver
      observer = new MutationObserver(onResize)
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true
      })
    }

    const removeMutationObserver = () => {
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
    }
    onMounted(async () => {
      context = getCurrentInstance().ctx
      await init()
      updateSize()
      updateScale()
      window.addEventListener('resize', debounce(1000, onResize))
      initMutationObserver()
    })

    onUnmounted(() => {
      window.removeEventListener('resize', debounce(1000, onResize))
      removeMutationObserver()
    })

    const style = ref({})
    const changeStyle = () => {
      style.value = {
        ...style.value,
        height: '1000px'
      }
    }
    return {
      refName,
      style,
      changeStyle
    }
  }
}
</script>

<style lang="stylus" scoped>
  #container
    position fixed
    top 0
    left 0
    overflow hidden
    transform-origin left top
    z-index 999
</style>
