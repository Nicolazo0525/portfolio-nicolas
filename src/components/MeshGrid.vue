<script setup>
import { ref, onMounted } from 'vue';

/* const gridItems = ref(Array.from( { lenght:100 }, (_, i) => i + 1 ))
 */

const gridItems = ref([])

const generateGridItems = () =>{

    const numColums = Math.ceil(window.innerWidth / 50)
    const numRows = Math.ceil(window.innerHeight / 50)
    const totalItems = numColums* numRows
    gridItems.value = Array.from({ length: totalItems }, (_, i) => i + 1 )
    console.log(totalItems+'   '+ gridItems)
}

onMounted(()=>{
    generateGridItems()
    window.addEventListener('resize', generateGridItems)
})


</script>

<template>
    <div class="grid-container">
        <div v-for="n in gridItems" :key="n" class="grid-item"></div>
    </div>
</template>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
    margin: 0;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(5px, 1fr));
    width: 100vw;
    height: 100vh;
  }
  .grid-item {
    border: 1px solid #888;
    animation: borderAnimation 2s infinite;
  }
  @keyframes borderAnimation {
    0% {
      border-color: #888;
    }
    50% {
      border-color: #bbb;
    }
    100% {
      border-color: #888;
    }
  }
</style>