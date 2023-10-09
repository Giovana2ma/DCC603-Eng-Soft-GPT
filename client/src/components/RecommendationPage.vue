<template>
    <main class="grid">
        <div class="main-content overlay">
            <div class="grid">
                
                <div class="container speech-balloon animation-grow">
                    <span class="speech-input" role="textbox" contenteditable onclick="placeholder_clean(this)"
                    onfocusout="placeholder_build(this)">type a movie/actor/genre name...</span>
                </div>
                <img src="../../public/assets/3d-doodle-of-a-robot-friend-in-orange-and-purple-pallet--2979333082.svg" alt=""
                class="friend1">
            </div>
            <div class="container" id="button-container">
                <button class="button1 animation-grow">RECOMMEND</button>
                <router-link to="/doubleRecomendation" class="rec_for_two animation-rotate">[Try Recommendation for Two]</router-link>
            </div>
        </div>
    </main>
</template>

<script>
</script> 