<script setup>
import { ref, onMounted, inject } from "vue";

const isHovered = inject('isHovered')
const isHoveredOption = inject('isHoveredOption')

console.log(isHoveredOption,'  ', isHovered)
</script>
<template>
  <!-- <div class="order-2 button_over cursor-pointer pt-12">
    <label for="ButtonTwo" class="hover:border-y-2 py-2 border-secundary-buttonDefoult">
      <button @mouseover="show = true" @mouseleave="show = false" id="2" value="2" name="buttonTwo"
          class="relative inline-block overflow-hidden boton-ola uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  
          hover:text-primary-default transition-colors cursor-pointer">
       Button Two
      </button>
    </label>
  </div>
  <div>
    <button class="relative inline-block px-6 py-3 text-white bg-blue-500 border-none cursor-pointer overflow-hidden boton-ola">
      Hover me!
  </button>
  </div> -->
  <div class="w-full h-full flex justify-center items-center">
    <div class="flex flex-col  w-34 h-96 ">
      <div class="relative flex justify-center w-[8.5rem] h-96 bg-secundary-boxColor">
        <div class="absolute top-0 m-auto h-10 pb-[0.125rem] bg-orange-400" :class="isHoveredOption === 1 || isHovered === true ? 'w-40' : 'w-full'"/>
        <div class="absolute top-[2.6rem] h-10 bg-orange-400 transition-all duration-100" :class="isHoveredOption === 2 || isHovered === true ? 'w-40' : 'w-full'"/><!-- :class="{'efect-color': isHovered}" -->
      </div>
    </div>
  </div>
    <!-- <div :class="{ 'bg-red-600 mx-12': isHovered }">
        Tu contenido aquí 
        <button :class="{ 'active': isHovered }">Botón</button>
    </div> -->
</template>
<style>

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