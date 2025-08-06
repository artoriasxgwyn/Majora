<script setup>
import { ref } from "vue";
import card from "../components/cardsGastronomy.vue";
const stars = ref(0);
</script>

<template>
  <div class="Father">
    <card
      contentCard="Poutine"
      imageCard="https://www.kayak.es/rimg/dimg/dynamic/2/2022/11/f203c4cd5d6336b5732215285c1860b6.webp?width=820&crop=true"
    ></card>
    <card
      contentCard="Tourtière"
      imageCard="https://www.kayak.es/rimg/dimg/dynamic/2/2022/11/5360b5b71cff4fb5c16511ce894cd6f8.webp?width=820&crop=true"
    ></card>
    <card
      contentCard="Butter tarts"
      imageCard="https://www.kayak.es/rimg/dimg/dynamic/2/2022/11/95f13685816c61a9c5427f5eb5b1ea33.webp?width=820&crop=true"
    ></card>
    <card
      contentCard="Bagels"
      imageCard="https://www.kayak.es/rimg/dimg/dynamic/2/2022/11/64a9ff04d8963f4bb67740902d417eb3.webp?width=820&crop=true"
    ></card>
    <card
      contentCard="Trempettes"
      imageCard="https://www.kayak.es/rimg/dimg/dynamic/2/2022/11/ccd860024766139cf67f645450e28076.webp?width=820&crop=true"
    ></card>
    <card
      contentCard="Absenta de Montreal"
      imageCard="https://www.kayak.es/rimg/dimg/dynamic/2/2022/11/bd6e5453214ee01e7552f70e86434389.webp?width=820&crop=true"
    ></card>
  </div>
</template>

<style scoped>
.Father {
  display: flex;
}
</style>