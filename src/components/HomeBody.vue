<template>

    <!-- Landing Page begin -->
    <div class="container-fluid landing" style="background-color: #D3D3D3">
        <h1 class="heading landing-page" >this week in rowing...</h1>
        <div id="d" class="carousel slide" data-ride="carousel" style="p">

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class= "img-fluid" src="https://static.wixstatic.com/media/2c4067_d23349cb68e5457eb49989d0c84ade12~mv2.jpg/v1/fill/w_1499,h_889,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c4067_d23349cb68e5457eb49989d0c84ade12~mv2.jpgo.png" alt="Clemson">
                    <!-- <router-link to="/about" class="nav-item nav-link"></router-link> -->
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Clemson Crew</h5>
                        <p>Crew clubs from other colleges rush to Clemson's support as they face funding cuts</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class= "img-fluid" src="https://erauathletics.com/images/2018/3/14/mrow_gen3.jpg" alt="SIRA">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Gearing up for SIRA and ACRA</h5>
                        <p>The two biggest regattas of the spring season creep closer</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class= "img-fluid" src="https://www.manateecruise.com/zupload/library/38/-54-2048x1070-0.jpg?ztv=20190712113437" alt="Spring" >
                    <div class="carousel-caption d-none d-md-block" style= "font-weight: bold;" >
                        <h5>Top 10 things to remember for Spring Training</h5>
                        <p>Packing lists, vacations that don't feel like vacations, and more</p>
                    </div>
                </div>
            </div>

            <a class="carousel-control-prev" href="#d" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#d" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </div>
   <!-- Landing Page end -->

    <section>
        <div class="container-fluid" style="background-color: #595F72;">
            <h1 class = "heading popular" >popular</h1>
            <div class="row popular-row">
                <div class="col">
                    <div class="card mb-3 bg-dark text-white mx-auto" style="width: 20rem;">
                        <img class="card-img-top" src="@/assets/c2.png" alt="Card image cap">
                        <div class="card-body">
                            <p>See why millions of people chose this painful sport</p>
                            <span><router-link to="/articles" class="btn btn-secondary">Learn More About Rowing</router-link></span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 bg-dark text-white mx-auto" style="width: 20rem;">
                        <img class="card-img-top" src="@/assets/c2.png" alt="Card image cap">
                        <div class="card-body">
                            <p>See why millions of people chose this painful sport</p>
                            <span><router-link to="/about" class="btn btn-secondary">Learn More About Rowing</router-link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row popular-row">
                <div class="col">
                    <div class="card mb-3 bg-dark text-white mx-auto" style="width: 20rem;">
                        <img class="card-img-top" src="@/assets/c2.png" alt="Card image cap">
                        <div class="card-body">
                            <p>See why millions of people chose this painful sport</p>
                            <span><router-link to="/articles" class="btn btn-secondary">Learn More About Rowing</router-link></span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 bg-dark text-white mx-auto" style="width: 20rem;">
                        <img class="card-img-top" src="@/assets/c2.png" alt="Card image cap">
                        <div class="card-body">
                            <p>See why millions of people chose this painful sport</p>
                            <span><router-link to="/articles" class="btn btn-secondary">Learn More About Rowing</router-link></span>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <br>
        </div>
    </section>
    <section class="about">
        <div class="container-fluid" style="background-color: #84a07c">
            <h1 class = "heading about" >what is crew?</h1>
            <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula tellus, semper et vulputate ac, hendrerit et neque. Mauris libero sapien, cursus et consectetur eget, laoreet quis massa. Fusce feugiat sollicitudin sagittis. Vivamus porttitor dolor eu est adipiscing ac porta risus fringilla. Suspendisse potenti. Donec odio urna, rhoncus at porttitor at, euismod sit amet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula tellus, semper et vulputate ac, hendrerit et neque. Mauris libero sapien, cursus et consectetur eget, laoreet quis massa. Fusce feugiat sollicitudin sagittis. Vivamus porttitor dolor eu est adipiscing ac porta risus fringilla. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula tellus, semper et vulputate ac, hendrerit et neque. Mauris libero sapien, cursus et consectetur eget, laoreet quis massa. Fusce feugiat sollicitudin sagittis. Vivamus porttitor dolor eu est adipiscing ac porta risus fringilla. Suspendisse potenti. Donec odio urna, rhoncus at porttitor at, euismod sit amet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula tellus, semper et vulputate ac, hendrerit et neque. Mauris libero sapien, cursus et consectetur eget, laoreet quis massa. Fusce feugiat sollicitudin sagittis. Vivamus porttitor dolor eu est adipiscing ac porta risus fringilla. Suspendisse potenti. Donec odio urna, rhoncus at porttitor at, euismod sit amet nibh. Donec odio urna, rhoncus at porttitor at, euismod sit amet nibh.</p>
        </div>
    </section>
    <section class="about">
        <div class="container-fluid" style="background-color: #c3d350">
            <h1 class = "heading about" style="text-align: right;" >support</h1>
            <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula tellus, semper et vulputate ac, hendrerit et neque. Mauris libero sapien, cursus et consectetur eget, laoreet quis massa. Fusce feugiat sollicitudin sagittis. Vivamus porttitor dolor eu est adipiscing ac porta risus fringilla. Suspendisse potenti. Donec odio urna, rhoncus at porttitor at, euismod sit amet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula tellus, semper et vulputate ac, hendrerit et neque. Mauris libero sapien, cursus et consectetur eget, laoreet quis massa. Fusce feugiat sollicitudin sagittis. Vivamus porttitor dolor eu est adipiscing ac porta risus fringilla. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula tellus, semper et vulputate ac, hendrerit et neque. Mauris libero sapien, cursus et consectetur eget, laoreet quis massa. Fusce feugiat sollicitudin sagittis. Vivamus porttitor dolor eu est adipiscing ac porta risus fringilla. Suspendisse potenti. Donec odio urna, rhoncus at porttitor at, euismod sit amet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula tellus, semper et vulputate ac, hendrerit et neque. Mauris libero sapien, cursus et consectetur eget, laoreet quis massa. Fusce feugiat sollicitudin sagittis. Vivamus porttitor dolor eu est adipiscing ac porta risus fringilla. Suspendisse potenti. Donec odio urna, rhoncus at porttitor at, euismod sit amet nibh. Donec odio urna, rhoncus at porttitor at, euismod sit amet nibh.</p>
        </div>
    </section>
</template>

<style lang="scss">
.box {
    background-image: url('@/assets/river.jpg');
    background-position:center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
.heading {
    font-family: 'Lato';
    font-weight: 700;
    font-size: 3.8rem;
    line-height: 65px;
    text-transform: uppercase;
    padding-top: 20px;
    resize:none;
    letter-spacing: .3rem;
    padding-bottom: 1rem;
}
.heading.landing-page {
    font-size: 4.5rem;
    color: black;
    text-align: center;
}
.heading.page {
    color: black;
    text-align: center;
}
.heading.popular{
    color: #0D2B5B;
    text-align: center;
}

.about {
    text-align: justify;
}
.carousel-inner img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    width:65%;
    max-height: 600px;
    object-fit: cover;
}
.container-fluid:not(.landing){
    padding-top: 3rem;
    padding-left: 20rem;
    padding-right: 20rem;
    padding-bottom: 7rem;
}
.landing {
    padding-top: 3rem;
    padding-bottom: 4rem;

}
p {
    display:inline;
}

.popular-row {
    margin-top:4em;
}
</style>
