import {
  ACCOUNT_SOCIAL_TRADER,
  GENERAL_INFORMATION_TRADER,
  SUMMARY_STATISTICS,
  SUMMARY_STATISTICS_SELECTED,
  MASSIVE_MENU_INNER_TRADING_ACCOUNT,
  ACCOUNT_SOCIAL_TRADER_PUBLIC,
  PUBLIC_INFORMATION_SOCIAL_ACCOUNT,
  INVESTOR_CARD,
  INFO_INVESTOR,
  NICKNAME_INVESTOR,
  ACCOUNT_INVESTOR_TRADER
} from '@/modules/socialTrading/constants.js'
import {
  CHANGE_SUMMARY_STATISTICS,
  CHANGE_ACCOUNT_SOCIAL_TRADER,
  CHANGE_NICKNAME_INVESTOR
} from '@/modules/socialTrading/mutation-types'
import {
  GET_TRADER_ACCOUNT_INFO_BY_ACCOUNT,
  GET_NICKNAME_INVESTOR
} from '@/modules/socialTrading/getter-types'

const searchElemByMassive = (searchTerm, massive, keySearch, keyResult) => {
  let massiveLocal = ''
  massiveLocal = massive.find(elem => elem[keySearch] === searchTerm)
  if (massiveLocal !== undefined) {
    return massiveLocal[keyResult]
  }
  return []
}

export const state = () => ({
  [ACCOUNT_SOCIAL_TRADER]: [
    {
      account: 'STR-6106390',
      typeAccount: 'START',
      averageMonthlyProfitability: '36.33 %',
      investors: '132',
      investorsEquity: '22 759.04 USD',
      link: 'str-6106390'
    },
    {
      account: 'ECN-7777390',
      typeAccount: 'ECN CLASSIC',
      averageMonthlyProfitability: '12.09 %',
      investors: '32',
      investorsEquity: '12 333.66 USD',
      link: 'ecn-7777390'
    }
  ],
  [GENERAL_INFORMATION_TRADER]: [
    {
      title: 'About me',
      value: 'Текстовка от управляющего, макс ширина 600 пикселей. Минимальный нижний отступ до окончания блока 20 пикселей'
    },
    {
      title: 'Country',
      value: 'Malaysia',
      img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
    },
    {
      title: 'Language',
      value: 'English'
    },
    {
      title: 'Registration date',
      value: '16 03 2018'
    },
    {
      title: 'Equity',
      value: '10 355.83 USD'
    },
    {
      title: 'Investors',
      value: '514'
    },
    {
      title: 'Investors\' equity',
      value: '23 451.50 USD'
    }
  ],
  [SUMMARY_STATISTICS]: ['1 DAYS', '1 WEEK', '2 WEEKS', '1 MONTH', '3 MONTH', '6 MONTH', '1 YEAR'],
  [SUMMARY_STATISTICS_SELECTED]: '3 MONTH',
  [MASSIVE_MENU_INNER_TRADING_ACCOUNT]: [
    {
      value: 'Overview',
      link: 'overview'
    },
    {
      value: 'Investors',
      link: 'investors'
    }
  ],
  [ACCOUNT_SOCIAL_TRADER_PUBLIC]: null,
  [PUBLIC_INFORMATION_SOCIAL_ACCOUNT]: [
    {
      accountNumber: 'str-6106390',
      tradingAccountInfo: [
        {
          title: 'Copy trading information',
          value: 'Сопроводительный текст от трейдера'
        },
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %'
        }
      ]
    },
    {
      accountNumber: 'ecn-7777390',
      tradingAccountInfo: [
        {
          title: 'Copy trading information',
          value: 'Сопроводительный текст от трейдера'
        },
        {
          title: 'Trader account',
          value: 'ECN-7777390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '12.09 %'
        }
      ]
    }
  ],
  [INVESTOR_CARD]: [
    {
      avatar: 'https://social.tifia.com/uploads/avatars/008/705/1065900b679f820b08e7653858e20846.png',
      link: '/duplicator/user/onlydollar?account=str-6106390',
      slug: 'onlydollar',
      nickname: '@OnlyDollar',
      account: 'STR-6162649',
      copyType: 'Copy in proportion',
      duration: '60 days',
      startEquity: '355.83 USD',
      profit: '+47.82 USD',
      profitCommission: '+9.56 USD'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/008/738/710b97fde4a73fad2076aa74c769508b.jpg',
      link: '/duplicator/user/russel?account=str-6106390',
      nickname: '@Russel',
      slug: 'russel',
      account: 'STR-6162649',
      copyType: 'Copy in proportion',
      duration: '60 days',
      startEquity: '355.83 USD',
      profit: '+47.82 USD',
      profitCommission: '+9.56 USD'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/001/728/8c9f53d819776e60955066c57897bf4c.jpg',
      link: '/duplicator/user/askarida?account=str-6106390',
      nickname: '@Askarida',
      slug: 'askarida',
      account: 'STR-6162649',
      copyType: 'Copy in proportion',
      duration: '60 days',
      startEquity: '355.83 USD',
      profit: '+47.82 USD',
      profitCommission: '+9.56 USD'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/004/001/a11a0fe674d5d819dc76a61bbc70ff89.jpg',
      link: '/duplicator/user/merk?account=str-6106390',
      nickname: '@Merk',
      slug: 'merk',
      account: 'STR-6162649',
      copyType: 'Copy in proportion',
      duration: '60 days',
      startEquity: '355.83 USD',
      profit: '+47.82 USD',
      profitCommission: '+9.56 USD'
    }
  ],
  [INFO_INVESTOR]: [
    {
      title: 'Account',
      value: 'STR-6106390'
    },
    {
      title: 'Start copy',
      value: '22.07.2020 13:02'
    },
    {
      title: 'Duration',
      value: '60 days'
    },
    {
      title: 'Copy type',
      value: 'Copy in proportion to investor’s equity'
    },
    {
      title: 'Start Equity',
      value: '355.83 USD'
    },
    {
      title: 'Current Equity',
      value: '1 355.83 USD'
    },
    {
      title: 'Profit',
      value: '1 000.00 USD'
    },
    {
      title: 'My comission',
      value: '200.00 USD'
    }
  ],
  [NICKNAME_INVESTOR]: null,
  [ACCOUNT_INVESTOR_TRADER]: [
    {
      account: 'STR-6106390',
      typeAccount: 'START',
      attachedTo: '@HighRiskTrader ',
      startBalance: '18 000.00 USD',
      currentBalance: '18 500.88 USD',
      profitTrading: '+ 500.88 USD',
      link: 'str-6106390'
    },
    {
      account: 'ECN-7777390',
      typeAccount: 'ECN CLASSIC',
      attachedTo: '@Mummi',
      startBalance: '100.00 USD',
      currentBalance: '75.00 USD',
      profitTrading: '- 25.00 USD',
      link: 'ecn-7777390'
    }
  ]
})

