<script setup>
import { ref, onMounted } from 'vue';
import HeaderView from '@/views/HeaderView.vue';
import MainView from '@/views/MainView.vue';

const dataAlbums = ref([]);

const getData = () => {
  return fetch('/src/data/albums.json')
  .then(res => res.json())
  .then(response => dataAlbums.value = response)
  .catch(error => console.log(error));
};

onMounted(() => {
  getData();
})
</script>


<template>
    <!-- <HeaderView /> -->

    <!-- <MainView  :albums="dataAlbums"  /> -->
     <RouterView />
</template>


<style scoped>


</style>