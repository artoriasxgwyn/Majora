/*el .spec espara indicara jest que esto sera un archivo de pruebas
es my probable que de esta manera solo que se especifica la carpeta de unit
y se lean los test por jest*/
import app from "@/App.vue"
import { mount } from "@vue/test-utils";//la @ referencia al src de vue

test("montarH1",()=>{
    const wrapper = mount(app);// la funcion mount viene de vue( esto levanta un .vue)
    //expect(wrapper.html()).toBe("<div>\n<h1>hola</h1>\n<h2>hola</h2>\n</div>")
    expect(wrapper.html()).toContain("<h1>hola</h1>");
    expect(wrapper.find("h1").exists())//find() pertenece a VTU y el busca etiquetas, clases e ids
    //.toBe no espera una coinciendencia, es igualdad total

    /*for (let propiedad in wrapper){
        console.log(propiedad)
    }*/
    //console.log(wrapper)
    //console.log(wrapper.html.h1)  

});