export const getters = {
  [GET_TRADER_ACCOUNT_INFO_BY_ACCOUNT] (state) {
    return searchElemByMassive(state[ACCOUNT_SOCIAL_TRADER_PUBLIC], state[PUBLIC_INFORMATION_SOCIAL_ACCOUNT], 'accountNumber', 'tradingAccountInfo')
  },
  [GET_NICKNAME_INVESTOR] (state) {
    return searchElemByMassive(state[NICKNAME_INVESTOR], state[INVESTOR_CARD], 'slug', 'nickname')
  }
}

export const mutations = {
  [CHANGE_SUMMARY_STATISTICS] (state, selected) {
    state.SUMMARY_STATISTICS_SELECTED = selected
  },
  [CHANGE_ACCOUNT_SOCIAL_TRADER] (state, value) {
    state[ACCOUNT_SOCIAL_TRADER_PUBLIC] = value
  },
  [CHANGE_NICKNAME_INVESTOR] (state, value) {
    state[NICKNAME_INVESTOR] = value
  }
}

export const actions = {
  [CHANGE_SUMMARY_STATISTICS] ({ commit }, value) {
    commit('CHANGE_SUMMARY_STATISTICS', value)
  },
  [CHANGE_ACCOUNT_SOCIAL_TRADER] ({ commit }, value) {
    commit(CHANGE_ACCOUNT_SOCIAL_TRADER, value)
  },
  [CHANGE_NICKNAME_INVESTOR] ({ commit }, value) {
    commit(CHANGE_NICKNAME_INVESTOR, value)
  }
}
