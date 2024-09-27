<script setup>
import { provide, ref } from 'vue';
import Layout from './components/layouts/LayoutOne.vue';
import LayoutSkill from './components/layouts/LayoutSkill.vue';
import MeshGrid from './components/MeshGrid.vue';
import { useRoute } from "vue-router";
import LayoutFooter from './components/layouts/LayoutFooter.vue';

const route = useRoute()
const toggleLayout = ref(false)

const changeLayout = () => {
    if (toggleLayout.value == false) {
      toggleLayout.value = true
    }else{
      toggleLayout.value = false
    }
}

// provide/inject pattern 

const isHovered = ref(false)
const isHoveredOption = ref(0)
const isHoveredPrimary = ref(0)

provide('isHovered', isHovered)

// Public Hovered Skills

provide('isHoveredPrimary', isHoveredPrimary)
provide('isHoveredOption', isHoveredOption)

</script>

<template>
  <main class="relative inset-0  bg-[radial-gradient(ellipse_at_center,_#d6ceb6_0%,#797767_290%)] ">
    <!-- <mesh-grid/> -->
    <div class="z-50 absolute pixelated-screen pointer-events-none">
      
    </div>
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
    <div class="z-40 relative flex flex-col h-screen pt-20">
      <template v-if="route.path === '/skills/'">
        <div class="left-0 relative">
          <layout-skill/>
        </div>
      </template>
      <div class="h-full w-full"><!-- left-[19.1rem] -->
        <router-view/>
      </div>
      <div class="z-50 w-full">
        <layout-footer></layout-footer>
      </div>
    </div>
  </main>
</template>

<style>

.pixelated-screen {
  width: 100%;
  height: 100vh;
  background: url('../public/grid-line-front-mini.png') repeat;
  background-size: 70%; /* Ajusta el tamaño del grid según tus necesidades */
  z-index: 60;
  filter: brightness(110%);
  image-rendering: pixelated;
}

.border-one{
  border-width: 0.1px;
}

body {
  font-family: 'Orbitron', sans-serif;
}

::-webkit-scrollbar {
  width: 3.5px;
  height: 3.5px;
}

/* Track */
::-webkit-scrollbar-track {
  /*background: #f1f1f1;*/
  filter: opacity(0%); 
  border-radius: 3px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #4F4C43;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  filter: opacity(0%);
}
</style>