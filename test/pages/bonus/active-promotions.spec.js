import { shallowMount } from '@vue/test-utils'

import promoBlockPage from '@/components/promotions/promoBlockPage'
import ActivePromotionsPage from '@/pages/bonus/active-promotions'
import { GET_PROMOTIONS_INFO_BLOCKS } from '@/modules/promotions/getter-types'

describe('promoBlockPage component test', () => {
  const componentProp = [
    {
      bonus100: true,
      titleBlock: '<span>100%</span> bonus*',
      titlePromo: 'Get 100% Bonus',
      descriptionPromo: 'Dreaming of big profits? Double your deposit!',
      linkPromo: 'bonus-100',
      classPromo: ''
    }
  ]

  let component
  beforeEach(() => {
    component = shallowMount(promoBlockPage, {
      propsData: {
        promoInfo: componentProp
      }
    })
  })

  test('promotions block component test', () => {
    const elementTitleBlockCard = component.find('.promotions-page-block .promo-block h5')
    expect(elementTitleBlockCard.text()).toBe('100% bonus*')

    const elementTitlePromoCard = component.find('.promotions-page-block .promo-block h4')
    expect(elementTitlePromoCard.text()).toBe('Get 100% Bonus')

    const elementDescriptionPromoCard = component.find('.promotions-page-block .promo-block h4+p')
    expect(elementDescriptionPromoCard.text()).toBe('Dreaming of big profits? Double your deposit!')

    const elementImgPromoCard = component.findAll('.promotions-page-block .promo-block .bonus-100 img.bonus-line')
    expect(elementImgPromoCard.length).toBe(1)

    const a = component.find('.promotions-page-block a')
    expect(a.attributes().href).toBe('https://tifia.com/bonus-100')
  })
})

describe('Page: my promotions', () => {
  test('testing page promotions', () => {
    const promoCards = [
      {
        prizeFund: '75 000 USD',
        titlePromo: 'BE ON TOP 2022',
        descriptionPromo: 'Participate in Tifia’s affiliate contest and claim a money prize! Become the best partner of the year!',
        slugImage: 'be-on-top-promo-2022.png',
        linkPromo: 'contests/be-on-top-affiliate',
        classPromo: ''
      }
    ]
    const storeKey = `promotions/${GET_PROMOTIONS_INFO_BLOCKS}`
    const page = shallowMount(ActivePromotionsPage, {
      mocks: {
        $store: {
          getters: {
            [storeKey]: promoCards
          }
        }
      }
    })

    const promoBlockComponent = page.findAllComponents(promoBlockPage)
    expect(promoBlockComponent).toHaveLength(1)
  })
})
