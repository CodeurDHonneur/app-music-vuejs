<script setup>
import AfficheAlbum from '@/components/MainComponents/AfficheAlbum.vue';
const props = defineProps(['albums']);

</script>


<template>

<div>
    <div>

    </div>
    <div>
        <AfficheAlbum 
        v-for="album in albums" :key="album.id"
        :album="album"
        />
    </div>
</div>


</template>


<style scoped>


</style>