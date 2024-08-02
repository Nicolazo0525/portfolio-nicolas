<script setup>
import { ref, onMounted } from 'vue';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const toggleDarkMode = ref(document.documentElement.className === 'dark')


const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle('dark')
    
    //Operador ternario
    toggleDarkMode.value ? localStorage.theme = 'dark' : localStorage.theme = 'light'
}

</script>
<template>
    <div class="shadow-md h-16 w-full bg-white z-50 flex justify-between px-12">
        <div class=" flex items-center ">
            <router-link :to="{name: 'Home'}" class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</router-link>
        </div>
        <div class="hidden md:flex items-center gap-5">
            <div>
                <ul class="flex gap-5 text-base font-bold">
                    
                </ul>
            </div>
            <div class="flex justify-center">
                <label for="toogleButton" class="flex items-center cursor-pointer">
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
                                class="transition ease-in-out absolute w-3.5 h-3.5 bg-white rounded-full  shadow left-0"
                                ></div>
                            </template>
                        </div>
                    </div>
                </label>
           </div>
        </div>
    </div>
</template>
<style>
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