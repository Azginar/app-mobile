import axios from 'axios'
import {
  SET_PROFILE_DATA,
  CHANGE_USER_SETTINGS_FORM_REGION,
  CHANGE_USER_SETTINGS_FORM_CITY,
  CLEAR_ALL_ERRORS,
  SET_ERRORS,
  CHANGE_USER_SETTINGS_FORM_FULL_NAME,
  CHANGE_USER_SETTINGS_FORM_COUNTRY,
  CHANGE_USER_SETTINGS_FORM_POSTCODE,
  CHANGE_USER_SETTINGS_FORM_ADDRESS,
  CHANGE_USER_SETTINGS_FORM_PHONE,
  CHANGE_USER_SETTINGS_FORM_ABOUT
} from '@/modules/settings/mutation-types'
import { SAVE_CHANGES, PARSE_AND_SET_ERRORS_TO_STORE } from '@/modules/settings/actions-types'
import {
  PROFILE_DATA,
  FULL_NAME_CLIENT,
  STATUS_NAME_CLIENT,
  AVATAR_LINK_CLIENT,
  NICKNAME_CLIENT,
  SECURE_CLIENT_DATA,
  PUBLICK_CLIENT_DATA,
  VERIFICATION_CLIENT_DATA,
  COUNTRY_DATA_USER,
  ADDRESS_DATA_USER,
  POSTCODE_DATA_USER,
  REGION_DATA_USER,
  CITY_DATA_USER,
  PHONE_DATA_USER,
  ABOUT_USER_DATA_USER,
  GET_USER_FORM_BODY_SERIALIZER
} from '@/modules/settings/getter-types'
import {
  DATA_MARGIN_LEVEL,
  DATA_WITHDRAWAL_CONFIRMATION,
  DATA_EMAIL_NOTIFICATIOS,
  DATA_EMAIL_SUBSCRIPTIONS,
  PROFILE_DATA_INFO,
  ERRORS,
  ANALYTICS_DATA,
  TOP_INSTRUMENTS_DATA,
  BALANCE_INFO_DATA
}
  from '@/modules/settings/constants.js'
import { GET_TOKEN } from '@/modules/login/getter-types'
import API_ROOT from '@/utils/api_root'

const transformClientStatusToString = (storeStatus) => {
  let status = ''
  switch (storeStatus) {
    case 20:
      status = 'Party Verified'
      break
    case 0:
      status = 'Unverified'
      break
    case 1:
    case 2:
      status = 'Verified'
      break
    default:
      status = 'Unverified'
  }
  return status
}

