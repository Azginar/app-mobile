import {
  LOCAL_DEPOSIT_DATA,
  ELECTRONIC_SYSTEMS_DATA,
  DEPOSIT_LOCAL_ELEM_BY_ID,
  ID_DEPOSIT_LOCAL,
  ID_PARTNER,
  BANK_CARD_MASSIVE,
  ID_BANK_CARD,
  PAYMENT_DETAILS,
  BANK_CATEGORIES,
  BANK_CATEGORIES_SELECTED,
  PAYMENT_METHOD,
  PAYMENT_METHOD_SELECTED,
  PAYMENT_TIME,
  PAYMENT_TIME_SELECTED,
  TRADING_ACCOUNT,
  TRADING_ACCOUNT_SELECTED,
  PAYMENT_AMOUNT_CURRENCY,
  PAYMENT_AMOUNT_CURRENCY_SELECTED,
  RATES_AND_COMMISSION,
  WORKING_HOURS,
  SUPPORT_INFO_PARTNER,
  PAYMENT_AMOUNT_INPUT,
  PAYMENT_DATE_INPUT,
  PROOF_OF_PAYMENT,
  PROMO_CODE,
  NOTE_INFORMATION,
  CARD_NUMBER,
  HOLDER_NAME,
  EXPIRY_DATE,
  TYPE_BANK_CARD,
  ELECTRONIC_SYSTEMS,
  PARAMETER_ELECTRONIC_SYSTEM,
  BITCOIN_WALLET,
  BITCOIN_PAYMENT_DETAILS,
  BITCOIN_ID,
  WIRE_TRANSFER_PAYMENT_DETAILS,
  WIRE_TRANSFER_RECIPIENT_INFO,
  WIRE_TRANSFER_FINANCIAL_INFORMATION,
  WIRE_TRANSFER_PAYMENT_INFORMATION,
  WITHDRAWAL_METHODS,
  COMMENT,
  ID_BANK_CARD_WITHDRAWAL,
  AUTHORIZATION_CODE,
  ID_PARTNERS_METHODS_WITHDRAWAL,
  ID_PAYMENT_METHODS_WITHDRAWAL,
  SOURCE_ACCOUNT_TRANSFER,
  SOURCE_ACCOUNT_TRANSFER_SELECTED,
  DESTINATION_ACCOUNT_TRANSFER,
  DESTINATION_ACCOUNT_TRANSFER_SELECTED,
  AMOUNT_TRANSFER,
  HISTORY_BTC_TRANSFER,
  DEPOSIT_HISTORY_DATA,
  FILTER_METHOD_HISTORY,
  FILTER_METHOD_HISTORY_LABELS,
  DEPOSITS_HISTORY,
  WITHDRAWAL_HISTORY,
  INTERNAL_TRANSFER_HISTORY,
  SELECTED_METHOD_HISTORY_FILTER,
  WITHDRAWAL_HISTORY_DATA,
  INTERNAL_TRANSFER_HISTORY_DATA,
  DEPOSITS_HISTORY_MORE_INFO,
  ID_TICKET_DEPOSIT
} from '@/modules/finance/constants.js'
import {
  CHANGE_ID_DEPOSIT_LOCAL,
  CHANGE_ID_PARTNER,
  CHANGE_BANK_CARD,
  CHANGE_BANK_CATEGORIES,
  CHANGE_PAYMENT_METHOD,
  CHANGE_PAYMENT_TIME,
  CHANGE_TRADING_ACCOUNT,
  CHANGE_PAYMENT_AMOUNT_CURRENCY,
  CHANGE_TYPE_BANK_CARD,
  CHANGE_ELECTRONIC_SYSTEM,
  CHANGE_BANK_CARD_FOR_WITHDRAWAL,
  CHANGE_PARTNERS_METHODS_FOR_WITHDRAWAL,
  CHANGE_PAYMENT_METHODS_FOR_WITHDRAWAL,
  CHANGE_SOURCE_ACCOUNT_TRANSFER,
  CHANGE_DESTINATION_ACCOUNT_TRANSFER,
  CHANGE_AMOUNT_TRANSFER,
  CHANGE_FILTER_METHOD_HISTORY,
  CHANGE_TICKET_DEPOSIT_INFO
} from '@/modules/finance/mutation-types'
import {
  GET_DEPOSIT_LOCAL_ELEM_BY_ID,
  GET_TITLE_DEPOSIT_LOCAL_ELEM,
  GET_NAME_PARTNER,
  GET_BANK_CARD_NUMBER,
  GET_TYPE_BANK_CARD,
  GET_ELECTRONIC_SYSTEM,
  GET_ELECTRONIC_SYSTEM_NAME,
  GET_TYPE_BANK_CARD_TO_NUMBER,
  GET_BANK_CARD_NUMBER_FOR_WITHDRAWAL,
  GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL,
  GET_PAYMENT_SYSTEMS_FOR_WITHDRAWAL,
  GET_FILTER_METHOD_HISTORY,
  GET_DEPOSITS_HISTORY_MORE_INFO
} from '@/modules/finance/getter-types'

