<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const toggleDarkMode = ref(document.documentElement.className === 'dark')
const toggleIsActive = ref(document.documentElement.className === 'false')


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

</script>
<template>
    <nav class=" w-full shadow-md h-20 bg-white flex border-2 border-b-secundary-buttonlagout justify-between px-12 z-40">
        <div class=" flex items-center ">
            <router-link :to="{name: 'AboutMe'}" class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">
              <img src="../../../public/logo_horizontal_grey.png" class="w-26 h-10" alt="">
            </router-link>
        </div>
        
        <div class="flex justify-center items-end text-base">
            <div class="relative px-12">
                <ul class="flex uppercase space-x-5">
                  <li class="h-11">
                    <template v-if="route.path === '/portfolio-nicolas/'">
                      <!-- <label for="AboutMe">
                        <router-link :to="{name: 'AboutMe'}" v-slot="{ href, navigate }" class="">
                          <button :href="href" @click="navigate" class="uppercase px-2 pt-1 pb-4 w-32 transition-all duration-300 bg-secundary-buttonlagout text-primary-default hover:bg-primary-buttonlagout hover:text-secundary-buttonlagout">
                            About Me
                          </button>
                        </router-link>
                      </label> -->
                      <div class="flex flex-row items-center">
                        <div class="">
                          <img src="../../../public/arrow_icon_two.png" alt="" class="z-50 w-8 rotate-[-90deg] absolute top-0 left-3 order-1">
                        </div>
                        <div class="order-2 button_over cursor-pointer">
                          <label for="AboutMe py-2" class="">
                            <router-link :to="{name: 'AboutMe'}" v-slot="{ href, navigate }" class="">
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 pt-1 pb-4 w-32 transition-all duration-300 bg-secundary-buttonlagout text-primary-default hover:bg-primary-buttonlagout hover:text-secundary-buttonlagout">
                                About Me
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
                          <label for="AboutMe" class="hover:border-y-2 py-2 border-secundary-buttonDefoult">
                            <router-link :to="{name: 'AboutMe'}" v-slot="{ href, navigate }" class="">
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout hover:text-primary-default transition-colors cursor-pointer">
                                About Me
                              </button>
                            </router-link>
                          </label>
                        </div>
                        <div class="absolute top-0 transform -translate-x-1/2 left-3 order-1 object_img animate-color-change">
                          <img src="../../../public/arrow_icon_one.png" alt="" class="z-50 w-8 rotate-[-90deg]">
                        </div>
                      </div>
                    </template>
                  </li>
                  <li class="h-11">
                    <template v-if="route.path === '/portfolio-nicolas/project/'">
                      <div class="flex flex-row items-center">
                        <div class="">
                          <img src="../../../public/arrow_icon_two.png" alt="" class="z-50 w-8 rotate-[-90deg] absolute top-0 left-[10em] order-1">
                        </div>
                        <div class="order-2 button_over cursor-pointer">
                          <label for="AboutMe py-2" class="">
                            <router-link :to="{name: 'Project'}" v-slot="{ href, navigate }" class="">
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 pt-1 pb-4 w-32 transition-all duration-300 bg-secundary-buttonlagout text-primary-default hover:bg-primary-buttonlagout hover:text-secundary-buttonlagout">
                                Projects
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
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout hover:text-primary-default transition-colors cursor-pointer">
                                Projects
                              </button>
                            </router-link>
                          </label>
                        </div>
                        <div class="absolute top-0 transform -translate-x-1/2 left-[10em] order-1 object_img animate-color-change">
                          <img src="../../../public/arrow_icon_one.png" alt="" class="z-50 w-8 rotate-[-90deg]">
                        </div>
                      </div>
                    </template>
                  </li>
                  <li>
                    <template v-if="route.path === '/portfolio-nicolas/skills/'">
                      <div class="flex flex-row items-center">
                        <div class="">
                          <img src="../../../public/arrow_icon_two.png" alt="" class="z-50 w-8 rotate-[-90deg] absolute top-0 left-[19.2em] order-1">
                        </div>
                        <div class="order-2 button_over cursor-pointer">
                          <label for="Skill" class="">
                            <router-link :to="{name: 'Skill'}" v-slot="{ href, navigate }" class="">
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 pt-1 pb-4 w-32 transition-all duration-300 bg-secundary-buttonlagout text-primary-default hover:bg-primary-buttonlagout hover:text-secundary-buttonlagout">
                                Skills
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
                            <router-link :to="{name: 'Skill'}" v-slot="{ href, navigate }" class="">
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout hover:text-primary-default transition-colors cursor-pointer">
                                Skills
                              </button>
                            </router-link>
                          </label>
                        </div>
                        <div class="absolute top-0 transform -translate-x-1/2 left-[19.2em] order-1 object_img animate-color-change">
                          <img src="../../../public/arrow_icon_one.png" alt="" class="z-50 w-8 rotate-[-90deg]">
                        </div>
                      </div>
                    </template>
                  </li>
                  <li>
                    <template v-if="route.path === '/portfolio-nicolas/certificates/'">
                      <div class="flex flex-row items-center">
                        <div class="">
                          <img src="../../../public/arrow_icon_two.png" alt="" class="z-50 w-8 rotate-[-90deg] absolute top-0 right-[20.5em] order-1">
                        </div>
                        <div class="order-2 button_over cursor-pointer">
                          <label for="Certificate" class="">
                            <router-link :to="{name: 'Certificate'}" v-slot="{ href, navigate }" class="">
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 pt-1 pb-4 w-32 transition-all duration-300 bg-secundary-buttonlagout text-primary-default hover:bg-primary-buttonlagout hover:text-secundary-buttonlagout">
                                Certificates
                              </button>
                            </router-link>
                          </label>
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <div class="flex flex-row items-center">
                        <div class="order-2 button_over cursor-pointer">
                          <label for="Certificate" class="hover:border-y-2 py-2 border-secundary-buttonDefoult">
                            <router-link :to="{name: 'Certificate'}" v-slot="{ href, navigate }" class="">
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout hover:text-primary-default transition-colors cursor-pointer">
                                Certificates
                              </button>
                            </router-link>
                          </label>
                        </div>
                        <div class="absolute top-0 transform -translate-x-1/2 right-[20.5em] order-1 object_img animate-color-change">
                          <img src="../../../public/arrow_icon_one.png" alt="" class="z-50 w-8 rotate-[-90deg]">
                        </div>
                      </div>
                    </template>
                  </li>
                  <li>
                    <template v-if="route.path === '/portfolio-nicolas/media/'">
                      <div class="flex flex-row items-center">
                        <div class="">
                          <img src="../../../public/arrow_icon_two.png" alt="" class="z-50 w-8 rotate-[-90deg] absolute top-0 right-[11.3em] order-1">
                        </div>
                        <div class="order-2 button_over cursor-pointer">
                          <label for="AboutMe py-2" class="">
                            <router-link :to="{name: 'Media'}" v-slot="{ href, navigate }" class="">
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 pt-1 pb-4 w-32 transition-all duration-300 bg-secundary-buttonlagout text-primary-default hover:bg-primary-buttonlagout hover:text-secundary-buttonlagout">
                                Media
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
                            <router-link :to="{name: 'Media'}" v-slot="{ href, navigate }" class="">
                              <button :href="href" @click="navigate" @mouseover="show = true" @mouseleave="show = false" class="uppercase px-2 py-1 w-32 bg-primary-buttonlagout z-50 p-2  hover:bg-secundary-buttonlagout hover:text-primary-default transition-colors cursor-pointer">
                                Media
                              </button>
                            </router-link>
                          </label>
                        </div>
                        <div class="absolute top-0 transform -translate-x-1/2 right-[11.3em] order-1 object_img animate-color-change">
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

.object_img{
  opacity: 0;
  transform-origin: 50% 0%;
  transition-duration: 0.25s;
}
.button_over:hover + .object_img {
  opacity: 100;
  transform: scaleY(1) skewX(0deg);
}  

nav a.active {
  font-weight: bold;
  color: blue;
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
  
  /* Icon 2 */
  
  #nav-icon2 {
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
  
  #nav-icon4 {
  }
  
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