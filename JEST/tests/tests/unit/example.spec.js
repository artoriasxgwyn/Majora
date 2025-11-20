import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('HelloWorld.vue', () => 
  it('renders props.msg when passed', async () => {
    const wrapper = mount(App)
    expect(wrapper.find("button").exists())
     expect(wrapper.find("h1").text()).toContain("inactivo")
    await wrapper.get('[data-test="button"]').trigger('click')
    expect(wrapper.find("h1").text()).toContain("activo")
}))
