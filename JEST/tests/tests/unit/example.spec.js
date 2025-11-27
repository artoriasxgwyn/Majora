import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('render toggle button and change the state of H1 tag', () => {
  it('render button ', async () => {
    const wrapper = mount(App)
    expect(wrapper.find("button").exists())
    expect(wrapper.find("h1").text()).toContain("inactivo")

  })
  it("change state", async () => {
    const wrapper = mount(App)
    await wrapper.get('[data-test="buttonToggle"]').trigger('click')
    expect(wrapper.find("h1").text()).toContain("activo")
    await wrapper.get('[data-test="buttonToggle"]').trigger('click')
    expect(wrapper.find("h1").text()).toContain("activo")
  })
})

describe('render count button and add of one in one', () => {
  it('render button', async () => {
    const wrapper = mount(App)
    expect(wrapper.get('[data-test="buttonCount"]').exists())
    for (let n = 0; n < 10; n++) {
      expect(wrapper.get('[data-test="buttonCount"]').text()).toContain(`${n}`)
      await wrapper.get('[data-test="buttonCount"]').trigger('click')
    }
  }),
    it('number grow in one in one', async () => {
      const wrapper = mount(App)
      for (let n = 0; n < 10; n++) {
        expect(wrapper.get('[data-test="buttonCount"]').text()).toContain(`${n}`)
        await wrapper.get('[data-test="buttonCount"]').trigger('click')
      }
    })
})

describe('render input text and the limits of characters is ten', () => {
  it('render input text ', async () => {
    const wrapper = mount(App)
    expect(wrapper.get('[data-test="inputText"]').exists())
  }),
    it('limits of characters is ten', async () => {
      const wrapper = mount(App)
      let text = "";
      for (let n = 0; n < 20; n++) {
        console.log(text)
        await wrapper.get('[data-test="inputText"]').setValue(text = text + 'n')
        expect(wrapper.get('[data-test="inputText"]').element.value.length).toBeLessThanOrEqual(10)
      }
    })
})

describe("To Do List", () => {

  it("renders input and button to add tasks", () => {
    const wrapper = mount(App)
    expect(wrapper.get('[data-test="todoInput"]').exists())
    expect(wrapper.get('[data-test="todoAdd"]').exists())
  })

  it("adds a task when clicking the add button", async () => {
    const wrapper = mount(App)

    await wrapper.get('[data-test="todoInput"]').setValue("task 1")
    await wrapper.get('[data-test="todoAdd"]').trigger("click")

    const items = wrapper.findAll('[data-test="todoItem"]')
    expect(items.length).toBe(1)
    expect(items[0].text()).toContain("task 1")
  })

  it("marks a task as completed (strikethrough)", async () => {
    const wrapper = mount(App)

    await wrapper.get('[data-test="todoInput"]').setValue("test task")
    await wrapper.get('[data-test="todoAdd"]').trigger("click")

    const toggle = wrapper.get('[data-test="todoToggle"]')
    await toggle.trigger("click")

    const li = wrapper.get('[data-test="todoItem"]')
    expect(li.element.style.textDecoration).toBe("line-through")
  })

  it("deletes a task", async () => {
    const wrapper = mount(App)

    await wrapper.get('[data-test="todoInput"]').setValue("one")
    await wrapper.get('[data-test="todoAdd"]').trigger("click")

    expect(wrapper.findAll('[data-test="todoItem"]').length).toBe(1)

    await wrapper.get('[data-test="todoDelete"]').trigger("click")

    expect(wrapper.findAll('[data-test="todoItem"]').length).toBe(0)
  })

})


