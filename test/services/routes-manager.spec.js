import { IndexSettingRoute, IndexAccountRoute } from '@/utils/constants'
import RoutesManager from '../../services/RoutesManager'

describe('validate routes paths for save position', () => {
  test('check save position when go to some sub setting route from index setting route', () => {
    RoutesManager
      .getSettingsRoutes()
      .forEach((route) => {
        const RoutesManagerWorker = new RoutesManager('', '', RoutesManager.getSettingsIndexRoute(), route)
        expect(RoutesManagerWorker.isNeedSaveYPosition()).toBe(true)
      })
  })

  test('check get position go to index route from setting sub route', () => {
    RoutesManager.getSettingsRoutes().forEach((route) => {
      const RoutesManagerWorker = new RoutesManager('', '', route, RoutesManager.getSettingsIndexRoute())
      expect(RoutesManagerWorker.isNeedGetSavedYPosition()).toBe(true)
    })
  })
})

describe('validate routes for save y positions in accounts', () => {
  test('should save position when user come from account/index to account/info', () => {
    RoutesManager.getAccountInfoRoutes().forEach((route) => {
      const RoutesManagerWorker = new RoutesManager('', '', RoutesManager.getAccountIndexRoute(), route)
      expect(RoutesManagerWorker.isNeedSaveYPosition()).toBe(true)
    })
  })

  test('should get saved position when user come from account/info routes to account/index', () => {
    RoutesManager.getAccountInfoRoutes().forEach((route) => {
      const RoutesManagerWorker = new RoutesManager('', '', route, RoutesManager.getAccountIndexRoute())
      expect(RoutesManagerWorker.isNeedGetSavedYPosition()).toBe(true)
    })
  })

  test('should save position when user come from account/investor index route to account/info', () => {
    RoutesManager.getAccountInfoRoutes().forEach((route) => {
      const RoutesManagerWorker = new RoutesManager('', '', RoutesManager.getAccountIndexInvestorRoute(), route)
      expect(RoutesManagerWorker.isNeedSaveYPosition()).toBe(true)
    })
  })

  test('should get position when user come from account/info routes to account/investor index route', () => {
    RoutesManager.getAccountInfoRoutes().forEach((route) => {
      const RoutesManagerWorker = new RoutesManager('', '', route, RoutesManager.getAccountIndexInvestorRoute())
      expect(RoutesManagerWorker.isNeedGetSavedYPosition()).toBe(true)
    })
  })

  test('should save position when user come from account/demo route to account/info routes', () => {
    RoutesManager.getAccountInfoRoutes().forEach((route) => {
      const RoutesManagerWorker = new RoutesManager('', '', RoutesManager.getAccountIndexDemoRoute(), route)
      expect(RoutesManagerWorker.isNeedSaveYPosition()).toBe(true)
    })
  })

  test('should get position when user come from account/info routes to account/demo index route', () => {
    RoutesManager.getAccountInfoRoutes().forEach((route) => {
      const RoutesManagerWorker = new RoutesManager('', '', route, RoutesManager.getAccountIndexDemoRoute())
      expect(RoutesManagerWorker.isNeedGetSavedYPosition()).toBe(true)
    })
  })
})

describe('validate for view default header on accounts and settings sub routes', () => {
  test('check view default header when on account index page', () => {
    const RoutesManagerWorker = new RoutesManager(IndexAccountRoute, '', '', '')
    expect(RoutesManagerWorker.isCanViewDefaultHeader()).toBe(true)
  })

  test('check not view default header when on account sub page', () => {
    RoutesManager
      .getAccountRoutes()
      .forEach((route) => {
        const RoutesManagerWorker = new RoutesManager(route, '', '', '')
        expect(RoutesManagerWorker.isCanViewDefaultHeader()).toBe(false)
      })
  })

  test('check view default header on settings index page', () => {
    const RoutesManagerWorker = new RoutesManager(IndexSettingRoute, '', '', '')
    expect(RoutesManagerWorker.isCanViewDefaultHeader()).toBe(true)
  })

  test('check not view default header on settings sub page', () => {
    RoutesManager.getSettingsRoutes().forEach((route) => {
      const RoutesManagerWorker = new RoutesManager(route, '', '', '')
      expect(RoutesManagerWorker.isCanViewDefaultHeader()).toBe(false)
    })
  })
})

describe('get active side menu item cases home', () => {
  test('should return home menu item', () => {
    const RoutesMangerWorker = new RoutesManager('/', '', '', '')
    expect(RoutesMangerWorker.getCurrentActiveSideMenuItem()).toBe('Home')
  })
})

