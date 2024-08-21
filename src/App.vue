<script setup>
import { ref } from 'vue';
import Layout from './components/layouts/LayoutOne.vue';
import LayoutLeft from './components/layouts/LayoutLeft.vue';

const toggleLayout = ref(false)

const changeLayout = () => {
    if (toggleLayout.value == false) {
      toggleLayout.value = true
    }else{
      toggleLayout.value = false
    }
}

</script>

<template>
    <main class="">
      <div class="z-50 w-full absolute">
        <layout/>
      </div>
      <div class="z-40 flex flex-grow h-screen pt-20">
        <div class="left-0 w-3/12">
          <layout-left/>
        </div>
        <div class="right-0 w-9/12">
          <router-view/>
        </div>
      </div>
    </main>
</template>

<style>
body {
  font-family: 'Orbitron', sans-serif;
}
</style>