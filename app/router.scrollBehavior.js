import RoutesManager from '../services/RoutesManager'

const SAVED_SCROLL_Y_KEY = 'saved-y-position'

function saveYPosition (RoutesManagerWorker) {
  if (RoutesManagerWorker.isNeedSaveYPosition()) {
    window[SAVED_SCROLL_Y_KEY] = window.scrollY
  }
}

function getYPosition (RoutesManagerWorker) {
  if (RoutesManagerWorker.isNeedGetSavedYPosition()) {
    return { x: 0, y: window[SAVED_SCROLL_Y_KEY] }
  }

  return { x: 0, y: 0 }
}

export default function (to, from, savedPosition) {
  const RoutesManagerWorker = new RoutesManager('', '', from.path, to.path)
  const defaultPosition = false
  const scrollTopPosition = { x: 0, y: 0 }

  let position = defaultPosition

  if (savedPosition) {
    position = savedPosition
  } else if (to.matched.length < 2) {
    position = scrollTopPosition
  } else if (to.matched.some(child => child.components.default.options.scrollToTop)) {
    position = scrollTopPosition
  }

  saveYPosition(RoutesManagerWorker)

  position = getYPosition(RoutesManagerWorker)

  return new Promise((resolve) => {
    window.$nuxt.$once('triggerScroll', () => {
      resolve(position)
    })
  })
}
