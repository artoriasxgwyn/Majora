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
    <q-card class="my-card color" flat bordered>
      <q-card-section style="background-color:#162a2c;">
        <div style="color:white" class="text-h6 q-mb-xs">{{props.contentCard}}</div>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="primary"></q-rating>
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
        </div>
      </q-card-section>

      <img :src="props.imageCard" class="img"/>
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
  height: 250px;
  aspect-ratio: 16 / 9;
}
.color{
  background-color: #f8f8f8;
  border: 2px solid #162a2c;
}
</style>

 