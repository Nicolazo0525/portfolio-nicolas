<script setup>
import { inject, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import SoftSkill from "./SecondOptions/SoftSkill.vue";
import ProgrammingLanguages from "./SecondOptions/ProgrammingLanguages.vue";
import StyleSheetLanguages from "./SecondOptions/StyleSheetLanguages.vue";
import FrameworkFrontend from "./SecondOptions/FrameworkFrontend.vue";
import FrameworkBackend from "./SecondOptions/FrameworkBackend.vue";
import RelationalDatabases from "./SecondOptions/RelationalDatabases.vue";
import NonRelationalDatabases from "./SecondOptions/NonRelationalDatabases.vue";
import VersionControl from "./SecondOptions/VersionControl.vue";


const route = useRoute()
const router = useRouter()
const isHovered = inject('isHovered')
// Skills
const isHoveredPrimary = inject('isHoveredPrimary')
const isHoveredOption = inject('isHoveredOption')
const buttonOption = ref(0)
const buttonOptionText = ref('')

// Change button option menu 
const buttonOptionMenu = (option) =>{
    buttonOption.value = option
    switch (buttonOption.value) {
        case 1:
            buttonOptionText.value = 'Soft Skills'
            break;
        case 2:
            buttonOptionText.value = 'Programming Languages'
            break;
        case 3:
            buttonOptionText.value = 'Style Sheet Languages'
            break;
        case 4:
            buttonOptionText.value = 'Frameworks Frontend'
            break;
        case 5:
            buttonOptionText.value = 'Frameworks Backend'
            break;
        case 6:
            buttonOptionText.value = 'Relational Databases'
            break;
        case 7:
            buttonOptionText.value = 'Non-Relational Databases'
            break;
        case 8:
            buttonOptionText.value = 'Version Control'
            break;

        default:
            break;
    }
}



function setHovered(value) {
  console.log(value)
  isHovered.value = value;
}

function setHoveredPrimary(data){
    isHoveredPrimary.value = data
}

function setHoveredOption(data){
    isHoveredOption.value = data
}

// back rout

const handleKeydown = (event) => {
    if (event.key == 'Escape') {
        // Retroceder una página
        buttonOption.value = 0
        isHoveredOption.value = 0
        console.log(buttonOption.value)
    }
}

// Agrego listener a el evento del teclado
onMounted(()=>{
    window.addEventListener('keydown', handleKeydown)
})
// Elimino el evento
onBeforeUnmount(()=>{
    window.addEventListener('keydown', handleKeydown)
})

</script>

<template>
    <div class="h-full items-center z-50 absolute w-[27rem]">
        <!-- Skills layout -->
        <template v-if="route.path === '/skills/'">
            <div class="flex flex-col flex-1">
                <!-- Title Shadow -->
                <div>
                    <div class="w-full">
                        <div class="flex flex-row">
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
                            <div class="absolute left-[3rem] top-0 text-primary-buttonText text-4xl flex flex-row space-x-1">
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
                        </div>
                        <template v-if="buttonOption != 0">
                            <div class="absolute type_writer_option left-[13rem] text-[#4C4840] font-medium top-[0.75rem] text-lg transform transition-transform duration-500 ease-in-out">
                                <span>- {{ buttonOptionText }}</span>
                            </div>
                        </template>
                    </div>
                    <div class="flex flex-row ml-12 mt-20 space-x-7 h-[24.5rem]">
                        <div class="order-1 left-0 flex flex-row space-x-1 opacity-0 transform transition-transform duration-500 ease-in-out -translate-x-full animate-slite-vertical">
                            <div class="w-[0.7rem] h-full bg-primary-butonBack"/>
                            <div class="w-[0.2rem] h-full bg-primary-butonBack"/>
                        </div>
                        <div class="relative flex flex-col order-1 w-full">
                            <template v-if="buttonOption === 0">
                                <div class="flex flex-col justify-center w-full h-full gap-[19px]">
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @click="buttonOptionMenu(1), setHoveredPrimary(0)" @mouseover="setHoveredPrimary(1)" @mouseleave="setHoveredPrimary(0)"
                                                class="transform transition-transform duration-500 opacity-0 ease-in-out -translate-x-full animate-slide-in-one 
                                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                                
                                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <div class="triangle-one w-5 h-5"></div>
                                                </div>
                                                <span class="ml-6 ">Soft Skills</span>
                                            </button>
                                        </label>
                                    </div>
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @click="buttonOptionMenu(2), setHoveredPrimary(0)" @mouseover="setHoveredPrimary(2)" @mouseleave="setHoveredPrimary(0)"
                                                class="transform transition-transform duration-500 ease-in-out -translate-x-full animate-slide-in-two
                                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                                
                                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <div class="triangle-two w-5 h-5"></div>
                                                </div>
                                                <span class="ml-6 ">Programming Languages</span>
                                            </button>
                                        </label>
                                    </div>
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @click="buttonOptionMenu(3), setHoveredPrimary(0)" @mouseover="setHoveredPrimary(3)" @mouseleave="setHoveredPrimary(0)"
                                                class="transform transition-transform duration-500 ease-in-out -translate-x-full animate-slide-in-three
                                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                                
                                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <div class="triangle-three w-5 h-5"></div>
                                                </div>
                                                <span class="ml-6 ">Style Sheet Languages</span>
                                            </button>
                                        </label>
                                    </div>
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @click="buttonOptionMenu(4), setHoveredPrimary(0)" @mouseover="setHoveredPrimary(4)" @mouseleave="setHoveredPrimary(0)"
                                                class="transform transition-transform duration-500 ease-in-out -translate-x-full animate-slide-in-four
                                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                                
                                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <div class="triangle-four w-5 h-5"></div>
                                                </div>
                                                <span class="ml-6 ">Frameworks Fronted</span>
                                            </button>
                                        </label>
                                    </div>
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @click="buttonOptionMenu(5), setHoveredPrimary(0)" @mouseover="setHoveredPrimary(5)" @mouseleave="setHoveredPrimary(0)"
                                                class="transform transition-transform duration-500 ease-in-out -translate-x-full animate-slide-in-five
                                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                                
                                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <div class="triangle-five w-5 h-5"></div>
                                                </div>
                                                <span class="ml-6 ">Frameworks Backend</span>
                                            </button>
                                        </label>
                                    </div>
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @click="buttonOptionMenu(6), setHoveredPrimary(0)" @mouseover="setHoveredPrimary(6)" @mouseleave="setHoveredPrimary(0)"
                                                class="transform transition-transform duration-500 ease-in-out -translate-x-full animate-slide-in-six
                                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                                
                                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <div class="triangle-six w-5 h-5"></div>
                                                </div>
                                                <span class="ml-6 ">Relational Databases</span>
                                            </button>
                                        </label>
                                    </div>
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @click="buttonOptionMenu(7), setHoveredPrimary(0)" @mouseover="setHoveredPrimary(7)" @mouseleave="setHoveredPrimary(0)"
                                                class="transform transition-transform duration-500 ease-in-out -translate-x-full animate-slide-in-seven
                                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                                
                                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <div class="triangle-six w-5 h-5"></div>
                                                </div>
                                                <span class="ml-6 ">Non-relational Databases</span>
                                            </button>
                                        </label>
                                    </div>
                                    <div class="order-1 button_over cursor-pointer">
                                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                            <button @click="buttonOptionMenu(8), setHoveredPrimary(0)" @mouseover="setHoveredPrimary(8)" @mouseleave="setHoveredPrimary(0)"
                                                class="transform transition-transform duration-500 ease-in-out -translate-x-full animate-slide-in-eight
                                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                                
                                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <div class="triangle-eight w-5 h-5"></div>
                                                </div>
                                                <span class="ml-6 ">Version Control</span>
                                            </button>
                                        </label>
                                    </div>
                                </div>
                            </template>
                            <!-- Second menu -->
                            <template v-if="buttonOption != 0">
                                <div class="absolute top-0 left-0 z-20 flex flex-col bg-primary-bgLayoutLeft w-[21.1rem] h-[24.2rem] py-2 pr-3">
                                    <div class="flex flex-row justify-between items-center space-x-1 ml-3 mb-1">
                                        <hr class="border-[1px] w-full border-secundary-boxColorBack">
                                        <div class="flex justify-end">
                                            <hr class="border-[1px] w-1 h-1 bg-secundary-boxColorBack rounded-full border-secundary-boxColorBack">
                                        </div>
                                    </div>
                                    <div class="h-full space-y-2 pb-3 overflow-y-auto pr-2">
                                        <div class="flex flex-row py-2 pl-1 items-center text-primary-buttonText">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                    <path fill-rule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <span>Sort: Equipped</span>
                                            </div>
                                        </div>
                                        <template v-if="buttonOption === 1">
                                            <SoftSkill></SoftSkill>
                                        </template>
                                        <template v-if="buttonOption === 2">
                                            <ProgrammingLanguages></ProgrammingLanguages>
                                        </template>
                                        <template v-if="buttonOption === 3">
                                            <StyleSheetLanguages></StyleSheetLanguages>
                                        </template>
                                        <template v-if="buttonOption === 4">
                                            <FrameworkFrontend></FrameworkFrontend>
                                        </template>
                                        <template v-if="buttonOption === 5">
                                            <FrameworkBackend></FrameworkBackend>
                                        </template>
                                        <template v-if="buttonOption === 6">
                                            <RelationalDatabases></RelationalDatabases>
                                        </template>
                                        <template v-if="buttonOption === 7">
                                            <NonRelationalDatabases></NonRelationalDatabases>
                                        </template>
                                        <template v-if="buttonOption === 8">
                                            <VersionControl></VersionControl>
                                        </template>
                                    </div>
                                    <div class="flex flex-row justify-between items-center space-x-1 ml-3 mt-1">
                                        <hr class="border-[1px] w-full border-secundary-boxColorBack">
                                        <div class="flex justify-end">
                                            <hr class="border-[1px] w-1 h-1 bg-primary-buttonText rounded-full border-primary-buttonText">
                                        </div>
                                    </div>
                                </div>
                                <div class="my-0 absolute top-[0.2rem] left-[0.2rem] z-10 bg-secundary-boxColorBack w-[21.1rem] h-[24.2rem]"/>
                            </template>
                            
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<style>
/* Animation title option */

@keyframes typing{
    from {width: 0;}
    to {width: 100%;}
}

@keyframes slide-in-option {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.type_writer_option{

    display: inline-block;
    /*asegura que el texto permanezca oculto hasta que se revele*/
    overflow: hidden;
    /*Evita que el texto se envuelva*/
    white-space: nowrap;
    animation: slide-in-option 0.5s ease-in-out forwards ,typing 2s steps(40, end);
}
/* animation slide menu */

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes vertical-slide-in {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slide-in {
    from {

        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}


.animate-slite-vertical{
    animation: vertical-slide-in 0.5s ease-in-out forwards;
}

.animate-slide-in-one{
    animation: slide-in 0.3s ease-in-out forwards, fade-in 1s ease-in-out forwards;
}
.animate-slide-in-two{
    animation: slide-in 0.4s ease-in-out forwards, fade-in 1.1s ease-in-out forwards;
}
.animate-slide-in-three{
    animation: slide-in 0.5s ease-in-out forwards, fade-in 1.2s ease-in-out forwards;
}
.animate-slide-in-four{
    animation: slide-in 0.6s ease-in-out forwards, fade-in 1.3s ease-in-out forwards;
}
.animate-slide-in-five{
    animation: slide-in 0.7s ease-in-out forwards, fade-in 1.4s ease-in-out forwards;
}
.animate-slide-in-six{
    animation: slide-in 0.8s ease-in-out forwards, fade-in 1.5s ease-in-out forwards;
}
.animate-slide-in-seven{
    animation: slide-in 0.9s ease-in-out forwards, fade-in 1.6s ease-in-out forwards;
}
.animate-slide-in-eight{
    animation: slide-in 1s ease-in-out forwards, fade-in 1.7s ease-in-out forwards;
}



.triangle-one {
    background-image:
      linear-gradient(to bottom right, #8c8068 25%, transparent 0),
      linear-gradient(to top right, #8c8068 0, transparent 0);
    background-repeat: no-repeat;
    background-position: left, right;
}

.triangle-two {
    background-image:
      linear-gradient(to bottom right, #cc846b 25%, transparent 0),
      linear-gradient(to top right, #cc846b 0, transparent 0);
    background-repeat: no-repeat;
    background-position: left, right;
}

.triangle-three {
    background-image:
      linear-gradient(to bottom right, #ad9065 25%, transparent 0),
      linear-gradient(to top right, #ae9a7d 0, transparent 0);
    background-repeat: no-repeat;
    background-position: left, right;
}

.triangle-four {
    background-image:
      linear-gradient(to bottom right, #CCC398 25%, transparent 0),
      linear-gradient(to top right, #CCC398 0, transparent 0);
    background-repeat: no-repeat;
    background-position: left, right;
}

.triangle-five {
    background-image:
      linear-gradient(to bottom right, #E2D9A7 25%, transparent 0),
      linear-gradient(to top right, #E2D9A7 0, transparent 0);
    background-repeat: no-repeat;
    background-position: left, right;
}

.triangle-six {
    background-image:
      linear-gradient(to bottom right, #F7DEC0 25%, transparent 0),
      linear-gradient(to top right, #F7DEC0 0, transparent 0);
    background-repeat: no-repeat;
    background-position: left, right;
}

.triangle-seven {
    background-image:
      linear-gradient(to bottom right, #FFECD6 25%, transparent 0),
      linear-gradient(to top right, #FFECD6 0, transparent 0);
    background-repeat: no-repeat;
    background-position: left, right;
}
.triangle-eight {
    background-image:
      linear-gradient(to bottom right, #ffffff 25%, transparent 0),
      linear-gradient(to top right, #ffffff 0, transparent 0);
    background-repeat: no-repeat;
    background-position: left, right;
}

.btn-menu::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #4F4C43;
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