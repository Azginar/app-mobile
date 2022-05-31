import PopularInstrumentsMain from '@/components/instruments/popularInstrumentsMainPage'
import { mount } from '@vue/test-utils'

describe('testing component PromoBlockMain', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(PopularInstrumentsMain, {
      propsData: {
        tableData: [{
          images: [
            'https://social.tifia.com/images/instruments/XAU.png',
            'https://social.tifia.com/images/flags/flat/32/US.png'
          ],
          instrument: 'XAUUSDx',
          traders: '22849'
        }]
      }
    })
  })

  it('is a PopularInstrumentsMain component', () => {
    expect(wrapper.is(PopularInstrumentsMain)).toBe(true)
  })

  it('title instruments', () => {
    const element = wrapper.find('.popular-instruments-main table tr td .instrument-block')
    expect(element.text()).toBe('XAUUSDx')
  })

  it('count traders', () => {
    const element = wrapper.find('.popular-instruments-main table tr:first-child td:last-child')
    expect(element.text()).toBe('22849')
  })
})
