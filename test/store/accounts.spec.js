import axios from 'axios'
import { mutations, actions, getters } from '../../store/accounts'
import {
  ACCOUNT_INFO,
  ACCOUNT_INFO_IN_PROGRESS,
  ACCOUNTS_LIST, AVAILABLE_STATISTICS_PERIODS,
  CHANGE_SELECTED_STATISTICS_PERIOD,
  CLOSED_ORDERS,
  COPYING_SESSION,
  CUSTOM_PERIOD_RANGE,
  DEMO_ACCOUNT_LIST,
  DEMO_ACCOUNT_LIST_LOADING_STATE,
  DEPOSITS,
  END,
  FILTER_LABELS, GET_ACCOUNT_GENERAL_INFORMATION, GET_ACCOUNT_NAME, GET_AVAILABLE_STATISTICS_PERIODS,
  GET_COPYING_SESSION,
  GET_CUSTOM_PERIOD_RANGE,
  GET_FILTER_LABELS, GET_ORDER_FILTERING, GET_ORDER_ITEM, GET_ORDER_PERIOD_FILTERING,
  GET_SELECTED_PERIOD_FILTER, GET_SELECTED_STATISTICS_PERIOD,
  LAST_30_DAYS,
  LOAD_ACCOUNT_INFO,
  ORDER_FILTERING, ORDER_ITEM,
  ORDER_PERIOD_FILTERING,
  REAL_ACCOUNT_LIST_LOADING_STATE,
  SELECTED_PERIOD_FILTER,
  SELECTED_STATISTICS_PERIOD,
  START,
  TODAY,
  UPDATE_CUSTOM_FILTER_PERIOD,
  UPDATE_ORDER_PERIOD_FILTER,
  UPDATE_ORDER_TYPE_FILTER, YESTERDAY
} from '../../modules/accounts/constants'
import {
  SET_ACCOUNT_INFO_IN_PROGRESS,
  SET_DEMO_ACCOUNT_LIST,
  SET_DEMO_ACCOUNT_LIST_IN_PROGRESS,
  SET_REAL_ACCOUNT_LIST, SET_REAL_ACCOUNT_LIST_IN_PROGRESS
} from '../../modules/accounts/mutation-types'
import { GET_TOKEN } from '../../modules/login/getter-types'
import promiseBody from '../../utils/test-helpers'

import mockedDemoAccountList from '../mocked-data/accounts-demo.json'
import mockedRealAccountList from '../mocked-data/accounts-real.json'
import mockedAccountInfo from '../mocked-data/account-info.json'
import API_ROOT from '../../utils/api_root'
import { LOAD_DEMO_ACCOUNT_LIST, LOAD_REAL_ACCOUNT_LIST } from '../../modules/accounts/actions-types'
import {
  GET_ACCOUNT_INFO_IN_PROGRESS,
  GET_DEMO_ACCOUNT_LIST,
  GET_GENERAL_IS_IN_PROGRESS, GET_IS_SWAP_FREE
} from '../../modules/accounts/getter-types'

jest.mock('axios')

