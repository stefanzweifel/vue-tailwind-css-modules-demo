<template>
    <div :class="$style.podcastDescription">
        <h4 :class="$style.title">
            {{ podcast.title }}
        </h4>
        <h6 :class="$style.publisher">
            by <a href="#">{{ podcast.publisher }}</a>
        </h6>
        <p :class="$style.podcastDescriptionParagraph">
            {{ podcast.description }}
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            podcast: {
                type: Object
            }
        }
    }
</script>

<style module>
@tailwind utilities;

.podcastDescription {
    @apply p-4;
}

.title {
    @apply font-black my-0 text-2xl;
}

.publisher {
    @apply text-grey font-bold my-0 text-sm;
}

.publisher a {
    @apply text-white;
}
.podcastDescriptionParagraph {
    @apply mb-0 text-sm text-grey-lighter;
}
</style>
