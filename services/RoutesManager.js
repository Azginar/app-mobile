import cond from 'lodash/cond'
import {
  accountsRoutes,
  IndexAccountRoute,
  IndexMonitoringRoute,
  IndexSettingRoute,
  MonitoringRoutes,
  settingsRoutes,
  affiliateRoutes,
  IndexAffiliateRoute,
  IndexDemoAccountsRoute,
  accountsInfoRoutes,
  IndexInvestorAccountsRoute,
  notificationRoute
} from '../utils/constants'

export default class RoutesManager {
  /**
   *
   * @param currentRoute
   * @param previousRoute
   * @param fromRoute
   * @param toRoute
   */
  constructor (currentRoute, previousRoute = '', fromRoute = '', toRoute = '') {
    this.currentRoute = currentRoute
    this.previousRoute = previousRoute
    this.fromRoute = fromRoute
    this.toRoute = toRoute

    /**
     * other wise function for conditional
     * @returns {boolean}
     */
    this.otherWise = () => true
  }

  /**
   *
   * @returns {string[]}
   */
  static getSettingsRoutes () {
    return settingsRoutes
  }

  /**
   *
   * @returns {string[]}
   */
  static getMonitoringRoutes () {
    return MonitoringRoutes
  }

  /**
   *
   * @returns {string[]}
   */
  static getAccountRoutes () {
    return accountsRoutes
  }

  /**
   *
   * @returns {string[]}
   */
  static getAccountInfoRoutes () {
    return accountsInfoRoutes
  }

  /**
   *
   * @returns {string[]}
   */
  static getAffiliateRoutes () {
    return affiliateRoutes
  }

  /**
   *
   * @returns {string}
   */
  static getAccountIndexRoute () {
    return IndexAccountRoute
  }

  /**
   *
   * @returns {string}
   */
  static getAccountIndexInvestorRoute () {
    return IndexInvestorAccountsRoute
  }

  /**
   *
   * @returns {string}
   */
  static getAccountIndexDemoRoute () {
    return IndexDemoAccountsRoute
  }

  /**
   *
   * @returns {string}
   */
  static getSettingsIndexRoute () {
    return IndexSettingRoute
  }

  /**
   *
   * @returns {string}
   */
  static getMonitoringIndexRoute () {
    return IndexMonitoringRoute
  }

  /**
   *
   * @returns {string}
   */
  static getAffiliateIndexRoute () {
    return IndexAffiliateRoute
  }

  /**
   *
   * @returns {string}
   */
  static getNotificationRoutes () {
    return notificationRoute
  }

  /**
   *
   * @returns {boolean}
   */
  isNeedSaveYPosition () {
    // user profile settings block
    const isFromIndexSettingsRoute = this.fromRoute === RoutesManager.getSettingsIndexRoute()
    const fromIndexToSettings = () => isFromIndexSettingsRoute && RoutesManager.getSettingsRoutes().includes(this.toRoute)
    // ---------------------------

    // user demo block info block
    const isFromIndexDemoAccounts = this.fromRoute === RoutesManager.getAccountIndexDemoRoute()
    const isFromDemoAccountListToAccountInfo = () => isFromIndexDemoAccounts && RoutesManager.getAccountInfoRoutes().includes(this.toRoute)
    // ---------------------------

    // user investor block info block
    const isFromIndexInvestorAccounts = this.fromRoute === RoutesManager.getAccountIndexInvestorRoute()
    const isFromIndexInvestorAccountsToAccountInfo = () => isFromIndexInvestorAccounts && RoutesManager.getAccountInfoRoutes().includes(this.toRoute)
    // ---------------------------

    // user real accounts block
    const isFromIndexRealAccounts = this.fromRoute === RoutesManager.getAccountIndexRoute()
    const isFromIndexRealAccountsToAccountInfo = () => isFromIndexRealAccounts && RoutesManager.getAccountInfoRoutes().includes(this.toRoute)
    // ---------------------------

    return cond([
      [isFromDemoAccountListToAccountInfo, () => true],
      [isFromIndexInvestorAccountsToAccountInfo, () => true],
      [isFromIndexRealAccountsToAccountInfo, () => true],
      [fromIndexToSettings, () => true],
      [this.otherWise, () => false]
    ])()
  }

