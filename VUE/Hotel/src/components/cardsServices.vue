<script setup>
let props = defineProps({
  contentCard: {
    Type: String,
    content: String
  },
  imageCard: {
    Type: String,
    image: String
  }
});
</script>
    
<template>
  <q-card class="my-card card" flat bordered>
    <q-card-section horizontal class="cardSon">
      <q-card-section class="q-pt-xs">
        <div class="text-overline">servicios</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{props.contentCard}}</div>
        <div class="text-caption text-grey">servicios</div>
      </q-card-section>

      <q-card-section class="col-5 flex flex-center">
        <q-img class="rounded-borders img" :src='props.imageCard' />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions style="background-color:#162a2c;">
      <q-btn style="color:white" flat round icon="event" />
      <q-btn style="color:white" flat>7:30PM</q-btn>
      <q-btn style="color:green" flat >Reserve</q-btn>
    </q-card-actions>
  </q-card>
</template>

<style scoped>
.img {
  height: 100px;
  aspect-ratio: 16 / 9;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cardSon {
  display: flex;
  justify-content: space-between;
}
</style> 