export const state = () => ({
  [DATA_MARGIN_LEVEL]: [
    {
      title: 'Critical margin level %',
      value: '100%'
    },
    {
      title: 'Notify via Email',
      value: 'Yes'
    },
    {
      title: 'Notify via SMS',
      value: 'No'
    }
  ],
  [DATA_WITHDRAWAL_CONFIRMATION]: [
    {
      title: 'Get by email',
      value: 'Yes'
    },
    {
      title: 'Get by SMS',
      value: 'No'
    }
  ],
  [DATA_EMAIL_NOTIFICATIOS]: [
    {
      title: 'Metatrader Statements',
      value: 'Yes'
    },
    {
      title: 'Traders\' and investors\' notifications',
      value: 'Yes'
    },
    {
      title: 'Notifications of Investors\' trading',
      value: 'Yes'
    },
    {
      title: 'New affiliate referrals',
      value: 'No'
    }
  ],
  [DATA_EMAIL_SUBSCRIPTIONS]: [
    {
      title: 'Analytics news',
      value: 'Yes'
    },
    {
      title: 'Company news',
      value: 'Yes'
    },
    {
      title: 'Contests news',
      value: 'Yes'
    },
    {
      title: 'Education news',
      value: 'No'
    }
  ],
  [PROFILE_DATA_INFO]: {
    full_name: '',
    country: '',
    region: '',
    city: '',
    address: '',
    postcode: '',
    about: '',
    phone: ''
  },
  [ERRORS]: [],
  [ANALYTICS_DATA]: [
    {
      time: '2 часа назад',
      title: 'Ключевые события',
      description: '<p>Соединённые Штаты Америки</p><p>Американская валюта сегодня слабеет по отношению к евро и движется горизонтально в парах с фунтом и иеной.</p><p>Инвесторы продолжают наблюдать за развитием торгового конфликта КНР и США. Американская администрация выполнила угрозы и подняла пошлины на китайский импорт суммой в 200 млрд долларов с 10% до 25%. Китайское правительство выразило сожаление по поводу такого решения США и заявило о том, что примет ответные меры. В настоящее время Пекин уже поднял пошлины на американский импорт суммой в 110 млрд долларов.</p>'
    },
    {
      time: '4 часа назад',
      title: 'GBP/USD: общий обзор',
      description: '<p>Текущая динамика</p><p>В конце апреля и начале мая восходящая динамика пары GBP/USD, основанная на сильной британской статистике, сменилась резким падением. Основным катализатором снижения стали негативные данные по ключевым секторам экономики Великобритании и сильные релизы США, что обеспечило рост спроса на американскую валюту, которая начала укрепляться по отношению к основным конкурентам. Сегодня в Великобритании вышел ряд публикаций, которые практически никак не повлияли на динамику курса за счёт своей разнонаправленности: в марте данные по промышленности выросли, в то время как темпы роста экономики сократились.</p>'
    }
  ],
  [TOP_INSTRUMENTS_DATA]: [
    {
      type: 'instruments',
      status: 'sell',
      images: [
        'https://social.tifia.com/images/instruments/XAU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'XAUUSDx',
      profit: '+120.47 USD'
    },
    {
      type: 'instruments',
      status: 'sell',
      images: [
        'https://social.tifia.com/images/flags/flat/32/GB.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'GBPUSDx',
      profit: '+56.12 USD'
    },
    {
      type: 'instruments',
      status: 'sell',
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'EURUSDx',
      profit: '+145.12 USD'
    },
    {
      type: 'instruments',
      status: 'buy',
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'EURUSD',
      profit: '-78.67 USD'
    },
    {
      type: 'instruments',
      status: 'buy',
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/JP.png'
      ],
      instrument: 'EURJPYx',
      profit: '-12.12 USD'
    },
    {
      type: 'instruments',
      status: 'sell',
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'EURUSDx',
      profit: '+145.12 USD'
    },
    {
      type: 'instruments',
      status: 'sell',
      images: [
        'https://social.tifia.com/images/flags/flat/32/EU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'EURUSDx',
      profit: '+145.12 USD'
    },
    {
      type: 'instruments',
      status: 'buy',
      images: [
        'https://social.tifia.com/images/instruments/XAU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'XAUUSDx',
      profit: '-111.18 USD'
    }
  ],
  [BALANCE_INFO_DATA]: [
    {
      title: 'All accounts balance',
      value: '3 084.54 USD'
    }
  ]
})

export const getters = {

  [PUBLICK_CLIENT_DATA] (state, getters, rootState) {
    const countriesList = rootState['root-store'].allowCountries

    return [
      {
        title: 'Nickname',
        value: getters[PROFILE_DATA].username
      },
      {
        title: 'Registration date',
        value: getters[PROFILE_DATA].reg_date
      },
      {
        title: 'Country',
        value: countriesList[getters[PROFILE_DATA].country],
        img: getters[PROFILE_DATA].flag
      },
      {
        title: 'Language',
        value: getters[PROFILE_DATA].language
      },
      {
        title: 'About me',
        value: getters[PROFILE_DATA].about
      }
    ]
  },
  [SECURE_CLIENT_DATA] (state, getters) {
    return [
      {
        title: 'Full name',
        value: getters[PROFILE_DATA].full_name
      },
      {
        title: 'Gender',
        value: 'Male'
      },
      {
        title: 'Date of birth',
        value: getters[PROFILE_DATA].birth_date
      },
      {
        title: 'Phone',
        value: getters[PROFILE_DATA].phone
      },
      {
        title: 'Address',
        value: getters[PROFILE_DATA].addressFormat
      }
    ]
  },

  [VERIFICATION_CLIENT_DATA] (state, getters) {
    let verificationStatusesNameAndDocs
    if (getters[PROFILE_DATA].name_status === 1 && getters[PROFILE_DATA].address_status === 1) {
      verificationStatusesNameAndDocs = 'Verified'
    } else {
      verificationStatusesNameAndDocs = 'Unverified'
    }
    return [
      {
        title: 'Phone',
        value: transformClientStatusToString(getters[PROFILE_DATA].phone_status),
        button: 'Change',
        url: '/settings/phone-verify'
      },
      {
        title: 'Email',
        value: transformClientStatusToString(getters[PROFILE_DATA].email_status),
        button: 'Change',
        url: '/settings/email-verify'
      },
      {
        title: 'Personal info',
        value: 'Unverified',
        button: 'Edit',
        url: '/settings/edit-personal-info'
      },
      {
        title: 'Upload documents',
        value: verificationStatusesNameAndDocs,
        button: 'Upload',
        url: '/settings/upload-documents'
      },
      {
        title: 'Bank card',
        value: 'Add and verify bank card',
        button: 'Add',
        url: '/settings/verification-bank-card'
      }
    ]
  },
  [PROFILE_DATA] (state) {
    return state[PROFILE_DATA_INFO]
  },
  [FULL_NAME_CLIENT] (state, getters) {
    return getters[PROFILE_DATA].full_name
  },
  [NICKNAME_CLIENT] (state, getters) {
    return getters[PROFILE_DATA].client_uid
  },
  [AVATAR_LINK_CLIENT] (state) {
    return state[PROFILE_DATA_INFO].avatar
  },
  [STATUS_NAME_CLIENT] (state, getters) {
    return transformClientStatusToString(getters[PROFILE_DATA].client_status)
  },
  [COUNTRY_DATA_USER] (state, getters, rootState) {
    const allCountries = rootState['root-store'].allowCountries
    return allCountries[state[PROFILE_DATA_INFO].country]
  },
  [CITY_DATA_USER] (state) {
    return state[PROFILE_DATA_INFO].city
  },
  [ADDRESS_DATA_USER] (state) {
    return state[PROFILE_DATA_INFO].address
  },
  [POSTCODE_DATA_USER] (state) {
    return state[PROFILE_DATA_INFO].postcode
  },
  [REGION_DATA_USER] (state) {
    return state[PROFILE_DATA_INFO].region
  },
  [PHONE_DATA_USER] (state) {
    return state[PROFILE_DATA_INFO].phone
  },
  [ABOUT_USER_DATA_USER] (state) {
    return state[PROFILE_DATA_INFO].about
  },
  [GET_USER_FORM_BODY_SERIALIZER] (state) {
    const data = {
      full_name: state[PROFILE_DATA_INFO].full_name,
      region: state[PROFILE_DATA_INFO].region,
      country: state[PROFILE_DATA_INFO].country,
      city: state[PROFILE_DATA_INFO].city,
      postcode: state[PROFILE_DATA_INFO].postcode,
      address: state[PROFILE_DATA_INFO].address,
      phone: state[PROFILE_DATA_INFO].phone,
      about: state[PROFILE_DATA_INFO].about
    }
    let formDataString = ''
    for (const [key, value] of Object.entries(data)) {
      formDataString += `${key}=${value}&`
    }

    return formDataString
  },
  getRootCountries (state, getters, rootState) {
    const allCountries = []
    for (const [key, value] of Object.entries(rootState['root-store'].allowCountries)) {
      allCountries.push({ label: value, value: key })
    }
    return allCountries
  }
}

export const mutations = {
  [SET_PROFILE_DATA] (state, value) {
    state[PROFILE_DATA_INFO] = value
  },
  [CHANGE_USER_SETTINGS_FORM_FULL_NAME] (state, fullName) {
    state[PROFILE_DATA_INFO].full_name = fullName
  },
  [CHANGE_USER_SETTINGS_FORM_REGION] (state, region) {
    state[PROFILE_DATA_INFO].region = region
  },
  [CHANGE_USER_SETTINGS_FORM_CITY] (state, city) {
    state[PROFILE_DATA_INFO].city = city
  },
  [CHANGE_USER_SETTINGS_FORM_POSTCODE] (state, postcode) {
    state[PROFILE_DATA_INFO].postcode = postcode
  },
  [CHANGE_USER_SETTINGS_FORM_ADDRESS] (state, address) {
    state[PROFILE_DATA_INFO].address = address
  },
  [CHANGE_USER_SETTINGS_FORM_PHONE] (state, phone) {
    state[PROFILE_DATA_INFO].phone = phone
  },
  [CHANGE_USER_SETTINGS_FORM_ABOUT] (state, about) {
    state[PROFILE_DATA_INFO].about = about
  },
  [CLEAR_ALL_ERRORS] (state) {
    state[ERRORS] = []
  },
  [SET_ERRORS] (state, errors) {
    state[ERRORS] = errors
  },
  [CHANGE_USER_SETTINGS_FORM_COUNTRY] (state, country) {
    state[PROFILE_DATA_INFO].country = country
  }
}

export const actions = {
  [SET_PROFILE_DATA] ({ commit }, data) {
    commit(SET_PROFILE_DATA, data)
  },

  async [SAVE_CHANGES] (context) {
    const { getters, rootGetters, dispatch, commit } = context
    const url = `${API_ROOT.HOST}/v2/settings/edit`
    const token = rootGetters[`login/${GET_TOKEN}`]
    try {
      const { data: response } = await axios({
        method: 'post',
        url: `${url}`,
        data: getters[GET_USER_FORM_BODY_SERIALIZER],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`
        }
      })
      const { status } = response
      if (status === 'error') {
        const { validate_messages: validateMessages } = response
        dispatch('PARSE_AND_SET_ERRORS_TO_STORE', validateMessages)
      } else {
        commit('CLEAR_ALL_ERRORS')
        this.$router.push('/settings/index')
      }
    } catch (e) {
      // TODO add sentry IO to parse this errors
      console.info('error -> ', e)
    }

    // console.info(getters.getUserFormBodySerializer)
  },

  [CHANGE_USER_SETTINGS_FORM_FULL_NAME] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_FULL_NAME, event.target.value)
  },

  [CHANGE_USER_SETTINGS_FORM_POSTCODE] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_POSTCODE, event.target.value)
  },

  [CHANGE_USER_SETTINGS_FORM_ADDRESS] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_ADDRESS, event.target.value)
  },

  [CHANGE_USER_SETTINGS_FORM_REGION] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_REGION, event.target.value)
  },

  [CHANGE_USER_SETTINGS_FORM_CITY] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_CITY, event.target.value)
  },

  [CHANGE_USER_SETTINGS_FORM_PHONE] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_PHONE, event.target.value)
  },

  [CHANGE_USER_SETTINGS_FORM_ABOUT] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_ABOUT, event.target.value)
  },

  [CHANGE_USER_SETTINGS_FORM_ABOUT] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_ABOUT, event.target.value)
  },

  [PARSE_AND_SET_ERRORS_TO_STORE] ({ commit }, errors) {
    commit('CLEAR_ALL_ERRORS')
    const errorsArray = []
    for (const [attribute, message] of Object.entries(errors)) {
      errorsArray.push({ attribute, message })
    }
    commit('SET_ERRORS', errorsArray)
  },

  [CHANGE_USER_SETTINGS_FORM_COUNTRY] ({ commit }, newCountry) {
    const { value } = newCountry
    commit(CHANGE_USER_SETTINGS_FORM_COUNTRY, value)
  }
}
