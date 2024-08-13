<script setup>
import Layout from './components/layouts/LayoutOne.vue';
import { ref, onMounted } from 'vue';


</script>

<template>
    <main>
      <div>
        <layout/>
        <router-view></router-view>
      </div>
    </main>
  
  
</template>