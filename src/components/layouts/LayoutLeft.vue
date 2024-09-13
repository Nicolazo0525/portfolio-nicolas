<script setup>
import { provide, inject, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const isHovered = inject('isHovered')
const isHoveredOption = inject('isHoveredOption')
const buttonOption = ref('primary')

// Change button option menu 
const buttonOptionMenu = (option) =>{
    buttonOption.value = option
}

function setHovered(value) {
  console.log(value)
  isHovered.value = value;
}


function setHoveredOption(data){
    console.log(data)
    isHoveredOption.value = data
}

</script>

<template>
    <main class="h-full items-center">
        <!-- Skills layout -->
        <template v-if="route.path === '/skills/'">
            <div class="relative flex flex-col flex-1">
                <!-- Title Shadow -->
                <div>
                    <div class="absolute left-[3.3rem] top-1 text-secundary-buttonlagout text-4xl flex flex-row space-x-1 ">
                        <div class="text-4xl uppercase">
                            s
                        </div>
                        <div class="text-4xl uppercase">
                            k
                        </div>
                        <div class="text-4xl uppercase">
                            i
                        </div>
                        <div class="text-4xl uppercase">
                            l
                        </div>
                        <div class="text-4xl uppercase">
                            l
                        </div>
                        <div class="text-4xl uppercase">
                            s
                        </div>
                    </div>
                    <!-- Tittle -->
                    <div class="absolute left-[3rem] top-0 text-primary-buttonText text-4xl flex flex-row space-x-1 ">
                        <div class="text-4xl uppercase">
                            s
                        </div>
                        <div class="text-4xl uppercase">
                            k
                        </div>
                        <div class="text-4xl uppercase">
                            i
                        </div>
                        <div class="text-4xl uppercase">
                            l
                        </div>
                        <div class="text-4xl uppercase">
                            l
                        </div>
                        <div class="text-4xl uppercase">
                            s
                        </div>
                    </div>
                    <div class="flex flex-row ml-11 mt-20 space-x-7 h-72 w-60">
                        <div class="order-1 left-0 flex flex-row space-x-1">
                            <div class="w-[0.7rem] h-full bg-primary-butonBack"/>
                            <div class="w-[0.2rem] h-full bg-primary-butonBack"/>
                        </div>
                        <div class="flex flex-col order-2 pt-10 space-y-5">
                            <template v-if="buttonOption === 'primary'">
                                <div class="order-2 flex flex-col space-x-1 ">
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @click="buttonOptionMenu('secondary'), setHovered(false)" @mouseover="setHovered(true)" @mouseleave="setHovered(false)"
                                                class="relative group inline-block px-2 overflow-hidden hover:shadow-sm hover:h-[2.1rem] hover:w-[15.1rem] hover:shadow-gray-500 uppercase items-center text-left w-60 h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default transition-colors cursor-pointer">
                                                
                                                <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                                    <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                                                </svg>
                                                </div>
                                                <span class="ml-6 ">Skills</span>
                                            </button>
                                        </label>
                                    </div>
                                </div>
                            </template>
                            <template v-if="buttonOption === 'secondary'">
                                <div class="order-2 flex flex-col space-x-1">
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @mouseover="setHoveredOption(1)" @mouseleave="setHoveredOption(0)"
                                                class="relative group inline-block px-2 overflow-hidden hover:shadow-sm hover:h-[2.1rem] hover:w-[15.1rem] hover:shadow-gray-500 uppercase items-center text-left w-60 h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default transition-colors cursor-pointer">
                                                
                                                <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                                        <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span class="ml-6 ">Secondary One</span>
                                            </button>
                                        </label>
                                    </div>
                                </div>
                            </template>
                            <template v-if="buttonOption === 'secondary'">
                                <div class="order-2 flex flex-col space-x-1">
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @mouseover="setHoveredOption(2)" @mouseleave="setHoveredOption(0)"
                                                class="relative group inline-block px-2 overflow-hidden hover:shadow-sm hover:h-[2.1rem] hover:w-[15.1rem] hover:shadow-gray-500 uppercase items-center text-left w-60 h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default transition-colors cursor-pointer">
                                                
                                                <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                                        <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span class="ml-6 ">Secondary Two</span>
                                            </button>
                                        </label>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>

            </div>
        </template>
        <template v-if="route.path === '/projects/'">
            <div class="">
                Projects
            </div>
        </template>
        <template v-if="route.path === '/certificates/'">
            <div class="">
                certificates
            </div>
        </template>
        <template v-if="route.path === '/media/'">
            <div class="">
                Media
            </div>
        </template>
    </main>
</template>

<style>
.btn-menu::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #362c3a;
    transition: left 0.1s ease;
    z-index: 0;
}

.btn-menu:hover::before {
    left: 0%;
}

.btn-menu span {
    position: relative;
    z-index: 1;
}
  
</style>