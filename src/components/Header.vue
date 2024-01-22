
<script>

import { RouterLink } from "vue-router"

</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">

            <router-link class="navbar-brand" to="/">
                <img loading="lazy" style="width: 154px; height: 20px;" src="../../public/images/logo/logohome.svg"
                    class="card-img-top">
            </router-link>

            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Movies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">TV Shows</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/people">People</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">More</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar {

    background-color: #032541;
    height: 64px;

}

.navbar .container .collapse .navbar-nav .nav-item .nav-link {

    color: white;
    font-weight: 600;
    margin-left: 10px;

}

.navbar .container .navbar-brand {

    color: white;

}
</style>
