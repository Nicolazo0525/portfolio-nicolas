<script setup>
import { ref, onMounted, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isHovered = inject('isHovered');

const toggleDarkMode = ref(document.documentElement.className === 'dark')
const toggleIsActive = ref(document.documentElement.className === 'false')
const iconBottonNav = ref(12);


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle('dark')
    
    //Operador ternario
    toggleDarkMode.value ? localStorage.theme = 'dark' : localStorage.theme = 'light'
}

// Button active

if (localStorage.active === 'false' || (!('active' in localStorage))) {
  document.documentElement.classList.add('false')
} else {
  document.documentElement.classList.remove('false')
}



function changeActive(path){
  
  toggleIsActive.value = document.documentElement.classList.toggle('false')
    
  //Operador ternario
  /* if (localStorage.active = 'false' && route.path !== path) {
    localStorage.active = 'true'
  }else{
    localStorage.active = 'false'
  } */
  toggleIsActive.value ? localStorage.active = 'false' && route.path == path: localStorage.active = 'true'
  console.log(route.path)
}
if (localStorage.active === 'false' || (!('active' in localStorage))) {
  document.documentElement.classList.add('false')
} else {
  document.documentElement.classList.remove('false')
}

const valueButton = [
  {value: 1},
  {value: 2},
  {value: 3},
  {value: 4},
  {value: 5},
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

function navigateToRoute(routeName) {
  console.log(routeName)
  router.push({name: routeName})
}


function setHovered(value) {
  console.log(value)
  isHovered.value = value;
}


/* const navigateToRoute= (routeName) => {
  console.log(routeName)
  router.path.push({name: routeName})
} */

  /* function isActive(path){
    route.path == path;
    return route.path
  } */
/* function deleteOption(){
    if (isActive.value == false) {
        isActive.value = true
    }else{
        isActive.value = false
    }
    console.log(isActive.value)
}
 */
/* console.log(route.path) */
const gridItems = ref([])


const generateGridItems = () => {
  const numColums = Math.floor(window.innerWidth / 155)
  const numRows = 3
  const totalItems = numColums * numRows 
  gridItems.value = Array.from({ length: totalItems }, (_, i) => i + 1 )
}

onMounted(()=>{
  generateGridItems()
  window.addEventListener('resize', generateGridItems)
})

</script>
<template>
  <nav class="relative">
    <div @keydown="handleKeydown" tabindex="0" class="w-full shadow-md h-[4.3rem] flex border-b-2 border-b-secundary-buttonlagout justify-between px-12 z-40">
      
      <div class=" flex flex-row items-center space-x-7">
        <div class="order-2 flex flex-row space-x-1">
          <div class="w-[0.7rem] h-10 bg-primary-butonBack"/>
          <div class="w-[0.2rem] h-10 bg-primary-butonBack"/>
        </div>
        <div class="order-2">
          <router-link :to="{name: 'AboutMe'}" class="order-2 text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
            <img src="../../../public/logo_horizontal_grey.png" class="w-26 h-10" alt="">
          </router-link>
        </div>
      </div>
      
      <div class="flex justify-center items-end text-base">
          <div class="relative px-12">
              <ul class="flex uppercase space-x-6 flex-1">
                <li>
                  <template v-if="route.path === '/'">
                    <!-- <label for="AboutMe">
                      <router-link :to="{name: 'AboutMe'}" v-slot="{ href, navigate }" class="">
                        <button :href="href" @click="navigate" class="uppercase px-2 pt-1 pb-4 w-32 transition-all duration-300 bg-secundary-buttonlagout text-primary-default hover:bg-primary-buttonlagout hover:text-secundary-buttonlagout">
                          About Me
                        </button>
                      </router-link>
                    </label> -->
                    <div class="flex flex-row items-center">
                      <div class="">
                        <img src="../../../public/arrow_icon_two.png" alt="" class="w-8 pointer-events-none rotate-[-90deg] absolute top-0 left-3 order-1">
                      </div>
                      <div class="order-2 button_over cursor-pointer">
                        <label for="AboutMe py-2" class="">
                          <router-link :to="{name: 'AboutMe'}" v-slot="{ href, navigate }" class="">
                            <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" 
                              class="relative group boton-cambio-color uppercase items-center text-left px-2 pt-1 pb-4 w-36 transition-all duration-300 bg-[#4C4840] text-primary-default">
                              
                              <div class="absolute text-primary-buttonText bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span class="ml-6 ">About Me</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                    </div>
                    <!-- <router-link :to="{name: 'AboutMe'}" v-slot="{ href, navigate }" class="">
                      <button :href="href" @click="navigate" class="uppercase px-2 pt-1 pb-4 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout hover:text-primary-default transition-colors cursor-pointer">
                        About Me
                      </button>
                    </router-link> -->
                  </template>
                  <template v-else>
                    <div class="flex flex-row items-center">
                      
                      <div class="order-2 button_over cursor-pointer">
                        <label for="AboutMe" class="hover:border-y-2 py-2 border-secundary-buttonDefoult"><!-- :key="index" :class="{ active: index === countKeyButton }" -->
                          <router-link :to="{name: 'AboutMe'}" v-slot="{ href, navigate }" >
                            <button :href="href" @click="navigate" @mouseleave="show = false" value="1" 
                              class="relative group inline-block px-2 overflow-hidden uppercase items-center text-left w-36 h-8 text-primary-buttonText bg-primary-butonBack  btn-ola hover:text-primary-default transition-colors cursor-pointer">
                                
                              <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span class="ml-6 ">About Me</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                      <div class="absolute pointer-events-none top-0 transform -translate-x-1/2 left-3 image-render-auto order-1 object_img animate-color-change text-primary-default">
                        <img src="../../../public/arrow_icon_one.png" alt="" class="z-50 w-8 rotate-[-90deg] text-primary-default">
                      </div>
                    </div>
                  </template>
                </li>
                <li>
                  <template v-if="route.path === '/skills/'">
                    <div class="flex flex-row items-center">
                      <div class="">
                        <img src="../../../public/arrow_icon_two.png" alt="" class="w-8 pointer-events-none rotate-[-90deg] absolute top-0 left-[11.2em] order-1">
                      </div>
                      <div class="order-2 button_over cursor-pointer">
                        <label for="Skill" class="">
                          <router-link :to="{name: 'Skill'}" v-slot="{ href, navigate }">
                            <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" 
                            class="relative group boton-cambio-color uppercase items-center text-left px-2 pt-1 pb-4 w-36 transition-all duration-300 bg-[#4C4840] text-primary-default">
                              
                            <div class="absolute text-primary-buttonText bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                              </svg>
                              
                            </div>
                            <span class="ml-6 ">Skills</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="flex flex-row items-center">
                      <div class="order-2 button_over cursor-pointer">
                        <label for="Skill" class="hover:border-y-2 py-2 border-secundary-buttonDefoult">
                          <!-- <router-link :to="{name: 'Skill'}" v-slot="{ href, navigate }" class=""> -->
                            <!-- @mouseover="navigateToRoute('Skill')" -->
                          <router-link :to="{name: 'Skill'}" v-slot="{ href, navigate }" class="" >
                            <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" value="3"
                              class="relative group inline-block px-2 overflow-hidden uppercase items-center text-left w-36 h-8 text-primary-buttonText bg-primary-butonBack  btn-ola hover:text-primary-default transition-colors cursor-pointer">
                              
                              <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText  group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span class="ml-6 ">Skills</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                      <div class="inline-block absolute pointer-events-none top-0 transform -translate-x-1/2 left-[11.2em] order-1 object_img animate-color-change">
                        <img src="../../../public/arrow_icon_one.png" alt="" class="w-8 rotate-[-90deg]">
                      </div>
                    </div>
                  </template>
                </li>
                <li>
                  <template v-if="route.path === '/projects/'">
                    <div class="flex flex-row items-center">
                      <div class="">
                        <img src="../../../public/arrow_icon_two.png" alt="" class="w-8 pointer-events-none rotate-[-90deg] absolute top-0 left-[21.7em] order-1">
                      </div>
                      <div class="order-2 button_over cursor-pointer">
                        <label for="AboutMe py-2" class="">
                          <router-link :to="{name: 'Project'}" v-slot="{ href, navigate }" class="">
                            <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" 
                              class="relative group boton-cambio-color uppercase items-center text-left px-2 pt-1 pb-4 w-36 transition-all duration-300 bg-[#4C4840] text-primary-default">
                              
                              <div class="absolute text-primary-buttonText bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                  <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span class="ml-6 ">Projects</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="flex flex-row items-center">
                      <div class="order-2 button_over cursor-pointer">
                        <label for="AboutMe" class="hover:border-y-2 py-2 border-secundary-buttonDefoult">
                          <router-link :to="{name: 'Project'}" v-slot="{ href, navigate }" class="">
                            <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" value="2"
                              class="relative group inline-block px-2 overflow-hidden uppercase items-center text-left w-36 h-8 text-primary-buttonText bg-primary-butonBack  btn-ola hover:text-primary-default transition-colors cursor-pointer">
                                
                              <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText  group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                  <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
                                </svg>
                                
                              </div>
                              <span class="ml-6 ">Projects</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                      <div class="absolute pointer-events-none top-0 transform -translate-x-1/2 left-[21.7em] order-1 object_img animate-color-change">
                        <img src="../../../public/arrow_icon_one.png" alt="" class="w-8 rotate-[-90deg]">
                      </div>
                    </div>
                  </template>
                </li>
                <li>
                  <template v-if="route.path === '/studies/'">
                    <div class="flex flex-row items-center">
                      <div class="">
                        <img src="../../../public/arrow_icon_two.png" alt="" class="w-8 pointer-events-none rotate-[-90deg] absolute top-0 right-[22.7em] order-1">
                      </div>
                      <div class="order-2 button_over cursor-pointer">
                        <label for="Study" class="">
                          <router-link :to="{name: 'Study'}" v-slot="{ href, navigate }" class="">
                            <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" 
                            class="relative group boton-cambio-color uppercase items-center text-left px-2 pt-1 pb-4 w-36 transition-all duration-300 bg-[#4C4840] text-primary-default">
                              
                            <div class="absolute text-primary-buttonText bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                              </svg>
                            </div>
                            <span class="ml-6 ">Studies</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="flex flex-row items-center">
                      <div class="order-2 button_over cursor-pointer items-center">
                        <label for="Study" class="hover:border-y-2 py-2 border-secundary-buttonDefoult flex-1">
                          <router-link :to="{name: 'Study'}" v-slot="{ href, navigate }" class="items-center h-full">
                            <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" value="4"
                              class="relative group inline-block px-2 overflow-hidden uppercase items-center text-left w-36 h-8 text-primary-buttonText bg-primary-butonBack  btn-ola hover:text-primary-default transition-colors cursor-pointer">
                              
                              <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText  group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                                </svg>
                              </div>
                              <span class="ml-6 ">Studies</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                      <div class="absolute pointer-events-none top-0 transform -translate-x-1/2 right-[22.7em] order-1 object_img animate-color-change">
                        <img src="../../../public/arrow_icon_one.png" alt="" class="w-8 rotate-[-90deg]">
                      </div>
                    </div>
                  </template>
                </li>
                <li>
                  <template v-if="route.path === '/media/'">
                    <div class="flex flex-row items-center">
                      <div class="">
                        <img src="../../../public/arrow_icon_two.png" alt="" class="z-50 w-8 pointer-events-none rotate-[-90deg] absolute top-0 right-[12.3em] order-1">
                      </div>
                      <div class="order-2 button_over cursor-pointer">
                        <label for="AboutMe py-2" class="">
                          <router-link :to="{name: 'Media'}" v-slot="{ href, navigate }" class="">
                            <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" 
                              class="relative group boton-cambio-color uppercase items-center text-left px-2 pt-1 pb-4 w-36 transition-all duration-300 bg-[#4C4840] text-primary-default">
                                
                              <div class="absolute text-primary-buttonText bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                  <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                  <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span class="ml-6 ">Media</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="flex flex-row items-center">
                      <div class="order-2 button_over cursor-pointer">
                        <label for="Media" class="hover:border-y-2 py-2 border-secundary-buttonDefoult">
                          <router-link :to="{name: 'Media'}" v-slot="{ href, navigate }" class="">
                            <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false"
                              class="relative group inline-block px-2 overflow-hidden uppercase items-center text-left w-36 h-8 text-primary-buttonText bg-primary-butonBack btn-ola hover:text-primary-default transition-colors cursor-pointer">
                                
                              <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText  group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                  <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                  <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span class="ml-6 ">Media</span>
                            </button>
                          </router-link>
                        </label>
                      </div>
                      <div class="absolute pointer-events-none top-0 transform -translate-x-1/2 right-[12.3em] order-1 object_img row_icon animate-color-change">
                        <img src="../../../public/arrow_icon_one.png" alt="" class="z-50 w-8 rotate-[-90deg]">
                      </div>
                    </div>
                  </template>
                </li>
              </ul>
          </div>
          
      </div>
      <div class="flex justify-center">
        <label for="toogleButton" class="flex items-center  cursor-pointer">
            <div class="relative">
                <input id="toogleButton" type="checkbox" class="items-center hidden"  @click="changeDarkMode"/>
                <!-- path -->
                <div
                    class="flex items-center  cursor-pointer cm-toggle-wrapper transition ease-in-out bg-gray-200 w-9 h-5 dark:bg-slate-800 rounded-full shadow-inner"
                    >
                    <!-- crcle -->
                    <template v-if="toggleDarkMode == true">
                        <div
                        class="transition ease-in-out absolute w-3.5 h-3.5 bg-white rounded-full shadow right-0"
                        ></div>
                    </template>
                    <template v-if="toggleDarkMode == false">
                        <div
                        class="transition ease-in-out absolute w-3.5 h-3.5 bg-white rounded-full shadow left-0"
                        ></div>
                    </template>
                </div>
            </div>
        </label>
      </div>

    </div>
    <div class="flex flex-row mx-12 justify-center">
      <template v-for="(item,n) in gridItems" :key="n">
        <template v-if="n === 0">
          <div class="w-14 h-10">
            <div class="w-full grid grid-cols-2 grid-rows-1">
              <div class="w-full col-start-1 col-end-2 flex justify-start">
                <div class="w-[0.50rem] h-[0.2rem] bg-secundary-buttonlagout"></div> 
              </div>
              <div class="w-full col-start-2 col-end-2 flex justify-end">
                <div class="w-[0.25rem] h-[0.2rem] bg-secundary-buttonlagout"></div> 
              </div>
            </div>
            <div class="w-full pl-[0.20rem] flex justify-center">
              <div class="w-8 h-4 grid grid-cols-3 grid-rows-2">
                <div class="w-full col-start-1 col-end-2 flex justify-end">
                  <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                </div>
                <div class="w-full col-start-3 col-end-3 flex justify-start">
                  <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                </div>
                <div class="w-full col-start-2 col-end-2 flex justify-center">
                  <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="n >= 0 && n != gridItems.length - 1 ">
          <div class="w-14 h-10">
            <div class="w-full grid grid-cols-2 grid-rows-1">
              <div class="w-full col-start-1 col-end-2 flex justify-start">
                <div class="w-[0.25rem] h-[0.2rem] bg-secundary-buttonlagout"></div> 
              </div>
              <div class="w-full col-start-2 col-end-2 flex justify-end">
                <div class="w-[0.25rem] h-[0.2rem] bg-secundary-buttonlagout"></div> 
              </div>
            </div>
            <div class="w-full flex justify-center">
              <div class="w-8 h-4 grid grid-cols-3 grid-rows-2">
                <div class="w-full col-start-1 col-end-2 flex justify-end">
                  <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                </div>
                <div class="w-full col-start-3 col-end-3 flex justify-start">
                  <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                </div>
                <div class="w-full col-start-2 col-end-2 flex justify-center">
                  <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="n >= gridItems.length - 1">
          <div class="w-14 h-10">
            <div class="w-full grid grid-cols-2 grid-rows-1">
              <div class="w-full col-start-1 col-end-2 flex justify-start">
                <div class="w-[0.25rem] h-[0.2rem] bg-secundary-buttonlagout"></div> 
              </div>
              <div class="w-full col-start-2 col-end-2 flex justify-end">
                <div class="w-[0.50rem] h-[0.2rem] bg-secundary-buttonlagout"></div> 
              </div>
            </div>
            <div class="w-full pr-[0.25rem] flex justify-center">
              <div class="w-8 h-4 grid grid-cols-3 grid-rows-2">
                <div class="w-full col-start-1 col-end-2 flex justify-end">
                  <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                </div>
                <div class="w-full col-start-3 col-end-3 flex justify-start">
                  <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                </div>
                <div class="w-full col-start-2 col-end-2 flex justify-center">
                  <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                </div>
              </div>
            </div>
          </div>
        </template>
        
      </template>
      
    </div>
  </nav>
    
</template>
<!-- @keyframes color-change {
  0% {
    filter: hue-rotate(0deg) brightness(0%);
  }
  100% {
    filter: hue-rotate(360deg) brightness(400%);
  }
}
.animate-color-change {
  animation: color-change 3s linear infinite;
} -->
<style>
.flag::after {
  content: " 🇨🇴";
}

.btn-ola::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #4C4840;
  transition: left 0.1s ease;
  z-index: 0;
}

