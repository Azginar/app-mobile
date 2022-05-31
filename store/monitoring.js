import get from 'lodash/get'
import {
  ACCOUNT_NAME, AVATAR, AVERAGE_MONTH_PROFITABILITY, DAYS, EQUITY, FILTER_SETTINGS, GET_EQUITY_FILTER,
  GET_INVESTOR_FILTER, GET_INVESTORS_EQUITY_FILTER, GET_LIFESPAN_FILTER,
  GET_PROFITABILITY_FILTER, GET_RATING_LIST, GET_SELECTED_PERIOD, GET_SELECTED_PERIOD_LABEL,
  GET_SELECTED_PROVIDER_SUB_PAGE, GET_SELECTED_TRADER_ACCOUNT_INFO, GET_TRADER_ACCOUNTS_NAMES, GET_TRADER_SUMMARY_INFO,
  GET_TRADERS_COMMISSION_FILTER, INVESTORS, INVESTORS_EQUITY, LIFESPAN, ONE_MONTH, ONE_WEEK, ONE_YEAR, OVERALL,
  PERIOD_LABELS, PROFITABILITY, RATING_LIST, SELECTED_PERIOD, SELECTED_PROVIDER_SUB_PAGE, SET_EQUITY_FILTER,
  SET_INVESTORS_EQUITY_FILTER, SET_INVESTORS_FILTER, SET_LIFESPAN_FILTER, SET_PROFITABILITY_FILTER,
  SET_SELECTED_PERIOD, SET_SELECTED_PROVIDER_SUB_PAGE, SET_TRADERS_COMMISSION_FILTER, SIX_MONTH, THREE_MONTH,
  TRADER_ACCOUNTS, TRADER_SUMMARY_INFO, TRADERS_COMMISSION, USER_NAME
} from '@/modules/monitoring/constants'

export const state = () => ({
  [RATING_LIST]: [
    {
      [DAYS]: '102 days',
      [AVATAR]: 'https://social.tifia.com/uploads/avatars/008/738/710b97fde4a73fad2076aa74c769508b.jpg',
      [USER_NAME]: '@Dshadow',
      [ACCOUNT_NAME]: 'STR-6162649',
      [AVERAGE_MONTH_PROFITABILITY]: '36.33 %',
      [EQUITY]: '355.83 USD',
      [INVESTORS]: '243',
      [INVESTORS_EQUITY]: '23 451.50 USD'
    },
    {
      [DAYS]: '60 days',
      [AVATAR]: 'https://social.tifia.com/uploads/avatars/010/779/d2b05639fc0cd8f160c78fbfb9d2dfd0.jpg',
      [USER_NAME]: '@Oyeehahh',
      [ACCOUNT_NAME]: 'STR-6162649',
      [AVERAGE_MONTH_PROFITABILITY]: '68.04 %',
      [EQUITY]: '260.18 USD',
      [INVESTORS]: '146',
      [INVESTORS_EQUITY]: '22 759.04 USD'
    },
    {
      [DAYS]: '340 days',
      [AVATAR]: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
      [USER_NAME]: '@CareTaker',
      [ACCOUNT_NAME]: 'STR-6162649',
      [AVERAGE_MONTH_PROFITABILITY]: '48.00 %',
      [EQUITY]: '2 854.94 USD',
      [INVESTORS]: '17',
      [INVESTORS_EQUITY]: '10 086.76 USD'
    },
    {
      [DAYS]: '340 days',
      [AVATAR]: 'https://social.tifia.com/uploads/avatars/008/738/710b97fde4a73fad2076aa74c769508b.jpg',
      [USER_NAME]: '@Daylan',
      [ACCOUNT_NAME]: 'STR-6162649',
      [AVERAGE_MONTH_PROFITABILITY]: '49.31 %',
      [EQUITY]: '242.45 USD',
      [INVESTORS]: '5',
      [INVESTORS_EQUITY]: '1 233.77 USD'
    }
  ],
  [PERIOD_LABELS]: {
    [OVERALL]: 'OVERALL',
    [ONE_YEAR]: '1 year',
    [SIX_MONTH]: '6 months',
    [THREE_MONTH]: '3 month',
    [ONE_MONTH]: '1 month',
    [ONE_WEEK]: '1 week'
  },
  [SELECTED_PERIOD]: OVERALL,
  [FILTER_SETTINGS]: {
    [PROFITABILITY]: {
      max: 500,
      min: 0,
      defaultMin: 0,
      defaultMax: 500
    },
    [EQUITY]: {
      max: 110637,
      min: 25,
      defaultMin: 0,
      defaultMax: 110637
    },
    [TRADERS_COMMISSION]: {
      max: 25,
      min: 5,
      defaultMin: 5,
      defaultMax: 25
    },
    [LIFESPAN]: {
      max: 907,
      min: 0,
      defaultMin: 0,
      defaultMax: 907
    },
    [INVESTORS]: {
      max: 719,
      min: 100,
      defaultMin: 100,
      defaultMax: 719
    },
    [INVESTORS_EQUITY]: {
      max: 15369805.05,
      min: 0,
      defaultMin: 0,
      defaultMax: 15369805.05
    }
  },
  [TRADER_ACCOUNTS]: [
    {
      name: 'STR-6106390',
      typeAccount: 'Start Micro',
      lifeSpan: '271 days',
      equity: '355.83 USD',
      investorsEquity: '23 451.50 USD',
      traderAccount: 'STR-6106390',
      leverage: '1:400',
      tradersCommission: '20 %',
      investors: 23
    },
    {
      name: 'PRO-9566790',
      typeAccount: 'Start Micro',
      lifeSpan: '133 days',
      equity: '200.57 USD',
      investorsEquity: '99 451.50 USD',
      traderAccount: 'STR-6117769',
      leverage: '1:200',
      tradersCommission: '15 %',
      investors: 100
    }
  ],
  [TRADER_SUMMARY_INFO]: {
    avatar: 'https://social.tifia.com/uploads/avatars/008/738/710b97fde4a73fad2076aa74c769508b.jpg'
  },
  [SELECTED_PROVIDER_SUB_PAGE]: 'Summary'
})

