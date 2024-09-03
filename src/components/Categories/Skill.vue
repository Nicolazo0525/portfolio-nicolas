<script setup>
import { inject } from "vue";

const isHovered = inject('isHovered')
</script>
<template>
  <!-- <div class=" flex justify-center items-center h-[100vh] bg-black m-0">
    <div class="grid-continer w-full">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    
    </div>
  </div> -->
  <div class="order-2 button_over cursor-pointer pt-12">
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
  </div>
    <!-- <div :class="{ 'hovered-class': isHovered }">
        Tu contenido aquí 
        <button :class="{ 'active': isHovered }">Botón</button>
    </div> -->
</template>
<style>

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