// import { shallowMount } from "@vue/test-utils";

import App from "@/App.vue"
import { mount } from "@vue/test-utils"

// describe('app.vue', ()=> {
//   it('the component render the initial state', () =>{
//     const wrapper = mount(app);// primer forma monta el componente
//     wrapper.findComponent(child); // componente hijo
//     wrapper.findcomponent({name: 'helloworld'}) // más el componente hijo

//     const wrapper2 = shallowMount(myComponent) // forma 2 Monta el componente solo

//     // TODO CRUD
//     expect(counter).toBe(0)
//     expect(counter).find('#myId')
//     expect(counter).find('.myClass')
//     expect(counter).find("[input='text']").exists()
//   })
// })

describe('app.vue', () => {
  it('the component render the initial state', () => {
    const wrapper = mount(App);
    // TODO
    // Comprobaciones
    
    if(expect(wrapper.find('.ache3').exists())) {
      expect(wrapper.find('ache3').text()).toBe("0");
    }
    /*
    if(expect(wrapper.find('.sum').exists())){
      expect(wrapper.find('.sum').text()).toBe("Increment");
    }
    */
  });
  
  test('The increment button add one to counter', async () => {
    // TODO
    const wrapper = mount(App);

    await wrapper.find('.sum').trigger('click');
    expect(wrapper.find('h3').text()).toBe(1);
  });
  
});