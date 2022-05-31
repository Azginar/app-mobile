import axios from 'axios'
import { GET_TOKEN } from '@/modules/login/getter-types'
import API_ROOT from '@/utils/api_root'

/**
 *
 * @param context
 * @returns {Promise<boolean>}
 */
const getAllowCountryList = async (context) => {
  const { store, redirect } = context
  const token = store.getters[`login/${GET_TOKEN}`]

  await axios
    .get(`${API_ROOT.HOST}/v2/country/list`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      validateStatus (status) {
        if (status === 401) {
          store.dispatch('login/logout')
          redirect('/login')

          return false
        }
        return true
      }
    })
    .then((response) => {
      store.dispatch('root-store/loadAllowCountriesToStore', response.data)
    })
    .catch(() => {
      // TODO add parsing and handling errors hear
      // if (e.message === 'Request failed with status code 401') {
      // store.dispatch('login/logout')
      // }
    })
}

export default getAllowCountryList
