import Accordion from '@/components/affiliate/accordion-commission'
import { mount } from '@vue/test-utils'

describe('testing Accordion', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Accordion, {
      // Be aware that props is overridden using `propsData`
      propsData: {
        content: [
          {
            id: 1,
            active: false,
            title: 'Your commission',
            details: [
              {
                title: 'Direct Commission',
                value: '10 USD'
              },
              {
                title: 'Sub-IB Commission',
                value: '1 USD'
              },
              {
                title: 'Volume',
                value: '0.6'
              }
            ]
          },
          {
            id: 2,
            active: false,
            title: 'Statistics of your direct referrals <span>(first level referrals)</span>',
            details: [
              {
                title: 'Deposits',
                value: '9 678.19 USD'
              },
              {
                title: 'Withdrawals',
                value: '- 2 637.91 USD'
              }
            ]
          },
          {
            id: 3,
            active: false,
            title: 'Statistics of your referral network <span>(referrals of all levels)</span>',
            details: [
              {
                title: 'Referral network deposits',
                value: '10 USD'
              },
              {
                title: 'Referral network withdrawals',
                value: '1 USD'
              }
            ]
          }
        ],
        functionOpen: () => {}
      }
    })
  })

  it('is a Accordion component', () => {
    expect(wrapper.is(Accordion)).toBe(true)
  })

  it('h4 in Accordion exists', () => {
    expect(wrapper.find('h4').exists()).toBe(true)
  })

  /* it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  }) */

  it('Span in Accordion component has the .accordion-item-trigger-icon class', () => {
    expect(wrapper.find('h4 + span').classes()).toContain('accordion-item-trigger-icon')
  })

  it('Find text "Statistics of your direct referrals" in h4', () => {
    const element = wrapper.find('.accordion-item + .accordion-item h4')
    expect(element.text()).toBe('Statistics of your direct referrals (first level referrals)')
  })

  it('.accordion-item in Accordion exists', () => {
    expect(wrapper.find('.accordion-item').exists()).toBe(true)
  })

  /* it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  }) */

  /* it('calls toggle when click on .accordion-item-trigger', () => {
    const stub = jest.fn()
    wrapper.setMethods({ toggle: stub })

    const el = wrapper.find('.accordion-item-trigger').trigger('click')
    expect(stub).toBeCalled()

    const spy = jest.spyOn(wrapper.vm, 'toggle')
    const $btn = wrapper.find('.accordion-item-trigger')
    $btn.trigger('click')
    expect(spy).toHaveBeenCalled()
  }) */

  /* it('calls toggle when click on .accordion-item-trigger', () => {
    const spy = jest.spyOn(wrapper.vm, 'toggle')
    const $btn = wrapper.find('.accordion-item-trigger')
    $btn.trigger('click')
    expect(spy).toHaveBeenCalled()
  }) */

  /* describe('Login form', () => {
    it('calls the login action correctly', () => {
      const store = new Vuex.Store({
        actions: {
          // mock function
          SET_ACTIVE_ITEM_ACCORDION: jest.fn()
        }
      })
      const wrapper = shallowMount(Accordion, {
        localVue,
        store,
        propsData: {
          content: [
            {
              id: 1,
              active: false,
              title: 'Your commission',
              details: [
                {
                  title: 'Direct Commission',
                  value: '10 USD'
                },
                {
                  title: 'Sub-IB Commission',
                  value: '1 USD'
                },
                {
                  title: 'Volume',
                  value: '0.6'
                }
              ]
            },
            {
              id: 2,
              active: false,
              title: 'Statistics of your direct referrals <span>(first level referrals)</span>',
              details: [
                {
                  title: 'Deposits',
                  value: '9 678.19 USD'
                },
                {
                  title: 'Withdrawals',
                  value: '- 2 637.91 USD'
                }
              ]
            },
            {
              id: 3,
              active: false,
              title: 'Statistics of your referral network <span>(referrals of all levels)</span>',
              details: [
                {
                  title: 'Referral network deposits',
                  value: '10 USD'
                },
                {
                  title: 'Referral network withdrawals',
                  value: '1 USD'
                }
              ]
            }
          ]
        }
      })
      wrapper.find('.accordion-item-trigger').trigger('click')
      expect(actions.SET_ACTIVE_ITEM_ACCORDION).toHaveBeenCalled()
    })
  }) */
})
