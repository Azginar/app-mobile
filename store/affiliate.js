import set from 'lodash/set'
import get from 'lodash/get'
import filter from 'lodash/filter'
import { searchElemByMassive } from '@/utils/helpers'
import {
  PARTNERS_MAIN_INFO,
  AFFILIATE_ACCOUNTS,
  AFFILIATE_COMMISSION_ALL_TIME,
  AFFILIATE_COMMISSION_LAST_MONTH,
  STATISTIC_DATE,
  PERIOD_STATISTIC,
  PERIOD_STATISTIC_SELECTED,
  OVERALL,
  ONE_YEAR,
  SIX_MONTH,
  THREE_MONTH,
  ONE_MONTH,
  ONE_WEEK,
  TODAY,
  YESTERDAY,
  LAST_7_DAYS,
  LAST_30_DAYS,
  THIS_MONTH,
  PREVIOUS_MONTH,
  CUSTOM_PERIOD,
  CUSTOM_PERIOD_RANGE,
  START,
  END,
  COMMISSION_DATA_REF,
  AFFILIATE_REF,
  REFERRALS_FILTERING,
  REFERRALS_PERIOD_FILTERING,
  CUSTOM_PERIOD_REFERRALS,
  SELECTED_REFERRALS_PERIOD_FILTER,
  FILTER_LABELS_REFERRALS,
  ALL,
  DIRECT_REFERRALS,
  SUB_IB,
  SELECTED_REFERRALS_FILTERING,
  AFFILIATE_REF_UID,
  INFORMATION_REF,
  REFERRAL_FILTERING_PARAMETER,
  REFERRAL_PERIOD_DATE,
  CUSTOM_PERIOD_DATE,
  SELECTED_FILTERING_PARAMETER,
  SELECTED_REFERRAL_PERIOD_DATE,
  LABELS_ALL_REFERRAL,
  PERIOD_STATISTIC_CAMPAIGN,
  CUSTOM_PERIOD_CAMPAIGN,
  PERIOD_CAMPAIGN_SELECTED,
  CAMPAIGN_DATE,
  CAMPAIGN_NAME,
  CAMPAIGN_FILTERING_PARAMETER,
  CAMPAIGN_PERIOD_DATE,
  CUSTOM_PERIOD_DATE_CAMPAIGN,
  SELECTED_FILTERING_CAMPAIGN_PARAMETER,
  SELECTED_CAMPAIGN_PERIOD_DATE,
  LABELS_ALL_CAMPAIGN,
  INFORMATION_CAMPAIGN,
  REBATE_START_MICRO_PERCENT,
  REBATE_ECN_CLASSIC_PERCENT,
  REBATE_ECN_PRO_PERCENT,
  REBATE_CARD_DATA,
  ALL_REFERRALS,
  REBATE_FILTER_REFERRALS,
  REBATE_FILTER_REFERRALS_SELECTED,
  PROMO_BLOCK_DATA,
  PROMO_LOGO_AND_CARD,
  COUNTRY_LIST,
  SELECTED_COUNTRY_LIST
} from '@/modules/affiliate/constants'

import {
  GET_PARTNERS_MAIN_INFO,
  GET_USER_NAME,
  GET_AFFILIATE_ACCOUNTS,
  GET_AFFILIATE_COMMISSION_ALL_TIME,
  GET_AFFILIATE_COMMISSION_LAST_MONTH,
  GET_STATISTIC_DATE,
  GET_SELECTED_PERIOD_STATISTIC,
  GET_SELECTED_PERIOD_LABEL_STATISTIC,
  GET_CUSTOM_PERIOD_RANGE,
  GET_COMMISSION_DATA_REF,
  GET_AFFILIATE_REF,
  GET_REFERRALS_FILTERING,
  GET_REFERRALS_PERIOD_FILTERING,
  GET_REFERRALS_FILTERING_AFFILIATE,
  GET_REFERRALS_FILTER_LABELS,
  GET_SELECTED_REFERRALS_FILTERING,
  GET_SELECTED_REFERRALS_PERIOD_FILTER,
  GET_REFERRALS_PERIOD_FILTERING_AFFILIATE,
  GET_CUSTOM_PERIOD_RANGE_REFERRALS,
  GET_SELECTED_CUSTOM_FILTERING,
  GET_NAME_REF_BY_UID,
  GET_INFO_REF,
  GET_STATUS_REF_BY_UID,
  GET_REFERRAL_FILTERING_PARAMETER,
  GET_REFERRAL_PERIOD_DATE,
  GET_LABELS_ALL_REFERRAL,
  GET_SELECTED_PARAMETER_IN_LABELS,
  GET_SELECTED_PERIOD_DATE_IN_LABELS,
  GET_CUSTOM_PERIOD_REFERRAL_VIEW,
  GET_SELECTED_REFERRAL_PERIOD_DATE,
  GET_PERIOD_CAMPAIGN_SELECTED,
  GET_SELECTED_PERIOD_LABEL_CAMPAIGN,
  GET_CAMPAIGN_DATE,
  GET_CAMPAIGN_DATE_BY_SLUG,
  GET_CAMPAIGN_STATUS_BY_SLUG,
  GET_CAMPAIGN_FILTERING_PARAMETER,
  GET_CAMPAIGN_PERIOD_DATE,
  GET_LABELS_ALL_CAMPAIGN,
  GET_SELECTED_PARAMETER_CAMPAIGN_IN_LABELS,
  GET_SELECTED_PERIOD_DATE_CAMPAIGN_IN_LABELS,
  GET_CUSTOM_PERIOD_CAMPAIGN_VIEW,
  GET_SELECTED_CAMPAIGN_PERIOD_DATE,
  GET_INFORMATION_CAMPAIGN,
  GET_REBATE_START_MICRO_PERCENT,
  GET_REBATE_ECN_CLASSIC_PERCENT,
  GET_REBATE_ECN_PRO_PERCENT,
  GET_REBATE_CARD_DATA,
  GET_REBATE_FILTER_REFERRALS,
  GET_SELECTED_REFERRALS_LABEL_REBATE,
  GET_PROMO_BLOCK_DATA,
  GET_PROMO_LOGO_AND_CARD,
  GET_COUNTRY_LIST,
  GET_SELECTED_COUNTRY_LIST
} from '@/modules/affiliate/getter-types'
import {
  SET_SELECTED_PERIOD_STATISTIC,
  UPDATE_CUSTOM_FILTER_PERIOD,
  SET_ACTIVE_ITEM_ACCORDION,
  SET_ACTIVE_ITEM_ACCORDION_REF,
  UPDATE_REFERRALS_TYPE_FILTER,
  UPDATE_REFERRALS_PERIOD_FILTER,
  UPDATE_CUSTOM_FILTER_PERIOD_REFERRALS,
  CHANGE_AFFILIATE_REF_UID,
  SET_ACTIVE_ITEM_INFO_REF,
  UPDATE_REFERRAL_FILTERING_PARAMETER,
  UPDATE_REFERRAL_PERIOD_DATE,
  UPDATE_CUSTOM_PERIOD_DATE,
  SET_SELECTED_PERIOD_CAMPAIGN,
  UPDATE_CUSTOM_FILTER_PERIOD_CAMPAIGN,
  CHANGE_CAMPAIGN_NAME,
  UPDATE_CAMPAIGN_FILTERING_PARAMETER,
  UPDATE_CAMPAIGN_PERIOD_DATE,
  UPDATE_CUSTOM_PERIOD_DATE_CAMPAIGN,
  SET_ACTIVE_ITEM_INFO_CAMPAIGN,
  SET_REBATE_START_MICRO_PERCENT,
  SET_REBATE_ECN_CLASSIC_PERCENT,
  SET_REBATE_ECN_PRO_PERCENT,
  SET_ACTIVE_PERCENT_ACCOUNT,
  SET_SELECTED_REBATE_FILTER_REFERRALS,
  CHANGE_SELECTED_COUNTRY_LIST
} from '@/modules/affiliate/mutation-types'
import { SET_PERCENT_ACCOUNTS, UPDATE_PERCENT_ACCOUNTS } from '@/modules/affiliate/actions-types'

