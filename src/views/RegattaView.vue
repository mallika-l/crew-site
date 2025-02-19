<template>
  <div class="regattas">
    <regattas/>
  </div>
  </template>

<script>
import { defineComponent } from 'vue'
import Regattas from '@/components/Regattas.vue'

export default defineComponent({
  name: 'regattaView',
  components: {
    Regattas
  },
  created () {
    window.scrollTo(0, 0)
  }
})
</script>