export const mutations = {
  [SET_SELECTED_PERIOD] (state, value) {
    state[SELECTED_PERIOD] = value
  },
  [SET_PROFITABILITY_FILTER] (state, { field, value }) {
    state[FILTER_SETTINGS][PROFITABILITY][field] = value
  },
  [SET_EQUITY_FILTER] (state, { field, value }) {
    state[FILTER_SETTINGS][EQUITY][field] = value
  },
  [SET_TRADERS_COMMISSION_FILTER] (state, { field, value }) {
    state[FILTER_SETTINGS][TRADERS_COMMISSION][field] = value
  },
  [SET_LIFESPAN_FILTER] (state, { field, value }) {
    state[FILTER_SETTINGS][LIFESPAN][field] = value
  },
  [SET_INVESTORS_FILTER] (state, { field, value }) {
    state[FILTER_SETTINGS][INVESTORS][field] = value
  },
  [SET_INVESTORS_EQUITY_FILTER] (state, { field, value }) {
    state[FILTER_SETTINGS][INVESTORS_EQUITY][field] = value
  },
  [SET_SELECTED_PROVIDER_SUB_PAGE] (state, value) {
    state[SELECTED_PROVIDER_SUB_PAGE] = value
  }
}

export const getters = {
  [GET_TRADER_SUMMARY_INFO] (state) {
    return state[TRADER_SUMMARY_INFO]
  },
  [GET_SELECTED_PROVIDER_SUB_PAGE] (state) {
    return state[SELECTED_PROVIDER_SUB_PAGE]
  },
  [GET_RATING_LIST] (state) {
    return state[RATING_LIST]
  },
  [GET_SELECTED_PERIOD] (state) {
    return state[SELECTED_PERIOD]
  },
  [GET_SELECTED_PERIOD_LABEL] (state) {
    return state[PERIOD_LABELS][state[SELECTED_PERIOD]]
  },
  [GET_PROFITABILITY_FILTER] (state) {
    return state[FILTER_SETTINGS][PROFITABILITY]
  },
  [GET_EQUITY_FILTER] (state) {
    return state[FILTER_SETTINGS][EQUITY]
  },
  [GET_LIFESPAN_FILTER] (state) {
    return state[FILTER_SETTINGS][LIFESPAN]
  },
  [GET_INVESTOR_FILTER] (state) {
    return state[FILTER_SETTINGS][INVESTORS]
  },
  [GET_INVESTORS_EQUITY_FILTER] (state) {
    return state[FILTER_SETTINGS][INVESTORS_EQUITY]
  },
  [GET_TRADERS_COMMISSION_FILTER] (state) {
    return state[FILTER_SETTINGS][TRADERS_COMMISSION]
  },
  [GET_TRADER_ACCOUNTS_NAMES] (state) {
    return state[TRADER_ACCOUNTS].map(trader => get(trader, 'name'))
  },
  [GET_SELECTED_TRADER_ACCOUNT_INFO] (state) {
    return state[TRADER_ACCOUNTS].find(account => account.name === state[SELECTED_PROVIDER_SUB_PAGE])
  }
}

export const actions = {
  [SET_SELECTED_PROVIDER_SUB_PAGE] ({ commit }, value) {
    commit(SET_SELECTED_PROVIDER_SUB_PAGE, value)
  },
  [SET_SELECTED_PERIOD] ({ commit }, value) {
    commit(SET_SELECTED_PERIOD, value)
  },
  [SET_PROFITABILITY_FILTER] ({ commit }, payload) {
    commit(SET_PROFITABILITY_FILTER, payload)
  },
  [SET_EQUITY_FILTER] ({ commit }, payload) {
    commit(SET_EQUITY_FILTER, payload)
  },
  [SET_TRADERS_COMMISSION_FILTER] ({ commit }, payload) {
    commit(SET_TRADERS_COMMISSION_FILTER, payload)
  },
  [SET_LIFESPAN_FILTER] ({ commit }, payload) {
    commit(SET_LIFESPAN_FILTER, payload)
  },
  [SET_INVESTORS_FILTER] ({ commit }, payload) {
    commit(SET_INVESTORS_FILTER, payload)
  },
  [SET_INVESTORS_EQUITY_FILTER] ({ commit }, payload) {
    commit(SET_INVESTORS_EQUITY_FILTER, payload)
  }
}
