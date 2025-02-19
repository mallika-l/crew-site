<template>
  <div class="articles">
    <article-list/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticleList from '@/components/ArticleList.vue'

export default defineComponent({
  name: 'ArticleView',
  components: {
    ArticleList
  },
  created () {
    window.scrollTo(0, 0)
  }
})
</script>
