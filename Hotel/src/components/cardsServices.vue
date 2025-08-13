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
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">servicios</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{props.contentCard}}</div>
        <div class="text-caption text-grey">servicios</div>
      </q-card-section>

      <q-card-section class="col-5 flex flex-center">
        <q-img class="rounded-borders" :src='props.imageCard' />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat round icon="event" />
      <q-btn flat>7:30PM</q-btn>
      <q-btn flat color="primary">Reserve</q-btn>
    </q-card-actions>
  </q-card>
</template>

<style scoped>

</style> 