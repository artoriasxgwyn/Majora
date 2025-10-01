import { defineStore } from "pinia";
import { ref } from "vue";

export const useGeneralStore = defineStore("general", () => {
    let nombre = ref("Lucas")
    let cont = ref(0)
    let token = ref("")

    function nombreMayuscula() {
        console.log("ejecutando...");

        nombre.value = "Pedro"
    }

    function decrementar(){
        if (cont.value>0)
            cont.value--
    }

    function incrementar(){
        cont.value++
    }

    return {
        nombre, nombreMayuscula, cont, decrementar, incrementar, token
    }
},
    {
        persist: true,
    },)