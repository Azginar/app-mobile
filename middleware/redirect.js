export default function (context) {
  if (process.client && !context.$config.DEV_ENV) {
    const { redirect } = context
    if (!isMobile(navigator.userAgent)) {
      redirect(context.$config.DESKTOP_URL)
    }
  }
  if (process.server && !context.$config.DEV_ENV) {
    const { req, redirect } = context
    if (!isMobile(req.headers['user-agent'])) {
      redirect(context.$config.DESKTOP_URL)
    }
  }
}

function isMobile (userAgent) {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(userAgent))
}
