import { getAccountInfoPageSubMenu } from '@/services/tab-menu'

describe('Account tab menu', () => {
  test('should return investor account tabs', () => {
    const isInvestor = true
    const { availableLinks } = getAccountInfoPageSubMenu(isInvestor)
    const expectedLinks = [
      { label: 'Info', link: '/accounts/info' },
      { label: 'Current orders', link: '/accounts/current-orders' },
      { label: 'History', link: '/accounts/history' },
      { label: 'Copying sessions', link: '/accounts/copying-sessions' }
    ]
    expect(availableLinks.length).toBe(4)
    expect(availableLinks).toEqual(expectedLinks)
  })
  test('should return trader account tab', () => {
    const isInvestor = false
    const { availableLinks } = getAccountInfoPageSubMenu(isInvestor)

    const expectedLinks = [
      { label: 'Info', link: '/accounts/info' },
      { label: 'Current orders', link: '/accounts/current-orders' },
      { label: 'History', link: '/accounts/history' }
    ]
    expect(availableLinks.length).toBe(3)
    expect(availableLinks).toEqual(expectedLinks)
  })
})
