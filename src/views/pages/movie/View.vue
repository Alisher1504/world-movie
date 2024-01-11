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

    width: 138px;
    height: 200px;

}

.user-cards .card-content .card .card-body {
    padding: 0px;
}

.user-cards .card-content .card .card-body img{
    width: 100%;
    height: 100%;
    border: 10px;
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
                                <div class="card-body">
                                    footer
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div class="col-3">f</div>

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