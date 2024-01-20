<template>
    <div class="card">
        <img v-if="movie.backdrop_path" :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
            class="card-img-top trailer-image" alt="..." />
        <img v-else loading="lazy" style="object-fit: contain;" src="../../public/images/default.webp" class="card-img-top"
            :alt="movie.title">
        <!-- <div class="video-play">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-play-fill"
                viewBox="0 0 16 16">
                <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="#fff" />
            </svg>
        </div> -->

        <div class="card-body">
            <h2 class="card-text text-center"><router-link :to="'movie/view/' + movie.id">
                    {{ movie.original_title }}
                </router-link></h2>
            <!-- <h3 class="text-center">"One of the Best Films of the Year"</h3> -->
        </div>

        <!-- Modal -->
        <!-- data-bs-toggle="modal" :data-bs-target="'#exampleModal' + index"
 data-bs-toggle="modal" :data-bs-target="'#exampleModal' + index" -->
        <!-- <div class="modal fade" :id="'exampleModal' + index" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body video-trailer-modal">
                        <iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/' + movie.videoId"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- End Modal -->
    </div>
</template>

<script>

export default {

    props: {
        movie: {
            type: Object,
            required: true
        }
    }

}

</script>
