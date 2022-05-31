import { shallowMount } from '@vue/test-utils'

import TradingAccountCard from '../../../../components/account/trading-account-card'
import AccountIndexPage from '../../../../pages/accounts/index/index'
import { GET_ACCOUNTS_LIST } from '../../../../modules/accounts/getter-types'

describe('TradingAccountCard: card', () => {
  const componentLeverageProp = '1:777'
  const componentAccountLabelProp = 'DEMO-7712312'
  const componentBalanceProp = '10000 USD'
  const componentAccountUIDProp = 7712312
  const componentServerIdProp = 30

  let component
  beforeEach(() => {
    component = shallowMount(TradingAccountCard, {
      propsData: {
        leverage: componentLeverageProp,
        account: componentAccountLabelProp,
        balance: componentBalanceProp,
        accountUID: componentAccountUIDProp,
        serverId: componentServerIdProp
      }
    })
  })

  test('table card view correct', () => {
    const leverage = component.find('.text-right')
    expect(leverage.text()).toBe(componentLeverageProp)

    const accountLabel = component.find('.info-text > h4')
    expect(accountLabel.text()).toBe(componentAccountLabelProp)

    const balance = component.find('.info-text > div > span')
    expect(balance.text()).toBe(componentBalanceProp)
  })

  test('after click call method goToAccountPage if global in progress in false', () => {
    const pushSpy = jest.fn()
    const router = {
      push: pushSpy
    }

    const componentWithRouter = shallowMount(TradingAccountCard, {
      mocks: {
        $router: router
      },
      propsData: {
        accountUID: componentAccountUIDProp,
        serverId: componentServerIdProp
      }
    })
    componentWithRouter.find('.block-card').trigger('click')
    expect(pushSpy).toHaveBeenCalledWith(`/accounts/info?login=${componentAccountUIDProp}&server=${componentServerIdProp}`)
  })
  test('after click call method goToAccountPage if global in progress in false', () => {
    const pushSpy = jest.fn()
    const router = {
      push: pushSpy
    }

    const componentWithRouter = shallowMount(TradingAccountCard, {
      mocks: {
        $router: router
      },
      propsData: {
        accountUID: componentAccountUIDProp,
        serverId: componentServerIdProp,
        isInProgress: true
      }
    })

    // we need call goToAccountPage from vm because we cannot click on it when component in progress
    componentWithRouter.vm.goToAccountPage()
    expect(pushSpy).toHaveBeenCalledTimes(0)
  })
})

describe('Page: page index', () => {
  test('should render all incoming accounts from store', () => {
    const accounts = new Map()
      .set('ECN CLASSIC', [
        {
          type: 'ecn-classic',
          login: 6268433,
          label: 'PROFIT-6268433',
          server_id: 30,
          server: 'Tifia-MT4',
          leverage: '1:400',
          currency: 'USD',
          balance: 0,
          margin_free: 0,
          margin_level: '0,00%',
          total_profit: 0,
          total_swap: 0,
          available: 0,
          credit: 0,
          equity: 0,
          floating: '0.00',
          margin: 0,
          regdate: '2021-04-14 10:22:46',
          lastdate: '2021-04-14 10:22:46',
          is_swap_free: false
        },
        {
          type: 'ecn-classic',
          login: 6308338,
          label: 'CLS-6308338',
          server_id: 30,
          server: 'Tifia-MT4',
          leverage: '1:400',
          currency: 'USD',
          balance: 0,
          margin_free: 0,
          margin_level: '0,00%',
          total_profit: 0,
          total_swap: 0,
          available: 0,
          credit: 0,
          equity: 0,
          floating: '0.00',
          margin: 0,
          regdate: '2021-09-01 19:10:25',
          lastdate: '2021-09-01 19:10:25',
          is_swap_free: true
        }
      ])
    const storeKey = `accounts/${GET_ACCOUNTS_LIST}`
    const page = shallowMount(AccountIndexPage, {
      mocks: {
        $store: {
          getters: {
            [storeKey]: accounts
          }
        }
      }
    })

    const typeAccountsTitle = page.find('h2')
    expect(typeAccountsTitle.text()).toBe('ECN CLASSIC')

    const typeAccountsCard = page.findAllComponents(TradingAccountCard)
    expect(typeAccountsCard).toHaveLength(2)
  })
})
