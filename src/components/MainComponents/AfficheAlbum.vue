<script setup>

const props = defineProps(['album']);

</script>


<template>

<article>
    <p>{{album.ref}}</p>
    <h3>{{album.title}}</h3>
    <p>{{ album.description }}</p>
    <ul 
    v-if="album.tags">
        <li v-for="tag in album.tags" :key="tag">{{tag}}</li>
    </ul>
    <div>
        <span>en</span>
        <div>
            <span>10</span>
        </div>
        <div>
            <span>480</span>
            min
        </div>
        <button>Details</button>
    </div>
</article>
</template>


<style scoped>


</style>