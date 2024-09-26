<script setup>
import { onMounted, ref } from 'vue';

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
    <div class="absolute z-50 bottom-[0.15rem] w-full h-10 border-t-2 border-t-secundary-buttonlagout">
        <div class="flex flex-row mx-12 justify-center">
            <template v-for="n in gridItems" :key="n">
              
                <div class="w-14 h-10">
                    <div class="w-full grid grid-cols-2 grid-rows-1">
                        <div class="w-full col-start-1 col-end-2 flex justify-start">
                            <div class="w-[0.50rem] h-[0.2rem] bg-secundary-buttonlagout"></div> 
                        </div>
                    </div>
                <div class="w-full ml-[0.25rem] h-4 grid grid-cols-3 grid-rows-2">
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
            </template>
            <div class="w-14 h-10">
                <div class="w-full grid grid-cols-3 grid-rows-1">
                    <div class="w-full col-start-1 col-end-2 flex justify-start">
                        <div class="w-[0.50rem] h-[0.2rem] bg-secundary-buttonlagout"></div> 
                    </div>
                    <div class="w-full col-start-3 col-end-3 flex justify-end">
                        <div class="w-[0.50rem] h-[0.2rem] bg-secundary-buttonlagout"></div> 
                    </div>
                </div>
                <div class="w-full h-4 grid grid-cols-3 grid-rows-2">
                    <div class="w-full col-start-2 col-end-2 flex justify-between">
                        <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                        <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                    </div>
                    <div class="w-full col-start-2 col-end-2 flex justify-center">
                        <div class="w-[0.25rem] h-[0.25rem] rounded-full bg-secundary-buttonlagout"></div>
                    </div>
                </div>
            </div>
          </div>
    </div>
</template>