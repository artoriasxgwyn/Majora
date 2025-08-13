<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white qheader" height-hint="98">
      
      <q-toolbar class="toolbarContent">
        <q-toolbar-title class="headerTitle">
          <div><i class="fa-solid fa-hotel" style="font-size: 30px"></i></div>
          <div><h1 style="font-size: 100%">Hotel California</h1></div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/Gastronomia" label="Gastronomia" />
        <q-route-tab to="/Habitaciones" label="Habitaciones" />
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/Deportes" label="Deportes" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <main class="content">
        <div class="large">
          <router-view />
        </div>
      </main>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="footer">
          <i class="fa-solid fa-circle-exclamation"></i>
          <div>
            <h3 class="size">
              Por favor recuerde que nos excentamos de cualquier accidente
              ocurrido durante su estancia
            </h3>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

 <style scoped>
.content {
  display: flex;
  justify-content: center;
}
.large {
  width: 80%;
}
.large::-webkit-scrollbar {
  display: none;
}
.size {
  margin: 0px;
  font-size: 15px;
}
.footer {
  display: flex;
  align-items: center;
  gap: 1%;
}
.headerTitle{
  display: flex;
  align-items: center;
  gap: 1%;
}
.toolbarContent{
  height: 50px;
  
}
.qheader{
  height: min-content;
}
</style>