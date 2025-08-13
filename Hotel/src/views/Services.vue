<script setup>
import { ref } from "vue";
import card from "../components/cardsServices.vue"
const stars = ref(0);
</script>
<template>
<div>
<card></card>
</div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
