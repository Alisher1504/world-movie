<style scoped>
/* .movie-firt-section {

    background-image: url('../../../../public/images/person/aqua.jpg');
    background-repeat: no-repeat;
    background-position: left calc((50vw - 170px) - 340px) top;
    background-size: cover;

} */

.movie-firt-section .bg {
    background-image: linear-gradient(to right, rgba(31.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.84) 50%, rgba(31.5, 31.5, 52.5, 0.84) 100%);
}

.movie-image img {
    width: 300px;
    height: 450px;
    border-radius: 10px;
}

.movie-firt-section .content {
    color: #fff;
}

.movie-firt-section .content .title {
    margin: 0;
    padding: 0;
    font-size: 2.2rem;
}

.movie-firt-section .content .title a {
    color: #fff;
    text-decoration: none;
}

.movie-firt-section .content .title a:hover {
    color: silver;
    text-decoration: none;
}

.movie-firt-section .content .title span {
    color: silver;
    text-decoration: none;
}

.movie-firt-section .content .facts {
    display: flex;
    align-items: center;
    gap: 10px;
}

.movie-firt-section .content .facts .certification {
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    align-content: center;
    padding: 0.06em 4px 0.15em !important;
    line-height: 1;
    border-radius: 2px;
}

.movie-firt-section .content .facts .rounded {

    width: 4px;
    height: 4px;
    background-color: #fff;

}


.canvas-content {
    height: 75px !important;
    width: 75px !important;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.rounded-icon {
    box-sizing: border-box;
    background: #032541;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.trailer a {
    color: #fff;
    text-decoration: none;
}

.auto-actions {
    display: flex;
    gap: 15px;
    align-items: center;
}

.header-info h3 {
    font-weight: 600;
    font-size: 1.3em;
    color: #fff;
}

.header-info p {
    font-size: 1em;
    color: #fff;
}

.movie-user-info a {
    font-weight: 700;
    color: #fff;
    text-decoration: none;
}

.title-content {
    font-weight: 600;
    font-size: 1.4em;
    margin-bottom: 20px;
}

.user-cards .card-content .card {

    min-width: 138px;
    max-width: 138px;
    /* height: 200px; */
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .1);

}

.user-cards .card-content .card .card-body {
    padding: 0px;
    max-height: 175px;
}

.user-cards .card-content .card .card-footer {
    background-color: white;
    border: none;
    padding: 7px;
}

.user-cards .card-content .card .card-body img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0px 0px;
}

.user-cards .card-content {
    display: flex;
    gap: 20px;
    width: 100%;
    overflow-x: scroll;
    padding: 5px 0px 20px 5px;
}

.user-cards .card-content::-webkit-scrollbar {
    width: 20px;
    height: 8px;
}

.user-cards .card-content::-webkit-scrollbar-thumb {
    background: silver;
    border-radius: 10px;
    height: 10px;
}

.user-cards .card-content .card .card-footer a {

    font-weight: 700;
    color: #000;
    text-decoration: none;

}

.user-cards .card-content .card .card-footer p {
    padding: 0px;
    margin: 0px;
}

.user-tab-panel .nav {
    gap: 40px;
    display: flex;
    align-items: center;

}

.user-tab-panel .nav .nav-item .nav-link {
    padding: 0px;
}

.social {
    font-weight: 600;
    font-size: 1.4em;
    text-decoration: none;
    color: #000;
}

.user-tab-panel .nav .nav-item .nav-link {
    font-size: 1em;
    color: #000;
    font-weight: 600;
}

.user-tab-panel .nav .nav-item .nav-link.active {
    border-bottom: 4px solid #000;
}

.review-content {
    width: 100%;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
    border-radius: 7px;
    margin-top: 10px;
}

.review-content-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.review-content-info img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 15px;
    color: #000;
}

.review-content-info .review-info h3 {
    font-size: 1.3em;
    line-height: 1em;
    font-weight: 700;
    margin: 0px;
}

.review-content-info .review-info h3 a {
    color: #000;
    text-decoration: none;
}


