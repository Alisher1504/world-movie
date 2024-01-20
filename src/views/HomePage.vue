
<script>

import axios from 'axios';
import { RouterLink } from 'vue-router';
import Movies from '../components/Movies.vue'
import MovieModal from '../components/MovieModal.vue'

export default {
    data() {
        return {
            populationmove: [],
            populationMovie: [],
            streaming: [],
            onTv: [],
            forRent: [],
            inTheater: [],
            trending: [],
            trendingTv: [],
            videoMoviePopular1: [],
            // videoMoviePopulars2: [],
            // videoMoviePopulars3: [],
            // videoMoviePopulars4: [],
            // videoMoviePopulars5: [],
        }
    },
    mounted() {
        this.homeMovie();
        this.population();
        this.streamingMovie();
        this.onTvMovie();
        this.forRentMovie();
        this.inTheaterMovie();
        this.trendingMovie();
        this.trendingTvMovie();
        this.videoMoviePopular();
        // this.videoMoviePopular2();
        // this.videoMoviePopular3();
        // this.videoMoviePopular4();
        // this.videoMoviePopular5();
    },
    methods: {
        homeMovie() {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            };

            // Use arrow function to retain the correct 'this' context
            axios
                .request(options)
                .then((response) => {
                    this.populationmove = response.data?.results;
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        population() {

            const option = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            };

            axios.request(option).then((response) => {
                this.populationMovie = response.data?.results;
            }).catch((error) => {
                console.log(error)
            })

        },

        streamingMovie() {

            const option = {

                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            };

            axios.request(option).then((response) => {
                this.streaming = response.data?.results
            }).catch((error) => {
                console.log(error);
            })

        },

        onTvMovie() {

            const option = {

                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=4',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            };

            axios.request(option).then((response) => {
                this.onTv = response.data?.results
            }).catch((error) => {
                console.log(error);
            })

        },

        forRentMovie() {

            const option = {

                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=5',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            };

            axios.request(option).then((response) => {
                this.forRent = response.data?.results
            }).catch((error) => {
                console.log(error);
            })

        },

        inTheaterMovie() {

            const option = {

                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=6',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            };

            axios.request(option).then((response) => {
                this.inTheater = response.data?.results
            }).catch((error) => {
                console.log(error);
            })

        },

        trendingMovie() {

            const option = {

                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=7',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            };

            axios.request(option).then((response) => {
                this.trending = response.data?.results
            }).catch((error) => {
                console.log(error);
            })

        },

        trendingTvMovie() {

            const option = {

                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=8',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            };

            axios.request(option).then((response) => {
                this.trendingTv = response.data?.results
            }).catch((error) => {
                console.log(error);
            })

        },

        videoMoviePopular() {

            const option = {

                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=15',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }

            };

            axios.request(option).then((response) => {
                this.videoMoviePopular1 = response.data?.results
            }).catch((error) => {
                console.log(error);
            })

        },

        // videoMoviePopular2() {

        //     const option = {

        //         method: 'GET',
        //         url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=16',
        //         headers: {
        //             accept: 'application/json',
        //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
        //         }

        //     };

        //     axios.request(option).then((response) => {
        //         this.videoMoviePopulars2 = response.data?.results
        //     }).catch((error) => {
        //         console.log(error);
        //     })

        // },

        // videoMoviePopular3() {

        //     const option = {

        //         method: 'GET',
        //         url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=17',
        //         headers: {
        //             accept: 'application/json',
        //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
        //         }

        //     };

        //     axios.request(option).then((response) => {
        //         this.videoMoviePopulars3 = response.data?.results
        //     }).catch((error) => {
        //         console.log(error);
        //     })

        // },

        // videoMoviePopular4() {

        //     const option = {

        //         method: 'GET',
        //         url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=18',
        //         headers: {
        //             accept: 'application/json',
        //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
        //         }

        //     };

        //     axios.request(option).then((response) => {
        //         this.videoMoviePopulars4 = response.data?.results
        //     }).catch((error) => {
        //         console.log(error);
        //     })

        // },

        // videoMoviePopular5() {

        //     const option = {

        //         method: 'GET',
        //         url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=19',
        //         headers: {
        //             accept: 'application/json',
        //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
        //         }

        //     };

        //     axios.request(option).then((response) => {
        //         this.videoMoviePopulars5 = response.data?.results
        //     }).catch((error) => {
        //         console.log(error);
        //     })

        // },

    },

    components: {

        Movies,
        MovieModal

    }
}




</script>

<template>
    <section>
        <!-- {{ populationmove?.results }} -->
        <div class="container">

            <div class="col-12 image">

                <div class="col-12 search_description">

                    <div class="title">
                        <h2>Welcome.</h2>
                        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                    </div>

                    <div class="search col-12">
                        <form action="#">

                            <div class="search_form">
                                <input type="text" class="search-input"
                                    placeholder="Search for a movie, tv show, person......">
                                <button>Search</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>

        </div>

    </section>

    <section class="column-wrapper card-image-1">

        <div class="container">

            <div class="column-header">
                <h2 class="all-movies-title">Trending</h2>
                <nav>
                    <div class="tab-nav" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                            type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                            type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                    </div>
                </nav>
            </div>

            <div class="column-content puls-image">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                        tabindex="0">

                        <div class="card-content ">

                            <Movies v-for="movie in populationmove" :key="movie.id" :movie="movie" />

                        </div>

                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                        tabindex="0">

                        <div class="card-content ">

                            <Movies v-for="movie in populationMovie" :key="movie.id" :movie="movie" />

                        </div>

                    </div>

                </div>
            </div>

        </div>

    </section>

    <section class="column-wrapper-2">

        <div class="container">
            <div class="column-wrapper-2-card">

                <div class="column-header">
                    <h2 class="all-movies-title">Latest Trailers</h2>
                    <nav>
                        <div class="tab-nav" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video-1" type="button" role="tab" aria-controls="nav-home-video-1"
                                aria-selected="true">Popular</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video" type="button" role="tab" aria-controls="nav-home-video"
                                aria-selected="false">Streaming</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video-2" type="button" role="tab" aria-controls="nav-home-video-2"
                                aria-selected="false">On TV</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video-3" type="button" role="tab" aria-controls="nav-home-video-3"
                                aria-selected="false">For Rent</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video-4" type="button" role="tab" aria-controls="nav-home-video-4"
                                aria-selected="false">In Theaters</button>
                        </div>

                    </nav>
                </div>

                <div class="column-content puls-image">
                    <div class="tab-content" id="nav-tabContent">

                        <div class="tab-pane fade show active" id="nav-home-video-1" role="tabpanel"
                            aria-labelledby="nav-home-tab" tabindex="0">

                            <div class="card-content">

                                <MovieModal v-for="(movie, index) in forRent" :key="index" :movie="movie" />

                            </div>

                        </div>

                        <div class="tab-pane fade" id="nav-home-video" role="tabpanel" aria-labelledby="nav-profile-tab"
                            tabindex="0">

                            <div class="card-content">

                                <MovieModal v-for="(movie, index) in populationmove" :key="index" :movie="movie" />


                            </div>

                        </div>

                        <div class="tab-pane fade" id="nav-home-video-2" role="tabpanel" aria-labelledby="nav-profile-tab"
                            tabindex="0">

                            <div class="card-content">

                                <MovieModal v-for="(movie, index) in populationMovie" :key="index" :movie="movie" />


                            </div>

                        </div>

                        <div class="tab-pane fade" id="nav-home-video-3" role="tabpanel" aria-labelledby="nav-profile-tab"
                            tabindex="0">

                            <div class="card-content">

                                <MovieModal v-for="(movie, index) in streaming" :key="index" :movie="movie" />

                            </div>

                        </div>

                        <div class="tab-pane fade" id="nav-home-video-4" role="tabpanel" aria-labelledby="nav-profile-tab"
                            tabindex="0">

                            <div class="card-content">

                                <MovieModal v-for="(movie, index) in videoMoviePopular1" :key="index" :movie="movie" />

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="column-wrapper">

        <div class="container">

            <div class="column-header">
                <h2 class="all-movies-title">What's Popular</h2>
                <nav>
                    <div class="tab-nav" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="popular-tab-1" data-bs-toggle="tab"
                            data-bs-target="#popular-tab-aria-1" type="button" role="tab" aria-controls="popular-tab-aria-1"
                            aria-selected="true">Streaming</button>
                        <button class="nav-link" id="popular-tab-2" data-bs-toggle="tab"
                            data-bs-target="#popular-tab-aria-2" type="button" role="tab" aria-controls="popular-tab-aria-2"
                            aria-selected="false">On TV</button>
                        <button class="nav-link" id="popular-tab-3" data-bs-toggle="tab"
                            data-bs-target="#popular-tab-aria-3" type="button" role="tab" aria-controls="popular-tab-aria-3"
                            aria-selected="false">For Rent</button>
                        <button class="nav-link" id="popular-tab-4" data-bs-toggle="tab"
                            data-bs-target="#popular-tab-aria-4" type="button" role="tab" aria-controls="popular-tab-aria-4"
                            aria-selected="false">In Theaters</button>
                    </div>
                </nav>
            </div>
            <div class="column-content puls-image pb-0">
                <div class="tab-content" id="nav-tabContent">

                    <div class="tab-pane fade show active" id="popular-tab-aria-1" role="tabpanel"
                        aria-labelledby="popular-tab-1" tabindex="0">

                        <div class="card-content ">

                            <Movies v-for="movie in streaming" :key="movie.id" :movie="movie" />

                        </div>

                    </div>
                    <div class="tab-pane fade" id="popular-tab-aria-2" role="tabpanel" aria-labelledby="popular-tab-2"
                        tabindex="0">

                        <div class="card-content">
                            <div class="card-content ">

                                <Movies v-for="movie in onTv" :key="movie.id" :movie="movie" />


                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="popular-tab-aria-3" role="tabpanel" aria-labelledby="popular-tab-3"
                        tabindex="0">

                        <div class="card-content">
                            <div class="card-content ">

                                <Movies v-for="movie in forRent" :key="movie.id" :movie="movie" />

                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="popular-tab-aria-4" role="tabpanel" aria-labelledby="popular-tab-4"
                        tabindex="0">

                        <div class="card-content">
                            <div class="card-content ">

                                <Movies v-for="movie in inTheater" :key="movie.id" :movie="movie" />

                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </div>

    </section>

    <section class="column-wrapper">

        <div class="container">

            <div class="column-header">
                <h2 class="all-movies-title">Trending</h2>
                <nav>
                    <div class="tab-nav" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-movie-tab-1" data-bs-toggle="tab"
                            data-bs-target="#nav-movie-tab-aria-1" type="button" role="tab"
                            aria-controls="nav-movie-tab-aria-1" aria-selected="true">Movies</button>
                        <button class="nav-link" id="nav-movie-tab-2" data-bs-toggle="tab"
                            data-bs-target="#nav-movie-tab-aria-2" type="button" role="tab"
                            aria-controls="nav-movie-tab-aria-2" aria-selected="false">TV</button>
                    </div>
                </nav>
            </div>

            <div class="column-content puls-image">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-movie-tab-aria-1" role="tabpanel"
                        aria-labelledby="nav-movie-tab-1" tabindex="0">

                        <div class="card-content ">

                            <Movies v-for="movie in trending" :key="movie.id" :movie="movie" />

                        </div>



                    </div>
                    <div class="tab-pane fade" id="nav-movie-tab-aria-2" role="tabpanel" aria-labelledby="nav-movie-tab-2"
                        tabindex="0">

                        <div class="card-content ">

                            <Movies v-for="movie in trendingTv" :key="movie.id" :movie="movie" />

                        </div>

                    </div>

                </div>
            </div>



        </div>

    </section>

    <section class="inner_content">

        <div class="container">

            <div class="col-md-12">

                <div class="header-column">
                    <h2 class="all-movies-title">Join Today</h2>
                </div>

                <div class="row justify-content-evenly align-items-center">

                    <div class="col-md-6">

                        <p>
                            Get access to maintain your own custom personal lists, track what you've seen and search and
                            filter for what to watch next—regardless if it's in theatres, on TV or available on popular
                            streaming services like Netflix, Amazon Prime Video, Disney Plus, Apple TV Plus, and Hulu.
                        </p>

                        <button class="btn">Sign Up</button>

                    </div>

                    <div class="col-md-4">

                        <ul>
                            <li>Enjoy TMDB ad free</li>
                            <li>Maintain a personal watchlist</li>
                            <li>Filter by your subscribed streaming services and find something to watch</li>
                            <li>Log the movies and TV shows you've seen</li>
                            <li>Build custom lists</li>
                            <li>Contribute to and improve our database</li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

