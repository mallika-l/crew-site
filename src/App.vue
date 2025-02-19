<template>
  <app-header />
  <router-view/>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang='scss'>
body {
  background-color: #d3d3d3;
  padding-top: 105px;
  font-family: Lato;
  font-size: 20px;
}
</style>
