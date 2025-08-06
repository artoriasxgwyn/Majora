<script setup>
</script>

<template>
  <div>
    <q-btn to="/Gastronomia" outline rounded color="primary" label="Gastronomia" />
    <q-btn to="/Habitaciones" outline rounded color="primary" label="Habitaciones"/>
    <q-btn to="/Servicios" outline rounded color="primary" label="Servicios" />
    <q-btn to="/Deportes" outline rounded color="primary" label="Deportes" />
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>