<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute()


</script>

<template>
    <main class="h-full items-center">
        
        <template v-if="route.path === '/skills/'">
            <div class="">
                skills
            </div>
        </template>
        <template v-if="route.path === '/projects/'">
            <div class="">
                Projects
            </div>
        </template>
        <template v-if="route.path === '/certificates/'">
            <div class="">
                certificates
            </div>
        </template>
        <template v-if="route.path === '/media/'">
            <div class="">
                Media
            </div>
        </template>
    </main>
</template>