  static getPreviousRouteForAccountInfoLayout (fullPathFromContext) {
    // todo set in storage last correct route
    const allowedToGoBackRoutes = ['/accounts/index', '/accounts/demo', '/accounts/investors-accounts']

    if (fullPathFromContext && allowedToGoBackRoutes.includes(fullPathFromContext)) {
      return fullPathFromContext
    }

    return RoutesManager.getAccountIndexRoute()
  }

  /**
   *
   * @returns {boolean}
   */
  isNeedGetSavedYPosition () {
    // user profile settings block
    const isToIndexSettingsRoute = this.toRoute === IndexSettingRoute
    const isFromSettingsToIndexSettings = () => RoutesManager.getSettingsRoutes().includes(this.fromRoute) && isToIndexSettingsRoute
    // ---------------------------

    // user demo block info
    const isToIndexDemoAccounts = this.toRoute === IndexDemoAccountsRoute
    const isFromDemoInfoRoutesToDemoList = () => RoutesManager.getAccountInfoRoutes().includes(this.fromRoute) && isToIndexDemoAccounts
    // ---------------------------

    // user investor block info
    const isToIndexInvestorAccounts = this.toRoute === IndexInvestorAccountsRoute
    const isFromDemoInfoRoutesToInvestorList = () => RoutesManager.getAccountInfoRoutes().includes(this.fromRoute) && isToIndexInvestorAccounts
    // ---------------------------

    // user real accounts block
    const isToIndexRealAccounts = this.toRoute === IndexAccountRoute
    const isFromDemoInfoRoutesToIndexRealAccounts = () => RoutesManager.getAccountInfoRoutes().includes(this.fromRoute) && isToIndexRealAccounts
    // ---------------------------

    return cond([
      [isFromSettingsToIndexSettings, () => true],
      [isFromDemoInfoRoutesToDemoList, () => true],
      [isFromDemoInfoRoutesToInvestorList, () => true],
      [isFromDemoInfoRoutesToIndexRealAccounts, () => true],
      [this.otherWise, () => false]
    ])()
  }

  /**
   *
   * @param currentRoute
   * @returns {boolean}
   */
  isAccountRouter (currentRoute) {
    return RoutesManager.getAccountRoutes().includes(currentRoute)
  }

  /**
   *
   * @param currentRoute
   * @returns {boolean}
   */
  isSettingsRoute (currentRoute) {
    return RoutesManager.getSettingsRoutes().includes(currentRoute)
  }

  isNotificationRoute (currentRoute) {
    return RoutesManager.getNotificationRoutes().includes(currentRoute)
  }

  isMonitoringRoute (currentRoute) {
    return RoutesManager.getMonitoringRoutes().includes(currentRoute)
  }

  isAffiliateRoute (currentRoute) {
    return RoutesManager.getAffiliateRoutes().includes(currentRoute)
  }

  /**
   *
   * @returns {*}
   */
  isCanViewDefaultHeader () {
    const didNotViewHeader = () => false
    const viewHeader = () => true

    const isAccountRouter = currentPath => this.isAccountRouter(currentPath)
    const isSettingsFormRouter = currentPath => this.isSettingsRoute(currentPath)
    const isMonitoringRouter = currentPath => this.isMonitoringRoute(currentPath)

    const isProviderRoute = (currentPath) => {
      if (Array.isArray(currentPath.split('/'))) {
        const isProvider = currentPath.split('/').includes('provider')
        const isProviderStatistics = !currentPath.split('/').includes('statistic')
        return isProviderStatistics && isProvider
      }

      return false
    }
    return cond([
      [isAccountRouter, didNotViewHeader],
      [isSettingsFormRouter, didNotViewHeader],
      [isMonitoringRouter, didNotViewHeader],
      [isProviderRoute, didNotViewHeader],
      [this.otherWise, viewHeader]
    ])(this.currentRoute)
  }

