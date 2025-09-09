<template>
  <div class="father">
   
    <header class="header"> <Icon icon="ion:logo-vue" style="font-size:65px;"/></header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">This is the footer of manual of Vue</footer>
  </div>
</template>

<style scoped>
body{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0px;
  padding: 0px;
}
.father {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #202126;
}
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
}
.main {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 7%;
}
.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
}
</style>

<script setup>
import { Icon } from "@iconify/vue";
</script>

