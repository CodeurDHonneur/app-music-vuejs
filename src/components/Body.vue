<script setup>
import SearcheComponent from '@/componentChild/BodyChild/SearchComponent.vue';
import AfficheAlbum from '@/componentChild/BodyChild/AfficheAlbum.vue';

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