  /**
   *
   * @returns {string}
   */
  getCurrentActiveSideMenuItem () {
    const isHomeRoute = route => route === '/'
    const isAccountRoute = (route) => {
      const isSubAccountRoute = this.isAccountRouter(route)
      const isAccountIndexRoute = RoutesManager.getAccountIndexRoute() === route

      return isAccountIndexRoute || isSubAccountRoute
    }
    const isSettingRoute = (route) => {
      const isSubSettingRoute = this.isSettingsRoute(route)
      const isSettingsIndexRoute = RoutesManager.getSettingsIndexRoute() === route

      return isSubSettingRoute || isSettingsIndexRoute
    }
    const isNotificationRoute = (route) => {
      const isNotificationIndexRoute = RoutesManager.getNotificationRoutes() === route

      return isNotificationIndexRoute
    }
    const isMonitoringRoute = (route) => {
      const isMonitoringSubRoute = this.isMonitoringRoute(route)
      const isMonitoringIndexRoute = RoutesManager.getMonitoringIndexRoute() === route

      return isMonitoringSubRoute || isMonitoringIndexRoute
    }

    const isProviderWithStatisticsRoute = (currentPath) => {
      if (Array.isArray(currentPath.split('/'))) {
        const isProvider = currentPath.split('/').includes('provider')
        const isProviderStatistics = currentPath.split('/').includes('statistic')
        return isProviderStatistics && isProvider
      }

      return false
    }

    const isDuplicatorRoute = (currentPath) => {
      if (Array.isArray(currentPath.split('/'))) {
        return currentPath.split('/').includes('duplicator')
      }
    }

    const isAffiliateRoute = (route) => {
      const isSubAffiliateRoute = this.isAffiliateRoute(route)
      const isAffiliateIndexRoute = RoutesManager.getAffiliateIndexRoute() === route

      return isSubAffiliateRoute || isAffiliateIndexRoute
    }

    return cond([
      [isHomeRoute, () => 'Home'],
      [isAccountRoute, () => 'Accounts'],
      [isSettingRoute, () => 'Client\'s Profile'],
      [isMonitoringRoute, () => 'Social trading'],
      [isProviderWithStatisticsRoute, () => 'Social trading'],
      [isDuplicatorRoute, () => 'Social trading'],
      [isAffiliateRoute, () => 'Affiliate'],
      [isNotificationRoute, () => 'Messages'],
      [this.otherWise, () => 'Home']
    ])(this.currentRoute)
  }

  /**
   *
   * @returns {boolean}
   */
  isCanViewAccountPageSubMenu () {
    return [
      '/terminal/index',
      '/accounts/archive',
      '/accounts/demo',
      '/accounts/investors-accounts',
      '/accounts/index'
    ].includes(this.currentRoute)
  }

  /**
   *
   * @returns {boolean}
   */
  isCanViewFinancePageSubmenu () {
    return [
      '/deposit/index',
      '/withdrawal/index',
      '/internal-transfer/index',
      '/transactions-history',
      '/bitcoin-transfer/history'
    ].includes(this.currentRoute)
  }

  /**
   *
   * @returns {boolean}
   */
  isCanViewSocialTradingPageSubmenu () {
    return [
      '/monitoring/index',
      '/provider/statistic/536582867',
      '/duplicator/536582867'
    ].includes(this.currentRoute)
  }

  /**
   *
   * @returns {boolean}
   */
  isCanViewAffiliatePageSubmenu () {
    return [
      '/affiliate/index',
      '/affiliate/statistics',
      '/affiliate/referrals',
      '/affiliate/campaign',
      '/affiliate/rebate',
      '/affiliate/promo-materials'
    ].includes(this.currentRoute)
  }
}
