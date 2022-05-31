const promotionsRoutesAndLabels = [
  { label: 'Active Promotions', link: '/bonus/active-promotions' },
  { label: 'My Promotions', link: '/bonus/my-promotions' }
]
const monitoringRoutesAndLabels = [
  { label: 'Traders\' rating', link: '/monitoring' },
  { label: 'My statistics as trader', link: '/' },
  { label: 'My statistics as investor', link: '/' }
]
const settingsRoutesAndLabels = [
  { label: 'Profile', link: '/settings/index' },
  { label: 'Personal information', link: '/settings/personal-information' },
  { label: 'Verification', link: '/documents/index' },
  { label: 'Security', link: '/settings/security' },
  { label: 'Notifications', link: '/settings/notifications' },
  { label: 'Privacy', link: '/settings/privacy' },
  { label: 'Login history', link: '/login-history/index' }
]
const financeRoutesAndLabels = [
  { label: 'Deposit', link: '/deposit/index' },
  { label: 'Withdrawal', link: '/withdrawal/index' },
  { label: 'Internal transfer', link: '/internal-transfer/index' },
  { label: 'Transactions history', link: '/deposit/history' },
  { label: 'History of BTC transfer', link: '/bitcoin-transfer/index' },
  { label: 'Wallet', link: '/wallet/index' }
]
const affiliateRoutesAndLabels = [
  { label: 'Overview', link: '/affiliate/index' },
  { label: 'Statistics', link: '/affiliate/statistics' },
  { label: 'All referrals', link: '/affiliate/referrals' },
  { label: 'Referred sub-IBs', link: '/affiliate/sub-ib' },
  { label: 'Certificates for Partner', link: '/affiliate/certificates' },
  { label: 'Affiliate campaigns', link: '/affiliate/campaign' }
]
const accountInfo = [
  { label: 'Account info', link: '/accounts/info' },
  { label: 'Account transactions history', link: '/accounts/trades' }]

const subMenuRouter = new Map()
  .set('terminal-index', { appTitle: 'My Accounts' })
  .set('index', { appTitle: 'Main page' })
  .set('accounts', { appTitle: 'My accounts' })
  .set('accounts-demo', { appTitle: 'My accounts' })
  .set('accounts-info', { appTitle: 'PROFIT-6131220', labelAndLinks: accountInfo, appLink: '/accounts/info' })
  .set('accounts-trades', { appTitle: 'PROFIT-6131220', labelAndLinks: accountInfo, appLink: '/accounts/trades' })
  .set('settings-index', {
    appTitle: 'Client\'s Profile',
    labelAndLinks: settingsRoutesAndLabels,
    appLink: '/settings/index'
  })
  .set('settings-personal-information', {
    appTitle: 'Client\'s Profile',
    labelAndLinks: settingsRoutesAndLabels,
    appLink: '/settings/personal-information'
  })
  .set('login-history-index', {
    appTitle: 'Client\'s Profile',
    labelAndLinks: settingsRoutesAndLabels,
    appLink: '/login-history/index'
  })
  .set('deposit-index', {
    appTitle: 'Finance',
    labelAndLinks: financeRoutesAndLabels,
    appLink: '/deposit/index'
  })
  .set('deposit-history', {
    appTitle: 'Finance',
    labelAndLinks: financeRoutesAndLabels,
    appLink: '/deposit/history'
  })
  .set('documents-index', {
    appTitle: 'Client\'s Profile',
    labelAndLinks: settingsRoutesAndLabels,
    appLink: '/documents/index'
  })
  .set('settings-security', {
    appTitle: 'Client\'s Profile',
    labelAndLinks: settingsRoutesAndLabels,
    appLink: '/settings/security'
  })
  .set('settings-privacy', {
    appTitle: 'Client\'s Profile',
    labelAndLinks: settingsRoutesAndLabels,
    appLink: '/settings/privacy'
  })
  .set('settings-notifications', {
    appTitle: 'Client\'s Profile',
    labelAndLinks: settingsRoutesAndLabels,
    appLink: '/settings/notifications'
  })
  .set('help-index', { appTitle: 'How it works' })
  .set('help-copy-types', { appTitle: 'Copy types' })
  .set('help-contacts', { appTitle: 'Contacts' })
  .set('support-index', { appTitle: 'Support' })
  .set('sync-trading-make-master', { appTitle: 'Create trader\'s account' })
  .set('sync-trading-investors-account', { appTitle: 'Create investor\'s account' })
  .set('monitoring', {
    appTitle: 'SocialTrading platform',
    labelAndLinks: monitoringRoutesAndLabels,
    appLink: '/monitoring'
  })
  .set('affiliate-index', {
    appTitle: 'Affiliate',
    labelAndLinks: affiliateRoutesAndLabels,
    appLink: '/affiliate/index'
  })
  .set('affiliate-statistics', {
    appTitle: 'Affiliate',
    labelAndLinks: affiliateRoutesAndLabels,
    appLink: '/affiliate/statistics'
  })
  .set('affiliate-referrals', {
    appTitle: 'Affiliate',
    labelAndLinks: affiliateRoutesAndLabels,
    appLink: '/affiliate/referrals'
  })
  .set('affiliate-sub-ib', {
    appTitle: 'Affiliate',
    labelAndLinks: affiliateRoutesAndLabels,
    appLink: '/affiliate/sub-ib'
  })
  .set('affiliate-certificates', {
    appTitle: 'Affiliate',
    labelAndLinks: affiliateRoutesAndLabels,
    appLink: '/affiliate/certificates'
  })
  .set('affiliate-campaign', {
    appTitle: 'Affiliate',
    labelAndLinks: affiliateRoutesAndLabels,
    appLink: '/affiliate/campaign'
  })
  .set('bonus-active-promotions', {
    appTitle: 'Promotions',
    labelAndLinks: promotionsRoutesAndLabels,
    appLink: '/bonus/active-promotions'
  })
  .set('bonus-my-promotions', {
    appTitle: 'Promotions',
    labelAndLinks: promotionsRoutesAndLabels,
    appLink: '/bonus/my-promotions'
  })
  .set('withdrawal-index', {
    appTitle: 'Finance',
    labelAndLinks: financeRoutesAndLabels,
    appLink: '/withdrawal/index'
  })
  .set('withdrawal-history', {
    appTitle: 'Finance',
    labelAndLinks: financeRoutesAndLabels,
    appLink: '/deposit/history'
  })
  .set('internal-transfer-index', {
    appTitle: 'Finance',
    labelAndLinks: financeRoutesAndLabels,
    appLink: '/internal-transfer/index'
  })
  .set('internal-transfer-history', {
    appTitle: 'Finance',
    labelAndLinks: financeRoutesAndLabels,
    appLink: '/deposit/history'
  })
  .set('bitcoin-transfer-index', {
    appTitle: 'Finance',
    labelAndLinks: financeRoutesAndLabels,
    appLink: '/bitcoin-transfer/index'
  })
  .set('wallet-index', {
    appTitle: 'Finance',
    labelAndLinks: financeRoutesAndLabels,
    appLink: '/wallet/index'
  })

export default subMenuRouter
