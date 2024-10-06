<script setup>
import { ref, onMounted } from 'vue';
import Nav from '@/components/Nav.vue';
import Body from '@/components/Body.vue';

const dataAlbums = ref([]);

const getData = () => {
  return fetch('http://localhost:5173/src/albums.json')
  .then(res => res.json())
  .then(response => dataAlbums.value = response)
  .catch(error => console.log(error));
};

onMounted(() => {
  getData();
})
</script>


<template>
    <Nav />

    <Body 
    :albums="dataAlbums" 
    />
</template>


<style scoped>


</style>