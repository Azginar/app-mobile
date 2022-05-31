import clone from 'lodash/clone'
import set from 'lodash/set'
import get from 'lodash/get'
import axios from 'axios'

import { GET_TOKEN } from '@/modules/login/getter-types'
import {
  ACCOUNT_TYPE,
  ACCOUNTS_LIST,
  LEVERAGE,
  ACCOUNTS,
  ACCOUNT,
  BALANCE,
  INVESTORS_ACCOUNT_LIST,
  PROFIT,
  USER_NAME,
  ACCOUNT_AVATAR,
  DEMO_ACCOUNT_LIST,
  ARCHIVE_ACCOUNT_LIST,
  EQUITY,
  CREDIT,
  TRADING_TERMINALS,
  TITLE,
  ACCOUNT_INFO,
  LOAD_ACCOUNT_INFO,
  GET_ACCOUNT_GENERAL_INFORMATION,
  GET_ACCOUNT_FINANCE_INFORMATION,
  AVAILABLE_STATISTICS_PERIODS,
  SELECTED_STATISTICS_PERIOD,
  CHANGE_SELECTED_STATISTICS_PERIOD,
  GET_SELECTED_STATISTICS_PERIOD,
  GET_AVAILABLE_STATISTICS_PERIODS,
  CURRENT_ORDERS_LIST,
  ORDER_HISTORY_LIST,
  ORDER_ITEM,
  GET_ORDER_ITEM,
  ORDER_FILTERING,
  CLOSED_ORDERS,
  DEPOSITS,
  WITHDRAWALS,
  REBATES,
  INTERNAL_TRANSFER,
  SWAP,
  FEES_COMMISSIONS,
  GET_ORDER_FILTERING,
  UPDATE_ORDER_TYPE_FILTER,
  FILTER_LABELS,
  GET_FILTER_LABELS,
  TODAY,
  YESTERDAY,
  LAST_7_DAYS,
  LAST_30_DAYS,
  THIS_MONTH,
  PREVIOUS_MONTH,
  CUSTOM_PERIOD,
  UPDATE_ORDER_PERIOD_FILTER,
  ORDER_PERIOD_FILTERING,
  GET_ORDER_PERIOD_FILTERING,
  SELECTED_PERIOD_FILTER,
  CUSTOM_PERIOD_RANGE,
  START,
  END,
  UPDATE_CUSTOM_FILTER_PERIOD,
  GET_CUSTOM_PERIOD_RANGE,
  GET_SELECTED_PERIOD_FILTER,
  GET_ACCOUNT_NAME,
  GET_ACCOUNT_SOCIAL_TRADING_INFORMATION,
  COPYING_SESSION, GET_COPYING_SESSION,
  ACCOUNT_INFO_IN_PROGRESS,
  DEMO_ACCOUNT_LIST_LOADING_STATE,
  REAL_ACCOUNT_LIST_LOADING_STATE,
  OPEN_ACCOUNT_TYPE,
  SELECTED_OPEN_ACCOUNT_TYPE,
  LEVERAGE_TYPE,
  SELECTED_LEVERAGE_TYPE,
  CURRENCY_ACCOUNT,
  SELECTED_CURRENCY_ACCOUNT
} from '../modules/accounts/constants'

import { LOAD_DEMO_ACCOUNT_LIST, LOAD_REAL_ACCOUNT_LIST } from '../modules/accounts/actions-types'

import {
  SET_ACCOUNT_INFO_IN_PROGRESS,
  SET_DEMO_ACCOUNT_LIST,
  SET_DEMO_ACCOUNT_LIST_IN_PROGRESS,
  SET_REAL_ACCOUNT_LIST,
  SET_REAL_ACCOUNT_LIST_IN_PROGRESS,
  CHANGE_SELECTED_OPEN_ACCOUNT_TYPE,
  CHANGE_SELECTED_LEVERAGE_TYPE,
  CHANGE_CURRENCY_ACCOUNT
} from '../modules/accounts/mutation-types'

