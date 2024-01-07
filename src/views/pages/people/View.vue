
<style scoped>
.dropdawns-list {
    display: flex;
    gap: 25px;
    margin-top: 15px;
}

.dropdawns-list li {
    list-style: none;
}

.dropdown button {
    background: none;
    color: black;
    border: none;
    padding: 0px;
}

.line {
    width: 100%;
    height: 1px;
    background-color: rgb(222, 222, 222);
}

.image-content {
    width: 100%;
    height: 450px;
}

.image-content img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.social-set ul {
    display: flex;
    gap: 10px;
    padding: 0px;
}

.social-set ul li {
    list-style: none;
}

.social-set ul li .bi {
    color: black;
    font-size: 1.5em;
}

.person-first-cart-title {
    font-weight: 600;
    font-size: 1.3em;
}

.facts p strong {
    display: block;
    font-weight: 600;
    font-size: 1em;

}

.person-title h2 {
    font-size: 2.2rem;
    font-weight: 700;

}

.biography-title {
    font-weight: 600;
    font-size: 1.3em;
    margin: 25px 0px 8px 0px;
}

.known-for-card .d-flex {
    gap: 10px;
    width: 100%;
    overflow-x: scroll;
    padding: 0px 0px 30px 0px;
}

.known-for-card .d-flex .card {
    border: none;
    max-width: 130px;
    min-width: 130px;
}

.known-for-card .d-flex .card .card-body {
    padding: 0px;
    flex: none;
}

.known-for-card .d-flex .card .card-body img {
    width: 100%;
    min-height: 195px;
    border-radius: 7px;
}

.known-for-card .d-flex .card .card-footer {
    padding: 0px;
    text-align: center;
    background-color: transparent;
    border: none;
}

.known-for-card .d-flex .card .card-footer a {
    text-decoration: none;
    color: #000;
    font-size: .9em;
}

.known-for-card .d-flex::-webkit-scrollbar {
    width: 20px;
    height: 8px;
}

.known-for-card .d-flex::-webkit-scrollbar-thumb {
    background: silver;
    border-radius: 10px;
    height: 10px;
}

.images .card {
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
}

.images .card .card-body {
    height: 353px;
    padding: 0px;
}

.images .card .card-body img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
}

.images .card .card-footer {
    border: none;
    background-color: transparent;
    padding: 0px;
}

.images .card .card-footer h3 {
    font-size: 1em;
    font-weight: 400;
    margin: 14px 0px 0px 14px;
}

.images .card .card-footer .added {
    margin: 14px;
}

.images .card .card-footer .added span {
    font-weight: 300;
    font-size: .8em;

}

.images .card .card-footer .added p {
    font-size: 1em;
    font-weight: 400;
}
</style>
<template>
    <section>

        <div class="container-fluid p-0">

            <div class="d-flex justify-content-center">

                <ul class="dropdawns-list">

                    <li>
                        <div class="dropdown">
                            <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Overview
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown">
                            <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Media
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown">
                            <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Fandom
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div class="dropdown">
                            <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Share
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </li>

                </ul>


            </div>
            <div class="line"></div>

        </div>

        <div class="container mt-4">

            <div class="row gx-4">

                <div class="col-md-3">

                    <div class="image-content">
                        <img loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + person.profile_path" alt="">
                    </div>

                    <div class="social-set my-4">
                        <ul>
                            <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                            <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                            <li><a href="#"><i class="bi bi-tiktok"></i></a></li>
                        </ul>
                    </div>

                    <h3 class="person-first-cart-title">Personal Info</h3>

                    <div class="facts">

                        <p>
                            <strong>Known For</strong>
                            {{ person.known_for_department }}
                        </p>

                        <p>
                            <strong>Known Credits</strong>
                            {{ person.birthday }}
                        </p>

                        <p>
                            <strong>Gender</strong>
                            <span v-if="person.gender == 1">Female</span>
                            <span v-else>Male</span>
                        </p>

                        <p>
                            <strong>Place of Birth</strong>
                            {{ person.place_of_birth }}
                        </p>

                        <p>
                            <strong>Also Known As</strong>
                            <span v-for="also in person?.also_known_as" class="d-block">
                                {{ also }}
                            </span>
                        </p>

                    </div>

                </div>
                <div class="col-md-9">

                    <div class="person-title">
                        <h2>
                            {{ person.name }}
                        </h2>
                    </div>

                    <h3 class="biography-title">Biography</h3>

                    <div class="biographt-description">

                        <p>
                            {{ person.biography }}
                        </p>

                    </div>

                    <h3 class="biography-title">Known For</h3>

                    <div class="known-for-card">

                        <div class="d-flex">

                            <div v-for="(movies, index) in slicedMovies" :key="index" class="card">

                                <div class="card-body">
                                    <img loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + movies.poster_path"
                                        alt="">
                                </div>
                                <div class="card-footer">
                                    <a href="#">{{ movies.title }}</a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="images mt-4">

                        <div class="row g-3">

                            <div v-for="image in personImages" class="col-md-3">

                                <div class="card">
                                    <div class="card-body">
                                        <img loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + image.file_path" alt="">
                                    </div>
                                    <div class="card-footer">

                                        <h3>
                                            Info
                                        </h3>

                                        <hr>

                                        <div class="added">
                                            <span>Size</span>
                                            <p>{{ image.width }}x{{ image.height }} <i class="bi bi-check-lg"></i></p>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>


<script>

import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {

    data() {

        return {
            person: {},
            knowForMovies: [],
            slicedMovies: [],
            personImages: []
        }

    },
    mounted() {
        this.find();
        this.knowFor();
        this.images();
    },

    methods: {

        find() {

            const options = {

                method: 'GET',
                url: `https://api.themoviedb.org/3/person/${this.$route.params.id}?language=en-US`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            };

            axios.request(options).then((response) => {
                this.person = response.data
            }).catch((error) => {
                console.log(error);
            });

        },

        knowFor() {

            const options = {

                method: 'Get',
                url: `https://api.themoviedb.org/3/person/${this.$route.params.id}/combined_credits?language=en-US`,
                headers: {
                    accept: 'apllication/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            }

            axios.request(options).then((response) => {
                this.knowForMovies = response.data?.cast
                this.slicedMovies = this.knowForMovies.slice(0, 10);
            }).catch((error) => {
                console.log(error);
            });

        },

        images() {

            const options = {

                method: 'GET',
                url: `https://api.themoviedb.org/3/person/${this.$route.params.id}/images`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            }

            axios.request(options).then((response) => {
                this.personImages = response.data?.profiles
            }).catch((error) => {
                console.log(error);
            })

        }

    }


}



</script>