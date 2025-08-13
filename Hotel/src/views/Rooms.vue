<script setup>
import card from "../components/cardsRooms.vue";
</script>
<template>
  <div class="parent">
    <card
      class="div1"
      contentCard="Atrium Vancouver"
      imageCard="https://content.r9cdn.net/rimg/himg/10/55/a5/expedia_group-440885-120502904-907181.jpg?width=335&height=268&crop=true"
    ></card>
    <card
      class="div2"
      contentCard="Crowne Plaza"
      imageCard="https://content.r9cdn.net/rimg/himg/28/ab/1e/leonardo-39336-188061087-610689.jpg?width=552&height=552&xhint=1560&yhint=1000&crop=true&watermarkheight=28&watermarkpadding=10"
    ></card>
    <card
      class="div3"
      contentCard="Atrium Vancouver"
      imageCard="https://content.r9cdn.net/rimg/himg/05/af/ec/expedia_group-32323-265d1f92-547063.jpg?width=552&height=552&xhint=520&yhint=333&crop=true&watermarkheight=28&watermarkpadding=10"
    ></card>
    <card
      class="div4"
      contentCard="Matrix Hotel"
      imageCard="https://content.r9cdn.net/rimg/himg/b9/ac/bb/expedia_group-17306-62c3c9-206233.jpg?width=552&height=552&xhint=1000&yhint=713&crop=true&watermarkheight=28&watermarkpadding=10"
    ></card>
    <card
      class="div5"
      contentCard="Hotel Saskatchewan"
      imageCard="https://content.r9cdn.net/rimg/himg/6f/b0/7f/leonardo-836138-1457164-256036.jpg?width=552&height=552&xhint=1000&yhint=1500&crop=true&watermarkheight=28&watermarkpadding=10"
    ></card>
    <card
      class="div6"
      contentCard="Fairmont Palliser"
      imageCard="https://content.r9cdn.net/rimg/himg/10/55/a5/expedia_group-440885-120502904-907181.jpg?width=335&height=268&crop=true"
    ></card>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
}

.div1 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
}

.div2 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
  grid-column-start: 3;
}

.div3 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
  grid-column-start: 5;
}

.div4 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
  grid-row-start: 3;
}

.div5 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 3;
}

.div6 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
  grid-column-start: 5;
  grid-row-start: 3;
}
</style>
