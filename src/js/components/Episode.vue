<template>
    <div :class="$style.episode">
        <span>{{ episode.title }}</span>
        <a href="#" :class="$style.playButton">Play</a>
    </div>
</template>

<script>
export default {
    props: {
        episode: {
            type: Object
        }
    }
}
</script>

<style module>
@tailwind utilities;

.playButton {
    @apply font-bold text-white;
}

.episode {
    cursor: pointer;
    @apply flex justify-between  text-sm p-4 bg-green-darker;
}

.episode:hover {
    @apply bg-green-darkest;
}
</style>
