<script setup>
import { ref } from "vue";
const props = defineProps({
  CardTitle: {
    required: true,
    type: String
  },
  CardImage: {
    required: true,
    type: String
  },
  Carddescription: {
    required: true,
    type: String
  },
  CardBoton: {
    required: true,
    type: Function
  },
  TextButton: {
    required: true,
    type: Function
  }
});
</script>

<template>
  <div>
    <article class="card">
      <div id="uno">{{props.CardTitle}}</div>
      <div id="dos">
        <img :src="props.CardImage" alt="imagen de algo" />
      </div>
      <div id="tres">{{props.Carddescription}}</div>
      <button id="cuatro" @click="props.CardBoton">{{props.TextButton}}</button>
    </article>
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 1fr;
  width: min-content;
  height: min-content;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}
#uno {
  background: beige;
  text-align: center;
}
#dos {
  text-align: center;
}
img {
  width: 150px;
  aspect-ratio: 473/483;
}
#tres {
  background: beige;
  text-align: center;
}
</style>