const searchElemByMassive = (searchTerm, massive, keySearch, keyResult) => {
  let massiveLocal = ''
  massiveLocal = massive.find(elem => elem[keySearch] === searchTerm)
  if (massiveLocal !== undefined) {
    return massiveLocal[keyResult]
  }
  return []
}

export const state = () => ({
  [LOCAL_DEPOSIT_DATA]: [
    {
      titleBlock: 'Local Deposit',
      methods: [
        {
          title: 'HAFIS',
          type: 'localDepo',
          info: 'CIMB BANK, MAYBANK',
          avatar: '',
          avatarText: 'HA',
          link: '/deposit/id/1',
          status: 'RLD'
        },
        {
          title: 'TQ FX',
          type: 'localDepo',
          info: 'CIMB BANK, MAYBANK',
          avatar: 'https://social.tifia.com/uploads/avatars/008/738/710b97fde4a73fad2076aa74c769508b.jpg',
          link: '/deposit/id/2',
          status: 'RLD'
        },
        {
          title: 'HOMETOWN',
          type: 'localDepo',
          info: 'CIMB BANK, MAYBANK, MBB, AMBANK',
          avatar: '',
          avatarText: 'H',
          link: '/deposit/id/3',
          status: 'RLD'
        },
        {
          title: 'SHAN FX',
          type: 'localDepo',
          info: 'CIMB BANK, MAYBANK, Bank Islam Brunei Darussalam, HONG LEONG ISLAMIK BANK',
          avatar: '',
          avatarText: 'SF',
          link: '/deposit/id/4',
          status: 'RLD'
        },
        {
          title: 'Shasi Tr0peDo',
          type: 'localDepo',
          info: 'PUBLIC BANK, CIMB BANK, MAYBANK, Hong Leong Bank',
          avatar: '',
          avatarText: 'ST',
          link: '/deposit/id/5',
          status: 'RLD'
        },
        {
          title: 'MURUFX',
          type: 'localDepo',
          info: 'CIMB BANK,MAYBANK',
          avatar: 'https://social.tifia.com/uploads/avatars/008/705/1065900b679f820b08e7653858e20846.png',
          link: '/deposit/id/6',
          status: 'RLD'
        },
        {
          title: 'ZAHARAH TUN NUR',
          type: 'localDepo',
          info: 'Bank Islam Brunei Darussalam',
          avatar: '',
          avatarText: 'ZT',
          link: '/deposit/id/7',
          status: 'MLD'
        },
        {
          title: 'Kamikaze Bbstochma',
          type: 'localDepo',
          info: 'MAYBANK',
          avatar: '',
          avatarText: 'SF',
          link: '/deposit/id/8',
          status: 'MLD'
        },
        {
          title: 'Tifia Utara',
          type: 'localDepo',
          info: 'PUBLIC BANK, Hong Leong Bank, CIMB BANK, RHB BANK, MAYBANK',
          avatar: '',
          avatarText: 'TU',
          link: '/deposit/id/9',
          status: 'MLD'
        }
      ]
    }
  ],
  [ELECTRONIC_SYSTEMS_DATA]: [
    {
      titleBlock: 'Electronic systems',
      methods: [
        {
          title: 'FasaPay',
          type: 'bankSystem',
          minAmount: '10 USD',
          fee: '0%',
          avatar: 'https://tifia.com/images/new-site/payments-icon/fasapay.svg',
          link: '/deposit/form?method=fp'
        },
        {
          title: 'Neteller',
          type: 'bankSystem',
          minAmount: '10 USD',
          fee: '0%',
          avatar: 'https://tifia.com/images/new-site/payments-icon/neteller.svg',
          link: '/deposit/form?method=nt'
        },
        {
          title: 'Perfect Money',
          type: 'bankSystem',
          minAmount: '10 USD',
          fee: '0%',
          avatar: 'https://tifia.com/images/new-site/payments-icon/perfect-money.svg',
          link: '/deposit/form?method=pm'
        },
        {
          title: 'Skrill',
          type: 'bankSystem',
          minAmount: '10 USD',
          fee: '0%',
          avatar: 'https://tifia.com/images/new-site/payments-icon/skrill.svg',
          link: '/deposit/form?method=mb'
        }
      ]
    }
  ],
  [DEPOSIT_LOCAL_ELEM_BY_ID]: [
    {
      id: 1,
      title: 'HAFIS',
      methods: [
        {
          title: 'HAFIS',
          info: 'CIMB BANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'H',
          idForm: '1',
          status: 'RLD'
        },
        {
          title: 'KRONIMFT',
          info: 'MAYBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'K',
          idForm: '2',
          status: 'RLD'
        },
        {
          title: 'WCT SMART TRADING',
          info: 'MAYBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'WS',
          idForm: '3',
          status: 'LD'
        },
        {
          title: 'Aydenfx',
          info: 'MAYBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: 'https://social.tifia.com/uploads/avatars/001/728/8c9f53d819776e60955066c57897bf4c.jpg',
          idForm: '4',
          status: 'MLD'
        },
        {
          title: 'KING PROFIT',
          info: 'CIMB BANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'KP',
          idForm: '5',
          status: 'LD'
        },
        {
          title: 'Twenty Five',
          info: 'CIMB BANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: 'https://social.tifia.com/uploads/avatars/004/001/a11a0fe674d5d819dc76a61bbc70ff89.jpg',
          idForm: '6',
          status: 'LD'
        },
        {
          title: 'zikrullahfx',
          info: 'CIMB BANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'Z',
          idForm: '7',
          status: 'LD'
        },
        {
          title: 'QZ Group',
          info: 'CIMB BANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'QZ',
          idForm: '8',
          status: 'LD'
        },
        {
          title: 'AURA PROFIT LEGACY',
          info: 'MAYBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'AU',
          idForm: '9',
          status: 'LD'
        }
      ]
    },
    {
      id: 2,
      title: 'TQ FX',
      methods: [
        {
          title: 'TQ FX',
          info: 'CIMB BANK, MAYBANK, MBB, AMBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'TF',
          idForm: '1',
          status: 'RLD'
        }
      ]
    },
    {
      id: 3,
      title: 'HOMETOWN',
      methods: [
        {
          title: 'HOMETOWN',
          info: 'CIMB BANK, MAYBANK, MBB, AMBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'H',
          idForm: '1',
          status: 'RLD'
        }
      ]
    },
    {
      id: 4,
      title: 'SHAN FX',
      methods: [
        {
          title: 'SHAN FX',
          info: 'CIMB BANK, MAYBANK, MBB, AMBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'SF',
          idForm: '1',
          status: 'RLD'
        }
      ]
    },
    {
      id: 5,
      title: 'Shasi Tr0peDo',
      methods: [
        {
          title: 'Shasi Tr0peDo',
          info: 'CIMB BANK, MAYBANK, MBB, AMBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'ST',
          idForm: '1',
          status: 'RLD'
        }
      ]
    },
    {
      id: 6,
      title: 'MURUFX',
      methods: [
        {
          title: 'MURUFX',
          info: 'CIMB BANK, MAYBANK, MBB, AMBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'M',
          idForm: '1',
          status: 'RLD'
        }
      ]
    },
    {
      id: 7,
      title: 'ZAHARAH TUN NUR',
      methods: [
        {
          title: 'ZAHARAH TUN NUR',
          info: 'CIMB BANK, MAYBANK, MBB, AMBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'ZT',
          idForm: '1',
          status: 'RLD'
        }
      ]
    },
    {
      id: 8,
      title: 'Kamikaze Bbstochma',
      methods: [
        {
          title: 'Kamikaze Bbstochma',
          info: 'CIMB BANK, MAYBANK, MBB, AMBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'KB',
          idForm: '1',
          status: 'RLD'
        }
      ]
    },
    {
      id: 9,
      title: 'Tifia Utara',
      methods: [
        {
          title: 'Tifia Utara',
          info: 'CIMB BANK, MAYBANK, MBB, AMBANK',
          desc: 'Сопроводительный текст - описание от партнеров, для придания уверенности, что клиент не ошибся и попал куда надо.',
          avatar: '',
          avatarText: 'TU',
          idForm: '1',
          status: 'RLD'
        }
      ]
    }
  ],
  [ID_DEPOSIT_LOCAL]: null,
  [ID_PARTNER]: null,
  [BANK_CARD_MASSIVE]: [
    {
      id: 1,
      type: 'mastercard',
      number: '4779 ---- ---- 6784',
      status: 'verified'
    },
    {
      id: 2,
      type: 'visa',
      number: '4788 ---- ---- 1234',
      status: 'checked'
    },
    {
      id: 3,
      type: 'mastercard',
      number: '4782 ---- ---- 3366',
      status: 'rejected'
    }
  ],
  [ID_BANK_CARD]: null,
  [PAYMENT_DETAILS]: [
    {
      title: 'Bank',
      value: 'CIMB BANK'
    },
    {
      title: 'Account number',
      value: 'C8007902575'
    },
    {
      title: 'Account name',
      value: 'Test account number'
    }
  ],
  [BANK_CATEGORIES]: ['CIMB BANK', 'MAYBANK'],
  [BANK_CATEGORIES_SELECTED]: 'CIMB BANK',
  [PAYMENT_METHOD]: ['CASH DEPOSIT', 'CIMB BANK'],
  [PAYMENT_METHOD_SELECTED]: 'CASH DEPOSIT',
  [PAYMENT_TIME]: ['12:00', '13:00', '14:00', '15:00', '16:00'],
  [PAYMENT_TIME_SELECTED]: '12:00',
  [TRADING_ACCOUNT]: ['MT4-ECN-433502 / 10 234.44 USD', 'MT4-ECN-4335123 / 3 USD'],
  [TRADING_ACCOUNT_SELECTED]: 'MT4-ECN-433502 / 10 234.44 USD',
  [PAYMENT_AMOUNT_CURRENCY]: ['EUR', 'USD'],
  [PAYMENT_AMOUNT_CURRENCY_SELECTED]: 'EUR',
  [RATES_AND_COMMISSION]: [
    {
      title: 'Deposit rate',
      value: '1 USD = 4.5 MYR'
    },
    {
      title: 'Profit withdrawal rate',
      value: '1 USD = 4.3 MYR'
    },
    {
      title: 'Withdrawal rate',
      value: '1 USD = 4.5 MYR'
    },
    {
      title: 'Affiliate commission withdrawal rate',
      value: '1 USD = 4.0 MYR'
    },
    {
      title: 'Commission',
      value: 'No'
    }
  ],
  [WORKING_HOURS]: [
    {
      title: 'Deposit',
      value: '10.00 AM - 11.00 PM'
    },
    {
      title: 'Withdrawal',
      value: '10.00 AM - 10.00 PM'
    },
    {
      title: 'Monday to Friday ONLY',
      value: 'Form submitted after working hours will be processed the next working day.'
    }
  ],
  [SUPPORT_INFO_PARTNER]: [
    {
      title: 'Full name',
      value: 'MOHD FAISAL BIN KASIM'
    },
    {
      title: 'Email',
      value: 'faisal@gmail.com'
    },
    {
      title: 'Phone',
      value: '+60134987127'
    }
  ],
  [PAYMENT_AMOUNT_INPUT]: '',
  [PAYMENT_DATE_INPUT]: '',
  [PROOF_OF_PAYMENT]: '',
  [PROMO_CODE]: '',
  [NOTE_INFORMATION]: [
    {
      title: 'Max Limit per 1 transaction:',
      value: '5 000 USD'
    },
    {
      title: 'Descriptor of successfully made transaction can be the following:',
      value: 'Chao Fu CO LTD<br><br>Reidfraser'
    }
  ],
  [CARD_NUMBER]: '',
  [HOLDER_NAME]: '',
  [EXPIRY_DATE]: 'YY/MM',
  [TYPE_BANK_CARD]: 'mastercard',
  [ELECTRONIC_SYSTEMS]: [
    {
      id: 1,
      name: 'FasaPay',
      parameter: 'fp',
      img: 'https://tifia.com/images/new-site/payments-icon/fasapay.svg'
    },
    {
      id: 2,
      name: 'Neteller',
      parameter: 'nt',
      img: 'https://tifia.com/images/new-site/payments-icon/neteller.svg'
    },
    {
      id: 3,
      name: 'Perfect Money',
      parameter: 'pm',
      img: 'https://tifia.com/images/new-site/payments-icon/perfect-money.svg'
    },
    {
      id: 4,
      name: 'Skrill',
      parameter: 'mb',
      img: 'https://tifia.com/images/new-site/payments-icon/skrill.svg'
    },
    {
      id: 5,
      name: 'Bitcoin',
      parameter: 'btc',
      img: 'https://tifia.com/images/new-site/payments-icon/bitcoin.svg'
    },
    {
      id: 6,
      name: 'Bank wire transfer',
      parameter: 'wire-transfer',
      img: 'https://tifia.com/images/new-site/payments-icon/wire-transfer.svg'
    }
  ],
  [PARAMETER_ELECTRONIC_SYSTEM]: null,
  [BITCOIN_WALLET]: '',
  [BITCOIN_PAYMENT_DETAILS]: [
    {
      title: 'Payment method',
      value: 'Bitcoin transfer BTC'
    },
    {
      title: 'Account',
      value: 'CLS-6117769'
    },
    {
      title: 'Deposit amount',
      value: '100.00 USD'
    },
    {
      title: 'Payment amount',
      value: '100.00 USD'
    },
    {
      title: 'Bitcoin purse for money transfer',
      paymentCode: '3A5j6vywkwA3FNVBvPgZxL4tj1KV4tPwTL',
      button: 'copy'
    }
  ],
  [BITCOIN_ID]: '',
  [WIRE_TRANSFER_PAYMENT_DETAILS]: [
    {
      title: 'Payment method',
      value: 'Wire Transfer'
    },
    {
      title: 'Account',
      value: 'CLS-6117769'
    },
    {
      title: 'Deposit amount',
      value: '100.00 USD'
    },
    {
      title: 'Payment amount',
      value: '100.00 USD'
    }
  ],
  [WIRE_TRANSFER_RECIPIENT_INFO]: [
    {
      title: 'Recipient\'s Name:',
      value: 'Tifia Markets Limited'
    },
    {
      title: 'Recipient\'s Account Number:',
      value: '0158056001'
    },
    {
      title: 'Recipient\'s Address:',
      value: 'Govant Building, P.O. Box 1276, Port Vila, Vanuatu'
    }
  ],
  [WIRE_TRANSFER_FINANCIAL_INFORMATION]: [
    {
      title: 'Bank Name:',
      value: 'National Bank of Vanuatu Limited'
    },
    {
      title: 'Bank SWIFT Code:',
      value: 'N B O V V U V U'
    },
    {
      title: 'Bank Address:',
      value: 'Lini HighWay, P.O. Box 249, Port Vila, Vanuatu'
    }
  ],
  [WIRE_TRANSFER_PAYMENT_INFORMATION]: [
    {
      title: 'Details of Payment:',
      value: 'Payment for the Agreement CLS-6117769'
    }
  ],
  [WITHDRAWAL_METHODS]: [
    {
      titleBlock: 'Bank card',
      methods: [
        {
          id: '1',
          title: '---- ---- ---- 6784',
          type: 'bankSystem',
          typeCard: 'mastercard',
          minAmount: '10 USD',
          maxAmount: '4 117.22 USD',
          fee: '4 USD',
          avatar: 'https://tifia.com/images/new-site/payments-icon/mastercard.svg',
          link: '/withdrawal/bank-card/1'
        },
        {
          id: '2',
          title: '---- ---- ---- 3333',
          type: 'bankSystem',
          typeCard: 'mastercard',
          minAmount: '10 USD',
          maxAmount: '2 058.61 USD',
          fee: '4 USD',
          avatar: 'https://tifia.com/images/new-site/payments-icon/mastercard.svg',
          link: '/withdrawal/bank-card/2'
        }
      ]
    },
    {
      titleBlock: 'Electronic systems',
      methods: [
        {
          id: '1',
          title: 'Skrill',
          parameter: 'mb',
          type: 'bankSystem',
          minAmount: '10 USD',
          maxAmount: '2 058.61 USD',
          fee: '0%',
          avatar: 'https://tifia.com/images/new-site/payments-icon/skrill.svg',
          link: '/withdrawal/form?method=mb'
        }
      ]
    },
    {
      titleBlock: 'Local Payment',
      methods: [
        {
          id: '1',
          title: 'Tifia Utara',
          type: 'localDepo',
          minAmount: '1 USD',
          maxAmount: '2000 USD',
          fee: '0%',
          avatar: '',
          avatarText: 'TU',
          link: '/withdrawal/id/1',
          status: 'MLD'
        }
      ]
    }
  ],
  [COMMENT]: '',
  [ID_BANK_CARD_WITHDRAWAL]: null,
  [AUTHORIZATION_CODE]: '',
  [ID_PARTNERS_METHODS_WITHDRAWAL]: null,
  [ID_PAYMENT_METHODS_WITHDRAWAL]: null,
  [SOURCE_ACCOUNT_TRANSFER]: ['CLS-6117769 / 10 234.44 USD', 'CLS-6116977 / 2 234.44 USD'],
  [SOURCE_ACCOUNT_TRANSFER_SELECTED]: 'CLS-6117769 / 10 234.44 USD',
  [DESTINATION_ACCOUNT_TRANSFER]: ['CLS-6140723 / 0.00 EUR', 'CLS-6142307 / 3.00 EUR'],
  [DESTINATION_ACCOUNT_TRANSFER_SELECTED]: 'CLS-6140723 / 0.00 EUR',
  [AMOUNT_TRANSFER]: '20',
  [HISTORY_BTC_TRANSFER]: [
    {
      id: '82190',
      date: '13:32 07-01-2019',
      account: 'CLS-6117769',
      bitcoinPurse: '3GoRnU4a7EB3yxMhMQBrAzHZvUWEJ42sZB',
      amount: '100.00 USD',
      status: 'accepted'
    },
    {
      id: '82190',
      date: '13:32 07-01-2019',
      account: 'CLS-6117769',
      bitcoinPurse: '3GoRnU4a7EB3yxMhMQBrAzHZvUWEJ42sZB',
      amount: '100.00 USD',
      status: 'not confirmed'
    },
    {
      id: '82190',
      date: '13:32 07-01-2019',
      account: 'CLS-6117769',
      bitcoinPurse: '3GoRnU4a7EB3yxMhMQBrAzHZvUWEJ42sZB',
      amount: '100.00 USD',
      status: 'rejected'
    }
  ],
  [FILTER_METHOD_HISTORY]: {
    [DEPOSITS_HISTORY]: true,
    [WITHDRAWAL_HISTORY]: false,
    [INTERNAL_TRANSFER_HISTORY]: false
  },
  [FILTER_METHOD_HISTORY_LABELS]: {
    [DEPOSITS_HISTORY]: 'Deposits history',
    [WITHDRAWAL_HISTORY]: 'Withdrawals history',
    [INTERNAL_TRANSFER_HISTORY]: 'Internal transfers history'
  },
  [SELECTED_METHOD_HISTORY_FILTER]: DEPOSITS_HISTORY,
  [DEPOSIT_HISTORY_DATA]: [
    {
      id: '82190',
      account: 'ECN-6074081',
      date: '13:32 07-01-2019',
      deposit: '2 200 USD',
      link: '/transactions-history/82190'
    },
    {
      id: '82190',
      account: 'CLS-6117769',
      date: '13:32 07-01-2019',
      deposit: '100 USD',
      link: '/transactions-history/82190'
    },
    {
      id: '82190',
      account: 'CLS-6117769',
      date: '13:32 07-01-2019',
      deposit: '2 200 USD',
      link: '/transactions-history/82190'
    },
    {
      id: '82190',
      account: 'CLS-6117769',
      date: '13:32 07-01-2019',
      deposit: '200 USD',
      link: '/transactions-history/82190'
    }
  ],
  [WITHDRAWAL_HISTORY_DATA]: [
    {
      id: '167296',
      account: 'ECN-6074081',
      date: '13:32 07-01-2019',
      system: 'Local Payment / Twenty Five',
      amount: '2 000 USD'
    },
    {
      id: '167296',
      account: 'ECN-6074081',
      date: '13:32 07-01-2019',
      system: 'Perfect Money',
      amount: '2 000 USD'
    },
    {
      id: '167296',
      account: 'ECN-6074081',
      date: '13:32 07-01-2019',
      system: 'Local Payment / Twenty Five',
      amount: '2 000 USD'
    }
  ],
  [INTERNAL_TRANSFER_HISTORY_DATA]: [
    {
      id: '51248',
      date: '13:32 07-01-2019',
      accountSource: 'CLS-6117769',
      accountSourceAmount: '20.00 USD',
      accountDestination: 'CLS-6140723',
      accountDestinationAmount: '8.08 EUR'
    }
  ],
  [DEPOSITS_HISTORY_MORE_INFO]: [
    {
      ticket: '82190',
      ticketInfo: [
        {
          id: '167296',
          account: 'ECN-6074081',
          date: '13:32 07-01-2019',
          system: 'Perfect Money',
          amountDeposit: '1 950 USD',
          commission: '1.21500',
          bonus: '200 USD',
          total: '2 200 USD'
        }
      ]
    }
  ],
  [ID_TICKET_DEPOSIT]: null
})

