import { IS_AUTHENTICATED_MIDDLEWARE } from '~/modules/login/getter-types'

export default function (context) {
  if (!context.store.getters[`login/${IS_AUTHENTICATED_MIDDLEWARE}`]) {
    context.redirect('/login')
  }
}