.review-content-info .review-info .rating {

    background: #000;
    padding: 4px 8px;
    color: #fff;
    font-size: .7em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    display: inline;
    margin-right: 10px;

}

.review-content-info h5 {
    font-weight: 300;
    font-size: .9em;
    display: inline;
}

.all-reviews {
    font-weight: 600;
    font-size: 1.1em;
    margin-top: 20px;
}

.all-reviews a {
    color: #000;
    text-decoration: none;
}

.nav-link-count {
    align-items: center;
    opacity: .6;
    font-weight: 600;
}

.discussion {
    width: 100%;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
    border-radius: 7px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.discussion .discussion-info-1 img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 15px;
}

.discussion .discussion-info-1 a {
    text-decoration: none;
    color: #000;
    font-size: 1em;
}

.discussion-info-2 p,
.discussion-info-3 p {
    margin: 0px;
    padding: 0px;
}

.media .nav {
    gap: 40px;
    display: flex;
    align-items: center;

}

.media .nav .nav-item .nav-link {
    padding: 0px;
}


.media .nav .nav-item .nav-link {
    font-size: 1em;
    color: #000;
    font-weight: 600;
}

.media .nav .nav-item .nav-link.active {
    border-bottom: 4px solid #000;
}

.media-img-card {
    min-width: 533px;
    max-width: 533px;
    height: 300px;
}

.media-img-card-2 {
    min-width: 200px;
    max-width: 200px;
    height: 300px;
}

.media-img-card-2 img {
    width: 100%;
    height: 100%;
}

.media-img-card img {
    width: 100%;
    height: 100%;
}

.sss {
    display: flex;
}

.main-new-tab {
    width: 100%;
    overflow-x: scroll;
    border-radius: 10px 0px 0px 0px;
    margin-top: 10px;
}

.main-new-tab::-webkit-scrollbar {
    width: 20px;
    height: 8px;
}

.main-new-tab::-webkit-scrollbar-thumb {
    background: silver;
    border-radius: 10px;
    height: 10px;
}

