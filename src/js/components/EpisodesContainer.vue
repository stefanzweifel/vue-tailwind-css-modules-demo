<template>
    <div>
        <episode
            v-for="episode in episodes"
            :episode="episode"
            :key="episode.title"
        />
    </div>
</template>

<script>
import Episode from './Episode.vue';

export default {
    components: {
        Episode
    },
    props: {
        episodes: {
            type: Array
        }
    }
}
</script>
