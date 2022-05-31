import {
  PROMOTIONS_INFO_BLOCKS,
  MY_PROMOTIONS_INFO_BLOCKS
} from '@/modules/promotions/constants.js'
import {
  GET_PROMOTIONS_INFO,
  GET_PROMOTIONS_INFO_BLOCKS,
  GET_MY_PROMOTIONS_INFO_BLOCKS
} from '@/modules/promotions/getter-types'

export const state = () => ({
  [PROMOTIONS_INFO_BLOCKS]: [
    {
      titleBlock: 'Ramadan<br>Charity<br>2022',
      titlePromo: 'Ramadan Charity 2022',
      descriptionPromo: 'Trade with Tifia from 21.03.2022 till 09.05.2022 and make the world better',
      slugImage: 'ramadan-charity-promo-new.png',
      linkPromo: 'contests/ramadan-charity',
      classPromo: ''
    },
    {
      titleBlock: 'Ramadan<br>Giveaway<br>2022',
      titlePromo: 'Ramadan Giveaway 2022',
      descriptionPromo: 'Deposit and trade during Ramadan month and get the presents from Tifia',
      slugImage: 'ramadan-giveaway-promo.png',
      linkPromo: 'contests/ramadan-giveaway',
      classPromo: ''
    },
    {
      prizeFund: '75 000 pesos',
      titlePromo: 'BE ON TOP 2022 Philippines',
      descriptionPromo: 'Win 50 000 Pesos and more awesome prizes! BE ON TOP Affiliate Contest 2022 for the Philippines Partners',
      slugImage: 'be-on-top-ph-promo.png',
      linkPromo: 'contests/be-on-top-affiliate-philippines',
      classPromo: ''
    },
    {
      prizeFund: '75 000 USD',
      titlePromo: 'Tifia Lucky Draw 2022',
      descriptionPromo: 'Deposit $500 and trade profitable to take part in Tifia Lucky Draw 2022. Use a chance to win huge money prizes with Tifia!',
      slugImage: 'tifia-lucky-draw-promo-2021.png',
      linkPromo: 'contests/tifia-lucky-draw-asia',
      classPromo: ''
    },
    {
      titleBlock: 'Forex<br>Cashback',
      titlePromo: 'Forex Cashback',
      descriptionPromo: 'Tifia Compensate the commissions of the payment systems',
      slugImage: 'cashback-promo.png',
      linkPromo: 'promotions/deposits-and-withdrawals-forex-cashback',
      classPromo: ''
    },
    {
      bonus100: true,
      titleBlock: '<span>100%</span> bonus*',
      titlePromo: 'Get 100% Bonus',
      descriptionPromo: 'Dreaming of big profits? Double your deposit!',
      linkPromo: 'bonus-100',
      classPromo: ''
    },
    {
      bonus30: true,
      titleBlock: '<span>30%</span> bonus*',
      titlePromo: 'Get 30% Bonus',
      descriptionPromo: 'Increase your forex profit with 30% tradable bonus',
      linkPromo: 'bonus-30',
      classPromo: ''
    },
    {
      prizeFund: '75 000 USD',
      titlePromo: 'BE ON TOP 2022',
      descriptionPromo: 'Participate in Tifia’s affiliate contest and claim a money prize! Become the best partner of the year!',
      slugImage: 'be-on-top-promo-2022.png',
      linkPromo: 'contests/be-on-top-affiliate',
      classPromo: ''
    },
  ],
  [MY_PROMOTIONS_INFO_BLOCKS]: [
    {
      bonus100: true,
      titleBlock: '<span>100%</span> bonus*',
      titlePromo: 'Get 100% Bonus',
      descriptionPromo: 'Dreaming of big profits? Double your deposit!',
      linkPromo: 'bonus-100',
      classPromo: ''
    },
    {
      bonus30: true,
      titleBlock: '<span>30%</span> bonus*',
      titlePromo: 'Get 30% Bonus',
      descriptionPromo: 'Increase your forex profit with 30% tradable bonus',
      linkPromo: 'bonus-30',
      classPromo: ''
    },
  ]
})

export const getters = {
  [GET_PROMOTIONS_INFO] (state) {
    const countAllPromo = state[PROMOTIONS_INFO_BLOCKS].length
    const countMyPromo = state[MY_PROMOTIONS_INFO_BLOCKS].length
    return {
      countAllPromo: countAllPromo,
      myPromo: countMyPromo
    }
  },
  [GET_PROMOTIONS_INFO_BLOCKS] (state) {
    return state[PROMOTIONS_INFO_BLOCKS]
  },
  [GET_MY_PROMOTIONS_INFO_BLOCKS] (state) {
    return state[MY_PROMOTIONS_INFO_BLOCKS]
  }
}
