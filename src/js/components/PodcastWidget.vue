<template>
    <div :class="$style.player">
        <podcast-description :podcast="podcast" />
        <episodes-container :episodes="episodes" />
    </div>
</template>

<script>
import PodcastDescription from './PodcastDescription.vue';
import EpisodesContainer from './EpisodesContainer.vue';

export default {

    components: {
        PodcastDescription,
        EpisodesContainer,
    },

    data() {
        return {
            podcast: {
                title: 'Full Stack Radio',
                publisher: 'Adam Wathan',
                description: 'A podcast for developers interested in building great software products. Every episode, Adam Wathan is joined by a guest to talk about everything from product design and user experience to unit testing and system administration.'
            },
            episodes: [
                {
                    title: "82: Sarah Drasner - Animating the Web with CSS and JavaScript",
                    length: '50:46'
                },
                {
                    title: "81: Evan You - Advanced Vue Component Design",
                    length: '48:52'
                }
            ]
        };
    }

}
</script>

<style module>
.player {
    @apply antialiased text-white bg-green-dark font-sans rounded shadow-md;
}
</style>
