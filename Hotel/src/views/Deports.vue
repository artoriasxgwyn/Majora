<script setup>
import card from "../components/cardsDeports.vue";
</script>

<template>
  <div class="Father">
    <card contentCard="Snowboarding" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Esqui-y-Snowboard.png"></card>
    <card contentCard="Mountain Biking" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Mountain-biking.png"></card>
    <card contentCard="Rafting" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Rafting.png"></card>
    <card contentCard="Alpinismo y Escalada" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Alpinismo-y-Escalada.png"></card>
    <card contentCard="Bungee Jumping" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Bungee-Jumping.png"></card>
    <card contentCard="Paracaidismo" imageCard="https://www.nomadasexperience.com/wp-content/uploads/2022/04/Paracaidismo.png"></card>
  </div>
</template>

<style scoped>
.Father {
  display: flex;
}
</style>