describe('get active side menu item cases clients settings routes', () => {
  test('client settings index route', () => {
    const RoutesMangerWorker = new RoutesManager(RoutesManager.getSettingsIndexRoute(), '', '', '')
    expect(RoutesMangerWorker.getCurrentActiveSideMenuItem()).toBe('Client\'s Profile')
  })
  test('client settings sub routes', () => {
    RoutesManager.getSettingsRoutes().forEach((route) => {
      const RoutesMangerWorker = new RoutesManager(route)
      expect(RoutesMangerWorker.getCurrentActiveSideMenuItem()).toBe('Client\'s Profile')
    })
  })
})

describe('get active side menu item cases accounts routes', () => {
  test('account index route', () => {
    const RoutesMangerWorker = new RoutesManager(RoutesManager.getAccountIndexRoute(), '', '', '')
    expect(RoutesMangerWorker.getCurrentActiveSideMenuItem()).toBe('Accounts')
  })

  test('account sub routes', () => {
    RoutesManager.getAccountRoutes().forEach((route) => {
      const RoutesMangerWorker = new RoutesManager(route)
      expect(RoutesMangerWorker.getCurrentActiveSideMenuItem()).toBe('Accounts')
    })
  })
})

describe('get active side menu item cases social trading routes', () => {
  test('social trading index route', () => {
    const RoutesMangerWorker = new RoutesManager(RoutesManager.getMonitoringIndexRoute(), '', '', '')
    expect(RoutesMangerWorker.getCurrentActiveSideMenuItem()).toBe('Social trading')
  })

  test('social trading sub routes', () => {
    RoutesManager.getMonitoringRoutes().forEach((route) => {
      const RoutesMangerWorker = new RoutesManager(route)
      expect(RoutesMangerWorker.getCurrentActiveSideMenuItem()).toBe('Social trading')
    })
  })

  test('social trading provider + statistic route', () => {
    const RoutesMangerWorker = new RoutesManager('/provider/statistic/536582867')
    expect(RoutesMangerWorker.getCurrentActiveSideMenuItem()).toBe('Social trading')
  })

  test('social trading duplicator route', () => {
    const RoutesMangerWorker = new RoutesManager('/duplicator/536582867')
    expect(RoutesMangerWorker.getCurrentActiveSideMenuItem()).toBe('Social trading')
  })
})

describe('correct back button navigation for accountInfo layout', () => {
  test('should return /accounts/index if it in context arg', () => {
    expect(RoutesManager
      .getPreviousRouteForAccountInfoLayout(RoutesManager.getAccountIndexRoute())
    ).toBe(RoutesManager.getAccountIndexRoute())
  })
  test('should return /accounts/demo if it in context arg', () => {
    expect(RoutesManager
      .getPreviousRouteForAccountInfoLayout(RoutesManager.getAccountIndexDemoRoute())
    ).toBe(RoutesManager.getAccountIndexDemoRoute())
  })
  test('should return /accounts/investors-accounts if it in context arg', () => {
    expect(RoutesManager
      .getPreviousRouteForAccountInfoLayout(RoutesManager.getAccountIndexInvestorRoute())
    ).toBe(RoutesManager.getAccountIndexInvestorRoute())
  })
  test('should return /accounts/index if context full path is null', () => {
    expect(RoutesManager
      .getPreviousRouteForAccountInfoLayout(null)
    ).toBe(RoutesManager.getAccountIndexRoute())
  })
  test('should return /accounts/index if context full path is empty string', () => {
    expect(RoutesManager
      .getPreviousRouteForAccountInfoLayout('')
    ).toBe(RoutesManager.getAccountIndexRoute())
  })
  test('should return /accounts/index if context full path is undefined', () => {
    expect(RoutesManager
      .getPreviousRouteForAccountInfoLayout(undefined)
    ).toBe(RoutesManager.getAccountIndexRoute())
  })
  test('should return /accounts/index if context full path is some page that not in allowed routes', () => {
    expect(RoutesManager
      .getPreviousRouteForAccountInfoLayout('/deposit/index')
    ).toBe(RoutesManager.getAccountIndexRoute())
  })
  test('should return /accounts/index no argument in function', () => {
    expect(RoutesManager
      .getPreviousRouteForAccountInfoLayout('/deposit/index')
    ).toBe(RoutesManager.getAccountIndexRoute())
  })
})
