<script setup>
import TimerComponent from "@/componentChild/TimerComponent.vue";

</script>


<template>

<header class="header">
    <div class="logo-nav">
        <p><a href="#">muzart</a></p>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Se Connecter</a></li>
            </ul>
        </nav>
    </div>
    <TimerComponent />
</header>

</template>


<style scoped>
.header {
    display: flex;
    justify-content: space-between;
}

.logo-nav {
     display: flex;
     gap: 20px;
}
.logo-nav nav ul {
     display: flex;
     gap: 20px;
}
ul {
    list-style: none;
    padding-left: 0;
}
a {
    text-decoration: none;
}
</style>