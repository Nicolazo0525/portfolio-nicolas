<script setup>
import { ref, onMounted, inject } from "vue";

const isHovered = inject('isHovered')
const isHoveredPrimary = inject('isHoveredPrimary')
const isHoveredOption = inject('isHoveredOption')

</script>
<template>
  <div class="w-full h-full flex justify-center">
    <div class="flex flex-col w-36 h-96 mt-20">
      <div class="relative flex flex-col sm:gap-[2px] md:gap-[2px] lg:gap-[2px] xl:gap-[2px] w-[9rem] h-96 bg-secundary-boxColor">
        <!-- SOFT SKILLS -->
        <div class="relative flex justify-center w-full h-3 mx-auto" :class="isHoveredOption === 1 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'">
          <div class="absolute top-0 mx-auto h-3 bg-boxColor-One" :class="isHoveredOption === 1 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-1 mx-auto">
          <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 2 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-2 mx-auto">
          <div class="absolute top-0 mx-auto h-2 bg-boxColor-One" :class="isHoveredOption === 3 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-1 mx-auto">
          <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 4 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-1 mx-auto">
          <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 5 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-1 mx-auto">
          <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 6 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-1 mx-auto">
          <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 7 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-1 mx-auto">
          <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 8 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-1 mx-auto">
          <div class="absolute top-0 mx-auto h-1 bg-boxColor-One" :class="isHoveredOption === 9 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-4 mx-auto">
          <div class="absolute top-0 mx-auto h-4 bg-boxColor-One" :class="isHoveredOption === 10 || isHoveredPrimary === 1 ? 'w-40' : 'w-full'"/>
        </div>
        <!-- PROGRAMMING LENGUAGES -->
        <div class="relative flex justify-center w-full h-8 mx-auto">
          <div class="absolute top-0 mx-auto h-8 bg-boxColor-two" :class="isHoveredOption === 15 || isHoveredPrimary === 2 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-6 mx-auto">
          <div class="absolute top-0 mx-auto h-6 bg-boxColor-two" :class="isHoveredOption === 16 || isHoveredPrimary === 2 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-4 mx-auto">
          <div class="absolute top-0 mx-auto h-4 bg-boxColor-two" :class="isHoveredOption === 17 || isHoveredPrimary === 2 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-two" :class="isHoveredOption === 18 || isHoveredPrimary === 2 ? 'w-40' : 'w-full'"/>
        </div>
        <!-- Style Sheet Languages -->
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-three" :class="isHoveredOption === 19 || isHoveredPrimary === 3 ? 'w-40' : 'w-full'"/>
        </div>
        <!-- <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 20 || isHoveredPrimary === 3 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 21 || isHoveredPrimary === 3 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 22 || isHoveredPrimary === 3 ? 'w-40' : 'w-full'"/>
        </div> -->
        <!-- Framework Frontend -->
        <!-- <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 23 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 24 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div> -->
        <div class="relative flex justify-center w-full h-2 mx-auto">
          <div class="absolute top-0 mx-auto h-2 bg-boxColor-four" :class="isHoveredOption === 25 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div>
        <!-- <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 26 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 27 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 28 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 29 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 30 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div>
        <div class="relative flex justify-center w-full h-5 mx-auto">
          <div class="absolute top-0 mx-auto h-5 bg-boxColor-four" :class="isHoveredOption === 31 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div> -->
        <div class="relative flex justify-center w-full h-8 mx-auto">
          <div class="absolute top-0 mx-auto h-8 bg-boxColor-four" :class="isHoveredOption === 32 || isHoveredPrimary === 4 ? 'w-40' : 'w-full'"/>
        </div>

      </div>
    </div>
  </div>
</template>
<style>

:root{
  --spacing: 0.25rem;
}
@media (min-width: 768){
  :root{
    --spacing: 0.25rem;
  }
}
@media (min-width: 1024){
  :root{
    --spacing: 0.25rem;
  }
}

.efect-color{
  width: 10rem;
  --tw-bg-opacity: 1;
  background-color: rgb(253 186 116 / var(--tw-bg-opacity));
}

.boton-ola::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #716858;
  transition: left 0.2s ease;
}

.boton-ola:hover::before {
  left: 0%;
}

.hovered-class {
  /* Estilos cuando está en hover */
  background: red;
}
.active {
  /* Estilos del botón cuando está en hover */
  background: rebeccapurple;
}
</style>