export const state = () => ({
  [PARTNERS_MAIN_INFO]: [{
    status: 'Master IB',
    uid: '1373771679',
    linkUid: 'https://tifia.com?uid=1373771679',
    totalCommission: '2 297.28 USD',
    numberReferrals: '198'
  }],
  [AFFILIATE_ACCOUNTS]: [
    {
      titleBlock: 'PARTNER-6040102',
      date: [
        {
          title: 'active referrals',
          value: '201'
        },
        {
          title: 'Balance',
          value: '4 792.51 USD'
        },
        {
          title: 'Last week',
          value: '+ 665.12 USD'
        }
      ]
    },
    {
      titleBlock: 'MT5-PARTNERS-5002595',
      date: [
        {
          title: 'active referrals',
          value: '64'
        },
        {
          title: 'Balance',
          value: '134.76 USD'
        },
        {
          title: 'Last week',
          value: '+ 12.44 USD'
        }
      ]
    }
  ],
  [AFFILIATE_COMMISSION_ALL_TIME]: [
    {
      title: 'Direct Commission',
      value: '2 197.28 USD'
    },
    {
      title: 'Total number of referrals',
      value: '265'
    },
    {
      title: 'Direct volume',
      value: '153.52 lots'
    },
    {
      title: 'SUB-IB commission',
      value: '100.00 USD'
    },
    {
      title: 'Total number of SUB-IBs',
      value: '4'
    }
  ],
  [AFFILIATE_COMMISSION_LAST_MONTH]: [
    {
      title: 'Direct Commission',
      value: '450.28 USD'
    },
    {
      title: 'new direct referrals',
      value: '32'
    },
    {
      title: 'Direct volume',
      value: '36.52 lots'
    },
    {
      title: 'SUB-IB commission',
      value: '0.00 USD'
    },
    {
      title: 'New SUB-IBs',
      value: '1'
    }
  ],
  [STATISTIC_DATE]: [
    {
      titleBlock: '09.07.2021',
      date: [
        {
          title: 'Visits',
          value: '8'
        },
        {
          title: 'Registrations',
          value: '1'
        },
        {
          title: 'Commission',
          value: '64.33 USD'
        }
      ]
    },
    {
      titleBlock: '08.07.2021',
      date: [
        {
          title: 'Visits',
          value: '5'
        },
        {
          title: 'Registrations',
          value: '0'
        },
        {
          title: 'Commission',
          value: '228.04 USD'
        }
      ]
    },
    {
      titleBlock: '07.07.2021',
      date: [
        {
          title: 'Visits',
          value: '4'
        },
        {
          title: 'Registrations',
          value: '0'
        },
        {
          title: 'Commission',
          value: '145.47 USD'
        }
      ]
    },
    {
      titleBlock: '06.07.2021',
      date: [
        {
          title: 'Visits',
          value: '6'
        },
        {
          title: 'Registrations',
          value: '0'
        },
        {
          title: 'Commission',
          value: '260.48 USD'
        }
      ]
    }
  ],
  [PERIOD_STATISTIC]: {
    [OVERALL]: 'OVERALL',
    [ONE_YEAR]: '1 year',
    [SIX_MONTH]: '6 months',
    [THREE_MONTH]: '3 month',
    [ONE_MONTH]: '1 month',
    [ONE_WEEK]: '1 week',
    [CUSTOM_PERIOD]: 'CUSTOM_PERIOD'
  },
  [CUSTOM_PERIOD_RANGE]: {
    [START]: new Date(),
    [END]: new Date()
  },
  [PERIOD_STATISTIC_SELECTED]: OVERALL,
  [COMMISSION_DATA_REF]: [
    {
      id: 1,
      active: false,
      title: 'Affiliate commission',
      details: [
        {
          title: 'Direct Commission',
          value: '10 USD'
        },
        {
          title: 'Sub-IB Commission',
          value: '1 USD'
        },
        {
          title: 'Volume',
          value: '0.6'
        }
      ]
    },
    {
      id: 2,
      active: false,
      title: 'Statistics of your direct referrals <span>(first level referrals)</span>',
      details: [
        {
          title: 'Deposits',
          value: '9 678.19 USD'
        },
        {
          title: 'Withdrawals',
          value: '- 2 637.91 USD'
        }
      ]
    },
    {
      id: 3,
      active: false,
      title: 'Statistics of your referral network <span>(referrals of all levels)</span>',
      details: [
        {
          title: 'Referral network deposits',
          value: '10 USD'
        },
        {
          title: 'Referral network withdrawals',
          value: '1 USD'
        }
      ]
    }
  ],
  [AFFILIATE_REF]: [
    {
      id: 1,
      active: false,
      uid: '2531436775',
      verification: 'verified',
      registered: '09.07.2021',
      commission: '97.11 USD',
      fullName: 'NIK FAISAL BIN NIK AZIZ',
      accounts: [
        {
          type: 'PROFIT-6278955',
          data: [
            {
              title: 'deposit',
              value: '400.00 USD'
            },
            {
              title: 'withdrawal',
              value: '0.00 USD'
            },
            {
              title: 'Balance',
              value: '206.11 USD'
            },
            {
              title: 'Floating profit',
              value: '0.00 USD'
            },
            {
              title: 'Volume',
              value: '5.50'
            },
            {
              title: 'Commission',
              value: '97.11 USD'
            }
          ]
        },
        {
          type: 'CLS-6293859',
          data: ''
        },
        {
          type: 'CLS-6293880',
          data: ''
        }
      ]
    },
    {
      id: 2,
      active: false,
      uid: '254531646',
      verification: 'partly-verified',
      registered: '09.07.2021',
      commission: '97.11 USD',
      fullName: 'TEX X PAR',
      accounts: [
        {
          type: 'PROFIT-6278921',
          data: [
            {
              title: 'deposit',
              value: '400.00 USD'
            },
            {
              title: 'withdrawal',
              value: '0.00 USD'
            },
            {
              title: 'Balance',
              value: '206.11 USD'
            },
            {
              title: 'Floating profit',
              value: '0.00 USD'
            },
            {
              title: 'Volume',
              value: '5.50'
            },
            {
              title: 'Commission',
              value: '97.11 USD'
            }
          ]
        },
        {
          type: 'PROFIT-6278967',
          data: [
            {
              title: 'deposit',
              value: '400.00 USD'
            },
            {
              title: 'withdrawal',
              value: '0.00 USD'
            },
            {
              title: 'Balance',
              value: '206.11 USD'
            },
            {
              title: 'Floating profit',
              value: '0.00 USD'
            },
            {
              title: 'Volume',
              value: '5.50'
            },
            {
              title: 'Commission',
              value: '97.11 USD'
            }
          ]
        },
        {
          type: 'PROFIT-6278923',
          data: [
            {
              title: 'deposit',
              value: '400.00 USD'
            },
            {
              title: 'withdrawal',
              value: '0.00 USD'
            },
            {
              title: 'Balance',
              value: '206.11 USD'
            },
            {
              title: 'Floating profit',
              value: '0.00 USD'
            },
            {
              title: 'Volume',
              value: '5.50'
            },
            {
              title: 'Commission',
              value: '97.11 USD'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      active: false,
      uid: '2531436345',
      verification: 'unverified',
      registered: '09.07.2021',
      commission: '97.11 USD',
      fullName: 'RAMAZAN RAMZES',
      accounts: [
        {
          type: 'CLS-6293859',
          data: ''
        },
        {
          type: 'CLS-6293880',
          data: ''
        }
      ]
    },
    {
      id: 4,
      active: false,
      uid: '254534346',
      partnerStatus: 'sub-IB',
      activeReferrals: 44,
      registered: '09.07.2021',
      commission: '97.11 USD',
      fullName: 'EPIC FAIL DUDU TEX',
      accounts: [
        {
          type: 'PROFIT-6278923',
          data: [
            {
              title: 'deposit',
              value: '400.00 USD'
            },
            {
              title: 'withdrawal',
              value: '0.00 USD'
            },
            {
              title: 'Balance',
              value: '206.11 USD'
            },
            {
              title: 'Floating profit',
              value: '0.00 USD'
            },
            {
              title: 'Volume',
              value: '5.50'
            },
            {
              title: 'Commission',
              value: '97.11 USD'
            }
          ]
        },
        {
          type: 'PROFIT-6278967',
          data: [
            {
              title: 'deposit',
              value: '400.00 USD'
            },
            {
              title: 'withdrawal',
              value: '0.00 USD'
            },
            {
              title: 'Balance',
              value: '206.11 USD'
            },
            {
              title: 'Floating profit',
              value: '0.00 USD'
            },
            {
              title: 'Volume',
              value: '5.50'
            },
            {
              title: 'Commission',
              value: '97.11 USD'
            }
          ]
        },
        {
          type: 'PROFIT-6278523',
          data: [
            {
              title: 'deposit',
              value: '400.00 USD'
            },
            {
              title: 'withdrawal',
              value: '0.00 USD'
            },
            {
              title: 'Balance',
              value: '206.11 USD'
            },
            {
              title: 'Floating profit',
              value: '0.00 USD'
            },
            {
              title: 'Volume',
              value: '5.50'
            },
            {
              title: 'Commission',
              value: '97.11 USD'
            }
          ]
        }
      ]
    }
  ],
  [REFERRALS_FILTERING]: {
    [ALL]: true,
    [DIRECT_REFERRALS]: false,
    [SUB_IB]: false
  },
  [REFERRALS_PERIOD_FILTERING]: {
    [TODAY]: false,
    [YESTERDAY]: false,
    [LAST_7_DAYS]: false,
    [LAST_30_DAYS]: true,
    [THIS_MONTH]: false,
    [PREVIOUS_MONTH]: false,
    [CUSTOM_PERIOD]: false
  },
  [CUSTOM_PERIOD_REFERRALS]: {
    [START]: new Date(),
    [END]: new Date()
  },
  [SELECTED_REFERRALS_FILTERING]: ALL,
  [SELECTED_REFERRALS_PERIOD_FILTER]: LAST_30_DAYS,
  [FILTER_LABELS_REFERRALS]: {
    [ALL]: 'ALL',
    [DIRECT_REFERRALS]: 'DIRECT REFERRALS',
    [SUB_IB]: 'SUB-IBs',
    [TODAY]: 'Today',
    [YESTERDAY]: 'Yesterday',
    [LAST_7_DAYS]: 'Last 7 days',
    [LAST_30_DAYS]: 'Last 30 days',
    [THIS_MONTH]: 'This month',
    [PREVIOUS_MONTH]: 'Previous month'
  },
  [AFFILIATE_REF_UID]: null,
  [INFORMATION_REF]: [
    {
      id: 1,
      active: false,
      title: 'Information',
      details: [
        {
          title: 'Country',
          value: 'Malaysia'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16.03.2018'
        },
        {
          title: 'Balance',
          value: '10 355.83 USD'
        },
        {
          title: 'Active referrals',
          value: '44'
        },
        {
          title: 'My Affiliate commission',
          value: '1 451.50 USD'
        }
      ]
    }
  ],

  [REFERRAL_FILTERING_PARAMETER]: {
    [ALL]: true,
    [DIRECT_REFERRALS]: false,
    [SUB_IB]: false
  },
  [REFERRAL_PERIOD_DATE]: {
    [TODAY]: false,
    [YESTERDAY]: false,
    [LAST_7_DAYS]: false,
    [LAST_30_DAYS]: true,
    [THIS_MONTH]: false,
    [PREVIOUS_MONTH]: false,
    [CUSTOM_PERIOD]: false
  },
  [CUSTOM_PERIOD_DATE]: {
    [START]: new Date(),
    [END]: new Date()
  },
  [SELECTED_FILTERING_PARAMETER]: ALL,
  [SELECTED_REFERRAL_PERIOD_DATE]: LAST_30_DAYS,
  [LABELS_ALL_REFERRAL]: {
    [ALL]: 'ALL',
    [DIRECT_REFERRALS]: 'DIRECT REFERRALS',
    [SUB_IB]: 'SUB-IBs',
    [TODAY]: 'Today',
    [YESTERDAY]: 'Yesterday',
    [LAST_7_DAYS]: 'Last 7 days',
    [LAST_30_DAYS]: 'Last 30 days',
    [THIS_MONTH]: 'This month',
    [PREVIOUS_MONTH]: 'Previous month'
  },

  [PERIOD_STATISTIC_CAMPAIGN]: {
    [OVERALL]: 'OVERALL',
    [ONE_YEAR]: '1 year',
    [SIX_MONTH]: '6 months',
    [THREE_MONTH]: '3 month',
    [ONE_MONTH]: '1 month',
    [ONE_WEEK]: '1 week',
    [CUSTOM_PERIOD]: 'CUSTOM_PERIOD'
  },
  [CUSTOM_PERIOD_CAMPAIGN]: {
    [START]: new Date(),
    [END]: new Date()
  },
  [PERIOD_CAMPAIGN_SELECTED]: OVERALL,
  [CAMPAIGN_DATE]: [
    {
      titleBlock: 'bbmascaner',
      slug: 'bbmascaner',
      status: 'active',
      date: [
        {
          title: 'Clicks',
          value: '242'
        },
        {
          title: 'Registrations',
          value: '302'
        },
        {
          title: 'Deposit',
          value: '8 344.22 USD'
        },
        {
          title: 'Withdrawal',
          value: '3 228.00 USD'
        },
        {
          title: 'Volume',
          value: '5.50'
        },
        {
          title: 'Commission',
          value: '97.11 USD'
        }
      ]
    },
    {
      titleBlock: 'Victory7',
      slug: 'victory7',
      status: 'active',
      date: [
        {
          title: 'Clicks',
          value: '1 034'
        },
        {
          title: 'Registrations',
          value: '302'
        },
        {
          title: 'Deposit',
          value: '8 344.22 USD'
        },
        {
          title: 'Withdrawal',
          value: '0.00 USD'
        },
        {
          title: 'Volume',
          value: '99.53'
        },
        {
          title: 'Commission',
          value: '7 397.50 USD'
        }
      ]
    },
    {
      titleBlock: 'miraclefx',
      slug: 'miraclefx',
      status: 'inactive',
      date: [
        {
          title: 'Clicks',
          value: '0'
        },
        {
          title: 'Registrations',
          value: '0'
        },
        {
          title: 'Deposit',
          value: '0.00 USD'
        },
        {
          title: 'Withdrawal',
          value: '0.00 USD'
        },
        {
          title: 'Volume',
          value: '0'
        },
        {
          title: 'Commission',
          value: '0.00 USD'
        }
      ]
    }
  ],
  [CAMPAIGN_NAME]: null,

  [CAMPAIGN_FILTERING_PARAMETER]: {
    [ALL]: true,
    [DIRECT_REFERRALS]: false,
    [SUB_IB]: false
  },
  [CAMPAIGN_PERIOD_DATE]: {
    [TODAY]: false,
    [YESTERDAY]: false,
    [LAST_7_DAYS]: false,
    [LAST_30_DAYS]: true,
    [THIS_MONTH]: false,
    [PREVIOUS_MONTH]: false,
    [CUSTOM_PERIOD]: false
  },
  [CUSTOM_PERIOD_DATE_CAMPAIGN]: {
    [START]: new Date(),
    [END]: new Date()
  },
  [SELECTED_FILTERING_CAMPAIGN_PARAMETER]: ALL,
  [SELECTED_CAMPAIGN_PERIOD_DATE]: LAST_30_DAYS,
  [LABELS_ALL_CAMPAIGN]: {
    [ALL]: 'ALL',
    [DIRECT_REFERRALS]: 'DIRECT REFERRALS',
    [SUB_IB]: 'SUB-IBs',
    [TODAY]: 'Today',
    [YESTERDAY]: 'Yesterday',
    [LAST_7_DAYS]: 'Last 7 days',
    [LAST_30_DAYS]: 'Last 30 days',
    [THIS_MONTH]: 'This month',
    [PREVIOUS_MONTH]: 'Previous month'
  },

  [INFORMATION_CAMPAIGN]: [
    {
      id: 1,
      active: false,
      title: 'Information',
      copyLink: true,
      deactivateLink: true,
      details: [
        {
          title: 'Clicks',
          value: '1 034'
        },
        {
          title: 'Registrations',
          value: '302'
        },
        {
          title: 'Deposit',
          value: '8 344.22 USD'
        },
        {
          title: 'Withdrawal',
          value: '0.00 USD'
        },
        {
          title: 'Volume',
          value: '99.53'
        },
        {
          title: 'Commission',
          value: '1 451.50 USD'
        }
      ]
    }
  ],
  [REBATE_START_MICRO_PERCENT]: {
    percentOld: 70,
    percentCurrent: 70
  },
  [REBATE_ECN_CLASSIC_PERCENT]: {
    percentOld: 0,
    percentCurrent: 0
  },
  [REBATE_ECN_PRO_PERCENT]: {
    percentOld: 55,
    percentCurrent: 55
  },
  [REBATE_CARD_DATA]: [
    {
      uid: '2531436775',
      fullName: 'MUHAMMAD HAZIM HAZMI BIN MD ISA',
      registered: '09.07.2021',
      data: [
        {
          account: 'STR-6295673',
          type: 'START (micro)',
          percent: 70,
          percentOld: 70
        }
      ]
    },
    {
      uid: '2531436905',
      fullName: 'ISA NURTUL MAGAM',
      registered: '09.07.2021',
      data: [
        {
          account: 'STR-6295927',
          type: 'START (micro)',
          percent: 70,
          percentOld: 70
        },
        {
          account: 'STR-6295401',
          type: 'START (micro)',
          percent: 20,
          percentOld: 20
        }
      ]
    },
    {
      uid: '253143677234',
      fullName: 'RALF GHOST',
      registered: '09.07.2021',
      data: [
        {
          account: 'PRO-6281411',
          type: 'ECN PRO',
          percent: 55,
          percentOld: 55
        }
      ]
    },
    {
      uid: '2531436778',
      fullName: 'MUHAMMAD ARIFF FITRI BIN ZULKAPLI',
      registered: '09.07.2021',
      data: [
        {
          account: 'STR-6295456',
          type: 'START (micro)',
          percent: 20,
          percentOld: 20
        }
      ]
    },
    {
      uid: '2531436779',
      fullName: 'GARA BIN USA',
      registered: '09.07.2021',
      data: [
        {
          account: 'STR-6295843',
          type: 'START (micro)',
          percent: 35,
          percentOld: 35
        },
        {
          account: 'STR-6295167',
          type: 'START (micro)',
          percent: 0,
          percentOld: 0
        }
      ]
    },
    {
      uid: '2531436778',
      fullName: 'ZOZO PITCHI BOOM',
      registered: '09.07.2021',
      data: [
        {
          account: 'PRO-6281614',
          type: 'ECN PRO',
          percent: 55,
          percentOld: 55
        }
      ]
    }
  ],
  [REBATE_FILTER_REFERRALS]: {
    [ALL_REFERRALS]: 'ALL REFERRALS',
    [DIRECT_REFERRALS]: 'DIRECT REFERRALS',
    [SUB_IB]: 'SUB-IBs'
  },
  [REBATE_FILTER_REFERRALS_SELECTED]: ALL_REFERRALS,
  [PROMO_BLOCK_DATA]: [
    {
      title: 'Logo & Business cards',
      value: '4 files',
      link: 'logo'
    },
    {
      title: 'Presentations',
      value: '2 files',
      link: 'presentations'
    },
    {
      title: 'Web banners',
      value: '16 files',
      link: 'web-banners'
    }
  ],
  [PROMO_LOGO_AND_CARD]: [
    {
      title: 'Business Card Black Design',
      btnFirstText: 'PDF',
      btnSecondText: 'EPS',
      image: 'https://social.tifia.com/promo/PROMO_62_FILE_60fab20dda549.png',
      downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
      downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
    },
    {
      title: 'Business Card White Design',
      btnFirstText: 'PDF',
      btnSecondText: 'EPS',
      image: 'https://social.tifia.com/promo/PROMO_61_FILE_60fab1b21fc7c.png',
      downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
      downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
    },
    {
      title: 'Logo white',
      btnFirstText: 'PDF',
      btnSecondText: 'EPS',
      image: 'https://social.tifia.com/promo/PROMO_34_FILE_60ec073779443.png',
      downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
      downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
    },
    {
      title: 'Logo black',
      btnFirstText: 'PDF',
      btnSecondText: 'EPS',
      image: 'https://social.tifia.com/promo/PROMO_33_FILE_60ec06cad6dc1.png',
      downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
      downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
    }
  ],
  [COUNTRY_LIST]: [
    {
      label: 'Indonesia',
      image: 'https://tifia.com/images/new-site/economic-calendar/flags/indonesia.svg'
    },
    {
      label: 'Malaysia',
      image: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
    },
    {
      label: 'English',
      image: 'https://tifia.com/images/new-site/economic-calendar/flags/united-kingdom.svg'
    }
  ],
  [SELECTED_COUNTRY_LIST]: {
    label: 'English',
    image: 'https://tifia.com/images/new-site/economic-calendar/flags/united-kingdom.svg'
  }

})

export const getters = {
  [GET_PARTNERS_MAIN_INFO] (state) {
    return state[PARTNERS_MAIN_INFO]
  },
  [GET_USER_NAME] (state, getters, rootState, rootGetters) {
    const userName = rootGetters['settings/FULL_NAME_CLIENT']
    return userName
  },
  [GET_AFFILIATE_ACCOUNTS] (state) {
    return state[AFFILIATE_ACCOUNTS]
  },
  [GET_AFFILIATE_COMMISSION_ALL_TIME] (state) {
    return state[AFFILIATE_COMMISSION_ALL_TIME]
  },
  [GET_AFFILIATE_COMMISSION_LAST_MONTH] (state) {
    return state[AFFILIATE_COMMISSION_LAST_MONTH]
  },
  [GET_STATISTIC_DATE] (state) {
    return state[STATISTIC_DATE]
  },
  [GET_SELECTED_PERIOD_STATISTIC] (state) {
    return state[PERIOD_STATISTIC_SELECTED]
  },
  [GET_SELECTED_PERIOD_LABEL_STATISTIC] (state) {
    if (state[PERIOD_STATISTIC_SELECTED] === 'CUSTOM_PERIOD') {
      const dateStart = state[CUSTOM_PERIOD_RANGE][START].toLocaleDateString()
      const dateEnd = state[CUSTOM_PERIOD_RANGE][END].toLocaleDateString()
      return `${dateStart} - ${dateEnd}`
    } else {
      return state[PERIOD_STATISTIC][state[PERIOD_STATISTIC_SELECTED]]
    }
  },
  [GET_CUSTOM_PERIOD_RANGE] (state) {
    return {
      start: state[CUSTOM_PERIOD_RANGE][START].toLocaleDateString(),
      end: state[CUSTOM_PERIOD_RANGE][END].toLocaleDateString()
    }
  },
  [GET_COMMISSION_DATA_REF] (state) {
    return state[COMMISSION_DATA_REF]
  },
  [GET_AFFILIATE_REF] (state) {
    return state[AFFILIATE_REF]
  },
  [GET_REFERRALS_FILTERING] (state) {
    return state[REFERRALS_FILTERING]
  },
  [GET_REFERRALS_PERIOD_FILTERING] (state) {
    return state[REFERRALS_PERIOD_FILTERING]
  },
  [GET_REFERRALS_FILTERING_AFFILIATE] (state) {
    return state[REFERRALS_FILTERING]
  },
  [GET_REFERRALS_FILTER_LABELS] (state) {
    return state[FILTER_LABELS_REFERRALS]
  },
  [GET_SELECTED_REFERRALS_FILTERING] (state) {
    return state[FILTER_LABELS_REFERRALS][state[SELECTED_REFERRALS_FILTERING]]
  },
  [GET_REFERRALS_PERIOD_FILTERING_AFFILIATE] (state) {
    return state[FILTER_LABELS_REFERRALS][state[SELECTED_REFERRALS_FILTERING]]
  },
  [GET_SELECTED_REFERRALS_PERIOD_FILTER] (state) {
    return state[FILTER_LABELS_REFERRALS][state[SELECTED_REFERRALS_PERIOD_FILTER]]
  },
  [GET_CUSTOM_PERIOD_RANGE_REFERRALS] (state) {
    return {
      start: state[CUSTOM_PERIOD_REFERRALS][START].toLocaleDateString(),
      end: state[CUSTOM_PERIOD_REFERRALS][END].toLocaleDateString()
    }
  },
  [GET_SELECTED_CUSTOM_FILTERING] (state) {
    return state[SELECTED_REFERRALS_PERIOD_FILTER]
  },
  [GET_NAME_REF_BY_UID] (state) {
    return searchElemByMassive(state[AFFILIATE_REF_UID], state[AFFILIATE_REF], 'uid', 'fullName')
  },
  [GET_STATUS_REF_BY_UID] (state) {
    return searchElemByMassive(state[AFFILIATE_REF_UID], state[AFFILIATE_REF], 'uid', 'partnerStatus')
  },
  [GET_INFO_REF] (state) {
    return state[INFORMATION_REF]
  },

  [GET_REFERRAL_FILTERING_PARAMETER] (state) {
    return state[REFERRAL_FILTERING_PARAMETER]
  },
  [GET_REFERRAL_PERIOD_DATE] (state) {
    return state[REFERRAL_PERIOD_DATE]
  },
  [GET_LABELS_ALL_REFERRAL] (state) {
    return state[LABELS_ALL_REFERRAL]
  },
  [GET_SELECTED_PARAMETER_IN_LABELS] (state) {
    return state[LABELS_ALL_REFERRAL][state[SELECTED_FILTERING_PARAMETER]]
  },
  [GET_SELECTED_PERIOD_DATE_IN_LABELS] (state) {
    return state[LABELS_ALL_REFERRAL][state[SELECTED_REFERRAL_PERIOD_DATE]]
  },
  [GET_CUSTOM_PERIOD_REFERRAL_VIEW] (state) {
    return {
      start: state[CUSTOM_PERIOD_DATE][START].toLocaleDateString(),
      end: state[CUSTOM_PERIOD_DATE][END].toLocaleDateString()
    }
  },
  [GET_SELECTED_REFERRAL_PERIOD_DATE] (state) {
    return state[SELECTED_REFERRAL_PERIOD_DATE]
  },

  [GET_PERIOD_CAMPAIGN_SELECTED] (state) {
    return state[PERIOD_CAMPAIGN_SELECTED]
  },
  [GET_SELECTED_PERIOD_LABEL_CAMPAIGN] (state) {
    if (state[PERIOD_CAMPAIGN_SELECTED] === 'CUSTOM_PERIOD') {
      const dateStart = state[CUSTOM_PERIOD_CAMPAIGN][START].toLocaleDateString()
      const dateEnd = state[CUSTOM_PERIOD_CAMPAIGN][END].toLocaleDateString()
      return `${dateStart} - ${dateEnd}`
    } else {
      return state[PERIOD_STATISTIC_CAMPAIGN][state[PERIOD_CAMPAIGN_SELECTED]]
    }
  },
  [GET_CAMPAIGN_DATE] (state) {
    return state[CAMPAIGN_DATE]
  },
  [GET_CAMPAIGN_DATE_BY_SLUG] (state) {
    return searchElemByMassive(state[CAMPAIGN_NAME], state[CAMPAIGN_DATE], 'slug', 'titleBlock')
  },
  [GET_CAMPAIGN_STATUS_BY_SLUG] (state) {
    return searchElemByMassive(state[CAMPAIGN_NAME], state[CAMPAIGN_DATE], 'slug', 'status')
  },

  [GET_CAMPAIGN_FILTERING_PARAMETER] (state) {
    return state[CAMPAIGN_FILTERING_PARAMETER]
  },
  [GET_CAMPAIGN_PERIOD_DATE] (state) {
    return state[CAMPAIGN_PERIOD_DATE]
  },
  [GET_LABELS_ALL_CAMPAIGN] (state) {
    return state[LABELS_ALL_CAMPAIGN]
  },
  [GET_SELECTED_PARAMETER_CAMPAIGN_IN_LABELS] (state) {
    return state[LABELS_ALL_CAMPAIGN][state[SELECTED_FILTERING_CAMPAIGN_PARAMETER]]
  },
  [GET_SELECTED_PERIOD_DATE_CAMPAIGN_IN_LABELS] (state) {
    return state[LABELS_ALL_CAMPAIGN][state[SELECTED_CAMPAIGN_PERIOD_DATE]]
  },
  [GET_CUSTOM_PERIOD_CAMPAIGN_VIEW] (state) {
    return {
      start: state[CUSTOM_PERIOD_DATE_CAMPAIGN][START].toLocaleDateString(),
      end: state[CUSTOM_PERIOD_DATE_CAMPAIGN][END].toLocaleDateString()
    }
  },
  [GET_SELECTED_CAMPAIGN_PERIOD_DATE] (state) {
    return state[SELECTED_CAMPAIGN_PERIOD_DATE]
  },

  [GET_INFORMATION_CAMPAIGN] (state) {
    return state[INFORMATION_CAMPAIGN]
  },
  [GET_REBATE_START_MICRO_PERCENT] (state) {
    return state[REBATE_START_MICRO_PERCENT]
  },
  [GET_REBATE_ECN_CLASSIC_PERCENT] (state) {
    return state[REBATE_ECN_CLASSIC_PERCENT]
  },
  [GET_REBATE_ECN_PRO_PERCENT] (state) {
    return state[REBATE_ECN_PRO_PERCENT]
  },
  [GET_REBATE_CARD_DATA] (state) {
    return state[REBATE_CARD_DATA]
  },
  [GET_REBATE_FILTER_REFERRALS] (state) {
    return state[REBATE_FILTER_REFERRALS_SELECTED]
  },
  [GET_SELECTED_REFERRALS_LABEL_REBATE] (state) {
    return state[REBATE_FILTER_REFERRALS][state[REBATE_FILTER_REFERRALS_SELECTED]]
  },
  [GET_PROMO_BLOCK_DATA] (state) {
    return state[PROMO_BLOCK_DATA]
  },
  [GET_PROMO_LOGO_AND_CARD] (state) {
    return state[PROMO_LOGO_AND_CARD]
  },
  [GET_COUNTRY_LIST] (state) {
    return state[COUNTRY_LIST]
  },
  [GET_SELECTED_COUNTRY_LIST] (state) {
    return state[SELECTED_COUNTRY_LIST]
  }
}

export const mutations = {
  [SET_SELECTED_PERIOD_STATISTIC] (state, value) {
    state[PERIOD_STATISTIC_SELECTED] = value
  },
  [UPDATE_CUSTOM_FILTER_PERIOD] (state, { startDate, endDate }) {
    state[CUSTOM_PERIOD_RANGE][START] = startDate
    state[CUSTOM_PERIOD_RANGE][END] = endDate
  },
  [SET_ACTIVE_ITEM_ACCORDION] (state, payload) {
    const itemID = Number(payload.idItem) - 1
    state[COMMISSION_DATA_REF][itemID].active = payload.showItem
  },
  [SET_ACTIVE_ITEM_ACCORDION_REF] (state, payload) {
    const itemID = Number(payload.idItem) - 1
    state[AFFILIATE_REF][itemID].active = payload.showItem
  },
  [SET_ACTIVE_ITEM_INFO_REF] (state, payload) {
    const itemID = Number(payload.idItem) - 1
    state[INFORMATION_REF][itemID].active = payload.showItem
  },
  [UPDATE_REFERRALS_TYPE_FILTER] (state, type) {
    state[REFERRALS_FILTERING][type] = !state[REFERRALS_FILTERING][type]

    state[REFERRALS_FILTERING][state[SELECTED_REFERRALS_FILTERING]] = false
    state[SELECTED_REFERRALS_FILTERING] = type
    state[REFERRALS_FILTERING][type] = true
  },
  [UPDATE_REFERRALS_PERIOD_FILTER] (state, type) {
    state[REFERRALS_PERIOD_FILTERING][state[SELECTED_REFERRALS_PERIOD_FILTER]] = false
    state[SELECTED_REFERRALS_PERIOD_FILTER] = type
    state[REFERRALS_PERIOD_FILTERING][type] = true
  },
  [UPDATE_CUSTOM_FILTER_PERIOD_REFERRALS] (state, { startDate, endDate }) {
    state[CUSTOM_PERIOD_REFERRALS][START] = startDate
    state[CUSTOM_PERIOD_REFERRALS][END] = endDate
  },
  [CHANGE_AFFILIATE_REF_UID] (state, value) {
    state[AFFILIATE_REF_UID] = value
  },

  [UPDATE_REFERRAL_FILTERING_PARAMETER] (state, type) {
    state[REFERRAL_FILTERING_PARAMETER][type] = !state[REFERRAL_FILTERING_PARAMETER][type]

    state[REFERRAL_FILTERING_PARAMETER][state[SELECTED_FILTERING_PARAMETER]] = false
    state[SELECTED_FILTERING_PARAMETER] = type
    state[REFERRAL_FILTERING_PARAMETER][type] = true
  },
  [UPDATE_REFERRAL_PERIOD_DATE] (state, type) {
    state[REFERRAL_PERIOD_DATE][state[SELECTED_REFERRAL_PERIOD_DATE]] = false
    state[SELECTED_REFERRAL_PERIOD_DATE] = type
    state[REFERRAL_PERIOD_DATE][type] = true
  },
  [UPDATE_CUSTOM_PERIOD_DATE] (state, { startDate, endDate }) {
    state[CUSTOM_PERIOD_DATE][START] = startDate
    state[CUSTOM_PERIOD_DATE][END] = endDate
  },

  [SET_SELECTED_PERIOD_CAMPAIGN] (state, value) {
    state[PERIOD_CAMPAIGN_SELECTED] = value
  },
  [UPDATE_CUSTOM_FILTER_PERIOD_CAMPAIGN] (state, { startDate, endDate }) {
    state[CUSTOM_PERIOD_CAMPAIGN][START] = startDate
    state[CUSTOM_PERIOD_CAMPAIGN][END] = endDate
  },
  [CHANGE_CAMPAIGN_NAME] (state, value) {
    state[CAMPAIGN_NAME] = value
  },

  [UPDATE_CAMPAIGN_FILTERING_PARAMETER] (state, type) {
    state[CAMPAIGN_FILTERING_PARAMETER][type] = !state[CAMPAIGN_FILTERING_PARAMETER][type]

    state[CAMPAIGN_FILTERING_PARAMETER][state[SELECTED_FILTERING_CAMPAIGN_PARAMETER]] = false
    state[SELECTED_FILTERING_CAMPAIGN_PARAMETER] = type
    state[CAMPAIGN_FILTERING_PARAMETER][type] = true
  },
  [UPDATE_CAMPAIGN_PERIOD_DATE] (state, type) {
    state[CAMPAIGN_PERIOD_DATE][state[SELECTED_CAMPAIGN_PERIOD_DATE]] = false
    state[SELECTED_CAMPAIGN_PERIOD_DATE] = type
    state[CAMPAIGN_PERIOD_DATE][type] = true
  },
  [UPDATE_CUSTOM_PERIOD_DATE_CAMPAIGN] (state, { startDate, endDate }) {
    state[CUSTOM_PERIOD_DATE_CAMPAIGN][START] = startDate
    state[CUSTOM_PERIOD_DATE_CAMPAIGN][END] = endDate
  },
  [SET_ACTIVE_ITEM_INFO_CAMPAIGN] (state, payload) {
    const itemID = Number(payload.idItem) - 1
    state[INFORMATION_CAMPAIGN][itemID].active = payload.showItem
  },
  [SET_REBATE_START_MICRO_PERCENT] (state, value) {
    for (let i = 0; i < state[REBATE_CARD_DATA].length; i++) {
      const findArray = filter(state[REBATE_CARD_DATA][i].data, function (item) {
        return item.type === 'START (micro)'
      })
      for (let j = 0; j < state[REBATE_CARD_DATA][i].data.length; j++) {
        set(findArray[j], 'percent', value)
      }
    }
    state[REBATE_START_MICRO_PERCENT].percentOld = state[REBATE_START_MICRO_PERCENT].percentCurrent
    state[REBATE_START_MICRO_PERCENT].percentCurrent = value
  },
  [SET_REBATE_ECN_CLASSIC_PERCENT] (state, value) {
    for (let i = 0; i < state[REBATE_CARD_DATA].length; i++) {
      const findArray = filter(state[REBATE_CARD_DATA][i].data, function (item) {
        return item.type === 'ECN CLASSIC'
      })
      for (let j = 0; j < state[REBATE_CARD_DATA][i].data.length; j++) {
        set(findArray[j], 'percent', value)
      }
    }
    state[REBATE_ECN_CLASSIC_PERCENT].percentOld = state[REBATE_ECN_CLASSIC_PERCENT].percentCurrent
    state[REBATE_ECN_CLASSIC_PERCENT].percentCurrent = value
  },
  [SET_REBATE_ECN_PRO_PERCENT] (state, value) {
    for (let i = 0; i < state[REBATE_CARD_DATA].length; i++) {
      const findArray = filter(state[REBATE_CARD_DATA][i].data, function (item) {
        return item.type === 'ECN PRO'
      })
      for (let j = 0; j < state[REBATE_CARD_DATA][i].data.length; j++) {
        set(findArray[j], 'percent', value)
      }
    }
    state[REBATE_ECN_PRO_PERCENT].percentOld = state[REBATE_ECN_PRO_PERCENT].percentCurrent
    state[REBATE_ECN_PRO_PERCENT].percentCurrent = value
  },
  [SET_ACTIVE_PERCENT_ACCOUNT] (state, payload) {
    const currentPercent = get(state[REBATE_CARD_DATA][payload.index].data[payload.itemIndex], 'percent')
    set(state[REBATE_CARD_DATA][payload.index].data[payload.itemIndex], 'percentOld', currentPercent)
    set(state[REBATE_CARD_DATA][payload.index].data[payload.itemIndex], 'percent', payload.percent)
  },
  [SET_SELECTED_REBATE_FILTER_REFERRALS] (state, value) {
    state[REBATE_FILTER_REFERRALS_SELECTED] = value
  },
  [CHANGE_SELECTED_COUNTRY_LIST] (state, selected) {
    state[SELECTED_COUNTRY_LIST] = selected
  }
}

export const actions = {
  [SET_SELECTED_PERIOD_STATISTIC] ({ commit }, value) {
    commit(SET_SELECTED_PERIOD_STATISTIC, value)
  },
  [UPDATE_CUSTOM_FILTER_PERIOD] (context, payload) {
    const { commit } = context
    commit(UPDATE_CUSTOM_FILTER_PERIOD, payload)
  },
  [SET_ACTIVE_ITEM_ACCORDION] ({ commit }, value) {
    commit(SET_ACTIVE_ITEM_ACCORDION, value)
  },
  [SET_ACTIVE_ITEM_ACCORDION_REF] ({ commit }, value) {
    commit(SET_ACTIVE_ITEM_ACCORDION_REF, value)
  },
  [SET_ACTIVE_ITEM_INFO_REF] ({ commit }, value) {
    commit(SET_ACTIVE_ITEM_INFO_REF, value)
  },
  [UPDATE_REFERRALS_TYPE_FILTER] (context, payload) {
    const { commit } = context
    commit(UPDATE_REFERRALS_TYPE_FILTER, payload)
  },
  [UPDATE_REFERRALS_PERIOD_FILTER] (context, payload) {
    const { commit } = context
    commit(UPDATE_REFERRALS_PERIOD_FILTER, payload)
  },
  [UPDATE_CUSTOM_FILTER_PERIOD_REFERRALS] (context, payload) {
    const { commit } = context
    commit(UPDATE_CUSTOM_FILTER_PERIOD_REFERRALS, payload)
  },
  [CHANGE_AFFILIATE_REF_UID] ({ commit }, value) {
    commit(CHANGE_AFFILIATE_REF_UID, value)
  },
  [UPDATE_REFERRAL_FILTERING_PARAMETER] (context, payload) {
    const { commit } = context
    commit(UPDATE_REFERRAL_FILTERING_PARAMETER, payload)
  },
  [UPDATE_REFERRAL_PERIOD_DATE] (context, payload) {
    const { commit } = context
    commit(UPDATE_REFERRAL_PERIOD_DATE, payload)
  },
  [UPDATE_CUSTOM_PERIOD_DATE] (context, payload) {
    const { commit } = context
    commit(UPDATE_CUSTOM_PERIOD_DATE, payload)
  },
  [SET_SELECTED_PERIOD_CAMPAIGN] ({ commit }, value) {
    commit(SET_SELECTED_PERIOD_CAMPAIGN, value)
  },
  [UPDATE_CUSTOM_FILTER_PERIOD_CAMPAIGN] (context, payload) {
    const { commit } = context
    commit(UPDATE_CUSTOM_FILTER_PERIOD_CAMPAIGN, payload)
  },
  [CHANGE_CAMPAIGN_NAME] ({ commit }, value) {
    commit(CHANGE_CAMPAIGN_NAME, value)
  },
  [UPDATE_CAMPAIGN_FILTERING_PARAMETER] (context, payload) {
    const { commit } = context
    commit(UPDATE_CAMPAIGN_FILTERING_PARAMETER, payload)
  },
  [UPDATE_CAMPAIGN_PERIOD_DATE] (context, payload) {
    const { commit } = context
    commit(UPDATE_CAMPAIGN_PERIOD_DATE, payload)
  },
  [UPDATE_CUSTOM_PERIOD_DATE_CAMPAIGN] (context, payload) {
    const { commit } = context
    commit(UPDATE_CUSTOM_PERIOD_DATE_CAMPAIGN, payload)
  },
  [SET_ACTIVE_ITEM_INFO_CAMPAIGN] ({ commit }, value) {
    commit(SET_ACTIVE_ITEM_INFO_CAMPAIGN, value)
  },
  [SET_REBATE_START_MICRO_PERCENT] ({ commit }, value) {
    commit(SET_REBATE_START_MICRO_PERCENT, value)
  },
  [SET_REBATE_ECN_CLASSIC_PERCENT] ({ commit }, value) {
    commit(SET_REBATE_ECN_CLASSIC_PERCENT, value)
  },
  [SET_REBATE_ECN_PRO_PERCENT] ({ commit }, value) {
    commit(SET_REBATE_ECN_PRO_PERCENT, value)
  },
  [SET_ACTIVE_PERCENT_ACCOUNT] ({ commit }, value) {
    commit(SET_ACTIVE_PERCENT_ACCOUNT, value)
  },
  [SET_SELECTED_REBATE_FILTER_REFERRALS] ({ commit }, value) {
    commit(SET_SELECTED_REBATE_FILTER_REFERRALS, value)
  },
  [CHANGE_SELECTED_COUNTRY_LIST] ({ commit }, value) {
    commit(CHANGE_SELECTED_COUNTRY_LIST, value)
  },
  [SET_PERCENT_ACCOUNTS] (context, infoData) {
    const { commit } = context
    let percentLocal
    if (infoData.switchTextField === 'on') {
      percentLocal = 0
    } else {
      percentLocal = infoData.percentOld
    }
    const payload = { percent: percentLocal, accountNumber: infoData.id, index: infoData.index, itemIndex: infoData.itemIndex }
    commit(SET_ACTIVE_PERCENT_ACCOUNT, payload)
  },
  [UPDATE_PERCENT_ACCOUNTS] (context, updateData) {
    const { commit } = context
    let percentLocal
    if (updateData.percentUser <= 100) {
      percentLocal = updateData.percentUser
    } else {
      percentLocal = 100
    }

    const payload = { percent: percentLocal, accountNumber: updateData.id, index: updateData.index, itemIndex: updateData.itemIndex }
    commit(SET_ACTIVE_PERCENT_ACCOUNT, payload)
  }
}
