import cond from 'lodash/cond'

export function getAccountInfoPageSubMenu (isInvestor) {
  const defaultAccountsInfoRoutesAndLabels = [
    { label: 'Info', link: '/accounts/info' },
    { label: 'Current orders', link: '/accounts/current-orders' },
    { label: 'History', link: '/accounts/history' }
  ]
  const getAccountInfoRoutesAndLabels = () => ({ availableLinks: defaultAccountsInfoRoutesAndLabels })
  const getInvestorAccountRoutesAndLabels = () => ({
    availableLinks: defaultAccountsInfoRoutesAndLabels
      .concat({ label: 'Copying sessions', link: '/accounts/copying-sessions' })
  })

  const otherWise = () => true
  const defineIsInvestorAccountType = flag => flag === true
  const defineIsTraderAccountType = flag => flag !== true

  return cond([
    [defineIsInvestorAccountType, getInvestorAccountRoutesAndLabels],
    [defineIsTraderAccountType, getAccountInfoRoutesAndLabels],
    [otherWise, () => []]
  ])(isInvestor)
}
