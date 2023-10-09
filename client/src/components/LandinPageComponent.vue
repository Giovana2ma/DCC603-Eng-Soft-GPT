<template>
    <main class="grid">
        <div class="main-content">
            <div id = "logo-friends-div">
                <img src="../../public/assets//robot.svg" alt="Alternative Text">
                <img src="../../public/assets//friends_landing_page.svg" alt="Alternative Text">
            </div>

            <div class="container main-logo">
                <h2  id="main-logo-h2">Your ChatGPT interface to watch <span class="i-colorido">movies</span></h2>
                <div id="main-logo-text">
                    Tired of spending hours scrolling through endless movie options? Look no further! Our cutting-edge movie
                recommendation system, powered by GPT-3, is here to make your movie nights unforgettable.
                </div>
            </div>

            <div class="container animation-grow" id="button-container">
                <router-link class="button1" to="/singleRecomendation">GET STARTED</router-link>
            </div>
        </div>
    </main>
</template>