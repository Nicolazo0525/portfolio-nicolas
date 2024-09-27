<script setup>
import { inject } from "vue";

const isHoveredOption = inject('isHoveredOption')

function setHoveredOption(data){
    isHoveredOption.value = data
}

</script>
<template>
    <div class="order-1 button_over cursor-pointer"><!--  @mouseover="setHoveredOption(55)"  -->
        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
            <button @mouseleave="setHoveredOption(0)"
                class="relative group inline-block px-2 overflow-hidden border-l-[4px] border-boxColor-seven hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left w-full h-8 text-primary-buttonText btn-menu hover:text-primary-default transition-colors cursor-pointer">
                
                <div class="absolute text-primary-buttonText group-hover:text-primary-default w-5 h-5 items-center top-[0.40rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path d="M16.5 7.5h-9v9h9v-9Z" />
                        <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="ml-6 ">Apache Cassandra</span>
            </button>
        </label>
    </div>
    <div class="order-1 button_over cursor-pointer">
        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText"><!--  @mouseover="setHoveredOption(56)" -->
            <button @mouseleave="setHoveredOption(0)"
                class="relative group inline-block px-2 overflow-hidden border-l-[4px] border-boxColor-seven hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left w-full h-8 text-primary-buttonText btn-menu hover:text-primary-default transition-colors cursor-pointer">
                
                <div class="absolute text-primary-buttonText group-hover:text-primary-default w-5 h-5 items-center top-[0.40rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path d="M16.5 7.5h-9v9h9v-9Z" />
                        <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="ml-6 ">CouchDB</span>
            </button>
        </label>
    </div>
    <div class="order-1 button_over cursor-pointer">
        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText"><!--  @mouseover="setHoveredOption(57)" -->
            <button @mouseleave="setHoveredOption(0)"
                class="relative group inline-block px-2 overflow-hidden border-l-[4px] border-boxColor-seven hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left w-full h-8 text-primary-buttonText btn-menu hover:text-primary-default transition-colors cursor-pointer">
                
                <div class="absolute text-primary-buttonText group-hover:text-primary-default w-5 h-5 items-center top-[0.40rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path d="M16.5 7.5h-9v9h9v-9Z" />
                        <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="ml-6 ">Firebase</span>
            </button>
        </label>
    </div>
    <div class="order-1 button_over cursor-pointer">
        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText"><!--  @mouseover="setHoveredOption(58" -->
            <button @mouseover="setHoveredOption(58)" @mouseleave="setHoveredOption(0)"
                class="relative group inline-block px-2 overflow-hidden border-l-[4px] border-boxColor-seven hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left w-full h-8 text-primary-buttonText btn-menu hover:text-primary-default transition-colors cursor-pointer">
                
                <div class="absolute text-primary-buttonText group-hover:text-primary-default w-5 h-5 items-center top-[0.40rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path d="M16.5 7.5h-9v9h9v-9Z" />
                        <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="ml-6 ">MongoDB</span>
                <div class="absolute text-primary-buttonText group-hover:text-primary-default w-5 h-5 items-center top-[0.54rem] left-[6.7rem]">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-square-rotated"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9.793 2.893l-6.9 6.9c-1.172 1.171 -1.172 3.243 0 4.414l6.9 6.9c1.171 1.172 3.243 1.172 4.414 0l6.9 -6.9c1.172 -1.171 1.172 -3.243 0 -4.414l-6.9 -6.9c-1.171 -1.172 -3.243 -1.172 -4.414 0z" />
                    </svg>
                </div>
            </button>
        </label>
    </div>
    <div class="order-1 button_over cursor-pointer">
        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText"><!--  @mouseover="setHoveredOption(59)" -->
            <button @mouseleave="setHoveredOption(0)"
                class="relative group inline-block px-2 overflow-hidden border-l-[4px] border-boxColor-seven hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left w-full h-8 text-primary-buttonText btn-menu hover:text-primary-default transition-colors cursor-pointer">
                
                <div class="absolute text-primary-buttonText group-hover:text-primary-default w-5 h-5 items-center top-[0.40rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path d="M16.5 7.5h-9v9h9v-9Z" />
                        <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <span class="ml-6 ">Redis</span>
            </button>
        </label>
    </div>
</template>
<style>

</style>