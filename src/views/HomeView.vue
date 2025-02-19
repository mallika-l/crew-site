<template>
  <div class="home">
    <home-body/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeBody from '@/components/HomeBody.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeBody
  },
  created () {
    window.scrollTo(0, 0)
  }
})
</script>
