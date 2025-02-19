<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container-fluid">
      <h1 class="heading page">clubs</h1>

      <ul>
        <li v-for="club in clubs" :key="club.id" class="clubs">
            <div class="row">
              <div class="col mr-auto">
                  <div class="card mb-3 bg-dark text-white border-0" style="width: 15rem;">
                    <img class="card-img-top" v-bind:src="club.image" alt="Card image cap">
                      <div class="card-body">
                          <h5 class="card-title">{{ club.name }}</h5>
                      </div>
                  </div>
              </div>
              <div class="col-6">
                <h2>{{ club.school }}</h2>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae aliquet nec ullamcorper. Morbi quis commodo odio aenean sed adipiscing.</p>
              </div>
              <div class="col-6">
              </div>
            </div>
        </li>
      </ul>

    </div>
  </template>

<script lang="ts">
import clubs from '@/data/clubs'
export default {
  data () {
    return {
      clubs
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
