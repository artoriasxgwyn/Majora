<template>
  <div class="q-pa-md">
    <div style="display: flex; flex-direction: column; align-items: center">
      <h3 style="margin: 0">Productos</h3>
      <hr />
    </div>
    <q-form v-if="isBooll" @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="nombre"
        label="nombre"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="categoria"
        label="categoria"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="stock"
        type="number"
        label="stock"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="precio"
        label="precio"
        type="number"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="descripcion"
        label="descripcion"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="button" @click="update(idActualizar)" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    <div style="margin-bottom: 20px; display: flex; justify-content: end">
      <q-btn color="primary" @click="abrirModal()">Agregar producto</q-btn>
    </div>
    <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" :loading="tablacarga">
      <template v-slot:body-cell-estado="props">
        <q-td :props="props">
          <span
            style="background-color: green; padding: 5px; color: white"
            v-if="props.row.estado == 1"
          >Activo</span>
          <span v-else style="background-color: red; padding: 5px; color: white">Inactivo</span>
        </q-td>
      </template>
      <template v-slot:body-cell-opciones="props">
        <q-td :props="props" style="display: flex">
          <div>
            <q-btn color="primary" @click="isUpdate(props.row)" label="Update">📝</q-btn>
          </div>
          <div v-if="props.row.estado == 0" @click="activar(props.row._id)">
            <q-btn :loading="carga">
              ✅
              <template v-slot:loading>
                <q-spinner-hearts color="primary" size="2em" />
              </template>
            </q-btn>
          </div>
          <div v-else @click="desactivar(props.row._id)">
            <q-btn :loading="carga0">
              ❌
              <template v-slot:loading>
                <q-spinner-box color="primary" size="2em" />
              </template>
            </q-btn>
          </div>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="alert">
      <q-card class="modal">
        <q-form @submit="onSubmit" @reset="onReset">
          <q-card-section>
            <div class="text-h6">Agregar producto</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              color="purple-12"
              v-model="nombre"
              label="Nombre"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor escriba el nombre',
                (val) =>
                  (val && val.length <= 100) ||
                  'El nombre debe tener menos de 100 caracteres',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="name" />
              </template>
            </q-input>
            <q-input
              color="purple-12"
              v-model="categoria"
              label="Categoria"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor escriba la categoria',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="class" />
              </template>
            </q-input>
            <q-input
              color="purple-12"
              v-model="stock"
              label="Stock"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor escriba el stock',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
            </q-input>
            <q-input
              color="purple-12"
              v-model="precio"
              label="Precio"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor escriba el precio',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
            </q-input>
            <q-input
              color="purple-12"
              v-model="descripcion"
              label="Descripcion"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor escriba la descripcion',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn label="Guardar" color="primary" type="button" @click="guardar(idActualizar)" />
            <q-btn outline label="Cancelar" color="red" type="reset" v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { postData, getData, putData } from "../services/apiClient.js";

onBeforeMount(() => {
  listarproductos();
});

let idActualizar = ref(0);
let alert = ref(false);
let nombre = ref("");
let categoria = ref("");
let stock = ref("");
let precio = ref("");
let descripcion = ref("");
let isBooll = ref(false);
let tablacarga = ref(false);
function isUpdate(product) {
  isBooll.value = !isBooll.value;
  idActualizar.value = product._id;
}
const columns = ref([
  {
    name: "nombre",
    label: "Nombre del producto",
    align: "left",
    field: "nombre"
  },
  {
    name: "descripcion",
    label: "Descripcion",
    align: "left",
    field: "descripcion"
  },
  {
    name: "categoria",
    label: "Categoria",
    align: "left",
    field: "categoría"
  },
  {
    name: "precio",
    label: "Precio (COP)",
    align: "left",
    field: "precio"
  },
  {
    name: "stock",
    label: "Cantidad",
    align: "left",
    field: "stock"
  },

  {
    name: "estado",
    label: "Estado",
    align: "left",
    field: "estado"
  },
  {
    name: "opciones",
    label: "Opciones",
    align: "left"
  }
]);

const rows = ref([]);
let carga = ref(false)
let carga0 = ref(false)
async function listarproductos() {
  try {
    tablacarga.value=true
    let r = await getData("/productos/listar_producto");
    console.log(r);
    rows.value = r.buscar;
  } catch (error) {
    console.log(error);
  }finally{
    tablacarga.value=false
  }
}
async function update(id) {
  try {
    await putData(`/productos/modificar_producto/${id}`, {
      nombre: nombre.value,
      categoria: categoria.value,
      stock: Number(stock.value),
      precio: Number(precio.value),
      descripcion: descripcion.value
    });
    listarproductos();
    isBooll.value = false;
    onReset();
  } catch (e) {
    console.log(e);
  }
}
async function guardar() {
  try {
     
     let r = await postData(`/productos/guardar_producto`, {
      nombre: nombre.value,
      stock: Number(stock.value),
      precio: Number(precio.value),
      descripcion: descripcion.value
    });
    console.log(r);
    listarproductos();
    isBooll.value = false;
    onReset();
  } catch (error) {
    console.log(error);
  }
}
async function activar(id) {
  console.log(id);
  try {
     carga.value=true;
    let r = await putData(`/productos/activarProducto/${id}`);
    console.log(r);
    listarproductos();
  } catch (error) {
    console.log(error);
  }finally{
   carga.value=false
  }
}

async function desactivar(id) {
  try {
    carga0.value=true;
    let r = await putData(`/productos/desactivarProducto/${id}`);
    console.log(r);
    listarproductos();
  } catch (error) {
    console.log(error);
  }finally{
    carga0.value=false;
  }
}

function abrirModal() {
  alert.value = true;
}

function onSubmit() {
  console.log("submit");

  onReset();
}

function onReset() {
  console.log("reset");
  nombre.value = "";
  categoria.value = "";
  stock.value = "";
  precio.value = "";
  descripcion.value = "";
}
</script>

<style  scoped>
.modal {
  width: 600px !important;
}
</style>