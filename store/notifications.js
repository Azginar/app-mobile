import {
  USERS_LIST,
  USER_ACTIVE
} from '@/modules/notifications/constants'
import {
  GET_USERS_LIST,
  GET_USER_ACTIVE
} from '@/modules/notifications/getter-types'

export const state = () => ({
  [USERS_LIST]: [
    {
      avatar: 'https://social.tifia.com/images/general/tifia-avatar.svg',
      nickname: 'Tifia'
    },
    {
      avatar: 'https://social.tifia.com/images/general/tifia-avatar-news.svg',
      nickname: 'Tifia News'
    },
    {
      avatar: 'https://social.tifia.com/images/general/tifia-avatar-support.svg',
      nickname: 'Tifia Support'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow'
    }
  ],
  [USER_ACTIVE]: {
    Tifia: {
      avatar: 'https://social.tifia.com/images/general/tifia-avatar.svg',
      nickname: 'Tifia',
      messages: [
        {
          avatar: 'https://social.tifia.com/images/general/tifia-avatar.svg',
          nickname: 'Tifia',
          date: '6 months ago',
          text: 'New trading alert ...'
        },
        {
          avatar: 'https://social.tifia.com/images/general/tifia-avatar.svg',
          nickname: 'Tifia',
          date: '4 months ago',
          text: 'New trading alert ...'
        }
      ]
    },
    TifiaNews: {
      avatar: 'https://social.tifia.com/images/general/tifia-avatar-news.svg',
      nickname: 'Tifia News',
      messages: [
        {
          avatar: 'https://social.tifia.com/images/general/tifia-avatar-news.svg',
          nickname: 'Tifia News',
          date: '6 months ago',
          text: 'New trading alert ...'
        },
        {
          avatar: 'https://social.tifia.com/images/general/tifia-avatar-news.svg',
          nickname: 'Tifia News',
          date: '4 months ago',
          text: 'New trading alert ...'
        }
      ]
    },
    TifiaSupport: {
      avatar: 'https://social.tifia.com/images/general/tifia-avatar-support.svg',
      nickname: 'Tifia Support',
      messages: [
        {
          avatar: 'https://social.tifia.com/images/general/tifia-avatar-support.svg',
          nickname: 'Tifia Support',
          date: '6 months ago',
          text: 'New trading alert ...'
        },
        {
          avatar: 'https://social.tifia.com/images/general/tifia-avatar-support.svg',
          nickname: 'Tifia Support',
          date: '4 months ago',
          text: 'New trading alert ...'
        }
      ]
    },
    Dshadow: {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      dateLast: 'last seen today at 14.06',
      messages: [
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '5 months ago',
          text: 'Hello!'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '4 months ago',
          text: 'Hi!'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '3 months ago',
          text: 'Finished copying you'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '3 months ago',
          text: 'Started copying you'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '3 months ago',
          text: 'Subscribed to your feed'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '2 months ago',
          text: 'If you like to trade forex, then you might be interested to know how trading without leverage changes things. Leverage is an integral part of online forex trading and many beginners don’t fully understand it. You should fully understand how it works and be aware of its pros and cons.'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '2 months ago',
          text: 'The fact is that one of the most important and appealing characteristics of forex trading is the high amounts of leverage offered by brokers.'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '2 months ago',
          text: 'But trading with or without leverage has pros and cons. Today, we’re going to talk about the main advantages and disadvantages of trading without leverage in forex.'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '2 months ago',
          text: 'So without any further delay, let’s get started.'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '2 months ago',
          text: 'Trade with a broker that lets you choose your leverage, open your forex trading account today.'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '2 months ago',
          text: 'Hi'
        },
        {
          avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
          nickname: '@Dshadow',
          date: '2 months ago',
          text: 'Many newcomers are told to start off trading without leverage or use small amounts of leverage when trading. For most part, this means not buying assets or instruments that are of much greater value than what is in your trading account. Instead, to only use your own money or small amounts of leverage to fund your deals.'
        }
      ]
    }
  }
})

export const getters = {
  [GET_USERS_LIST] (state) {
    return state[USERS_LIST]
  },
  [GET_USER_ACTIVE] (state) {
    return state[USER_ACTIVE]
  }
}
