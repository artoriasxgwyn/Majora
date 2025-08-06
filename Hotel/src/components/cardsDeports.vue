<script setup>
let props = defineProps({
  contentCard: {
    require: true,
    content: String,
  },
  imageCard:{
    require: true,
    content: String,
  }
});
</script>
<template>
  <div>
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img class="col-5" :src='props.imageCard' />

        <q-card-section>{{props.contentCard}}</q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>5:30PM</q-btn>
        <q-btn flat>7:00PM</q-btn>
        <q-btn flat color="primary">Reserve</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>

  