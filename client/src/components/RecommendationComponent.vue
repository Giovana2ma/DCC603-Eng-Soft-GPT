<template>
    <!-- <h1>Rec  a</h1> -->
    <div class="main-content overlay">
        <div class="movies">

            <div class='movie-container animation-grow'>
                <a :href="movie.link">
                    <div class='movie-poster'>
                        <div class="movie-year">
                            {{ movie.year }}                    

                        </div>
                    </div>
                    <h2 class='movie-title'>{{ movie.title }}</h2>
                    <div class='movie-rate'>
                        <span class='calification'>{{ movie.rating }}/10</span>
                        <font-awesome-icon :icon="['far', 'star']" id="star1" />
                        <font-awesome-icon :icon="['far', 'star']" id="star2" />
                        <font-awesome-icon :icon="['far', 'star']" id="star3" />
                        <font-awesome-icon :icon="['far', 'star']" id="star4" />
                        <font-awesome-icon :icon="['far', 'star']" id="star5" />
                    </div>
                </a>
            </div>

            <!-- <p>{{ movie.summary }}</p>  -->
        </div>

        <div class="container" id="button-container">
            <button v-on:click="refresh()" class="button1 animation-grow">Refresh</button>
            <router-link to="/singleRecomendation" class="rec_for_two animation-rotate">[Give another shot]</router-link>
            <!-- <button v-on:click="refresh()" class="button1 flex-child-element animation-grow">New prompt</button> -->

        </div>
    </div>
</template>

<script>
let movieList = [];

export default {
    name: "RecommendationComponent",
    props: ["movie"],
    methods: {
        async refresh() {
            console.log(movieList);
        },
    }
}
</script> 

<!-- <style>
#button-container {
    display: flex;
    width: 50%;
}

.flex-child-element {
  flex: 1;
  margin: 10px;
  background: linear-gradient(97deg, #92226E 0.47%, #E9642F 105.4%);


}

.flex-child-element:first-child {
  margin-right: 20px;
}
</style> -->
