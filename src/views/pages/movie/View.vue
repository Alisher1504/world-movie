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

</style>

<template>
    <section class="movie-firt-section">

        <div class="bg  py-4">
            <div class="container">

                <div class="row g-4">

                    <div class="col-xl-3">

                        <div class="movie-image">

                            <img src="../../../../public/images/person/aqua.jpg" alt="">

                        </div>

                    </div>
                    <div class="col-xl-9 py-5">

                        <div class="content">

                            <h2 class="title"><a href="#">Aquaman and the Lost Kingdom</a> <span>(2023)</span></h2>

                            <div class="facts mt-2">

                                <div class="certification">
                                    R
                                </div>

                                <div class="data">
                                    13212321
                                </div>
                                <div class="rounded"></div>
                                <div class="animation">
                                    adfada, asdada, asdasd
                                </div>
                                <div class="rounded"></div>
                                <div class="time">
                                    23442
                                </div>

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

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">

                                            <div class="modal-body">
                                                ...
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="header-info mt-4">

                                <h3>Overview</h3>

                                <p>
                                    Top special agent Lucinda Kavsky works for a secret part of the CIA. She's given a
                                    special assignment but then set up by her own agency.
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

                            <div class="card">

                                <div class="card-body">
                                    <img src="../../../../public/images/person/aqua.jpg" alt="">
                                </div>
                                <div class="card-footer">
                                    <a href="#">Robert Downey Jr.</a>
                                    <p>
                                        Tony Stark / Iron Man
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
                                    aria-selected="true">Reviews <span class="nav-link-count">32</span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" type="button" role="tab"
                                    aria-controls="profile-tab-pane" aria-selected="false">Discussions <span
                                        class="nav-link-count">108</span></button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">

                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                aria-labelledby="home-tab" tabindex="0">

                                <div class="review-content">

                                    <div class="review-content-info">

                                        <img src="../../../../public/images/person/aqua.jpg" alt="">

                                        <div class="review-info">
                                            <h3><a href="#">A review by GenerationofSwine</a></h3>
                                            <span class="rating"><i class="bi bi-star-fill"></i> <span>10.0</span></span>
                                            <h5>Written by GenerationofSwine on January 14, 2023</h5>
                                        </div>

                                    </div>

                                    I walked into this frightened that there would be too man characters and the result
                                    would be an empty vacant shell of a movie that was pulled in so many different
                                    directions it couldn't make sense of itself.
                                </div>

                                <p class="all-reviews">
                                    <a href="#">Read All Reviews</a>
                                </p>

                            </div>



                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                                tabindex="0">

                                <div class="discussion">

                                    <div class="discussion-info-1">
                                        <img loading="lazy" src="../../../../public/images/person/aqua.jpg" alt="">
                                        <a href="">
                                            2018: Which film hurt YOUR Rear End the most sitting in Cinemas this Year?
                                        </a>
                                    </div>

                                    <div class="discussion-info-2">
                                        <p>
                                            open
                                        </p>
                                    </div>

                                    <div class="discussion-info-3">
                                        <p>
                                            16
                                        </p>
                                    </div>

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
                                    aria-selected="true">Reviews <span class="nav-link-count">32</span></button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="media-tab-2" data-bs-toggle="tab"
                                    data-bs-target="#media-2" type="button" role="tab"
                                    aria-controls="media-2" aria-selected="false">Discussions <span
                                        class="nav-link-count">108</span></button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="media-tab-3" data-bs-toggle="tab"
                                    data-bs-target="#media-3" type="button" role="tab"
                                    aria-controls="media-3" aria-selected="false">Discussions <span
                                        class="nav-link-count">108</span></button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="media-tab-4" data-bs-toggle="tab"
                                    data-bs-target="#media-4" type="button" role="tab"
                                    aria-controls="media-4" aria-selected="false">Discussions <span
                                        class="nav-link-count">108</span></button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">

                            <div class="tab-pane fade show active" id="media-1" role="tabpanel"
                                aria-labelledby="media-tab-1" tabindex="0">

                                ok

                            </div>



                            <div class="tab-pane fade" id="media-2" role="tabpanel" aria-labelledby="media-tab-2"
                                tabindex="0">

                               mde

                            </div>

                            <div class="tab-pane fade" id="media-3" role="tabpanel" aria-labelledby="media-tab-3"
                                tabindex="0">

                               mde3

                            </div>

                            <div class="tab-pane fade" id="media-4" role="tabpanel" aria-labelledby="media-tab-4"
                                tabindex="0">

                               mde4

                            </div>

                        </div>

                    </div>

                </div>
                <div class="col-3">
                    cf
                </div>

            </div>

        </div>

    </section>
</template>

<script>

export default {

    mounted() {
        this.canvas();
    },

    methods: {
        canvas() {

            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            var color = 'rgb(250, 250, 5)';
            var text_color = '#fff';
            var width = canvas.width;
            // canvas.height = width + 50;
            var height = canvas.height;
            var percent = 10;

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
        }
    }

}
</script>