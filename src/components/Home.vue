<script setup>
import { onMounted } from 'vue'
import useTrack from "../composables/track"

const {getTrack, album, track, image, errorsAlbum} = useTrack();



onMounted(async()=>{
    getTrack();
})

</script>

<template>
    <div class="h-screen bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams__yWcJT">
        home
        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1Qa2k4UzzF1X7QVTViJpdG?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">

        </iframe> -->
        <div class="flex justify-center items-center">
            <div>
                <img :src="`${image}`" class="w-20 h-20 rounded" alt="">
            </div>
            <div>
                {{ track.name }}
            </div>

        </div>
    </div>
    
    <div class="text-red-500 font-serif">
        <!-- <template v-for="theme in track">
            {{ theme }}
        </template> -->
    </div>
</template>

<style>

</style>