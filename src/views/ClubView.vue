<template>
  <div class="clubs">
    <clubs/>
  </div>
  </template>

<script>
import { defineComponent } from 'vue'
import Clubs from '@/components/Clubs.vue'

export default defineComponent({
  name: 'ClubsView',
  components: {
    Clubs
  },
  created () {
    window.scrollTo(0, 0)
  }
})
</script>
