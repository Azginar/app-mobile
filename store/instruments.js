import {
  LIST_POPULAR_INSTRUMENTS_MAIN_PAGE,
  FULL_LIST_POPULAR_INSTRUMENTS
} from '@/modules/instruments/constants'
import {
  GET_LIST_TRADING_HISTORY_MAIN_PAGE,
  GET_LIST_POPULAR_INSTRUMENTS_MAIN_PAGE,
  GET_LIST_POPULAR_INSTRUMENTS
} from '@/modules/instruments/getter-types'

export const state = () => ({
  [LIST_POPULAR_INSTRUMENTS_MAIN_PAGE]: [
    {
      images: [
        'https://social.tifia.com/images/instruments/XAU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'XAUUSDx',
      traders: '22849'
    },
    {
      images: [
        'https://social.tifia.com/images/instruments/XAU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'XAUUSD',
      traders: '9197'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'EURUSD',
      traders: '5386'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'EURUSDx',
      traders: '4330'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'GBPUSDx',
      traders: '3990'
    }
  ],
  [FULL_LIST_POPULAR_INSTRUMENTS]: [
    {
      images: [
        'https://social.tifia.com/images/instruments/XAU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'XAUUSDx',
      traders: '22849',
      percentBuy: '48.89%',
      percentSell: '51.11%'
    },
    {
      images: [
        'https://social.tifia.com/images/instruments/XAU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'XAUUSD',
      traders: '11719',
      percentBuy: '52.87%',
      percentSell: '47.13%'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'EURUSD',
      traders: '5324',
      percentBuy: '32.89%',
      percentSell: '67.11%'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'GBPUSD',
      traders: '4004',
      percentBuy: '49.45%',
      percentSell: '50.55%'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'EURUSDx',
      traders: '4002',
      percentBuy: '43.33%',
      percentSell: '56.67%'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'GBPUSDx',
      traders: '3698',
      percentBuy: '48.51%',
      percentSell: '51.49%'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/JP.png'
      ],
      instrument: 'EURJPYx',
      traders: '1248',
      percentBuy: '56.57%',
      percentSell: '43.43%'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/JP.png'
      ],
      instrument: 'GBPJPY',
      traders: '1191',
      percentBuy: '52.06%',
      percentSell: '47.94%'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/CA.png'
      ],
      instrument: 'GBPCAD',
      traders: '1010',
      percentBuy: '99.21%',
      percentSell: '0'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/US.png',
        'https://social.tifia.com/images/flags/flat/32/CH.png'
      ],
      instrument: 'USDCHF',
      traders: '278',
      percentBuy: '38.49%',
      percentSell: '61.51%'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/AU.png'
      ],
      instrument: 'GBPAUDx',
      traders: '243',
      percentBuy: '23.05%',
      percentSell: '76.95%'
    },
    {
      images: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/CA.png'
      ],
      instrument: 'GBPCADx',
      traders: '129',
      percentBuy: '42.64%',
      percentSell: '57.36%'
    }
  ]
})

export const getters = {
  [GET_LIST_POPULAR_INSTRUMENTS_MAIN_PAGE] (state) {
    return state[LIST_POPULAR_INSTRUMENTS_MAIN_PAGE]
  },
  [GET_LIST_POPULAR_INSTRUMENTS] (state) {
    return state[FULL_LIST_POPULAR_INSTRUMENTS]
  }
}
