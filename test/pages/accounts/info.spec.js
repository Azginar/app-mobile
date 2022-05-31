import { shallowMount } from '@vue/test-utils'
import AccountInfoPage from '../../../pages/accounts/info'
import GeneralInformationBlock from '../../../components/account/general-information-block'
import DefaultButton from '../../../components/default-button'

import {
  CHANGE_SELECTED_STATISTICS_PERIOD,
  GET_ACCOUNT_FINANCE_INFORMATION,
  GET_ACCOUNT_GENERAL_INFORMATION,
  GET_ACCOUNT_SOCIAL_TRADING_INFORMATION,
  GET_AVAILABLE_STATISTICS_PERIODS,
  GET_SELECTED_STATISTICS_PERIOD
} from '../../../modules/accounts/constants'
import { GET_ACCOUNT_INFO_IN_PROGRESS } from '../../../modules/accounts/getter-types'

describe('account info page', () => {
  test('should show correct info from store', () => {
    const userLeverage = '1:400'
    const userLogin = '6268433'
    const routerPushSpy = jest.fn()
    const dispatchSpy = jest.fn()
    const store = {
      dispatch: dispatchSpy,
      getters: {
        [`accounts/${GET_ACCOUNT_GENERAL_INFORMATION}`]: {
          leverage: userLeverage,
          login: userLogin,
          lastLoginDate: '04/14/2021',
          lastLoginTime: '10:22 AM',
          registeredTime: '10:22 AM',
          registeredDate: '04/14/2021',
          server: 'Tifia-mt'
        },
        [`accounts/${GET_ACCOUNT_SOCIAL_TRADING_INFORMATION}`]: {},
        [`accounts/${GET_ACCOUNT_FINANCE_INFORMATION}`]: {},
        [`accounts/${GET_SELECTED_STATISTICS_PERIOD}`]: '3 MONTH',
        [`accounts/${GET_AVAILABLE_STATISTICS_PERIODS}`]: [{
          label: '1 DAY',
          value: '1 DAY'
        }],
        [`accounts/${GET_ACCOUNT_INFO_IN_PROGRESS}`]: {}
      }
    }

    const page = shallowMount(AccountInfoPage, {
      mocks: {
        $router: {
          push: routerPushSpy
        },
        $store: store
      }
    })
    const GeneralInformationBlockComponent = page.findComponent(GeneralInformationBlock)
    expect(GeneralInformationBlockComponent.isVisible()).toBe(true)
    expect(GeneralInformationBlockComponent.props()).toEqual({
      leverage: userLeverage,
      login: userLogin,
      lastLoginDate: '04/14/2021',
      lastLoginTime: '10:22 AM',
      registeredTime: '10:22 AM',
      registeredDate: '04/14/2021',
      server: 'Tifia-mt'
    })

    // todo: need to use from click event
    page.vm.goToAccountControl()
    expect(routerPushSpy).toHaveBeenCalledWith('/accounts/account-control?login=69868&server=40')

    page.vm.handleChangeSelectedStatisticsPeriod('1 YEAR')
    expect(dispatchSpy).toHaveBeenCalledWith(`accounts/${CHANGE_SELECTED_STATISTICS_PERIOD}`, '1 YEAR')
  })

  test('is general block view correct', () => {
    const leverage = '1:400'
    const login = '6268433'
    const lastLoginDate = '04/14/2021'
    const lastLoginTime = '10:22 AM'
    const registeredTime = '10:22 AM'
    const registeredDate = '04/14/2021'
    const server = 'Tifia-demo'
    const props = {
      leverage,
      login,
      lastLoginDate,
      lastLoginTime,
      registeredTime,
      registeredDate,
      server
    }

    const component = shallowMount(GeneralInformationBlock, { propsData: props })

    expect(component.find('#account-info-login').text()).toBe(login)
    expect(component.find('#account-info-server').text()).toBe(server)
    expect(component.find('#account-info-leverage').text()).toBe(leverage)
    expect(component.find('#account-info-reg-date-time').text()).toBe(`${registeredTime} ${registeredDate}`)
    expect(component.find('#account-info-last-login-date-time').text()).toBe(`${registeredTime} ${registeredDate}`)
  })
})
