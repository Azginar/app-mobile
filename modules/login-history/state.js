import { LIST, IN_PROGRESS, CAN_VIEW_LOAD_MORE_BUTTON, CURRENT_PAGE, ERRORS } from './constants'

const loginHistoryState = {
  [LIST]: {},
  [IN_PROGRESS]: false,
  [CAN_VIEW_LOAD_MORE_BUTTON]: false,
  [CURRENT_PAGE]: 1,
  [ERRORS]: []
}

export default loginHistoryState
