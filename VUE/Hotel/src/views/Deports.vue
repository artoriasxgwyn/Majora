<script setup>
import card from "../components/cardsDeports.vue";
</script>

<template>
  <div class="parent">
    <card class="div1" contentCard="Snowboarding" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Esqui-y-Snowboard.png"></card>
    <card class="div2" contentCard="Mountain Biking" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Mountain-biking.png"></card>
    <card class="div3" contentCard="Rafting" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Rafting.png"></card>
    <card class="div4" contentCard="Alpinismo y Escalada" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Alpinismo-y-Escalada.png"></card>
    <card class="div5" contentCard="Bungee Jumping" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Bungee-Jumping.png"></card>
    <card class="div6" contentCard="Paracaidismo" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Paracaidismo.png"></card>
  </div>
</template>

<style scoped>
.parent {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 8px;
}
    
.div1 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
}

.div2 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 3;
}

.div3 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 5;
}

.div4 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-row-start: 3;
}

.div5 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 3;
    grid-row-start: 3;
}

.div6 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 5;
    grid-row-start: 3;
}
</style>