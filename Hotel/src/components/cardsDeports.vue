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
    <q-card style="  border: 2px solid #162a2c;" class="my-card">
      <q-card-section horizontal style="  background-color: #f8f8f8;">
        <q-img class="col-5 img" :src='props.imageCard' />

        <q-card-section>{{props.contentCard}}</q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions style="background-color:#162a2c;">
        <q-btn style="color:white" flat round icon="event" />
        <q-btn style="color:white" flat>5:30PM</q-btn>
        <q-btn style="color:white" flat>7:00PM</q-btn>
        <q-btn style="color:green" flat >Reserve</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
<style scoped>
.img {
  height: 130px;
  aspect-ratio: 16 / 9;
}
</style>

  