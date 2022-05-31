/**
 * this middleware using for switch theme (light/dark):
 * @param context - nuxtjs context object
 */

import get from 'lodash/get'

import { CHANGE_LIGHT_THEME } from '@/modules/menu/mutation-types'

export default function (context) {
  if (process.client) {
    if (localStorage.getItem('lightTheme')) {
      const lightTheme = localStorage.getItem('lightTheme')
      context.store.commit(`menu/${CHANGE_LIGHT_THEME}`, lightTheme === 'true')
    }
  }
  if (process.server) {
    if (context.req && context.req.headers !== undefined) {
      const cookieArr = get(context, 'req.headers.cookie', '').split(';').map(name => name.trim())
      const getValueTheme = cookieArr.find(item => item.split('=')[0] === 'lightTheme')
      const stringValueThemeFromCookie = getValueTheme ? getValueTheme.split('=')[1] : false
      context.store.commit(`menu/${CHANGE_LIGHT_THEME}`, stringValueThemeFromCookie === 'true')
    }
  }
}
