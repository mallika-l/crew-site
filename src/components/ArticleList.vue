<template>
    <div class="container-fluid">
      <h1 class="heading page">articles</h1>

      <ul>
        <li v-for="article in articles" :key="article.id" class="articles">
            <div class="row justify-content-left">
              <div class="col mr-auto">
                <router-link v-bind:to="'/articles/' + article.id">
                  <div class="card mb-3 bg-dark text-white border-0" style="width: 15rem;">
                    <img class="card-img-top" v-bind:src="article.image" alt="Card image cap">
                      <div class="card-body">
                          <h5 class="card-title">By: {{ article.author }}</h5>
                      </div>
                  </div>
                </router-link>
              </div>
              <div class="col-6">
                <h2>{{ article.title }}</h2>
                <br>
                <p>{{ article.caption }}</p>
              </div>
              <div class="col-6">
              </div>
            </div>
        </li>
      </ul>

    </div>
  </template>

<script>
import articles from '@/data/articles'
export default {
  data () {
    return {
      articles
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  margin-top: 2rem;
}
ul li {
 background-color:#d3d3d3;
 padding:2em;
 margin:1em;
}
ul li:hover {
 background-color:#b0b0b0;
}
</style>
