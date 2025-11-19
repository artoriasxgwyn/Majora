/*el .spec espara indicara jest que esto sera un archivo de pruebas
es my probable que de esta manera solo que se especifica la carpeta de unit
y se lean los test por jest*/
import todo from "@/App.vue"
import { mount } from "@vue/test-utils";//la @ referencia al src de vue

test("montarH1", async () => {
    const wrapper = mount(todo);// la funcion mount viene de vue(esto levanta un .vue)
    //expect(wrapper.html()).toBe("<div>\n<h1>hola</h1>\n<h2>hola</h2>\n</div>")
    //const todo = wrapper.get('[data-test="todo"]')
    //console.log(todo.text(),"hola")
    //expect(todo.text()).toContain("Learn Vue.js ")
    //expect(wrapper.html()).toContain("<h1>hola</h1>");
    //expect(wrapper.find("h1").exists())//find() pertenece a VTU y el busca etiquetas, clases e ids
    //.toBe no espera una coinciendencia, es igualdad total
     /*for (let propiedad in wrapper){
        console.log(propiedad)
    }*/
    //console.log(wrapper)
    //console.log(wrapper.html.h1)  
//----------------------------------------------------------------------------------------------    
    //expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)//findAll encuentra todas las coincidencias y es de VTU
//A continuacion metodo que ofrece VTU con la instancia de mount llamada wrapper
  await wrapper.get('[data-test="new-todo"]').setValue('New todo')
//get solo encuentra la primera coincidencia y devuelve error so no la encuentra y set insertara lo que envuelva su parametro 
  await wrapper.get('[data-test="form"]').trigger('submit')
//Y trigger lo que hace es engatillar al evento que este apuntando  
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
});