import PartnersCard from '@/components/affiliate/partner-card'
import { shallowMount } from '@vue/test-utils'

describe('testing PartnersCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PartnersCard, {
      // Be aware that props is overridden using `propsData`
      propsData: {
        partnersCardData: [
          {
            titleBlock: '09.07.2021',
            date: [
              {
                title: 'Visits',
                value: '8'
              },
              {
                title: 'Registrations',
                value: '1'
              },
              {
                title: 'Commission',
                value: '64.33 USD'
              }
            ]
          }
        ],
        styleElement: 'background-color: grey;'
      }
    })
  })

  it('is a PartnersCard component', () => {
    expect(wrapper.is(PartnersCard)).toBe(true)
  })

  it('Row in PartnersCard exists', () => {
    expect(wrapper.find('.row').exists()).toBe(true)
  })

  it('Row in PartnersCard component has the .row class', () => {
    expect(wrapper.find('.row').classes()).toContain('row')
  })

  it('PartnersCard component has style background-color: grey;', () => {
    expect(wrapper.find('.partners-card').attributes().style).toBe('background-color: grey;')
  })

  it('PartnersCard has a partnersCardData property', () => {
    expect(wrapper.props().partnersCardData).toStrictEqual([{ date: [{ title: 'Visits', value: '8' }, { title: 'Registrations', value: '1' }, { title: 'Commission', value: '64.33 USD' }], titleBlock: '09.07.2021' }])
  })

  it('Find text Visits', () => {
    const element = wrapper.find('.row .col-line:first-child p')
    expect(element.text()).toBe('Visits')
  })

  it('Find text 8', () => {
    const element = wrapper.find('.row .col-line:first-child p + span')
    expect(element.text()).toBe('8')
  })
})
