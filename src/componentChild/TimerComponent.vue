<script setup>
import { ref, onMounted } from 'vue';
let heure = ref(0);
let minute = ref(0);
let seconde = ref(0);

const timer = () => {
    setInterval(() => {
        seconde.value++;
        if(seconde.value > 60){
            minute.value++;
            seconde.value = 0;
        }

        if(minute.value > 60){
            heure.value++;
            minute.value = 0;
        }
    }, 1000)
};

onMounted(() => {
    timer();
})
</script>


<template>

<div>
    Timer : 
    <span v-show="heure < 10">0</span>
    <span>{{ heure }} </span> h

    <span v-show="minute < 10">0</span>
    <span>{{ minute }} </span> min

    <span v-show="seconde < 10">0</span>
    <span>{{ seconde }} </span> s
</div>

</template>


<style scoped>


</style>