describe('accounts mutations', () => {
  test('SET_DEMO_ACCOUNT_LIST', () => {
    const state = {
      [DEMO_ACCOUNT_LIST]: []
    }
    mutations[SET_DEMO_ACCOUNT_LIST](state, mockedDemoAccountList.all)
    expect(state[DEMO_ACCOUNT_LIST]).toEqual(mockedDemoAccountList.all)
  })

  test('SET_REAL_ACCOUNT_LIST', () => {
    const state = {
      [ACCOUNTS_LIST]: []
    }
    mutations[SET_REAL_ACCOUNT_LIST](state, mockedRealAccountList.all)
    expect(state[ACCOUNTS_LIST]).toBe(mockedRealAccountList.all)
  })

  test('SET_DEMO_ACCOUNT_LIST_IN_PROGRESS', () => {
    const state = {
      [DEMO_ACCOUNT_LIST_LOADING_STATE]: false
    }
    mutations[SET_DEMO_ACCOUNT_LIST_IN_PROGRESS](state)
    expect(state[DEMO_ACCOUNT_LIST_LOADING_STATE]).toBe(true)
  })

  test('SET_ACCOUNT_INFO_IN_PROGRESS', () => {
    const state = {
      [ACCOUNT_INFO_IN_PROGRESS]: false
    }
    mutations[SET_ACCOUNT_INFO_IN_PROGRESS](state)
    expect(state[ACCOUNT_INFO_IN_PROGRESS]).toBe(true)
  })

  test('UPDATE_CUSTOM_FILTER_PERIOD', () => {
    const state = {
      [CUSTOM_PERIOD_RANGE]: {
        [START]: new Date(),
        [END]: new Date()
      }
    }
    const startDate = new Date('01.09.2021 12:00:00')
    const endDate = new Date('15.09.2021 12:00:00')
    mutations[UPDATE_CUSTOM_FILTER_PERIOD](state, { startDate, endDate })
    expect(state[CUSTOM_PERIOD_RANGE][START]).toEqual(startDate)
    expect(state[CUSTOM_PERIOD_RANGE][END]).toEqual(endDate)
  })

  test('LOAD_ACCOUNT_INFO', () => {
    const state = {
      [ACCOUNT_INFO]: {}
    }
    mutations[LOAD_ACCOUNT_INFO](state, mockedAccountInfo)
    expect(state[ACCOUNT_INFO]).toEqual(mockedAccountInfo)
  })

  test('CHANGE_SELECTED_STATISTICS_PERIOD', () => {
    const state = {
      [SELECTED_STATISTICS_PERIOD]: '3 MONTH'
    }
    const newStatisticsPeriod = '1 YEAR'
    mutations[CHANGE_SELECTED_STATISTICS_PERIOD](state, newStatisticsPeriod)
    expect(state[SELECTED_STATISTICS_PERIOD]).toBe(newStatisticsPeriod)
  })

  test('UPDATE_ORDER_TYPE_FILTER', () => {
    const state = {
      [ORDER_FILTERING]: {
        [CLOSED_ORDERS]: true,
        [DEPOSITS]: false
      }
    }
    mutations[UPDATE_ORDER_TYPE_FILTER](state, CLOSED_ORDERS)
    expect(state[ORDER_FILTERING][CLOSED_ORDERS]).toBe(false)
  })

  test('UPDATE_ORDER_PERIOD_FILTER', () => {
    const state = {
      [ORDER_PERIOD_FILTERING]: {
        [TODAY]: false,
        [LAST_30_DAYS]: true
      },
      [SELECTED_PERIOD_FILTER]: LAST_30_DAYS
    }
    mutations[UPDATE_ORDER_PERIOD_FILTER](state, TODAY)
    expect(state[ORDER_PERIOD_FILTERING][LAST_30_DAYS]).toBe(false)
    expect(state[ORDER_PERIOD_FILTERING][TODAY]).toBe(true)
    expect(state[SELECTED_PERIOD_FILTER]).toBe(TODAY)
  })

  test('SET_REAL_ACCOUNT_LIST_IN_PROGRESS', () => {
    const state = {
      [REAL_ACCOUNT_LIST_LOADING_STATE]: false
    }
    mutations[SET_REAL_ACCOUNT_LIST_IN_PROGRESS](state)
    expect(state[REAL_ACCOUNT_LIST_LOADING_STATE]).toBe(true)
  })
})

