import { TOKEN_EXPIRE_DATE_KEY, TOKEN_KEY } from '@/utils/constants'
import Cookie from 'js-cookie'

export class TokenManager {
  constructor (isClient) {
    this.token = null
    this.expireDate = null
    this.tokenLocalStorageKey = TOKEN_KEY
    this.expireDateLocalStorageKey = TOKEN_EXPIRE_DATE_KEY
    this.isClient = isClient
  }

  setTokenToLocalStorage (token) {
    if (this.isClient) {
      localStorage.setItem(this.tokenLocalStorageKey, token)
    }
    Cookie.set(TOKEN_KEY, token)
    /**
     * https://web.dev/samesite-cookies-explained/?utm_source=devtools
     */
    Cookie.set('SameSite', 'Strict')
  }

  setExpireDateToLocalStorage (expireDate) {
    if (this.isClient) {
      localStorage.setItem(this.expireDateLocalStorageKey, expireDate)
    }
    Cookie.set(TOKEN_EXPIRE_DATE_KEY, expireDate)
    /**
     * https://web.dev/samesite-cookies-explained/?utm_source=devtools
     */
    Cookie.set('SameSite', 'Strict')
  }

  getTokenFromLocalStorage () {
    if (this.isClient) {
      if (localStorage.getItem('token') === null) {
        localStorage.setItem(this.tokenLocalStorageKey, Cookie.get('token'))
      } else {
        return localStorage.getItem('token')
      }
    }
    return Cookie.get('token')
  }

  getExpireDateFromLocalStorage () {
    if (this.isClient) {
      if (localStorage.getItem('expire-data') === null) {
        localStorage.setItem(this.expireDateLocalStorageKey, Cookie.get('expire-data'))
      } else {
        return localStorage.getItem('token')
      }
    }
    return Cookie.get('expire-data')
  }

  getTokenFromCoocie () {
    return Cookie.get('token')
  }

  deleteTokenFromLocalStorage () {
    if (this.isClient) {
      localStorage.removeItem('token')
    }
    Cookie.remove('token')
  }

  deleteExpireDateFromLocalStorage () {
    if (this.isClient) {
      localStorage.removeItem('expire-data')
    }
    Cookie.remove('expire-data')
  }
}
