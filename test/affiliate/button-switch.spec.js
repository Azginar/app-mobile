import DefaultButtonWithSwitch from '@/components/default-button-with-text'
import { shallowMount } from '@vue/test-utils'

describe('testing ButtonSwitch', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(DefaultButtonWithSwitch, {
      // Be aware that props is overridden using `propsData`
      propsData: {
        label: 'Test text',
        type: 'trans-button'
      }
    })
  })

  it('is a ButtonSwitch component', () => {
    expect(wrapper.is(DefaultButtonWithSwitch)).toBe(true)
  })

  it('Find text "Test text" in spam.text', () => {
    const element = wrapper.find('.text')
    expect(element.text()).toBe('Test text')
  })

  it('calls the clickHandler method when the button is clicked', () => {
    const spy = jest.spyOn(wrapper.vm, 'clickHandler')
    const $btn = wrapper.find('button')
    $btn.trigger('click')
    expect(spy).toHaveBeenCalled()
  })
})
