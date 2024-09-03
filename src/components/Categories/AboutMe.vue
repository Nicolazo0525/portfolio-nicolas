<script setup>
import { onMounted } from 'vue'
import useTrack from "../../composables/track"

const {getTrack, album, track, image, errorsAlbum} = useTrack();



/* onMounted(()=>{ 
    getTrack();
})
 */
</script>

<template>
    <main class="h-full dark:bg-secundary-buttonlagout p-12 ">
        <div class="z-20 items-center index_beams__yWcJT flex flex-row row-span-2 justify-center">
            <div class="flex justify-center">
                <div class="w-96 h-96">
                    <img src="../../../public/photo.png" alt="">
                </div>
            </div>
            <div class="text-justify">
                
                <p>
                    Junior Software Developer with a Passion for Code.
                </p>
                <br>
                <p>
                    I am a passionate software developer looking for opportunities 
                    to grow and learn. My experience includes Software projects and collaborations with 
                    small companies. Some highlights of my profile:
                </p>
                <br>
                <p>
                    Technologies: HTML, CSS, JavaScript, Laravel Framework, Vue.js 3, Python, Ros, Tailwind, PHP, MySQL and PostgreSQL.
                </p>
                <br>
                <p>
                    Projects: software for the qualification in the framework of the Folkloric Festival, 
                    Reinado Nacional del Bambuco and Muestra Internacional del Folclor of the year 2022.
                </p>
                <br>
                <p>
                    Attitude: Always willing to learn and face new challenges.
                </p>
                <br>
                <p>
                    I’m excited to keep growing and contributing to the world of 
                    software development! Connect with me to chat about 
                    technology or collaborate on interesting projects!
                </p>
    
            </div>
        </div>
    </main>
    
</template>

<style>

</style>