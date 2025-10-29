<template>
  <main class="Data parent">
    <section class="div1">
      <h3>El mejor alojamiento de cundinarma</h3>
      <p>nos complace ser uno de los lideres hoteleros de nuestro pais con nuestro esquipo encontrara confort y comodidad</p>
      <p>Nuestro estilo degradado y colores pasteles lo haran sentirse como en casa</p>
      <p>llamanos a este numero 1(845)234 234 345</p>
    </section>
    <section class="div2">
      <h3>El mejor alojamiento de cundinarma</h3>
      <p>nos complace ser uno de los lideres hoteleros de nuestro pais con nuestro esquipo encontrara confort y comodidad</p>
      <p>Nuestro estilo degradado y colores pasteles lo haran sentirse como en casa</p>
    </section>
    <section class="div3">
       <h3>El mejor alojamiento de cundinarma</h3>
      <p>nos complace ser uno de los lideres hoteleros de nuestro pais con nuestro esquipo encontrara confort y comodidad</p>
      <p>Nuestro estilo degradado y colores pasteles lo haran sentirse como en casa</p>
    </section>
  </main>
</template>

<script setup>
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>

<style scoped>
.Data {
  width: 100%;
}
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 3px;
}

.div1 {
  padding: 5%;
  grid-column: span 2 / span 2;
  grid-row: span 3 / span 3;
  grid-column-start: 3;
  border: 1px solid black;
}

.div2 {
   padding: 5%;
  grid-column: span 2 / span 2;
  grid-row: span 3 / span 3;
  grid-row-start: 4;
  border: 1px solid black;
}

.div3 {
   padding: 5%;
  grid-column: span 2 / span 2;
  grid-row: span 3 / span 3;
  grid-column-start: 3;
  grid-row-start: 7;
  border: 1px solid black;
}
h3{
  margin: 0px;
}
p{
  font-size: 120%;
}
</style>