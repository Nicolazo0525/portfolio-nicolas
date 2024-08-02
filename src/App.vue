<script setup>
import Layout from './components/layouts/LayoutOne.vue';
import { ref, onMounted } from 'vue';



const toggleLayout = ref(false)


const changeLayout = () => {
    if (toggleLayout.value == false) {
      toggleLayout.value = true
    }else{
      toggleLayout.value = false
    }
}
Layout
</script>

<template>
  <main class="bg-gray-100 dark:bg-gradient-to-r from-slate-900 to-blue-500 ">
    <layout/>
    <router-view></router-view>
  </main>
</template>
<style>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(239 68 68);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 104, 104);
}
</style>