export const getters = {
  [GET_DEPOSIT_LOCAL_ELEM_BY_ID] (state) {
    return searchElemByMassive(Number(state[ID_DEPOSIT_LOCAL]), state[DEPOSIT_LOCAL_ELEM_BY_ID], 'id', 'methods')
  },
  [GET_TITLE_DEPOSIT_LOCAL_ELEM] (state) {
    return searchElemByMassive(Number(state[ID_DEPOSIT_LOCAL]), state[DEPOSIT_LOCAL_ELEM_BY_ID], 'id', 'title')
  },
  [GET_NAME_PARTNER] (state) {
    const partnersDate = searchElemByMassive(Number(state[ID_DEPOSIT_LOCAL]), state[DEPOSIT_LOCAL_ELEM_BY_ID], 'id', 'methods')
    return partnersDate.find(elem => elem.idForm === state[ID_PARTNER])
  },
  [GET_BANK_CARD_NUMBER] (state) {
    return searchElemByMassive(Number(state[ID_BANK_CARD]), state[BANK_CARD_MASSIVE], 'id', 'number')
  },
  [GET_TYPE_BANK_CARD_TO_NUMBER] (state) {
    return searchElemByMassive(Number(state[ID_BANK_CARD]), state[BANK_CARD_MASSIVE], 'id', 'type')
  },
  [GET_TYPE_BANK_CARD] (state) {
    const number = state[TYPE_BANK_CARD]
    let re = new RegExp('^4')
    if (number.match(re) != null) { return 'visa' }

    re = new RegExp('^5[1-5]')
    if (number.match(re) != null) { return 'mastercard' }

    return 'mastercard' // default type
  },
  [GET_ELECTRONIC_SYSTEM] (state) {
    return searchElemByMassive(state[PARAMETER_ELECTRONIC_SYSTEM], state[ELECTRONIC_SYSTEMS], 'parameter', 'img')
  },
  [GET_ELECTRONIC_SYSTEM_NAME] (state) {
    return searchElemByMassive(state[PARAMETER_ELECTRONIC_SYSTEM], state[ELECTRONIC_SYSTEMS], 'parameter', 'name')
  },
  [GET_BANK_CARD_NUMBER_FOR_WITHDRAWAL] (state) {
    const cardMassive = searchElemByMassive('Bank card', state[WITHDRAWAL_METHODS], 'titleBlock', 'methods')
    return cardMassive.find(elem => elem.id === state[ID_BANK_CARD_WITHDRAWAL])
  },
  [GET_PARTNERS_SYSTEMS_FOR_WITHDRAWAL] (state) {
    const partnersSystemMassive = searchElemByMassive('Local Payment', state[WITHDRAWAL_METHODS], 'titleBlock', 'methods')
    return partnersSystemMassive.find(elem => elem.id === state[ID_PARTNERS_METHODS_WITHDRAWAL])
  },
  [GET_PAYMENT_SYSTEMS_FOR_WITHDRAWAL] (state) {
    const paymentSystemMassive = searchElemByMassive('Electronic systems', state[WITHDRAWAL_METHODS], 'titleBlock', 'methods')
    return paymentSystemMassive.find(elem => elem.parameter === state[ID_PAYMENT_METHODS_WITHDRAWAL])
  },
  [GET_FILTER_METHOD_HISTORY] (state) {
    return state[FILTER_METHOD_HISTORY]
  },
  [GET_DEPOSITS_HISTORY_MORE_INFO] (state) {
    return searchElemByMassive(state[ID_TICKET_DEPOSIT], state[DEPOSITS_HISTORY_MORE_INFO], 'ticket', 'ticketInfo')
  }
}