.btn-ola:hover::before {
  left: 0%;
}

.btn-ola span {
  position: relative;
  z-index: 1;
}


.active {
  background-color: #ffcc00; /* Cambia el color aquí */
}
.object_img{
  opacity: 0;
  transform-origin: 50% 0%;
  transition-duration: 0.25s;
  filter: brightness(10%) saturate(45%) invert(35%) sepia(33%) saturate(200%) hue-rotate(20deg) brightness(95%) contrast(100%) grayscale(10%);
}
.button_over:hover + .object_img {
  opacity: 100;
  transform: scaleY(1) skewX(0deg);
}  

@keyframes cambioColor {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity:0.7;
  }
}

.boton-cambio-color {
  animation: cambioColor 1.5s infinite;
}

* {
    margin: 0;
    padding: 0; 
  }
  
  /* Icon 1 */
  
  #nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4 {
    width: 60px;
    height: 45px;
    position: relative;
    margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
#nav-icon1 span, #nav-icon3 span, #nav-icon4 span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  
  #nav-icon1 span:nth-child(1) {
    top: 0px;
  }
  
  #nav-icon1 span:nth-child(2) {
    top: 18px;
  }
  
  #nav-icon1 span:nth-child(3) {
    top: 36px;
  }
  
  #nav-icon1.open span:nth-child(1) {
    top: 18px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  
  #nav-icon1.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }
  
  #nav-icon1.open span:nth-child(3) {
    top: 18px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  
  #nav-icon2 span {
    display: block;
    position: absolute;
    height: 9px;
    width: 50%;
    background: #d3531a;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  
  #nav-icon2 span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }
  
  #nav-icon2 span:nth-child(odd) {
    left:0px;
    border-radius: 9px 0 0 9px;
  }
  
  #nav-icon2 span:nth-child(1), #nav-icon2 span:nth-child(2) {
    top: 0px;
  }
  
  #nav-icon2 span:nth-child(3), #nav-icon2 span:nth-child(4) {
    top: 18px;
  }
  
  #nav-icon2 span:nth-child(5), #nav-icon2 span:nth-child(6) {
    top: 36px;
  }
  
  #nav-icon2.open span:nth-child(1),#nav-icon2.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
  #nav-icon2.open span:nth-child(2),#nav-icon2.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  
  #nav-icon2.open span:nth-child(1) {
    left: 5px;
    top: 7px;
  }
  
  #nav-icon2.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }
  
  #nav-icon2.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }
  
  #nav-icon2.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }
  
  #nav-icon2.open span:nth-child(5) {
    left: 5px;
    top: 29px;
  }
  
  #nav-icon2.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 29px;
  }
  
  /* Icon 3 */
  
  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }
  
  #nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
    top: 18px;
  }
  
  #nav-icon3 span:nth-child(4) {
    top: 36px;
  }
  
  #nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
  
  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  
  #nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
  
  /* Icon 4 */
  
  
  #nav-icon4 span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  
  #nav-icon4 span:nth-child(2) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  
  #nav-icon4 span:nth-child(3) {
    top: 36px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  
  #nav-icon4.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
  }
  
  #nav-icon4.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }
  
  #nav-icon4.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
  }
</style>