.collection-info {
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
    border-radius: 7px;
    margin-top: 10px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.collection {

    background-color: #032541d7;
    padding: 70px 20px;
    color: #fff;

}

.collection .info h2 {

    font-size: 1.9em;
    font-weight: 600;
    color: #fff;

}

.collection .info p {

    font-size: 1.1em;

}

.collection .info a {

    color: #fff;
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
    background-color: rgba(31.5, 31.5, 52.5, 1);
    padding: 7px 20px;
    border-radius: 20px;

}

.collection .info a:hover {

    background-color: #000;

}

.recomindation .recomendation-content .card {

    min-width: 250px;
    max-width: 250px;
    border: none;

}

.recomindation .recomendation-content {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    gap: 15px;
    padding: 0px 0px 20px 0px;
}

.recomindation .recomendation-content .card .card-body {

    padding: 0px;

}

.recomindation .recomendation-content .card .card-body img {

    width: 100%;
    height: 100%;
    border-radius: 10px;

}

.recomindation .recomendation-content .card .card-footer {

    padding: 0px;
    border: none;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.recomindation .recomendation-content .card .card-footer a {

    text-decoration: none;
    color: #000;
    font-weight: 400;
    font-size: 1em;

}

.recomindation .recomendation-content::-webkit-scrollbar {
    width: 20px;
    height: 8px;
}

.recomindation .recomendation-content::-webkit-scrollbar-thumb {
    background: silver;
    border-radius: 10px;
    height: 10px;
}


.icons {
    font-size: 1.5em;
}

.icons .bi {
    margin-right: 15px;
}

.status p strong {
    display: block;
}

.keywords {

    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.keywords .keyword-item {

    background-color: rgba(0, 0, 0, .1);
    color: #000;
    text-decoration: none;
    border: 1px solid #d7d7d7;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: .9em;

}

.content-scores .card {
    border: none;
}

.content-scores .card .card-body {

    padding: 10px;
    background-color: rgba(31.5, 31.5, 52.5, 1);
    border-radius: 10px 10px 0px 0px;
    color: #fff;

}

.content-scores .card .card-footer {

    padding: 4px 0px 4px 10px;
    background-color: rgba(0, 0, 0, .1);
    border-radius: 0px 0px 10px 10px;
    color: #000;
    font-size: .9em;
}

.trailer-modal{ 
    margin-top: 10%;
    margin-left: -10%;
}
</style>

<template>
    <section class="movie-firt-section">

        <div class="bg  py-4">
            <div class="container">

                <div class="row g-4">

                    <div class="col-xl-3">

                        <div class="movie-image">

                            <img v-if="movieGetById.poster_path" loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + movieGetById.poster_path" alt="">
                            <img v-else loading="lazy" style="object-fit: contain;" src="../../../../public/images/default.webp" alt="">

                        </div>

                    </div>
                    <div class="col-xl-9 py-5">

                        <div class="content">

                            <h2 class="title"><a href="#">{{ movieGetById.original_title }}</a> <span>({{
                                movieGetById.release_date }})</span></h2>

                            <div class="facts mt-2">

                                <div class="certification">
                                    R
                                </div>

                                <div class="data">
                                    {{ movieGetById.release_date }}
                                </div>
                                <div class="rounded"></div>
                                <div class="animation" v-for="animation in movieGetById.genres">
                                    {{ animation.name }},
                                </div>
                                <!-- <div class="rounded"></div> -->
                                <!-- <div class="time">
                                    23442
                                </div> -->
                            </div>

                            <div class="auto-actions mt-3">

                                <div class="canvas-content"><canvas id="canvas" width="90px" height="90px"></canvas></div>
                                <div class="text">
                                    User <br> Score
                                </div>
                                <div class="rounded-icon"><i class="bi bi-list-task"></i></div>
                                <div class="rounded-icon"><i class="bi bi-heart-fill"></i></div>
                                <div class="rounded-icon"><i class="bi bi-bookmark-fill"></i></div>
                                <div class="rounded-icon"><i class="bi bi-star-fill"></i></div>
                                <div class="trailer">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                            class="bi bi-play-fill"></i> Play Trailer</a>
                                </div>

                                <div class="modal fade trailer-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">

                                                <iframe v-for="video in movieVideos.slice(0, 1)" width="900" height="500"
                                                    :src="'https://www.youtube.com/embed/' + video.key"
                                                    title="Movie Trailer" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="header-info mt-4">

                                <h3>Overview</h3>

                                <p>
                                    {{ movieGetById.overview }}
                                </p>

                            </div>

                            <div class="movie-user-info">
                                <a href="">Gia Skova</a>
                                <p>
                                    Director, Writer
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>

    </section>

    <section class="mt-4">

        <div class="container">



            <div class="row">

                <div class="col-9">

                    <h1 class="title-content">Top Billed Cast</h1>

                    <div class="user-cards">

                        <div class="card-content">

                            <div class="card" v-for="person in castpersons.cast">

                                <div class="card-body">
                                    <img v-if="person.profile_path" loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + person.profile_path"
                                        alt="">
                                        <img v-else loading="lazy" style="object-fit: contain;" src="../../../../public/images/default.webp" alt="">
                                </div>
                                <div class="card-footer">
                                    <router-link :to="'/person/view/' + person.id">{{ person.original_name }}</router-link>
                                    <p>
                                        {{ person.character.slice(0, 10) }}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <h1 class="title-content">Full Cast & Crew</h1>

                    <hr>

                    <div class="user-tab-panel">

                        <ul class="nav" id="myTab" role="tablist">
                            <a href="#" class="social">Social</a>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                                    aria-selected="true">Reviews <span class="nav-link-count">{{ reviewsComment.length
                                    }}</span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" type="button" role="tab"
                                    aria-controls="profile-tab-pane" aria-selected="false">Discussions <span
                                        class="nav-link-count">{{ reviewsCommentdiscussions.slice(0, 3).length }}</span></button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">

                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                aria-labelledby="home-tab" tabindex="0">

                                <div v-for="commentreview in reviewsComment.slice(0, 3)" class="review-content">

                                    <div class="review-content-info">

                                        <img v-if="commentreview.author_details.avatar_path != null"
                                            :src="'https://image.tmdb.org/t/p/w500/' + commentreview.author_details.avatar_path"
                                            alt="">
                                        <img v-else :src="'https://image.tmdb.org/t/p/w500/' + movieGetById.backdrop_path"
                                            alt="">

                                        <div class="review-info">
                                            <h3><a href="#">A review by {{ commentreview.author }}</a></h3>
                                            <span class="rating"><i class="bi bi-star-fill"></i> <span>{{
                                                commentreview.author_details.rating ?
                                                commentreview.author_details.rating : 0 }}</span></span>
                                            <h5>Written by {{ commentreview.author }} on {{
                                                commentreview.created_at.slice(0, 10) }}</h5>
                                        </div>

                                    </div>

                                    {{ commentreview.content.slice(0, 300) }}...
                                </div>

                                <p class="all-reviews">
                                    <a href="#">Read All Reviews</a>
                                </p>

                            </div>



                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                                tabindex="0">

                                <div v-for="discussions in reviewsCommentdiscussions.slice(0, 3)" class="discussion">

                                    <div class="discussion-info-1">
                                        <img v-if="discussions.author_details.avatar_path != null"
                                            :src="'https://image.tmdb.org/t/p/w500/' + discussions.author_details.avatar_path"
                                            alt="">
                                        <img v-else :src="'https://image.tmdb.org/t/p/w500/' + movieGetById.backdrop_path"
                                            alt="">
                                        <a href="">
                                            {{ discussions.content.slice(0, 50) }}
                                        </a>
                                    </div>

                                    <!-- <div class="discussion-info-2">
                                        <p>
                                            open
                                        </p>
                                    </div>

                                    <div class="discussion-info-3">
                                        <p>
                                            16
                                        </p>
                                    </div> -->

                                </div>

                                <p class="all-reviews">
                                    <a href="#">Go to Discussions</a>
                                </p>

                            </div>

                        </div>

                    </div>

                    <hr>

                    <div class="media">

                        <ul class="nav" id="myTab" role="tablist">
                            <a href="#" class="social">Media</a>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="media-tab-1" data-bs-toggle="tab"
                                    data-bs-target="#media-1" type="button" role="tab" aria-controls="media-1"
                                    aria-selected="true">Most Popular <span class="nav-link-count">{{ movieImages.slice(0,
                                        20).length }}</span></button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="media-tab-2" data-bs-toggle="tab" data-bs-target="#media-2"
                                    type="button" role="tab" aria-controls="media-2" aria-selected="false">Videos <span
                                        class="nav-link-count">{{ movieVideos.slice(0, 6).length }}</span></button>
                            </li>

                            <!-- <li class="nav-item" role="presentation">
                                <button class="nav-link" id="media-tab-3" data-bs-toggle="tab" data-bs-target="#media-3"
                                    type="button" role="tab" aria-controls="media-3" aria-selected="false">Backdrops <span
                                        class="nav-link-count"> 44</span></button>
                            </li> -->

                            <!-- <li class="nav-item" role="presentation">
                                <button class="nav-link" id="media-tab-4" data-bs-toggle="tab" data-bs-target="#media-4"
                                    type="button" role="tab" aria-controls="media-4" aria-selected="false">Posters <span
                                        class="nav-link-count"> 190</span></button>
                            </li> -->
                        </ul>
                        <div class="tab-content" id="myTabContent">

                            <div class="tab-pane main-new-tab fade show active" id="media-1" role="tabpanel"
                                aria-labelledby="media-tab-1" tabindex="0">
                                <div class="sss">

                                    <div v-for="image in movieImages.slice(0, 20)" class="media-img-card">

                                        <img v-if="image.file_path" loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + image.file_path"
                                            alt="">
                                            <img v-else loading="lazy" style="object-fit: contain;" src="../../../../public/images/default.webp" alt="">
                                    </div>

                                </div>
                            </div>

                            <div class="tab-pane main-new-tab fade" id="media-2" role="tabpanel"
                                aria-labelledby="media-tab-2" tabindex="0">

                                <div class="sss">

                                    <div v-for="video in movieVideos.slice(0, 6)" class="media-img-card">

                                        <iframe width="560" height="290" :src="'https://www.youtube.com/embed/' + video.key"
                                            title="Movie Trailer" frameborder="0" allowfullscreen></iframe>

                                    </div>

                                </div>


                            </div>
                            <!-- 
                            <div class="tab-pane main-new-tab fade" id="media-3" role="tabpanel"
                                aria-labelledby="media-tab-3" tabindex="0">

                                <div class="sss">

                                    <div class="media-img-card">

                                        <img src="../../../../public/images/person/avanger.jpg" alt="">

                                    </div>

                                    <div class="media-img-card">

                                        <img src="../../../../public/images/person/avanger.jpg" alt="">

                                    </div>
                                    <div class="media-img-card">

                                        <img src="../../../../public/images/person/avanger.jpg" alt="">

                                    </div>
                                </div>


                            </div> -->

                            <!-- <div class="tab-pane main-new-tab fade" id="media-4" role="tabpanel"
                                aria-labelledby="media-tab-4" tabindex="0">

                                <div class="sss">

                                    <div v-for="popular in popularimages" class="media-img-card-2">

                                        <img loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + popular.rent.logo_path" alt="">

                                    </div>

                                </div>


                            </div> -->

                        </div>

                    </div>

                    <hr class="my-4">

                    <div class="collection-info"
                        v-bind:style="{ backgroundImage: 'url(\'https://image.tmdb.org/t/p/w500/' + movieGetById.backdrop_path + '\')' }">


                        <div class="collection">

                            <div class="info">

                                <h2>Part of the {{ movieGetById.original_title }} Collection</h2>

                                <p>
                                </p>

                                <a href="#">
                                    VIEW THE COLLECTION
                                </a>

                            </div>

                        </div>

                    </div>

                    <hr class="my-4">

                    <div class="recomindation">

                        <h1 class="title-content">Recommendations</h1>

                        <div class="recomendation-content">

                            <div v-for="recomend in recomendvideo" class="card">
                                <div class="card-body">
                                    <img v-if="recomend.backdrop_path" loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + recomend.backdrop_path"
                                        alt="">
                                        <img v-else loading="lazy" style="object-fit: contain;" src="../../../../public/images/default.webp" alt="">
                                </div>
                                <div class="card-footer">
                                    <router-link :to="'/movie/view/' + recomend.id">{{ recomend.original_title.slice(0, 15)
                                    }}...</router-link>
                                    <span>{{ (recomend.vote_average * 10).toFixed(2) }}%</span>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
                <div class="col-3">

                    <div class="icons">

                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-link-45deg"></i>

                    </div>

                    <div class="status">

                        <p class="mt-3">

                            <strong>Status</strong>
                            {{ movieGetById.status }}

                        </p>

                        <p class="mt-3">

                            <strong>Original Language</strong>
                            {{ movieGetById.original_language }}

                        </p>

                        <p class="mt-3">

                            <strong>Budget</strong>
                            ${{ movieGetById.budget }}

                        </p>

                        <p class="mt-3">

                            <strong>Revenue</strong>
                            ${{ movieGetById.revenue }}

                        </p>

                    </div>

                    <div class="keywords">

                        <a href="#" class="keyword-item" v-for="keyword in keywordstomovie.keywords">
                            {{ keyword.name }}
                        </a>

                    </div>

                    <hr class="my-4">


                    <div class="content-scores">
                        <h1 class="title-content m-0">Content Score</h1>

                        <div class="card">

                            <div class="card-body">
                                100
                            </div>
                            <div class="card-footer">
                                Yes! Looking good!
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
            movieGetById: {},
            keywordstomovie: [],
            castpersons: [],
            reviewsComment: [],
            reviewsCommentdiscussions: [],
            movieImages: [],
            movieVideos: [],
            recomendvideo: [],
            findCanvasResultGetById: 0,
            // popularimages: [],
        }
    },

    mounted() {
        this.canvas();
        this.movieFind();
        this.keywords();
        this.casts();
        this.reviews();
        this.discussions();
        this.images();
        this.videos();
        this.recomindation();
        // this.popular();
    },

    methods: {

        movieFind() {

            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=en-US`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            }

            axios.request(options).then((response) => {
                this.movieGetById = response.data
                this.findCanvasResultGetById = this.movieGetById.vote_average
                // console.log(this.findCanvasResultGetById);
            }).catch((error) => {
                // console.log(error);
            })

        },
        keywords() {
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/keywords`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            }

            axios.request(options).then((response) => {
                this.keywordstomovie = response.data
            }).catch((error) => {
                // console.log(error);
            })
        },
        casts() {
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?language=en-US`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            }

            axios.request(options).then((response) => {
                this.castpersons = response.data
            }).catch((error) => {
                // console.log(error);
            })
        },
        reviews() {

            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/reviews?language=en-US&page=1`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            }

            axios.request(options).then((response) => {
                this.reviewsComment = response.data.results
            }).catch((error) => {
                // console.log(error);
            })

        },
        discussions() {

            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/reviews?language=en-US&page=1`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            }

            axios.request(options).then((response) => {
                this.reviewsCommentdiscussions = response.data.results
            }).catch((error) => {
                // console.log(error);
            })

        },
        images() {

            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/images`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            }

            axios.request(options).then((response) => {
                this.movieImages = response.data.backdrops
            }).catch((error) => {
                // console.log(error);
            })

        },
        videos() {

            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?language=en-US`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            }

            axios.request(options).then((response) => {
                this.movieVideos = response.data.results
            }).catch((error) => {
                // console.log(error);
            })

        },
        recomindation() {

            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${this.$route.params.id}/recommendations?language=en-US&page=1`,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjRmMTMwZDhkMWRiOGUzYTFkOGQxZTJkZGEyZmIzYyIsInN1YiI6IjY1OTRmMWZiZDdhNzBhMTM1NzY4ZjhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.geWveJFNg7mp1mk5if-2SWEdprOb23e6SoMibi8So3I'
                }
            };

            axios.request(options).then((response) => {
                this.recomendvideo = response.data.results
            }).catch((error) => {
                // console.log(error);
            })

        },
        canvas() {

            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            var color = 'rgb(250, 250, 5)';
            var text_color = '#fff';
            var width = canvas.width;
            // canvas.height = width + 50;
            var height = canvas.height;
            let percent = 59;

            var counter = 0;

            function baseCir() {
                ctx.beginPath();
                // ctx.lineWidth = width / 14;
                ctx.strokeStyle = "rgb(82, 82, 3)";
                ctx.arc(width / 2, width / 2, width / 3, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
            }

            setTimeout(function draw() {

                var angle = Math.PI * 1.5 + Math.PI * 2 * counter / 100;
                ctx.clearRect(0, 0, width, height);
                baseCir();
                ctx.beginPath();
                ctx.lineWidth = width / 14;
                ctx.arc(width / 2, width / 2, width / 3, 1.5 * Math.PI, angle);
                ctx.strokeStyle = color;
                ctx.stroke();
                ctx.closePath();
                ctx.fillStyle = text_color;
                ctx.font = width / 6 + "px Arial";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(counter + "%", width / 2, width / 2);
                ctx.fillText(status, width / 2, height - 25);
                counter++;
                if (counter <= percent) {
                    setTimeout(draw, 20);
                }
            }, 20);
        },


    },
    watch: {
        '$route.params.id': {
            handler: function (newValue, oldValue) {
                this.keywords();
                this.casts();
                this.reviews();
                this.discussions();
                this.images();
                this.videos();
                this.recomindation();
                this.movieFind();
            },
            immediate: true
        }
    },
}
</script>