export const mutations = {
  [CHANGE_ID_DEPOSIT_LOCAL] (state, value) {
    state[ID_DEPOSIT_LOCAL] = value
  },
  [CHANGE_ID_PARTNER] (state, value) {
    state[ID_PARTNER] = value
  },
  [CHANGE_BANK_CARD] (state, value) {
    state[ID_BANK_CARD] = value
  },
  [CHANGE_BANK_CATEGORIES] (state, selected) {
    state.BANK_CATEGORIES_SELECTED = selected
  },
  [CHANGE_PAYMENT_METHOD] (state, selected) {
    state.PAYMENT_METHOD_SELECTED = selected
  },
  [CHANGE_PAYMENT_TIME] (state, selected) {
    state.PAYMENT_TIME_SELECTED = selected
  },
  [CHANGE_TRADING_ACCOUNT] (state, selected) {
    state.TRADING_ACCOUNT_SELECTED = selected
  },
  [CHANGE_PAYMENT_AMOUNT_CURRENCY] (state, selected) {
    state.PAYMENT_AMOUNT_CURRENCY_SELECTED = selected
  },
  [CHANGE_TYPE_BANK_CARD] (state, value) {
    state[TYPE_BANK_CARD] = value
  },
  [CHANGE_ELECTRONIC_SYSTEM] (state, value) {
    state[PARAMETER_ELECTRONIC_SYSTEM] = value
  },
  [CHANGE_BANK_CARD_FOR_WITHDRAWAL] (state, value) {
    state[ID_BANK_CARD_WITHDRAWAL] = value
  },
  [CHANGE_PARTNERS_METHODS_FOR_WITHDRAWAL] (state, value) {
    state[ID_PARTNERS_METHODS_WITHDRAWAL] = value
  },
  [CHANGE_PAYMENT_METHODS_FOR_WITHDRAWAL] (state, value) {
    state[ID_PAYMENT_METHODS_WITHDRAWAL] = value
  },
  [CHANGE_SOURCE_ACCOUNT_TRANSFER] (state, selected) {
    state[SOURCE_ACCOUNT_TRANSFER_SELECTED] = selected
  },
  [CHANGE_DESTINATION_ACCOUNT_TRANSFER] (state, selected) {
    state[DESTINATION_ACCOUNT_TRANSFER_SELECTED] = selected
  },
  [CHANGE_AMOUNT_TRANSFER] (state, value) {
    state[AMOUNT_TRANSFER] = value
  },
  [CHANGE_FILTER_METHOD_HISTORY] (state, type) {
    state[FILTER_METHOD_HISTORY][state[SELECTED_METHOD_HISTORY_FILTER]] = false
    state[SELECTED_METHOD_HISTORY_FILTER] = type
    state[FILTER_METHOD_HISTORY][type] = true
  },
  [CHANGE_TICKET_DEPOSIT_INFO] (state, value) {
    state[ID_TICKET_DEPOSIT] = value
  }
}

