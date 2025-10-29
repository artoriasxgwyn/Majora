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
  <div>
    <q-card  style=" border: 2px solid #162a2c;" class="my-card " flat bordered >
      <q-img :src="props.imageCard" class="img"></q-img>

      <q-card-section class="color">
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">{{props.contentCard}}</div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
         
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px"></q-rating>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">$・Italian, Cafe</div>
        <div
          class="text-caption text-grey"
        >Small plates, salads & sandwiches in an intimate setting.</div>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-actions style="background-color:#162a2c;">
        <q-btn flat round style="color:white" icon="event"></q-btn>
        <q-btn flat style="color:green">Reserve</q-btn>
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
  height: 200px;
  aspect-ratio: 16 / 9;
}
.color{
  background-color: #f8f8f8;
 
}
</style>