import {
  GET_ACCOUNT_INFO_IN_PROGRESS, GET_ACCOUNTS_LIST,
  GET_DEMO_ACCOUNT_LIST,
  GET_GENERAL_IS_IN_PROGRESS,
  GET_IS_SWAP_FREE,
  GET_OPEN_ACCOUNT_TYPE,
  GET_SELECTED_OPEN_ACCOUNT_TYPE,
  GET_LEVERAGE_TYPE,
  GET_SELECTED_LEVERAGE_TYPE,
  GET_CURRENCY_ACCOUNT,
  GET_SELECTED_CURRENCY_ACCOUNT
} from '../modules/accounts/getter-types'

import API_ROOT from '../utils/api_root'

export const state = () => ({
  [REAL_ACCOUNT_LIST_LOADING_STATE]: false,
  [COPYING_SESSION]: [
    {
      avatar: 'https://social.tifia.com/uploads/avatars/008/738/710b97fde4a73fad2076aa74c769508b.jpg',
      userName: '@Dshadow (PRO-6161721)',
      startCopying: '14:23 12.04.2020',
      stopCopying: 'CURRENT TIME',
      profit: '+ 248.56 USD'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/004/532/ebf23b724bd04e4eac7576b3f421400d.jpg',
      userName: '@markaw (PRO-6065791)',
      startCopying: '11:11 03.04.2020',
      stopCopying: '22:31 11.04.2020',
      profit: '- 100.00 USD'
    }
  ],
  [AVAILABLE_STATISTICS_PERIODS]: [
    {
      label: '1 DAY',
      value: '1 DAY'
    },
    {
      label: '1 WEEK',
      value: '1 WEEK'
    },
    {
      label: '2 WEEKS',
      value: '2 WEEKS'
    },
    {
      label: '1 MONTH',
      value: '1 MONTH'
    },
    {
      label: '3 MONTH',
      value: '3 MONTH'
    },
    {
      label: '6 MONTH',
      value: '6 MONTH'
    },
    {
      label: '1 YEAR',
      value: '1 YEAR'
    }
  ],
  [SELECTED_STATISTICS_PERIOD]: '3 MONTH',
  [ACCOUNTS_LIST]: [],
  [INVESTORS_ACCOUNT_LIST]: [
    {
      [ACCOUNT]: 'STR-6161721',
      [LEVERAGE]: '1:400',
      [PROFIT]: '+76.42 USD',
      [USER_NAME]: '@Dshadow',
      [ACCOUNT_AVATAR]: 'https://social.tifia.com/uploads/avatars/008/738/710b97fde4a73fad2076aa74c769508b.jpg'
    },
    {
      [ACCOUNT]: 'PRO-6116443',
      [LEVERAGE]: '1:400',
      [PROFIT]: '+1 376.42 USD',
      [USER_NAME]: '@HighRiskTrader ',
      [ACCOUNT_AVATAR]: 'https://social.tifia.com/uploads/avatars/004/532/ebf23b724bd04e4eac7576b3f421400d.jpg'
    },
    {
      [ACCOUNT]: 'PRO-6117889',
      [LEVERAGE]: '1:400',
      [USER_NAME]: null
    }
  ],
  [DEMO_ACCOUNT_LIST]: [],
  [DEMO_ACCOUNT_LIST_LOADING_STATE]: false,
  [ACCOUNT_INFO_IN_PROGRESS]: false,
  [ARCHIVE_ACCOUNT_LIST]: [
    {
      [ACCOUNT_TYPE]: 'DEMO CLASSIC',
      [ACCOUNTS]: [
        {
          [ACCOUNT]: 'CLS-6074081',
          [BALANCE]: '0.00 USD',
          [EQUITY]: '0.00 USD',
          [CREDIT]: '0.0 USD',
          [LEVERAGE]: '1:400'
        },
        {
          [ACCOUNT]: 'CLS-6074081',
          [BALANCE]: '0.00 USD',
          [EQUITY]: '0.00 USD',
          [CREDIT]: '0.0 USD',
          [LEVERAGE]: '1:400'
        }
      ]
    },
    {
      [ACCOUNT_TYPE]: 'ECN PRO',
      [ACCOUNTS]: [
        {
          [ACCOUNT]: 'PRO-6087007',
          [BALANCE]: '0.00 USD',
          [EQUITY]: '0.00 USD',
          [CREDIT]: '0.0 USD',
          [LEVERAGE]: '1:400'
        }
      ]
    }
  ],
  [TRADING_TERMINALS]: [
    {
      [TITLE]: 'MT4 for iPhone/iPad'
    },
    {
      [TITLE]: 'MT4 for Android'
    }
  ],
  [ACCOUNT_INFO]: {

  },
  mockedAccounts: [
    {
      login: 'PROFIT-6102656',
      server: 'Tifia-MT4',
      leverage: '1:400',
      regdate: '30.09.2019 12:22',
      lastdate: '01.01.2020 09:45',
      balance: '18 000.00 USD',
      credit: '0.00 USD',
      margin_free: '18 000.00 USD',
      totalProfit: '0.00 USD',
      marginLevel: '0.00 %',
      equity: '18 000.00 USD',
      floating: '0.00 USD',
      margin: '0.00 USD',
      totalSwap: '0.00 USD',
      availableForWithdrawal: '18 000.00 USD',
      currency: 'USD'
    },
    {
      login: 'CLS-6117769',
      server: 'Tifia-MT4',
      leverage: '1:400',
      regdate: '30.09.2019 12:22',
      lastdate: '01.01.2020 09:45',
      balance: '18 000.00 USD',
      credit: '0.00 USD',
      margin_free: '18 000.00 USD',
      totalProfit: '0.00 USD',
      marginLevel: '0.00 %',
      equity: '18 000.00 USD',
      floating: '0.00 USD',
      margin: '0.00 USD',
      totalSwap: '0.00 USD',
      availableForWithdrawal: '18 000.00 USD',
      attachedTo: '@HighRiskTrader',
      traderAccount: 'PRO-6161721',
      tradersCommission: '20%',
      copyType: 'In proportion to my equity',
      stopLossForCopying: '- 1 500 USD',
      takeProfitForCopying: '+ 5 000 USD',
      startBalance: '18 000.00 USD',
      currentBalance: '18 500.88 USD',
      profitOfTrading: '+ 500.88 USD',
      tradesCommission: '- 100.22 USD',
      totalEarned: '+ 400.66 USD'
    }
  ],
  [CURRENT_ORDERS_LIST]: [
    {
      number: '50724145',
      tradingPair: 'EURUSD',
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      profit: '+100.06 USD',
      type: 'SELL'
    },
    {
      number: '50724145',
      tradingPair: 'GBPJPY',
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      profit: '+1 343.00 USD',
      type: 'SELL'
    }
  ],
  [ORDER_HISTORY_LIST]: [
    {
      number: '50724145',
      tradingPair: 'USDCHF',
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      profit: '-54.36 USD',
      type: 'SELL'
    },
    {
      number: '50686932',
      tradingPair: 'GBPJPY',
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/JP.png'
      ],
      profit: '+1 343.00 USD',
      type: 'BUY'
    },
    {
      number: '50686931',
      tradingPair: 'USDCHF',
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/US.png',
        'https://social.tifia.com/images/flags/flat/32/CH.png'
      ],
      profit: '-54.36 USD',
      type: 'BUY'
    },
    {
      number: '50724145',
      tradingPair: 'EURUSD',
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      profit: '+100.06 USD',
      type: 'SELL'
    },
    {
      number: '50686932',
      tradingPair: 'GBPJPY',
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/JP.png'
      ],
      profit: '+1 343.00 USD',
      type: 'BUY'
    },
    {
      number: '50686931',
      tradingPair: 'USDCHF',
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/US.png',
        'https://social.tifia.com/images/flags/flat/32/CH.png'
      ],
      profit: '-54.36 USD',
      type: 'BUY'
    },
    {
      number: '50686932',
      tradingPair: 'GBPJPY',
      tradingPairImages: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/JP.png'
      ],
      profit: '-54.36 USD',
      type: 'BUY'
    }
  ],
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
  },
  [ORDER_FILTERING]: {
    [CLOSED_ORDERS]: true,
    [DEPOSITS]: false,
    [WITHDRAWALS]: false,
    [REBATES]: true,
    [INTERNAL_TRANSFER]: false,
    [SWAP]: true,
    [FEES_COMMISSIONS]: true
  },
  [ORDER_PERIOD_FILTERING]: {
    [TODAY]: false,
    [YESTERDAY]: false,
    [LAST_7_DAYS]: false,
    [LAST_30_DAYS]: true,
    [THIS_MONTH]: false,
    [PREVIOUS_MONTH]: false,
    [CUSTOM_PERIOD]: false
  },
  [CUSTOM_PERIOD_RANGE]: {
    [START]: new Date(),
    [END]: new Date()
  },
  [SELECTED_PERIOD_FILTER]: LAST_30_DAYS,
  [FILTER_LABELS]: {
    [CLOSED_ORDERS]: 'Closed orders',
    [DEPOSITS]: 'Deposits',
    [WITHDRAWALS]: 'Withdrawals',
    [REBATES]: 'Rebates',
    [INTERNAL_TRANSFER]: 'Internal transfers',
    [SWAP]: 'Swap',
    [FEES_COMMISSIONS]: 'Fees & commissions',
    [TODAY]: 'Today',
    [YESTERDAY]: 'Yesterday',
    [LAST_7_DAYS]: 'Last 7 days',
    [LAST_30_DAYS]: 'Last 30 days',
    [THIS_MONTH]: 'This month',
    [PREVIOUS_MONTH]: 'Previous month'
  },
  [OPEN_ACCOUNT_TYPE]: ['Start (Micro) / MT4', 'ECN Classic / MT4', 'ECN Classic / MT5', 'ECN Pro / MT4'],
  [SELECTED_OPEN_ACCOUNT_TYPE]: 'Start (Micro) / MT4',
  [LEVERAGE_TYPE]: {
    'Start (Micro) / MT4': ['1:100', '1:200', '1:400', '1:500', '1:600', '1:1000'],
    'ECN Classic / MT4': ['1:1', '1:10', '1:50', '1:100', '1:200', '1:300', '1:400', '1:500', '1:600', '1:1000'],
    'ECN Classic / MT5': ['1:1', '1:10', '1:50', '1:100', '1:200', '1:300', '1:400', '1:500', '1:600', '1:1000'],
    'ECN Pro / MT4': ['1:1', '1:10', '1:20', '1:50', '1:100', '1:200', '1:400', '1:500']
  },
  [SELECTED_LEVERAGE_TYPE]: {
    'Start (Micro) / MT4': '1:400',
    'ECN Classic / MT4': '1:400',
    'ECN Classic / MT5': '1:100',
    'ECN Pro / MT4': '1:100'
  },
  [CURRENCY_ACCOUNT]: ['USD', 'EUR'],
  [SELECTED_CURRENCY_ACCOUNT]: 'USD'
})

