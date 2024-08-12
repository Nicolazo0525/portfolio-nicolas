<script setup>
import { onMounted } from 'vue'
import useTrack from "../composables/track"

const {getTrack, album, track, image, errorsCategory} = useTrack();



onMounted(async()=>{
    getTrack(errorsCategory);
})
/* 
const token = 'BQBGIp9XvI2IoknpRyTSJDZKxDiJxqVdc6a01gZ0wtkDuwbQUKcqXpxIvQ3RSYUjmQCs9-YItgZXTNsUaS8OOUY2gknDSU42qKv3yEmPfFyl73a1G30'; */
const token = 'BQB_PNWtpNI4v-mjOfqW6C-mOoVc3cDCCZ4AajrIVK2DgWD177Qq07aCAr5r1RTUQuBHdBuYi9kuG1JvZ_d40OxfdIqrip976rSul71S__Slez1xIAk';
const trackUri = 'spotify:track:1Qa2k4UzzF1X7QVTViJpdG?si=748979638ea64231';

/* fetch(`https://api.spotify.com/v1/me`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ uris: [trackUri] })
})
    .then(response => {
    if (response.ok) {
        console.log('Reproducción iniciada');
    } else {
        console.error('Error al iniciar la reproducción');
    }
    })
.catch(error => console.error('Error:', error));
 */
const clientId = '52dd07aefe5147f7bed88258d1ad7af7';
const clientSecret = '83115b146b204cf0ad23314e43f1ba2d';

/* const getToken = async () => {
    const response = await fetch(authUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
};

getToken().then(token => {
    console.log('Token de acceso:', token);
}); */

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