describe('accounts actions', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('UPDATE_CUSTOM_FILTER_PERIOD', () => {
    const commitSpy = jest.fn()

    const startDate = new Date('01.09.2021 12:00:00')
    const endDate = new Date('15.09.2021 12:00:00')

    actions[UPDATE_CUSTOM_FILTER_PERIOD]({ commit: commitSpy }, { startDate, endDate })
    expect(commitSpy).toHaveBeenCalledWith(UPDATE_CUSTOM_FILTER_PERIOD, { startDate, endDate })
  })

  test('UPDATE_ORDER_PERIOD_FILTER', () => {
    const commitSpy = jest.fn()

    actions[UPDATE_ORDER_PERIOD_FILTER]({ commit: commitSpy }, TODAY)
    expect(commitSpy).toHaveBeenCalledWith(UPDATE_ORDER_PERIOD_FILTER, TODAY)
  })

  test('UPDATE_ORDER_TYPE_FILTER', () => {
    const commitSpy = jest.fn()

    actions[UPDATE_ORDER_TYPE_FILTER]({ commit: commitSpy }, CLOSED_ORDERS)
    expect(commitSpy).toHaveBeenCalledWith(UPDATE_ORDER_TYPE_FILTER, CLOSED_ORDERS)
  })

  test('CHANGE_SELECTED_STATISTICS_PERIOD', () => {
    const commitSpy = jest.fn()

    actions[CHANGE_SELECTED_STATISTICS_PERIOD]({ commit: commitSpy }, { value: '3 MONTH' })
    expect(commitSpy).toHaveBeenCalledWith(CHANGE_SELECTED_STATISTICS_PERIOD, '3 MONTH')
  })

  test('LOAD_ACCOUNT_INFO positive load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }
    const mockData = { data: { account: { test: '1' } } }

    axios.mockImplementation(jest.fn(() => promiseBody(true, mockData)))

    await actions[LOAD_ACCOUNT_INFO]({ commit: commitSpy, rootGetters: rootGettersMock }, { login: 123, server: 40 })
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/info?login=123&server=40`
    })

    expect(commitSpy).toHaveBeenCalledTimes(3)
    expect(commitSpy.mock.calls[0][0]).toBe(SET_ACCOUNT_INFO_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toBe(LOAD_ACCOUNT_INFO)
    expect(commitSpy.mock.calls[1][1]).toEqual({ isInvestor: false, ...mockData.data.account })
    expect(commitSpy.mock.calls[2][0]).toEqual(SET_ACCOUNT_INFO_IN_PROGRESS)
  })

  test('LOAD_ACCOUNT_INFO negative load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }

    axios.mockImplementation(jest.fn(() => promiseBody(false)))
    await actions[LOAD_ACCOUNT_INFO]({ commit: commitSpy, rootGetters: rootGettersMock }, { login: 123, server: 1 })
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/info?login=123&server=1`
    })

    expect(commitSpy).toHaveBeenCalledTimes(2)
  })

  test('LOAD_REAL_ACCOUNT_LIST positive load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }

    axios.mockImplementation(jest.fn(() => promiseBody(true, { data: mockedRealAccountList })))
    const expectedMap = new Map()
      .set('ECN CLASSIC', [{
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
      },
      {
        type: 'ecn-classic',
        login: 6316398,
        label: 'CLS-6316398',
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
        regdate: '2021-10-06 13:32:20',
        lastdate: '2021-10-06 13:32:20',
        is_swap_free: true
      }])
      .set('ECN PRO', [{
        type: 'ecn-pro',
        login: 6332032,
        label: 'PRO-6332032',
        server_id: 30,
        server: 'Tifia-MT4',
        leverage: '1:100',
        currency: 'EUR',
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
        regdate: '2021-11-30 10:45:32',
        lastdate: '2021-11-30 10:45:32',
        is_swap_free: true
      }])
      .set('Affiliate accounts', [{
        type: 'mt5-partner',
        login: 5012049,
        label: 'MT5-PARTNERS-5012049',
        server_id: 60,
        server: 'Tifia MT5 (Classic)',
        leverage: '1:1',
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
        regdate: '2020-12-16 14:35:09',
        lastdate: '2020-12-22 08:41:03',
        is_swap_free: false
      }])
      .set('MT5 ECN CLASSIC', [{
        type: 'mt5-classic',
        login: 5015633,
        label: 'MT5-C-5015633',
        server_id: 60,
        server: 'Tifia MT5 (Classic)',
        leverage: '1:100',
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
        regdate: '2021-05-26 16:59:44',
        lastdate: '2021-05-26 16:59:44',
        is_swap_free: true
      }])

    await actions[LOAD_REAL_ACCOUNT_LIST]({ commit: commitSpy, rootGetters: rootGettersMock })
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/real`
    })

    expect(commitSpy).toHaveBeenCalledTimes(3)
    expect(commitSpy.mock.calls[0][0]).toBe(SET_REAL_ACCOUNT_LIST_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toBe(SET_REAL_ACCOUNT_LIST)
    expect(commitSpy.mock.calls[1][1]).toEqual(expectedMap)
    expect(commitSpy.mock.calls[2][0]).toEqual(SET_REAL_ACCOUNT_LIST_IN_PROGRESS)
  })

  test('LOAD_REAL_ACCOUNT_LIST negative load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }

    axios.mockImplementation(jest.fn(() => promiseBody(false)))

    await actions[LOAD_REAL_ACCOUNT_LIST]({ commit: commitSpy, rootGetters: rootGettersMock })
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/real`
    })

    expect(commitSpy).toHaveBeenCalledTimes(2)
    expect(commitSpy.mock.calls[0][0]).toBe(SET_REAL_ACCOUNT_LIST_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toEqual(SET_REAL_ACCOUNT_LIST_IN_PROGRESS)
  })

  test('LOAD_DEMO_ACCOUNT_LIST positive load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }
    axios.mockImplementation(jest.fn(() => promiseBody(true, { data: mockedDemoAccountList })))
    const expectedDemoAccountsMap = new Map()
      .set('DEMO START', [{
        type: 'demo-start',
        login: 69868,
        label: 'DSTR-69868',
        server_id: 40,
        server: 'Tifia-Demo',
        leverage: '1:400',
        currency: 'USD',
        balance: 10000,
        margin_free: 10000,
        margin_level: '0,00%',
        total_profit: 0,
        total_swap: 0,
        available: 10000,
        credit: 0,
        equity: 10000,
        floating: '0.00',
        margin: 0,
        regdate: '2020-09-01 12:35:59',
        lastdate: '2020-09-01 12:35:59',
        is_swap_free: false
      }])
      .set('DEMO CLASSIC', [{
        type: 'demo-classic',
        login: 80343,
        label: 'DCLS-80343',
        server_id: 40,
        server: 'Tifia-Demo',
        leverage: '1:400',
        currency: 'USD',
        balance: 10000,
        margin_free: 10000,
        margin_level: '0,00%',
        total_profit: 0,
        total_swap: 0,
        available: 10000,
        credit: 0,
        equity: 10000,
        floating: '0.00',
        margin: 0,
        regdate: '2020-11-24 11:04:55',
        lastdate: '2020-11-24 11:04:55',
        is_swap_free: false
      },
      {
        type: 'demo-classic',
        login: 110110,
        label: 'DCLS-110110',
        server_id: 40,
        server: 'Tifia-Demo',
        leverage: '1:400',
        currency: 'USD',
        balance: 10000,
        margin_free: 10000,
        margin_level: '0,00%',
        total_profit: 0,
        total_swap: 0,
        available: 10000,
        credit: 0,
        equity: 10000,
        floating: '0.00',
        margin: 0,
        regdate: '2021-09-22 12:27:07',
        lastdate: '2021-09-22 12:27:07',
        is_swap_free: false
      }])
      .set('DEMO PRO', [{
        type: 'demo-pro',
        login: 113819,
        label: 'DPRO-113819',
        server_id: 40,
        server: 'Tifia-Demo',
        leverage: '1:400',
        currency: 'USD',
        balance: 50000,
        margin_free: 50000,
        margin_level: '0,00%',
        total_profit: 0,
        total_swap: 0,
        available: 50000,
        credit: 0,
        equity: 50000,
        floating: '0.00',
        margin: 0,
        regdate: '2021-11-09 11:22:55',
        lastdate: '2021-11-09 11:22:55',
        is_swap_free: false
      }])
      .set('DEMO MT5 CLASSIC', [
        {
          type: 'mt5-demo-classic',
          login: 5018313,
          label: 'MT5-DEMO-5018313',
          server_id: 60,
          server: 'unknown',
          leverage: '1:400',
          currency: 'USD',
          balance: 10000,
          margin_free: 10000,
          margin_level: '0,00%',
          total_profit: 0,
          total_swap: 0,
          available: 10000,
          credit: 0,
          equity: 10000,
          floating: '0.00',
          margin: 0,
          regdate: '2021-11-16 18:15:11',
          lastdate: '2021-11-16 18:15:11',
          is_swap_free: true
        },
        {
          type: 'mt5-demo-classic',
          login: 5018314,
          label: 'MT5-DEMO-5018314',
          server_id: 60,
          server: 'unknown',
          leverage: '1:400',
          currency: 'USD',
          balance: 10000,
          margin_free: 10000,
          margin_level: '0,00%',
          total_profit: 0,
          total_swap: 0,
          available: 10000,
          credit: 0,
          equity: 10000,
          floating: '0.00',
          margin: 0,
          regdate: '2021-11-16 18:15:42',
          lastdate: '2021-11-16 18:15:42',
          is_swap_free: true
        }
      ])

    await actions[LOAD_DEMO_ACCOUNT_LIST]({ commit: commitSpy, rootGetters: rootGettersMock })

    expect(commitSpy).toHaveBeenCalledTimes(3)
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/demo`
    })
    expect(commitSpy.mock.calls[0][0]).toBe(SET_DEMO_ACCOUNT_LIST_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toBe(SET_DEMO_ACCOUNT_LIST)
    expect(commitSpy.mock.calls[1][1]).toEqual(expectedDemoAccountsMap)
    expect(commitSpy.mock.calls[2][0]).toEqual(SET_DEMO_ACCOUNT_LIST_IN_PROGRESS)
  })

  test('LOAD_DEMO_ACCOUNT_LIST negative load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }
    axios.mockImplementation(jest.fn(() => promiseBody(false)))
    await actions[LOAD_DEMO_ACCOUNT_LIST]({ commit: commitSpy, rootGetters: rootGettersMock })
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/demo`
    })
    expect(commitSpy).toHaveBeenCalledTimes(2)
  })
})