export const actions = {
  [CHANGE_ID_DEPOSIT_LOCAL] ({ commit }, value) {
    commit(CHANGE_ID_DEPOSIT_LOCAL, value)
  },
  [CHANGE_ID_PARTNER] ({ commit }, value) {
    commit(CHANGE_ID_PARTNER, value)
  },
  [CHANGE_BANK_CARD] ({ commit }, value) {
    commit(CHANGE_BANK_CARD, value)
  },
  [CHANGE_BANK_CATEGORIES] ({ commit }, value) {
    commit('CHANGE_BANK_CATEGORIES', value)
  },
  [CHANGE_PAYMENT_METHOD] ({ commit }, value) {
    commit('CHANGE_PAYMENT_METHOD', value)
  },
  [CHANGE_PAYMENT_TIME] (vueContext, selected) {
    vueContext.commit('CHANGE_PAYMENT_TIME', selected)
  },
  [CHANGE_TRADING_ACCOUNT] (vueContext, selected) {
    vueContext.commit('CHANGE_TRADING_ACCOUNT', selected)
  },
  [CHANGE_PAYMENT_AMOUNT_CURRENCY] (vueContext, selected) {
    vueContext.commit('CHANGE_PAYMENT_AMOUNT_CURRENCY', selected)
  },
  [CHANGE_TYPE_BANK_CARD] ({ commit }, value) {
    commit(CHANGE_TYPE_BANK_CARD, value)
  },
  [CHANGE_ELECTRONIC_SYSTEM] ({ commit }, value) {
    commit(CHANGE_ELECTRONIC_SYSTEM, value)
  },
  [CHANGE_BANK_CARD_FOR_WITHDRAWAL] ({ commit }, value) {
    commit(CHANGE_BANK_CARD_FOR_WITHDRAWAL, value)
  },
  [CHANGE_PARTNERS_METHODS_FOR_WITHDRAWAL] ({ commit }, value) {
    commit(CHANGE_PARTNERS_METHODS_FOR_WITHDRAWAL, value)
  },
  [CHANGE_PAYMENT_METHODS_FOR_WITHDRAWAL] ({ commit }, value) {
    commit(CHANGE_PAYMENT_METHODS_FOR_WITHDRAWAL, value)
  },
  [CHANGE_SOURCE_ACCOUNT_TRANSFER] (vueContext, selected) {
    vueContext.commit('CHANGE_SOURCE_ACCOUNT_TRANSFER', selected)
  },
  [CHANGE_DESTINATION_ACCOUNT_TRANSFER] (vueContext, selected) {
    vueContext.commit('CHANGE_DESTINATION_ACCOUNT_TRANSFER', selected)
  },
  [CHANGE_AMOUNT_TRANSFER] ({ commit }, value) {
    commit(CHANGE_AMOUNT_TRANSFER, value)
  },
  [CHANGE_FILTER_METHOD_HISTORY] (context, payload) {
    const { commit } = context
    commit(CHANGE_FILTER_METHOD_HISTORY, payload)
  },
  [CHANGE_TICKET_DEPOSIT_INFO] ({ commit }, value) {
    commit(CHANGE_TICKET_DEPOSIT_INFO, value)
  }
}
