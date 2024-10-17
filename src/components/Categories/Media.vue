<script setup>
import { inject, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const isHoveredMedia = inject('isHoveredMedia')
</script>
<template>
    <div class="flex flex-col w-full h-full px-12 pl-[30rem] pt-20 pb-[7rem]">
        
        <template v-if="isHoveredMedia === 0 || isHoveredMedia === 1">
            <div class="flex flex-row space-x-7 w-full h-full">
          
                <div class="order-1 flex flex-col w-full h-full space-y-2 overflow-y-auto">
                    <div class="order-1 w-full grid grid-rows-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                        <div class="order-1 row-span-2 col-span-2 w-full h-full">
                            <img src="../../../public/Media/cuidado_color.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="order-2 w-full h-full">
                            <img src="../../../public/Media/hidrata.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="order-3 w-full h-full">
                            <img src="../../../public/Media/oligomik.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="order-4 w-full h-full">
                            <img src="../../../public/Media/caspa.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="order-5 w-full h-full">
                            <img src="../../../public/Media/super_combo.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                    </div>
                    <div class="order-2 w-full grid grid-rows-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                        <div class="order-6 w-full h-full">
                            <img src="../../../public/Media/hidrata.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="order-7 w-full h-full">
                            <img src="../../../public/Media/minoxidil.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="order-8 row-span-2 col-span-2 w-full h-full">
                            <img src="../../../public/Media/publicacion_1_ultra_color3.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="order-9 w-full h-full">
                            <img src="../../../public/Media/oligomik.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="order-10  w-full h-full">
                            <img src="../../../public/Media/aminoacidos.jpg" class="w-full h-full object-cover" alt="">
                        </div>
                    </div>
                </div><!-- 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/em6CjV7ApvE?si=ThflcWJFx1oJRwrH" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
              </div>
        </template>
        <template v-if="isHoveredMedia === 2">
            <div class="order-2 flex flex-col w-full overflow-y-auto">
                <div class="w-full grid grid-cols-3 gap-3">
                    <div class="w-56 h-96">
                        <iframe class="w-56 h-96" width="560" height="315" src="https://www.youtube.com/embed/P5JsDthC5sY?si=kwlmiwMYnKFKpYFk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="w-56 h-96">
                        <iframe class="w-56 h-96" width="560" height="315" src="https://www.youtube.com/embed/3pb_xLQsSqA?si=lXnS2ESODbqXPawX" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="w-56 h-96">
                        <iframe class="w-56 h-96" width="560" height="315" src="https://www.youtube.com/embed/em6CjV7ApvE?si=ThflcWJFx1oJRwrH" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="w-56 h-96">
                        <iframe class="w-56 h-96" width="560" height="315" src="https://www.youtube.com/embed/em6CjV7ApvE?si=ThflcWJFx1oJRwrH" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </template>
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