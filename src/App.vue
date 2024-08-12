<script setup>
import Layout from './components/layouts/LayoutOne.vue';
import { ref, onMounted } from 'vue';



const toggleLayout = ref(false)

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
// asas

const toggleDarkMode = ref(document.documentElement.className === 'dark')


const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle('dark')
    
    //Operador ternario
    toggleDarkMode.value ? localStorage.theme = 'dark' : localStorage.theme = 'light'
}

const isDarkMode = ref(true)

/* function toggleDarkModeOne(){
  isDarkMode.value = !isDarkMode.value;
} */
const changeLayout = () => {
    if (toggleLayout.value == false) {
      toggleLayout.value = true
    }else{
      toggleLayout.value = false
    }
}

</script>

<template>
    <main>
      {{ toggleDarkMode }}
      <div :class="{'dark-mode':toggleDarkMode}" class="example">
        <layout/>
        <router-view></router-view>
      </div>
    </main>
  
  
</template>
<style >
.example {
  color: red;
}
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


/* Track */
.dark-mode::-webkit-scrollbar-track {
  background: #6d7b9e; 
  border-radius: 5px;
}

/* Handle */
.dark-mode::-webkit-scrollbar-thumb {
  background: #0B1120;
  border-radius: 5px;
}

/* Handle on hover */
.dark-mode::-webkit-scrollbar-thumb:hover {
  background: #273455;
}
</style>
