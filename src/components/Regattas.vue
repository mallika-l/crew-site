<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container-fluid">
      <h1 class="heading page">regattas</h1>

      <ul>
        <li v-for="regatta in regattas" :key="regatta.id" class="regattas">
            <div class="row">
              <div class="col mr-auto">
                  <div class="card mb-3 bg-dark text-white border-0" style="width: 15rem;">
                    <img class="card-img-top" v-bind:src="regatta.image" alt="Card image cap">
                      <div class="card-body">
                          <h5 class="card-title">{{ regatta.name }}</h5>
                      </div>
                  </div>
              </div>
              <div class="col-6">
                <h2>{{ regatta.location }}</h2>
                <h5>{{ regatta.date }}</h5>
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
import regattas from '@/data/regattas'
export default {
  data () {
    return {
      regattas
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
