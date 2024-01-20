<template>
    <div class="card">
        <img v-if="movie.poster_path" loading="lazy" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
            class="card-img-top" :alt="movie.title">

        <img v-else loading="lazy" style="object-fit: contain;" src="../../public/images/default.webp"
            class="card-img-top" :alt="movie.title">

        <div class="card-body">
            <h2>
                <router-link :to="'movie/view/' + movie.id">
                    {{ movie.original_title }}
                </router-link>
            </h2>
            <span>{{ movie.release_date }}</span>
        </div>
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