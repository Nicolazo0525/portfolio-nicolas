<script setup>
import { provide, ref } from 'vue';
import Layout from './components/layouts/LayoutOne.vue';
import LayoutLeft from './components/layouts/LayoutLeft.vue';
import MeshGrid from './components/MeshGrid.vue';

const toggleLayout = ref(false)

const changeLayout = () => {
    if (toggleLayout.value == false) {
      toggleLayout.value = true
    }else{
      toggleLayout.value = false
    }
}
const isHovered = ref(false)

provide('isHovered', isHovered)
</script>

<template>
  <main class="relative inset-0  bg-[radial-gradient(ellipse_at_center,_#d6ceb6_0%,#797767_290%)]">
    <!-- <mesh-grid/> -->
    <!--  <hr class="absolute left-0 z-10 border-one w-60 rotate-45 border-primary-buttonText"> -->
    <div class="fixed m-0 z-10 top-0 left-0 border-b border-secundary-guionColor w-full transform rotate-45 origin-bottom-left"></div>
    <div class="fixed m-0 z-10 top-12 left-0 border-b border-secundary-guionColor w-full transform rotate-45 origin-bottom-left"></div>
    <div class="fixed m-0 z-10 top-0 left-12 border-b border-secundary-guionColor w-[52em] transform rotate-45 origin-bottom-left"></div>
    <div class="fixed m-0 z-10 top-[-30.5rem] left-[-30.5rem] h-[53em] w-[53em] rounded-full border-b border-r border-secundary-guionColor transform origin-bottom-left"></div>
    <div class="fixed m-0 z-10 top-[-31rem] left-[-31rem] h-[53em] w-[53em] rounded-full border-b border-r border-secundary-guionColor transform origin-bottom-left"></div>

    <div class="fixed m-0 z-10 bottom-0 right-0 border-b border-secundary-guionColor w-full transform rotate-45 origin-bottom-right"></div>
    <div class="fixed m-0 z-10 bottom-12 right-0 border-b border-secundary-guionColor w-full transform rotate-45 origin-bottom-right"></div>
    <div class="fixed m-0 z-10 bottom-0 right-12 border-b border-secundary-guionColor w-[52em] transform rotate-45 origin-bottom-right"></div>
    <div class="fixed m-0 z-10 bottom-[-30.5rem] right-[-30.5rem] h-[53em] w-[53em] rounded-full border-t border-l border-secundary-guionColor transform origin-bottom-left"></div>
    <div class="fixed m-0 z-10 bottom-[-31rem] right-[-31rem] h-[53em] w-[53em] rounded-full border-t border-l border-secundary-guionColor transform origin-bottom-left"></div>
    <div class="w-full flex justify-start ">
      
    </div>
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

.border-one{
  border-width: 0.1px;
}

body {
  font-family: 'Orbitron', sans-serif;
}
</style>