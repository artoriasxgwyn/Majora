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
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6 q-mb-xs">{{props.contentCard}}</div>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="primary"></q-rating>
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
        </div>
      </q-card-section>

      <img :src="props.imageCard" />
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
    width: 100%
    max-width: 350px
</style>

 