export const getters = {
  [GET_ACCOUNTS_LIST] (state) {
    return state[ACCOUNTS_LIST]
  },
  [GET_GENERAL_IS_IN_PROGRESS] (state) {
    return state[REAL_ACCOUNT_LIST_LOADING_STATE] || state[DEMO_ACCOUNT_LIST_LOADING_STATE] || state[ACCOUNT_INFO_IN_PROGRESS]
  },
  [GET_DEMO_ACCOUNT_LIST] (state) {
    return state[DEMO_ACCOUNT_LIST]
  },
  [GET_ACCOUNT_INFO_IN_PROGRESS] (state) {
    return state[ACCOUNT_INFO_IN_PROGRESS]
  },
  [GET_COPYING_SESSION] (state) {
    return state[COPYING_SESSION]
  },
  [GET_SELECTED_PERIOD_FILTER] (state) {
    return state[SELECTED_PERIOD_FILTER]
  },
  [GET_CUSTOM_PERIOD_RANGE] (state) {
    return {
      start: state[CUSTOM_PERIOD_RANGE][START].toLocaleDateString(),
      end: state[CUSTOM_PERIOD_RANGE][END].toLocaleDateString()
    }
  },
  [GET_FILTER_LABELS] (state) {
    return state[FILTER_LABELS]
  },
  [GET_ORDER_FILTERING] (state) {
    return state[ORDER_FILTERING]
  },
  [GET_ORDER_PERIOD_FILTERING] (state) {
    return state[ORDER_PERIOD_FILTERING]
  },
  [GET_ORDER_ITEM] (state) {
    const orderItem = clone(state[ORDER_ITEM])
    /**
     * transform number values to string for two-line-info component
     */
    for (const [key, value] of Object.entries(orderItem)) {
      if (typeof value === 'number') {
        set(orderItem, key, String(value))
      }
    }
    return orderItem
  },
  [GET_ACCOUNT_GENERAL_INFORMATION] (state) {
    const getDate = (someDate) => {
      return new Intl.DateTimeFormat(
        'ru',
        {
          day: '2-digit',
          year: 'numeric',
          month: '2-digit'
        }).format(someDate)
    }

    const getTime = (someDate) => {
      return new Intl.DateTimeFormat('ru', { minute: '2-digit', hour: '2-digit' }).format(someDate)
    }

    const allAccountInfo = state[ACCOUNT_INFO]
    // Safari doesn't support - date separator and instead it looks for /
    // separator so we simply add a regex to swap that at the end like this:
    // todo add check that user from ios phone
    // const regDate = new Date(get(allAccountInfo, 'regdate', '1970').replace(/-/g, '/'))
    // const lastDate = new Date(get(allAccountInfo, 'lastdate', '1970').replace(/-/g, '/'))
    const fullDateReg = get(allAccountInfo, 'regdate')
    const fullDateLastLogin = get(allAccountInfo, 'lastdate')

    let timeReg = (fullDateReg || '').split(' ')[1]
    let dateReg = (fullDateReg || '').split(' ')[0]

    let timeLastLogin = (fullDateLastLogin || '').split(' ')[1]
    let dateLastLogin = (fullDateLastLogin || '').split(' ')[0]

    const [yearReg, monthReg, dayReg] = dateReg.split('-')
    dateReg = `${dayReg}.${monthReg}.${yearReg}`

    const [yearLastLogin, monthLastLogin, dayLastLogin] = dateLastLogin.split('-')
    dateLastLogin = `${dayLastLogin}.${monthLastLogin}.${yearLastLogin}`

    const [hoursReg, minutesReg] = timeReg.split(':')
    timeReg = `${hoursReg}:${minutesReg}`

    const [hoursLastLogin, minutesLastLogin] = timeLastLogin.split(':')
    timeLastLogin = `${hoursLastLogin}:${minutesLastLogin}`

    return {
      login: get(allAccountInfo, 'login', '').toString(),
      server: allAccountInfo.server,
      leverage: allAccountInfo.leverage,
      registeredDate: dateReg,
      registeredTime: timeReg,
      lastLoginDate: dateLastLogin,
      lastLoginTime: timeLastLogin,
      isInvestor: allAccountInfo.isInvestor,
      serverId: allAccountInfo.server_id
    }
  },
  [GET_ACCOUNT_SOCIAL_TRADING_INFORMATION] (state) {
    const allAccountInfo = state[ACCOUNT_INFO]
    return {
      attachedTo: allAccountInfo.attachedTo,
      traderAccount: allAccountInfo.traderAccount,
      tradersCommission: allAccountInfo.tradersCommission,
      copyType: allAccountInfo.copyType,
      stopLossForCopying: allAccountInfo.stopLossForCopying,
      takeProfitForCopying: allAccountInfo.takeProfitForCopying,
      startBalance: allAccountInfo.startBalance,
      currentBalance: allAccountInfo.currentBalance,
      profitOfTrading: allAccountInfo.profitOfTrading,
      totalEarned: allAccountInfo.totalEarned
    }
  },
  [GET_IS_SWAP_FREE] (state) {
    return get(state, 'ACCOUNT_INFO.is_swap_free', false)
  },
  [GET_ACCOUNT_NAME] (state) {
    const allAccountInfo = state[ACCOUNT_INFO]
    return allAccountInfo.login
  },
  [GET_ACCOUNT_FINANCE_INFORMATION] (state) {
    const allAccountInfo = state[ACCOUNT_INFO]
    return {
      balance: allAccountInfo.balance,
      credit: allAccountInfo.credit,
      freeMargin: allAccountInfo.margin_free,
      totalProfit: allAccountInfo.total_profit,
      marginLevel: allAccountInfo.margin_level,
      equity: allAccountInfo.equity,
      floating: allAccountInfo.floating,
      margin: allAccountInfo.margin,
      totalSwap: allAccountInfo.total_swap,
      availableForWithdrawal: allAccountInfo.available,
      currency: allAccountInfo.currency
    }
  },
  [GET_SELECTED_STATISTICS_PERIOD] (state) {
    return state[SELECTED_STATISTICS_PERIOD]
  },
  [GET_AVAILABLE_STATISTICS_PERIODS] (state) {
    return state[AVAILABLE_STATISTICS_PERIODS]
  },
  [GET_OPEN_ACCOUNT_TYPE] (state) {
    return state[OPEN_ACCOUNT_TYPE]
  },
  [GET_SELECTED_OPEN_ACCOUNT_TYPE] (state) {
    return state[SELECTED_OPEN_ACCOUNT_TYPE]
  },
  [GET_LEVERAGE_TYPE] (state) {
    return state[LEVERAGE_TYPE]
  },
  [GET_SELECTED_LEVERAGE_TYPE] (state) {
    return state[SELECTED_LEVERAGE_TYPE]
  },
  [GET_CURRENCY_ACCOUNT] (state) {
    return state[CURRENCY_ACCOUNT]
  },
  [GET_SELECTED_CURRENCY_ACCOUNT] (state) {
    return state[SELECTED_CURRENCY_ACCOUNT]
  }
}

