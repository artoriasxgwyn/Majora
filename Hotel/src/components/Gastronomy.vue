<script setup>
import { ref } from 'vue'

const stars = ref(0)
</script>
<template>
<div>
 <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-h6 q-mb-xs">Poutine</div>
      <div class="row no-wrap items-center">
        <q-rating
          size="18px"
          v-model="stars"
          :max="5"
          color="primary"
        ></q-rating>
        <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
      </div>
    </q-card-section>

    <img src="https://www.kayak.es/rimg/dimg/dynamic/2/2022/11/f203c4cd5d6336b5732215285c1860b6.webp?width=820&crop=true" />
  </q-card>
   <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-h6 q-mb-xs">Tourtière</div>
      <div class="row no-wrap items-center">
        <q-rating
          size="18px"
          v-model="stars"
          :max="5"
          color="primary"
        ></q-rating>
        <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
      </div>
    </q-card-section>

    <img src="https://www.kayak.es/rimg/dimg/dynamic/2/2022/11/5360b5b71cff4fb5c16511ce894cd6f8.webp?width=820&crop=true" />
  </q-card>

   <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-h6 q-mb-xs">Butter tarts</div>
      <div class="row no-wrap items-center">
        <q-rating
          size="18px"
          v-model="stars"
          :max="5"
          color="primary"
        ></q-rating>
        <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
      </div>
    </q-card-section>

    <img src="https://www.kayak.es/rimg/dimg/dynamic/2/2022/11/95f13685816c61a9c5427f5eb5b1ea33.webp?width=820&crop=true" />
  </q-card>
</div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>