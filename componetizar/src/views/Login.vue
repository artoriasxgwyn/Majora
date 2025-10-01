<template>
  <div>
    <input type="text" placeholder="Nombre" v-model="email" />
    <input type="text" placeholder="contaseña" v-model="pass" />
    <!-- <button @click="login()">Login</button> -->
    <q-btn
      :loading="loading"
      color="secondary"
      @click="login()"
      label="Iniciar"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useGeneralStore } from "../stores/general";
import { useRouter } from "vue-router";
import { postData } from "../services/apiClient.js";

let email = ref("");
let pass = ref("");
let err = ref("");
let loading = ref(false);
const useGeneral = useGeneralStore();
const router = useRouter();
import { Notify } from "quasar";

async function login() {
  loading.value = true;
  try {
    let r = await postData("/usuarios/loguin_usuario", {
      correo: email.value,
      password: pass.value,
    });
    console.log(r);
    
    useGeneral.token = r.token;
    Notify.create({
      message: "Bienvenido " + r.buscar.correo,
      color: "green-7",
      position: "top",
    });
    router.push("/layout");
  } catch (error) {
    console.log(error);
    
    err.value = error.response?.data.msg;
    /* Notify.create({
      message: error.response?.data.msg,
      color: "red-7",
      position: "top",
    }); */
  } finally {
    loading.value = false;
  }
}

/* async function login(){
    console.log("hola");
    loading.value = true
    try {
       let r = await  axios.post("https://inventario-15d8.onrender.com/api/usuarios/loguin_usuario",{
        correo:email.value,
        password:pass.value
       })
       console.log(r);
       useGeneral.token = r.data.token
       Notify.create({
        message: "Bienvenido "+r.data.buscar.correo,
        color:"green-7",
        position:"top"
})
    router.push("/layout")
       
    } catch (error) {
        console.log(error);
        err.value = error.response.data.msg
        Notify.create({
        message: error.response.data.msg,
        color:"red-7",
        position:"top"
})
    }finally{
        loading.value=false
    }
} */

/* https://inventario-15d8.onrender.com/api */
</script>