describe('acсounts getters', () => {
  it('GET_GENERAL_IS_IN_PROGRESS all not in progress', () => {
    const state = {
      [REAL_ACCOUNT_LIST_LOADING_STATE]: false,
      [DEMO_ACCOUNT_LIST_LOADING_STATE]: false,
      [ACCOUNT_INFO_IN_PROGRESS]: false
    }
    expect(getters[GET_GENERAL_IS_IN_PROGRESS](state)).toBe(false)
  })
  it('GET_GENERAL_IS_IN_PROGRESS one progress', () => {
    const state = {
      [REAL_ACCOUNT_LIST_LOADING_STATE]: true,
      [DEMO_ACCOUNT_LIST_LOADING_STATE]: false,
      [ACCOUNT_INFO_IN_PROGRESS]: false
    }
    expect(getters[GET_GENERAL_IS_IN_PROGRESS](state)).toBe(true)
  })
  it('GET_DEMO_ACCOUNT_LIST', () => {
    const state = {
      DEMO_ACCOUNT_LIST: []
    }
    expect(getters[GET_DEMO_ACCOUNT_LIST](state)).toEqual([])
  })
  it('GET_ACCOUNT_INFO_IN_PROGRESS', () => {
    const state = {
      [ACCOUNT_INFO_IN_PROGRESS]: true
    }
    expect(getters[GET_ACCOUNT_INFO_IN_PROGRESS](state)).toBe(true)
  })
  it('GET_COPYING_SESSION', () => {
    const state = {
      [COPYING_SESSION]: []
    }
    expect(getters[GET_COPYING_SESSION](state)).toEqual([])
  })
  it('GET_SELECTED_PERIOD_FILTER', () => {
    const state = {
      [SELECTED_PERIOD_FILTER]: LAST_30_DAYS
    }
    expect(getters[GET_SELECTED_PERIOD_FILTER](state)).toBe(LAST_30_DAYS)
  })
  it('GET_CUSTOM_PERIOD_RANGE', () => {
    const startDate = new Date('01.09.2021 12:00:00')
    const endDate = new Date('15.09.2021 12:00:00')
    const state = {
      [CUSTOM_PERIOD_RANGE]: {
        [START]: startDate,
        [END]: endDate
      }
    }
    expect(getters[GET_CUSTOM_PERIOD_RANGE](state)).toEqual({
      start: startDate.toLocaleDateString(),
      end: endDate.toLocaleDateString()
    })
  })
  it('GET_FILTER_LABELS', () => {
    const state = {
      [FILTER_LABELS]: {
        [CLOSED_ORDERS]: 'Closed orders',
        [DEPOSITS]: 'Deposits'
      }
    }
    expect(getters[GET_FILTER_LABELS](state)).toEqual({
      [CLOSED_ORDERS]: 'Closed orders',
      [DEPOSITS]: 'Deposits'
    })
  })
  it('GET_ORDER_FILTERING', () => {
    const state = {
      [ORDER_FILTERING]: {
        [CLOSED_ORDERS]: true,
        [DEPOSITS]: false
      }
    }
    expect(getters[GET_ORDER_FILTERING](state)).toEqual({
      [CLOSED_ORDERS]: true,
      [DEPOSITS]: false
    })
  })
  it('GET_ORDER_PERIOD_FILTERING', () => {
    const state = {
      [ORDER_PERIOD_FILTERING]: {
        [TODAY]: false,
        [YESTERDAY]: false
      }
    }
    expect(getters[GET_ORDER_PERIOD_FILTERING](state)).toEqual({
      [TODAY]: false,
      [YESTERDAY]: false
    })
  })
  it('GET_ORDER_ITEM', () => {
    const state = {
      [ORDER_ITEM]: {
        ticket: '50724145',
        type: 'Buy',
        openTime: '17:40:43',
        openDate: '11.02.2020',
        stopLoss: '-',
        closeTime: '-',
        spread: '0.00 pips',
        total: '+101.56 USD',
        volume: 0.3,
        openPrice: 1.21334,
        takeProfit: '1.21500',
        currentPrice: 1.21489,
        swap: '0.00 USD',
        commissionFees: '-1.50 USD',
        profit: '+100.06 USD'
      }
    }

    expect(getters[GET_ORDER_ITEM](state)).toEqual(
      {
        ticket: '50724145',
        type: 'Buy',
        openTime: '17:40:43',
        openDate: '11.02.2020',
        stopLoss: '-',
        closeTime: '-',
        spread: '0.00 pips',
        total: '+101.56 USD',
        volume: '0.3',
        openPrice: '1.21334',
        takeProfit: '1.21500',
        currentPrice: '1.21489',
        swap: '0.00 USD',
        commissionFees: '-1.50 USD',
        profit: '+100.06 USD'
      }
    )
  })
  it('GET_ACCOUNT_GENERAL_INFORMATION', () => {
    const state = {
      [ACCOUNT_INFO]: { ...mockedAccountInfo.account, isInvestor: false }
    }

    expect(getters[GET_ACCOUNT_GENERAL_INFORMATION](state)).toEqual({
      isInvestor: false,
      serverId: 30,
      server: 'Tifia-MT4',
      registeredTime: '10:22',
      registeredDate: '14.04.2021',
      login: '6268433',
      leverage: '1:400',
      lastLoginTime: '10:22',
      lastLoginDate: '14.04.2021'
    })
  })
  test('GET_IS_SWAP_FREE if field exist', () => {
    const state = {
      [ACCOUNT_INFO]: {
        is_swap_free: true
      }
    }
    expect(getters[GET_IS_SWAP_FREE](state)).toBe(true)
  })
  test('GET_IS_SWAP_FREE if no exist', () => {
    const state = {
      [ACCOUNT_INFO]: {
      }
    }
    expect(getters[GET_IS_SWAP_FREE](state)).toBe(false)
  })
  test('GET_ACCOUNT_NAME if no exist', () => {
    const state = {
      [ACCOUNT_INFO]: {
        login: '41234123'
      }
    }
    expect(getters[GET_ACCOUNT_NAME](state)).toBe('41234123')
  })
  test('GET_SELECTED_STATISTICS_PERIOD', () => {
    const state = {
      [SELECTED_STATISTICS_PERIOD]: '3 MONTH'
    }
    expect(getters[GET_SELECTED_STATISTICS_PERIOD](state)).toBe('3 MONTH')
  })
  test('GET_AVAILABLE_STATISTICS_PERIODS', () => {
    const state = {
      [AVAILABLE_STATISTICS_PERIODS]: [
        {
          label: '1 DAY',
          value: '1 DAY'
        },
        {
          label: '1 WEEK',
          value: '1 WEEK'
        }
      ]
    }
    expect(getters[GET_AVAILABLE_STATISTICS_PERIODS](state)).toEqual(
      [
        {
          label: '1 DAY',
          value: '1 DAY'
        },
        {
          label: '1 WEEK',
          value: '1 WEEK'
        }
      ]
    )
  })
})
