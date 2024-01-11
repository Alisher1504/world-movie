
<script>

import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {

    data() {
        return {
            peoplemove: [],
        }
    },
    mounted() {
        this.people();
    },
    methods: {

        people() {

            const option = {

                method: 'GET',
                url: 'https://api.themoviedb.org/3/trending/person/day?language=en-US',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'

                }

            }

            axios.request(option).then((response) => {

                this.peoplemove = response.data?.results
            }).catch((error) => {
                console.log(error);
            })

        }

    }

}

</script>

<template>
    <section>

        <div class="container">

            <div class="title-head">
                <h2>People</h2>
            </div>

            <div class="col-md-12">

                <div class="row g-4">

                    <div v-for="person in peoplemove" class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <img loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + person.profile_path" alt="">
                            </div>
                            <div class="card-footer bg-white p-2">
                                <p class="name">
                                    <router-link :to="'/person/view/' + person.id">{{ person.name }}</router-link>
                                </p>
                                <div class="d-flex">
                                    <p class="film-name">
                                        <span v-for="(film, index) in person?.known_for" :key="index">
                                            {{ film.title }},
                                            <span v-if="index < 0 && index !== person.known_for.length - 1">, </span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>
.card {
    max-height: 500px;
    min-height: 500px;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
}

.title-head h2 {

    font-weight: 700;
    font-size: 1.5em;
    margin-top: 20px;

}

.card .card-body {
    width: 100%;
    height: 380px;
    padding: 0px;
}

.card .card-body img {

    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0px 0px;

}

.card .card-footer {
    height: 100px;
}

.card .card-footer .name {
    font-weight: 600;
    font-size: 1.1em;
    margin-bottom: 0px;
}

.card .card-footer .name a {
    text-decoration: none;
    color: black;

}

.card .card-footer .film-name {
    font-size: .9em;
    font-weight: 400;
    color: rgba(0, 0, 0, .6);
    display: block;
    margin: 0px;
}
</style>
