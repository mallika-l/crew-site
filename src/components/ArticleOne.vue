<template>
    <div class="container-fluid">
        <div class="article-page">
            <h1 class="heading article">{{ matchingArticle.title }}</h1>
            <img v-bind:src= "matchingArticle.image">
            <h5>By: {{ matchingArticle.author }}</h5><h5>12/24/22</h5>
            <p>{{ matchingArticle.text }}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    </div>
</template>

<script>
import articles from '@/data/articles'

export default {
  data () {
    return {
      id: this.$route.params.id,
      articles,
      matchingArticle: []
    }
  },
  created () {
    window.scrollTo(0, 0)
    switch (this.id) {
      case '1':
        this.matchingArticle = articles[0]
        break
      case '2':
        this.matchingArticle = articles[1]
        break
      case '3':
        this.matchingArticle = articles[2]
        break
      default:
        this.$router.push('/:catchAll(.*)*')
    }
  }
}
</script>

<style>
.article-page img {
    display: block;
    margin-bottom:1rem;
    width: 100%;
    max-height: 800px;
    object-fit: cover;
}
.article-page p {
    display: inline-block;
    font-family: Lato;
    font-size: 25px;
}
.article {
    text-align: left;
}
.article-page h5 {
    margin-top: .5rem;
}

</style>
