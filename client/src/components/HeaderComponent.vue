<template>
    <header class="text grid">
        <div class="container logo animation-grow">
            <img src="../../public/assets/robot_alternative.svg" alt="Alternative Text" width="42.197px" height="41.33px" padding="10px">
            <p>FR<span class="i-colorido">i</span>ENDs</p>
        </div>

        <div class="container navbar">
            <nav>
                <router-link class="animation-grow animation-rotate" to="/">Home</router-link>
                <router-link class="animation-grow animation-rotate" to="/howItWorks">How it works</router-link>
                <a class="animation-grow animation-rotate" href="https://github.com/Giovana2ma/DCC603-Eng-Soft-GPT">GitHub Page</a>
            </nav>
        </div>
    </header>
    <router-view/>
</template>

<script>
</script> 