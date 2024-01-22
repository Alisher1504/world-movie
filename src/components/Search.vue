<style scoped>

    .card-title a{
        text-decoration: none;
        color: black;
    }

</style>

<template>
    <section>

        <div class="container">

            <div v-if="movies.length > 0" v-for="item in movies" class="card my-3">
                <div class="row g-0">
                    <div class="col-md-1">
                        <img v-if="item.poster_path" loading="lazy"
                            :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path" class="img-fluid rounded-start"
                            alt="...">
                        <img v-else loading="lazy" style="object-fit: contain;" src="../../public/images/default.webp"
                            class="card-img-top">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title fw-bold"><router-link :to="'/movie/view/' + item.id">{{ item.title }}</router-link></h5>
                            <p class="card-text"><small class="text-body-secondary fw-bold">Last updated {{ item.release_date }}</small></p>
                            <p class="card-text">{{ item.title }}</p>

                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="mt-3">
                <h3 class="fw-bold text-center">Movies not found</h3>
            </div>

        </div>

    </section>
</template>

<script>

import axios from 'axios'
import { RouterLink } from 'vue-router';

export default {

    data() {
        return {
            movies: [],
        };
    },
    mounted() {
        this.searchRes()
    },
    methods: {
        searchRes() {

            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/search/movie?query=${this.$route.params.name}&include_adult=false&language=en-US&page=1`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            };

            axios
                .request(options)
                .then((response) => {
                    this.movies = response.data.results
                })
                .catch((error) => {
                    // console.error(error);
                });


        },
    }

}

</script>