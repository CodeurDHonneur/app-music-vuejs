<script setup>


</script>


<template>

<div class="bsod container">
  <h2 class="neg title"><span class="bg">Error - 404</span></h2>
  <p>Aucune correspondance trouvée pour la route que vous désirez !</p>

  <div class="nav">
    <a href="#" class="link">Page précédente</a>&nbsp;|&nbsp;<a href="#" class="link">Accueil</a>
  </div>
</div>

</template>


<style scoped>

h2,
p,
a { color: #e0e2f4; }


p { font: normal 20px/1.25rem monospace; }
h2 { font: normal 2.75rem/1.05em monospace; }

.container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: linear-gradient(135deg, #1e3c72, #2a5298);; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.neg {
    text-align: center;
    color: blue;  
}
.bg {
    background: #aaaaaa;;
    padding: 0 15px 2px 13px;
}
.title { margin-bottom: 50px; }
.nav {
    margin-top: 35px;
    text-align: center;
}
.link {
    text-decoration: none;
    padding: 0 9px 2px 8px;   
}
.link:hover,
.link:focus 
{
    background: #aaaaaa;;
    color: #0414a7;
}
</style>