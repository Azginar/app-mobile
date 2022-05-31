import { INIT_AUTH_MIDDLEWARE } from '@/modules/login/actions-types'

export default function ({ store, req }) {
  store.dispatch(`login/${INIT_AUTH_MIDDLEWARE}`, req)
}
