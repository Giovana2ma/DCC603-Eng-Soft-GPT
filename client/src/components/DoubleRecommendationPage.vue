<template>
    <main class="grid2">

        <div v-show="!showRecommendation && !loading" class="main-content overlay grid left-side">

            <div class="container speech-balloon animation-grow">
                <span class="speech-input" role="textbox" contenteditable onclick="placeholder_clean(this)"
                    onfocusout="placeholder_build(this)">type a movie/actor/genre name...</span>
            </div>
            <img src="../../public/assets/3d-doodle-of-a-robot-friend-in-orange-and-purple-pallet--2979333082.svg" alt=""
                class="friend1">

        </div>
        <div v-show="!showRecommendation && !loading" class="main-content overlay grid right-side">

            <div class="container speech-balloon animation-grow">
                <span class="speech-input" role="textbox" contenteditable onclick="placeholder_clean(this)"
                    onfocusout="placeholder_build(this)">type a movie/actor/genre name...</span>
            </div>
            <img src="../../public/assets/rightsidefriendrobot.svg" alt="" class="friend1">

        </div>

        <div v-show="!showRecommendation && !loading" class="container" id="button-container">
            <button v-on:click="apiCall()" class="button1 animation-grow">RECOMMEND</button>
            <router-link to="/singleRecomendation" class="rec_for_two animation-rotate">[Try Recommendation for
                One]</router-link>
        </div>

        <div v-show="loading" class="main-content overlay">
            <div class="load-wrapp">
                <div class="load-4">
                    <div class="ring-1"></div>
                    <p>Loading...</p>
                </div>
            </div>
        </div>

        <RecommendationComponent v-show="showRecommendation" v-bind:movie="movie" />
    </main>
</template>


<script>
import RecommendationComponent from "./RecommendationComponent.vue";
const axios = require('axios');

const fullstar = 'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'

export default {
    name: "DoubleRecommendationPageScript",
    components: {
        // LandinPageComponent,
        RecommendationComponent,
    },
    data() {
        return {
            movie: {
                'link': "https://www.imdb.com/title/tt1490017/",
                'image': "https://m.media-amazon.com/images/I/71Uwbh91CeL._AC_UF1000,1000_QL80_.jpg",
                'rating': '8.3',
                'year': "2000",
                'title': "The Lego Movie",
                'summary': "An ordinary LEGO construction worker, thought to be the prophesied as special, is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis."

            },
            showRecommendation: false,
            loading: false,
            error: false,
        }
    },
    methods: {
        showMovie() {
            const poster = document.querySelector(".movie-poster");
            poster.style.backgroundImage = `url(${this.movie.image})`;

            const star1 = document.querySelector("#star1");
            const star2 = document.querySelector("#star2");
            const star3 = document.querySelector("#star3");
            const star4 = document.querySelector("#star4");
            const star5 = document.querySelector("#star5");

            const stars = [star1, star2, star3, star4, star5];

            const proportion = parseFloat(this.movie.rating) / 10
            const starsFull = Math.floor(5 * proportion);

            for (let index = 0; index < starsFull; index++) {
                console.log(stars[index].children[0])
                stars[index].children[0].setAttribute("d", fullstar);
            }
            this.showRecommendation = !this.showRecommendation;
        },

        async apiCall() {
            const input = document.querySelectorAll(".speech-input");
            const left = input[0];
            const right = input[1];

            const prompt = left.innerText;
            const prompt2 = right.innerText;

            console.log(prompt);
            console.log(prompt2);

            if (prompt == "type a movie/actor/genre name..." || prompt == "Please, insert a movie suggestion ;)") {
                input.innerText = "Please, insert a movie suggestion ;)";
                return;
            }

            this.loading = true;

            try {
                let result = await axios.post("http://localhost:8080/getNewDoubleRec", {
                    movie1: prompt,
                    movie2: prompt2
                });
                this.loading = false;
                this.movie = result.data.movieInfo;
                this.showMovie()

            }
            catch (err) {
                alert("Sorry, but I'm unable to generate a movie recommendation based on the input " + prompt.innerText);
                console.error(err);

                this.loading = false;
                this.showRecommendation = false;
                input.innerText = "Please, insert a movie suggestion ;)";
                return;
            }

        }

    }
}
</script>