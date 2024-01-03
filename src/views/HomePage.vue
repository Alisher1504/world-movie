
<script>

import axios from 'axios';

export default {
    data() {
        return {
            populationmove: [],
        }
    },
    mounted() {
        this.population();
    },
    methods: {
        population() {
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
        }
    }
}




</script>

<template>
    <section>
        <!-- {{ populationmove?.results }} -->
        <div className="container">

            <div className="col-12 image">

                <div className="col-12 search_description">

                    <div className="title">
                        <h2>Welcome.</h2>
                        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                    </div>

                    <div className="search col-12">
                        <form action="#">

                            <div className="search_form">
                                <input type="text" className="search-input"
                                    placeholder="Search for a movie, tv show, person......">
                                <button>Search</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>

        </div>

    </section>

    <section className="column-wrapper card-image-1">

        <div className="container">

            <div className="column-header">
                Trending
                <nav>
                    <div className="tab-nav" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true">Home</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                            type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                    </div>
                </nav>
            </div>

            <div className="column-content puls-image">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                        tabindex="0">

                        <div className="card-content ">

                            <div v-for="movie in populationmove" class="card" :key="movie.id">
                                <img loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
                                    class="card-img-top" :alt="movie.title">

                                <div class="card-body">
                                    <h2>
                                        <a href="#">
                                            {{ movie.original_title }}
                                        </a>
                                    </h2>
                                    <span>{{ movie.release_date }}</span>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                        tabindex="0">

                        <div className="card-content">
                            <div className="card-content ">
                                <div className="card">
                                    <img loading="lazy" src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg"
                                        className="card-img-top" alt="...">
                                    <!-- <div className="chart" id="graph" data-percent="88"></div> -->

                                    <div className="card-body">
                                        <h2>
                                            <a href="#">
                                                The Hunger Games: The Ballad of Songbirds & Snakes
                                            </a>
                                        </h2>
                                        <span>Dec 15, 2023</span>

                                        <!-- <a href="#" className="btn btn-primary">Go somewhere</a> -->
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    </section>

    <section className="column-wrapper-2">

        <div className="container">
            <div className="column-wrapper-2-card">

                <div className="column-header">
                    <h2>Latest Trailers</h2>
                    <nav>
                        <div className="tab-nav" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video-1" type="button" role="tab" aria-controls="nav-home-video-1"
                                aria-selected="true">Popular</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video" type="button" role="tab" aria-controls="nav-home-video"
                                aria-selected="false">Streaming</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video-2" type="button" role="tab" aria-controls="nav-home-video-2"
                                aria-selected="false">On TV</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video-3" type="button" role="tab" aria-controls="nav-home-video-3"
                                aria-selected="false">For Rent</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home-video-4" type="button" role="tab" aria-controls="nav-home-video-4"
                                aria-selected="false">In Theaters</button>
                        </div>

                    </nav>
                </div>

                <div className="column-content puls-image">
                    <div className="tab-content" id="nav-tabContent">

                        <div className="tab-pane fade show active" id="nav-home-video-1" role="tabpanel"
                            aria-labelledby="nav-home-tab" tabindex="0">

                            <div className="card-content">

                                <div className="card">
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg" className="card-img-top"
                                        alt="...">

                                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="video-play">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                                            className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path
                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                                                fill="#fff" />
                                        </svg>
                                    </div>

                                    <div className="card-body">
                                        <h2 className="card-text text-center"><a href="#">The Color Purple</a></h2>
                                        <h3 className="text-center">"One of the Best Films of the Year"</h3>
                                    </div>

                                    <!-- Modal -->
                                    <div className="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                <div className="modal-body video-trailer-modal">
                                                    <iframe width="100%" height="100%"
                                                        src="https://www.youtube.com/embed/a97cL2zxnes?si=lYSXComJ9vUkpy5q"
                                                        title="YouTube video player" frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowfullscreen></iframe>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="tab-pane fade" id="nav-home-video" role="tabpanel" aria-labelledby="nav-profile-tab"
                            tabindex="0">

                            <div className="card-content">

                                <div className="card">
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg" className="card-img-top"
                                        alt="...">

                                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="video-play">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                                            className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path
                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                                                fill="#fff" />
                                        </svg>
                                    </div>

                                    <div className="card-body">
                                        <h2 className="card-text text-center"><a href="#">The Color Purple</a></h2>
                                        <h3 className="text-center">"One of the Best Films of the Year"</h3>
                                    </div>

                                    <!-- Modal -->
                                    <div className="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                <div className="modal-body video-trailer-modal">
                                                    <iframe width="100%" height="100%"
                                                        src="https://www.youtube.com/embed/a97cL2zxnes?si=lYSXComJ9vUkpy5q"
                                                        title="YouTube video player" frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowfullscreen></iframe>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="tab-pane fade" id="nav-home-video-2" role="tabpanel"
                            aria-labelledby="nav-profile-tab" tabindex="0">

                            <div className="card-content">

                                <div className="card">
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg" className="card-img-top"
                                        alt="...">

                                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="video-play">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                                            className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path
                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                                                fill="#fff" />
                                        </svg>
                                    </div>

                                    <div className="card-body">
                                        <h2 className="card-text text-center"><a href="#">The Color Purple</a></h2>
                                        <h3 className="text-center">"One of the Best Films of the Year"</h3>
                                    </div>

                                    <!-- Modal -->
                                    <div className="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                <div className="modal-body video-trailer-modal">
                                                    <iframe width="100%" height="100%"
                                                        src="https://www.youtube.com/embed/a97cL2zxnes?si=lYSXComJ9vUkpy5q"
                                                        title="YouTube video player" frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowfullscreen></iframe>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="tab-pane fade" id="nav-home-video-3" role="tabpanel"
                            aria-labelledby="nav-profile-tab" tabindex="0">

                            <div className="card-content">

                                <div className="card">
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg" className="card-img-top"
                                        alt="...">

                                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="video-play">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                                            className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path
                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                                                fill="#fff" />
                                        </svg>
                                    </div>

                                    <div className="card-body">
                                        <h2 className="card-text text-center"><a href="#">The Color Purple</a></h2>
                                        <h3 className="text-center">"One of the Best Films of the Year"</h3>
                                    </div>

                                    <!-- Modal -->
                                    <div className="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                <div className="modal-body video-trailer-modal">
                                                    <iframe width="100%" height="100%"
                                                        src="https://www.youtube.com/embed/a97cL2zxnes?si=lYSXComJ9vUkpy5q"
                                                        title="YouTube video player" frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowfullscreen></iframe>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="tab-pane fade" id="nav-home-video-4" role="tabpanel"
                            aria-labelledby="nav-profile-tab" tabindex="0">

                            <div className="card-content">

                                <div className="card">
                                    <img data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg" className="card-img-top"
                                        alt="...">

                                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="video-play">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                                            className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path
                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                                                fill="#fff" />
                                        </svg>
                                    </div>

                                    <div className="card-body">
                                        <h2 className="card-text text-center"><a href="#">The Color Purple</a></h2>
                                        <h3 className="text-center">"One of the Best Films of the Year"</h3>
                                    </div>

                                    <!-- Modal -->
                                    <div className="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                <div className="modal-body video-trailer-modal">
                                                    <iframe width="100%" height="100%"
                                                        src="https://www.youtube.com/embed/a97cL2zxnes?si=lYSXComJ9vUkpy5q"
                                                        title="YouTube video player" frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowfullscreen></iframe>
                                                </div>

                                            </div>
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

    <section className="column-wrapper">

        <div className="container">

            <div className="column-header">
                What's Popular
                <nav>
                    <div className="tab-nav" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="popular-tab-1" data-bs-toggle="tab"
                            data-bs-target="#popular-tab-aria-1" type="button" role="tab" aria-controls="popular-tab-aria-1"
                            aria-selected="true">Streaming</button>
                        <button className="nav-link" id="popular-tab-2" data-bs-toggle="tab"
                            data-bs-target="#popular-tab-aria-2" type="button" role="tab" aria-controls="popular-tab-aria-2"
                            aria-selected="false">On TV</button>
                        <button className="nav-link" id="popular-tab-3" data-bs-toggle="tab"
                            data-bs-target="#popular-tab-aria-3" type="button" role="tab" aria-controls="popular-tab-aria-3"
                            aria-selected="false">For Rent</button>
                        <button className="nav-link" id="popular-tab-4" data-bs-toggle="tab"
                            data-bs-target="#popular-tab-aria-4" type="button" role="tab" aria-controls="popular-tab-aria-4"
                            aria-selected="false">In Theaters</button>
                    </div>
                </nav>
            </div>
            <div className="column-content puls-image">
                <div className="tab-content" id="nav-tabContent">

                    <div className="tab-pane fade show active" id="popular-tab-aria-1" role="tabpanel"
                        aria-labelledby="popular-tab-1" tabindex="0">

                        <div className="card-content ">
                            <div className="card">
                                <img loading="lazy" src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg"
                                    className="card-img-top" alt="...">
                                <!-- <div className="chart" id="graph" data-percent="88"></div> -->

                                <div className="card-body">
                                    <h2>
                                        <a href="#">
                                            The Hunger Games: The Ballad of Songbirds & Snakes
                                        </a>
                                    </h2>
                                    <span>Dec 15, 2023</span>

                                    <!-- <a href="#" className="btn btn-primary">Go somewhere</a> -->
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="tab-pane fade" id="popular-tab-aria-2" role="tabpanel" aria-labelledby="popular-tab-2"
                        tabindex="0">

                        <div className="card-content">
                            <div className="card-content ">
                                <div className="card">
                                    <img loading="lazy" src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg"
                                        className="card-img-top" alt="...">
                                    <!-- <div className="chart" id="graph" data-percent="88"></div> -->

                                    <div className="card-body">
                                        <h2>
                                            <a href="#">
                                                The Hunger Games: The Ballad of Songbirds & Snakes
                                            </a>
                                        </h2>
                                        <span>Dec 15, 2023</span>

                                        <!-- <a href="#" className="btn btn-primary">Go somewhere</a> -->
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="tab-pane fade" id="popular-tab-aria-3" role="tabpanel" aria-labelledby="popular-tab-3"
                        tabindex="0">

                        <div className="card-content">
                            <div className="card-content ">
                                <div className="card">
                                    <img loading="lazy" src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg"
                                        className="card-img-top" alt="...">
                                    <!-- <div className="chart" id="graph" data-percent="88"></div> -->

                                    <div className="card-body">
                                        <h2>
                                            <a href="#">
                                                The Hunger Games: The Ballad of Songbirds & Snakes
                                            </a>
                                        </h2>
                                        <span>Dec 15, 2023</span>

                                        <!-- <a href="#" className="btn btn-primary">Go somewhere</a> -->
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="tab-pane fade" id="popular-tab-aria-4" role="tabpanel" aria-labelledby="popular-tab-4"
                        tabindex="0">

                        <div className="card-content">
                            <div className="card-content ">
                                <div className="card">
                                    <img loading="lazy" src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg"
                                        className="card-img-top" alt="...">
                                    <!-- <div className="chart" id="graph" data-percent="88"></div> -->

                                    <div className="card-body">
                                        <h2>
                                            <a href="#">
                                                The Hunger Games: The Ballad of Songbirds & Snakes
                                            </a>
                                        </h2>
                                        <span>Dec 15, 2023</span>

                                        <!-- <a href="#" className="btn btn-primary">Go somewhere</a> -->
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </div>

    </section>

    <section className="column-wrapper">

        <div className="container">

            <div className="column-header">
                Trending
                <nav>
                    <div className="tab-nav" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-movie-tab-1" data-bs-toggle="tab"
                            data-bs-target="#nav-movie-tab-aria-1" type="button" role="tab"
                            aria-controls="nav-movie-tab-aria-1" aria-selected="true">Movies</button>
                        <button className="nav-link" id="nav-movie-tab-2" data-bs-toggle="tab"
                            data-bs-target="#nav-movie-tab-aria-2" type="button" role="tab"
                            aria-controls="nav-movie-tab-aria-2" aria-selected="false">TV</button>
                    </div>
                </nav>
            </div>

            <div className="column-content puls-image">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-movie-tab-aria-1" role="tabpanel"
                        aria-labelledby="nav-movie-tab-1" tabindex="0">

                        <div className="card-content ">
                            <div className="card">
                                <img loading="lazy" src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg"
                                    className="card-img-top" alt="...">
                                <!-- <div className="chart" id="graph" data-percent="88"></div> -->

                                <div className="card-body">
                                    <h2>
                                        <a href="#">
                                            The Hunger Games: The Ballad of Songbirds & Snakes
                                        </a>
                                    </h2>
                                    <span>Dec 15, 2023</span>

                                    <!-- <a href="#" className="btn btn-primary">Go somewhere</a> -->
                                </div>
                            </div>

                        </div>



                    </div>
                    <div className="tab-pane fade" id="nav-movie-tab-aria-2" role="tabpanel"
                        aria-labelledby="nav-movie-tab-2" tabindex="0">

                        <div className="card-content">
                            <div className="card-content ">
                                <div className="card">
                                    <img loading="lazy" src="/images/card/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg"
                                        className="card-img-top" alt="...">
                                    <!-- <div className="chart" id="graph" data-percent="88"></div> -->

                                    <div className="card-body">
                                        <h2>
                                            <a href="#">
                                                The Hunger Games: The Ballad of Songbirds & Snakes
                                            </a>
                                        </h2>
                                        <span>Dec 15, 2023</span>

                                        <!-- <a href="#" className="btn btn-primary">Go somewhere</a> -->
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </div>

    </section>

    <section className="inner_content">

        <div className="container">

            <div className="col-md-12">

                <div className="header-column">
                    <h2>Join Today</h2>
                </div>

                <div className="row justify-content-evenly align-items-center">

                    <div className="col-md-6">

                        <p>
                            Get access to maintain your own custom personal lists, track what you've seen and search and
                            filter for what to watch next—regardless if it's in theatres, on TV or available on popular
                            streaming services like Netflix, Amazon Prime Video, Disney Plus, Apple TV Plus, and Hulu.
                        </p>

                        <button className="btn">Sign Up</button>

                    </div>

                    <div className="col-md-4">

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