export const mutations = {
  [SET_DEMO_ACCOUNT_LIST] (state, values) {
    state[DEMO_ACCOUNT_LIST] = values
  },
  [SET_REAL_ACCOUNT_LIST] (state, values) {
    state[ACCOUNTS_LIST] = values
  },
  [SET_DEMO_ACCOUNT_LIST_IN_PROGRESS] (state) {
    state[DEMO_ACCOUNT_LIST_LOADING_STATE] = !state[DEMO_ACCOUNT_LIST_LOADING_STATE]
  },
  [SET_ACCOUNT_INFO_IN_PROGRESS] (state) {
    state[ACCOUNT_INFO_IN_PROGRESS] = !state[ACCOUNT_INFO_IN_PROGRESS]
  },
  [UPDATE_CUSTOM_FILTER_PERIOD] (state, { startDate, endDate }) {
    state[CUSTOM_PERIOD_RANGE][START] = startDate
    state[CUSTOM_PERIOD_RANGE][END] = endDate
  },
  [LOAD_ACCOUNT_INFO] (state, accountInfo) {
    state[ACCOUNT_INFO] = accountInfo
  },
  // todo: deprecated mutation only for dev without api
  _loadInvestorAccountInfo (state) {
    state[ACCOUNT_INFO] = state.mockedAccounts[1]
  },
  [CHANGE_SELECTED_STATISTICS_PERIOD] (state, value) {
    state[SELECTED_STATISTICS_PERIOD] = value
  },
  [UPDATE_ORDER_TYPE_FILTER] (state, type) {
    state[ORDER_FILTERING][type] = !state[ORDER_FILTERING][type]
  },
  [UPDATE_ORDER_PERIOD_FILTER] (state, type) {
    state[ORDER_PERIOD_FILTERING][state[SELECTED_PERIOD_FILTER]] = false
    state[SELECTED_PERIOD_FILTER] = type
    state[ORDER_PERIOD_FILTERING][type] = true
  },
  [SET_REAL_ACCOUNT_LIST_IN_PROGRESS] (state) {
    state[REAL_ACCOUNT_LIST_LOADING_STATE] = !state[REAL_ACCOUNT_LIST_LOADING_STATE]
  },
  [CHANGE_SELECTED_OPEN_ACCOUNT_TYPE] (state, selected) {
    state[SELECTED_OPEN_ACCOUNT_TYPE] = selected
  },
  [CHANGE_SELECTED_LEVERAGE_TYPE] (state, payload) {
    const { leverage, typeAccount } = payload
    state[SELECTED_LEVERAGE_TYPE][typeAccount] = leverage
  },
  [CHANGE_CURRENCY_ACCOUNT] (state, selected) {
    state[SELECTED_CURRENCY_ACCOUNT] = selected
  }
}

