<script setup>
import { list } from 'postcss';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

/* var buttonOne = ref() */
const buttonOne = document.getElementsByName("buttonOne")
const buttonTwo = document.getElementsByName("buttonTwo")

var valueButtonOne = buttonTwo

const valueButton = [
  {value: 1},
  {value: 2},
]

const counterKeyButton = ref(0)

const handleKeydown = (event) => {
  switch (event.key) {
    case 'ArrowLeft':

      console.log('izquierda')
      // KeyboardEvent.DOM_KEY_LOCATION_LEFT
      break;

    case 'ArrowRight':
      console.log('Derecha')
      
      console.log(buttonTwo)
      console.log(valueButtonOne)
      counterKeyButton.value = (counterKeyButton.value + 1) % valueButton.length;
      break;
    case 'ArrowUp':
      console.log('Arriba')
      break;
    case 'ArrowDown':
      console.log('Abajo')
      break;
    case 'Enter':
      console.log('Enter')
      break;

  
    default:
      break;
  }
}
</script>

<template>
    <div @keydown="handleKeydown" tabindex="0" class="flex flex-row items-center pt-12 gap-x-5">
        <!-- Button One -->
          <div class="flex flex-row items-center">
            <div class="order-2 button_over cursor-pointer">
              <label for="buttonOne" class="hover:border-y-2 py-2 border-secundary-buttonDefoult">
                <!-- <input @mouseover="show = true" @mouseleave="show = false" v-model=""
                    class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout 
                    hover:text-primary-default transition-colors cursor-pointer">
                 Button One
              </input> -->
              <input type="button" value="buttonOne" name="buttonOne" @mouseover="show = true" @mouseleave="show = false" v-model="buttonOne"
                class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout 
                hover:text-primary-default transition-colors cursor-pointer">
              </label>
            </div>
            <div class="absolute top-[8em] transform -translate-x-1/2 left-[19em] order-1 object_img animate-color-change">
              <img src="../../../public/arrow_icon_one.png" alt="" class="z-50 w-8 rotate-[-90deg]">
            </div>
          </div>
          <!-- Button Tow -->
          <div class="flex flex-row items-center">
            <div class="order-2 button_over cursor-pointer">
              <label for="ButtonTwo" class="hover:border-y-2 py-2 border-secundary-buttonDefoult">
                <button @mouseover="show = true" @mouseleave="show = false" id="2" value="2" name="buttonTwo"
                    class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout 
                    hover:text-primary-default transition-colors cursor-pointer">
                 Button Two
                </button>
              </label>
            </div>
            <div class="absolute top-[8em] transform -translate-x-1/2 left-[28.4em] order-1 object_img animate-color-change">
              <img src="../../../public/arrow_icon_one.png" alt="" class="z-50 w-8 rotate-[-90deg]">
            </div>
          </div>
    </div>
</template>

<style>
.active {
    background-color: #ffcc00; /* Cambia el color aquí */
  }
  .object_img{
    opacity: 0;
    transform-origin: 50% 0%;
    transition-duration: 0.25s;
  }
  .button_over:hover + .object_img {
    opacity: 100;
    transform: scaleY(1) skewX(0deg);
  }  
</style>