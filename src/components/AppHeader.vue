<template>
  <nav class="navbar fixed-top navbar-expand-lg py-3">
  <a class="navbar-left" href="/">
    <svg xmlns="http://www.w3.org/2000/svg"  height = "80" width= "200" viewbox="-5 -5 200 80">
      <g>
        <rect x= "5" y = "5" width=180 height=72 rx="30" ry = "30" style="fill: #595F72; stroke: #0D2B5B; stroke-width: 6; padding-top: 20px;"/>
        <text x=16% y=70% style="font-size:40px; font-family: 'Lemon'; fill: #e6f14a">CREW</text>
      </g>
    </svg>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-water fa-lg"></i>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="navbar-nav mr-auto nav-fill w-25">
       <router-link to="/" class="nav-item nav-link">Home</router-link>
      <router-link to="/about" class="nav-item nav-link">About</router-link>
      <router-link to="/articles" class="nav-item nav-link">Articles</router-link>
      <router-link to="/clubs" class="nav-item nav-link">Clubs</router-link>
      <router-link to="/regattas" class="nav-item nav-link">Regattas</router-link>

    </div>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search">
      <button id=search class="btn success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>

<style lang="scss">
.navbar {
  background-color: #575D90;
}
.nav-item {
  font-family: 'Lato';
  color: #c3d350;
  font-size: 20px;
}
.nav-item:hover {
  color: #e6f14a;
}

.fa-water {
  color: black;
}

.success:hover {
  background-color: #c3d350;
  color: #575D90;

}
.success{
  background-color: #575D90;
  color: #c3d350;
  border-color: #c3d350;

}
</style>
