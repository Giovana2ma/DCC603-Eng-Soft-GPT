<template>
    <main class="grid2">

        <div class="main-content overlay grid left-side">

            <div class="container speech-balloon animation-grow">
                <span class="speech-input" role="textbox" contenteditable onclick="placeholder_clean(this)"
                    onfocusout="placeholder_build(this)">type a movie/actor/genre name...</span>
            </div>
            <img src="../../public/assets/3d-doodle-of-a-robot-friend-in-orange-and-purple-pallet--2979333082.svg" alt=""
                class="friend1">

        </div>
        <div class="main-content overlay grid right-side">

            <div class="container speech-balloon animation-grow">
                <span class="speech-input" role="textbox" contenteditable onclick="placeholder_clean(this)"
                    onfocusout="placeholder_build(this)">type a movie/actor/genre name...</span>
            </div>
            <img src="../../public/assets/rightsidefriendrobot.svg" alt="" class="friend1">

        </div>

        <div class="container" id="button-container">
            <button class="button1 animation-grow">RECOMMEND</button>
                <router-link to="/singleRecomendation" class="rec_for_two animation-rotate">[Try Recommendation for One]</router-link>
        </div>
    </main>
</template>