import promoBlockMain from '@/components/promotions/promoBlockMain'
import { mount } from '@vue/test-utils'

describe('testing component PromoBlockMain', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(promoBlockMain, {
      propsData: {
        promoInfo: {
          countAllPromo: 8,
          myPromo: 2
        }
      }
    })
  })

  it('is a PromoBlockMain component', () => {
    expect(wrapper.is(promoBlockMain)).toBe(true)
  })

  it('info-referrals in InfoReferrals exists', () => {
    expect(wrapper.find('.promo-block-count').exists()).toBe(true)
  })

  it('count active promotions', () => {
    const element = wrapper.find('.promo-block-count .row-line .col-line:first-child p')
    expect(element.text()).toBe('8')
  })

  it('count my promotions', () => {
    const element = wrapper.find('.promo-block-count .row-line .col-line:first-child + .col-line p')
    expect(element.text()).toBe('2')
  })
})
