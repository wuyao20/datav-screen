<template>
  <div class="home">
    <container :options="{ width: 3840, height: 2160 }">
      <div>111</div>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/container/Container'
export default {
  name: 'Home',
  components: {
    Container
  }
}
</script>

<style lang="stylus" scoped>
.home
  color red
  font-size 30px
</style>