export const actions = {
  [UPDATE_CUSTOM_FILTER_PERIOD] (context, payload) {
    const { commit } = context
    commit(UPDATE_CUSTOM_FILTER_PERIOD, payload)
  },
  [UPDATE_ORDER_PERIOD_FILTER] (context, payload) {
    const { commit } = context
    commit(UPDATE_ORDER_PERIOD_FILTER, payload)
  },
  [UPDATE_ORDER_TYPE_FILTER] (context, payload) {
    const { commit } = context
    commit(UPDATE_ORDER_TYPE_FILTER, payload)
  },
  [CHANGE_SELECTED_STATISTICS_PERIOD] (context, payload) {
    const { commit } = context
    const { value } = payload
    commit(CHANGE_SELECTED_STATISTICS_PERIOD, value)
  },
  // todo: deprecated action
  _loadTraderAccountInfo (context) {
    context.commit('_loadInvestorAccountInfo')
  },
  async [LOAD_ACCOUNT_INFO] (context, payload) {
    const { rootGetters, commit } = context
    commit(SET_ACCOUNT_INFO_IN_PROGRESS)
    const url = `${API_ROOT.HOST}/v2/accounts/info?login=${payload.login}&server=${payload.server}`
    const token = rootGetters[`login/${GET_TOKEN}`]
    try {
      const { data: response } = await axios({
        url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      commit(LOAD_ACCOUNT_INFO, { ...response.account, isInvestor: false })
      commit(SET_ACCOUNT_INFO_IN_PROGRESS)
    } catch (e) {
      commit(SET_ACCOUNT_INFO_IN_PROGRESS)
    }
  },
  async [LOAD_REAL_ACCOUNT_LIST] (context) {
    const { rootGetters, commit } = context
    commit(SET_REAL_ACCOUNT_LIST_IN_PROGRESS)
    const url = `${API_ROOT.HOST}/v2/accounts/real`

    const token = rootGetters[`login/${GET_TOKEN}`]
    try {
      const { data: response } = await axios({
        url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      const allRealAccounts = get(response, 'all', null)
      const allRealAccountsMap = new Map()
      if (allRealAccounts) {
        for (const [, value] of Object.entries(allRealAccounts)) {
          const typeAccounts = get(value, 'items', [])
          const accountTypeName = get(value, 'name', '')

          if (typeAccounts.length > 0) {
            allRealAccountsMap.set(accountTypeName, typeAccounts)
          }
        }
        commit(SET_REAL_ACCOUNT_LIST, allRealAccountsMap)
      }

      commit(SET_REAL_ACCOUNT_LIST_IN_PROGRESS)
    } catch (e) {
      commit(SET_REAL_ACCOUNT_LIST_IN_PROGRESS)
    }
  },
  async [LOAD_DEMO_ACCOUNT_LIST] (context) {
    const { rootGetters, commit } = context
    commit(SET_DEMO_ACCOUNT_LIST_IN_PROGRESS)
    const url = `${API_ROOT.HOST}/v2/accounts/demo`

    const token = rootGetters[`login/${GET_TOKEN}`]
    try {
      const { data: response } = await axios({
        url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const allDemoAccounts = get(response, 'all', null)
      const allDemoAccountMap = new Map()
      if (allDemoAccounts) {
        for (const [, value] of Object.entries(allDemoAccounts)) {
          const typeAccounts = get(value, 'items', [])
          const accountTypeName = get(value, 'name', '')

          if (typeAccounts.length > 0) {
            allDemoAccountMap.set(accountTypeName, typeAccounts)
          }
        }
        commit(SET_DEMO_ACCOUNT_LIST, allDemoAccountMap)
      }

      commit(SET_DEMO_ACCOUNT_LIST_IN_PROGRESS)
    } catch (e) {
      commit(SET_DEMO_ACCOUNT_LIST_IN_PROGRESS)
    }
  },
  [CHANGE_SELECTED_OPEN_ACCOUNT_TYPE] (vueContext, selected) {
    vueContext.commit('CHANGE_SELECTED_OPEN_ACCOUNT_TYPE', selected)
  },
  [CHANGE_SELECTED_LEVERAGE_TYPE] (vueContext, payload) {
    vueContext.commit('CHANGE_SELECTED_LEVERAGE_TYPE', payload)
  },
  [CHANGE_CURRENCY_ACCOUNT] (vueContext, selected) {
    vueContext.commit('CHANGE_CURRENCY_ACCOUNT', selected)
  }
}
