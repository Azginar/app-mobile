import { TokenManager } from '@/services/TokenManager'
import { TOKEN_EXPIRE_DATE_KEY, TOKEN_KEY } from './constants'
const TokenManagerWorker = new TokenManager()

export const isExpireDateEnd = (data) => {
  if (!data) {
    return true
  }

  return new Date() > new Date(data)
}

export const validateTokenAndExpireDate = (token, expireDate) => {
  if (!token) {
    return false
  }

  if (!expireDate) {
    return false
  }
  if (isExpireDateEnd(expireDate)) {
    return false
  }

  return true
}

export const getDataFromCookie = (key, cookieString) => {
  const searchingString = cookieString
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`))
  if (searchingString) {
    return searchingString.replace(' ', '').slice(key.length + 1, searchingString.length)
  }

  return null
}

export const getTokenAndExpireDateFromRequest = (req) => {
  let token = null
  let expireDate = null
  if (req) {
    if (!req.headers.cookie) {
      return {
        token,
        expireDate
      }
    }
    token = getDataFromCookie(TOKEN_KEY, req.headers.cookie)
    expireDate = getDataFromCookie(TOKEN_EXPIRE_DATE_KEY, req.headers.cookie)
  } else {
    token = TokenManagerWorker.getTokenFromLocalStorage()
    expireDate = TokenManagerWorker.getExpireDateFromLocalStorage()
  }
  return {
    token,
    expireDate
  }
}

export const searchElemByMassive = (searchTerm, massive, keySearch, keyResult) => {
  let massiveLocal = ''
  massiveLocal = massive.find(elem => elem[keySearch] === searchTerm)
  if (massiveLocal !== undefined) {
    return massiveLocal[keyResult]
  }
  return []
}
