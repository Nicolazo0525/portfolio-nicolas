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
    <div class="flex flex-col w-full h-full px-12 space-y-20 pb-28">
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
      <div class="flex flex-row space-x-7 w-full h-full pb-20">
        <div class="order-1 left-0 flex flex-row space-x-1 opacity-0 transform transition-transform duration-500 ease-in-out -translate-x-full animate-slite-vertical">
          <div class="w-[0.7rem] h-full bg-primary-butonBack"/>
          <div class="w-[0.2rem] h-full bg-primary-butonBack"/>
        </div>
        <div class="order-2 w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 overflow-y-auto">
          <div class="flex justify-center">
            <div class="flex flex-col w-full relative">
              <div class="w-full h-[23rem] bg-primary-bgLayoutLeft text-[#4C4840]">
                <div class="h-8 w-full text-lg text-primary-bgLayoutLeft items-center bg-[#4C4840] pl-2">
                  (Oct 2021 – Nov 2021)
                </div>
                <div class="w-full h-44">
                  <a href="https://evalunadistribuciones.mitiendanube.com/" class="w-full h-full flex justify-center items-center ease-in-out">
                    <img src="../../../public/Project/evaluna.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
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
                    <img src="../../../public/Project/image_web_corpo.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
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
                    <img src="../../../public/Project/tu_aula.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
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
                    <img src="../../../public/Project/tu_aula.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
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
                    <img src="../../../public/Project/instagram_cosmo_belleza.webp" class="absolute w-full h-44 hover:w-72 hover:h-40 object-cover" alt="">
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
    </div>
    <div class="absolute w-full bottom-14 z-50">
      <div class="relative h-12 mt-7 ml-12 mr-12">
          <div class="absolute bottom-2 right-2 z-30 text-primary-bgLayoutLeft border border-primary-buttonText bg-primary-buttonText w-[0.70rem] h-[0.70rem] items-center">
          </div>
          <div class="absolute top-0 left-0 w-[99.8%] h-[2.8rem] bg-primary-bgLayoutLeft z-20 text-primary-bgLayoutLeft flex justify-between">
              <div class="order-1 flex justify-start space-x-7 items-center">
                  <div class="flex flex-row space-x-1">
                      <div class="w-[0.7rem] h-[2.8rem] bg-[#4C4840]"/>
                      <div class="w-[0.2rem] h-[2.8rem] bg-[#4C4840]"/>
                  </div>
                  <div class="items-center text-[#4C4840]">
                  My portfolio is under development, so there may be interface errors on certain screen sizes.
                  </div>
              </div>
              <div class="order-2 flex flex-row items-center space-x-1 mr-7">
                  <div class="w-10 h-6 rounded-md bg-[#4C4840] text-primary-bgLayoutLeft text-center items-center">
                      <div class="w-full h-full flex justify-center items-center">
                          <div class="w-8 h-5 flex justify-center text-center items-center text-sm"><p class="text-center">ESC</p></div>
                      </div>
                  </div>
                  <div class="text-[#4C4840]">
                  Back
                  </div>
              </div>
          </div>
          <div class="absolute top-[0.2rem] left-[0.15rem] z-10 bg-secundary-boxColorBack w-[99.8%] h-[2.8rem]"/>
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