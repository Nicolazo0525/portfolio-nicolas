<script setup>
import { inject, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const isHoveredStudy = inject('isHoveredStudy')

const getIsHoveredStudy = (data) => {
    isHoveredStudy.value = data
}

</script>
<template>
    <div class="h-full items-center z-50 absolute w-[27rem]">
        <div class="relative">
            <div class="w-full">
                <div class="flex flex-row">
                    <div class="absolute left-[3.3rem] top-1 text-secundary-buttonlagout text-4xl flex flex-row space-x-1 ">
                        <div class="text-4xl uppercase">
                            S
                        </div>
                        <div class="text-4xl uppercase">
                            T
                        </div>
                        <div class="text-4xl uppercase">
                            U
                        </div>
                        <div class="text-4xl uppercase">
                            D
                        </div>
                        <div class="text-4xl uppercase">
                            I
                        </div>
                        <div class="text-4xl uppercase">
                            E
                        </div>
                        <div class="text-4xl uppercase">
                            S
                        </div>
                    </div>
                    <!-- Tittle -->
                    <div class="absolute left-[3rem] top-0 text-primary-buttonText text-4xl flex flex-row space-x-1">
                        <div class="text-4xl uppercase">
                            S
                        </div>
                        <div class="text-4xl uppercase">
                            T
                        </div>
                        <div class="text-4xl uppercase">
                            U
                        </div>
                        <div class="text-4xl uppercase">
                            D
                        </div>
                        <div class="text-4xl uppercase">
                            I
                        </div>
                        <div class="text-4xl uppercase">
                         E
                        </div>
                        <div class="text-4xl uppercase">
                            S
                        </div>
                    </div>
                </div>
            </div>
            <template v-if="isHoveredStudy === 0 || isHoveredStudy === 1">
                <div class="absolute type_writer_option left-[15rem] text-[#4C4840] font-medium top-[0.75rem] text-lg transform transition-transform duration-500 ease-in-out">
                    <span>- Academic Degrees</span>
                </div>
            </template>
            <template v-if="isHoveredStudy === 2">
                <div class="absolute type_writer_option left-[15rem] text-[#4C4840] font-medium top-[0.75rem] text-lg transform transition-transform duration-500 ease-in-out">
                    <span>- Certificates</span>
                </div>
            </template>
        </div>
        <div class="flex flex-row ml-12 mt-20 space-x-7">
            <div class="order-1 left-0 flex flex-row space-x-1 opacity-0 transform transition-transform duration-500 ease-in-out -translate-x-full animate-slite-vertical">
                <div class="w-[0.7rem] h-full bg-primary-butonBack"/>
                <div class="w-[0.2rem] h-full bg-primary-butonBack"/>
            </div>
            <div class="relative flex flex-col order-1 w-full">
                <div class="flex flex-col justify-center w-full h-full gap-[19px]">
                    <div class="order-1 button_over cursor-pointer">
                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                            <button @click="getIsHoveredStudy(1)"
                                class="transform transition-transform duration-500 opacity-0 ease-in-out -translate-x-full animate-slide-in-one 
                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                
                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                    
                                </div>
                                <span class="ml-6 ">Academic Degrees</span>
                            </button>
                        </label>
                    </div>
                    <div class="order-1 button_over cursor-pointer">
                        <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                            <button @click="getIsHoveredStudy(2)"
                                class="transform transition-transform duration-500 ease-in-out -translate-x-full animate-slide-in-two
                                        relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                
                                <div class="absolute p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                    
                                </div>
                                <span class="ml-6 ">Certificates</span>
                            </button>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
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
</style>