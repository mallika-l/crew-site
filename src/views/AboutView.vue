<template>
 <about/>
</template>

<script>
import { defineComponent } from 'vue'
import About from '@/components/About.vue'

export default defineComponent({
  components: {
    About
  },
  created () {
    window.scrollTo(0, 0)
  }

})
</script>
