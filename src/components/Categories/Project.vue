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
    <!-- <div @keydown="handleKeydown" tabindex="0" class="flex flex-row items-center pt-12 gap-x-5">
        Button One
          <div class="flex flex-row items-center">
            <div class="order-2 button_over cursor-pointer">
              <label for="buttonOne" class="hover:border-y-2 py-2 border-secundary-buttonDefoult">
                <input @mouseover="show = true" @mouseleave="show = false" v-model=""
                    class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout 
                    hover:text-primary-default transition-colors cursor-pointer">
                 Button One
              </input>
              <input type="button" value="buttonOne" name="buttonOne" @mouseover="show = true" @mouseleave="show = false" v-model="buttonOne"
                class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout 
                hover:text-primary-default transition-colors cursor-pointer">
              </label>
            </div>
            <div class="absolute top-[8em] transform -translate-x-1/2 left-[19em] order-1 object_img animate-color-change">
              <img src="../../../public/arrow_icon_one.png" alt="" class="z-50 w-8 rotate-[-90deg]">
            </div>
          </div>
          Button Tow
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
    </div> -->
    <div class="flex flex-col w-full h-full px-12 space-y-20 pb-14">
      <div class="relative">
        <div class="w-full">
          <div class="flex flex-row">
            <div class="absolute left-[0.3rem] top-1 text-secundary-buttonlagout text-4xl flex flex-row space-x-1 ">
              <div class="text-4xl uppercase">
                P
              </div>
              <div class="text-4xl uppercase">
                R
              </div>
              <div class="text-4xl uppercase">
                O
              </div>
              <div class="text-4xl uppercase">
                J
              </div>
              <div class="text-4xl uppercase">
                E
              </div>
              <div class="text-4xl uppercase">
                C
              </div>
              <div class="text-4xl uppercase">
                T
              </div>
              <div class="text-4xl uppercase">
                S
              </div>
            </div>
            <!-- Tittle -->
            <div class="absolute top-0 text-primary-buttonText text-4xl flex flex-row space-x-1">
              <div class="text-4xl uppercase">
                P
              </div>
              <div class="text-4xl uppercase">
                R
              </div>
              <div class="text-4xl uppercase">
                O
              </div>
              <div class="text-4xl uppercase">
                J
              </div>
              <div class="text-4xl uppercase">
                E
              </div>
              <div class="text-4xl uppercase">
                C
              </div>
              <div class="text-4xl uppercase">
                T
              </div>
              <div class="text-4xl uppercase">
                S
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 overflow-y-auto">
        <div class="flex justify-center">
          <div class="flex flex-col w-full relative">
            <div class="w-full h-[23rem] bg-primary-bgLayoutLeft text-[#4C4840]">
              <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
                (Oct 2021 – Nov 2021)
              </div>
              <div class="w-full h-44">
                <a href="https://evalunadistribuciones.mitiendanube.com/" class="w-full h-full flex justify-center items-center ease-in-out">
                  <img src="../../../public/projects/evaluna.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
                </a>
              </div>
              <div class="text-justify m-2">
                E-commerce website developed for a company dedicated to the sale of personal care and beauty products 
                (Application developed with the help of the "Tiendanube" platform).
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col w-full relative">
            <div class="w-full h-[23rem] bg-primary-bgLayoutLeft text-[#4C4840]">
              <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
                (May 2022 – Jul 2022)
              </div>
              <div class="w-full h-44">
                <a href="https://corposanpedro.website/" class="w-full h-full flex justify-center items-center ease-in-out">
                  <img src="../../../public/projects/image_web_corpo.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
                </a>
              </div>
              <div class="text-justify m-2">
                Frontend developer in web application for the 
                qualification in the framework of the Folkloric Festival, Reinado Nacional del 
                Bambuco and Muestra Internacional del Folclor of the year 2022.
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col w-full relative">
          
            <div class="w-full h-[23rem] bg-primary-bgLayoutLeft text-[#4C4840]">
              <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
                (March 2022 – May 2022)
              </div>
              <div class="w-full h-44 items-start">
                <a href="https://tuaulaalamedida.com/" class="w-full h-full flex justify-center items-center ease-in-out">
                  <img src="../../../public/projects/tu_aula.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
                </a>
              </div>
              <div class="text-justify m-2">
                Frontend Developer in web application / interactive educational platform and management of educational institutions.
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col w-full relative">
            <div class="w-full h-[23rem] bg-primary-bgLayoutLeft text-[#4C4840]">
              <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
                (Sep 2022 – Nov 2022)
              </div>
              <div class="w-full h-44">
                <a href="https://tuaulaalamedida.com/" class="w-full h-full flex justify-center items-center ease-in-out">
                  <img src="../../../public/projects/tu_aula.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
                </a>
              </div>
              <div class="text-justify m-2">
                Backend and Frontend Developer in web application / interactive educational platform and management of educational institutions.
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col w-full relative">
            <div class="w-full h-[23rem] bg-primary-bgLayoutLeft text-[#4C4840]">
              <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
                (May 2023 – Dec 2023)
              </div>
              <div class="w-full h-44">
                <a href="https://www.instagram.com/cosmobellezadelhuila/" class="w-full h-full flex justify-center items-center ease-in-out">
                  <img src="../../../public/projects/instagram_cosmo_belleza.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
                </a>
              </div>
              <div class="text-justify m-2">
                Community Manager and social media content creator Facebook, WhatsApp and Instagram of company that offers beauty products.
              </div>
            </div>
          </div>
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