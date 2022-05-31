export default function (context) {
  // todo define from what page we come
  if (typeof parseInt(context.query.login, 10) !== 'number' || isNaN(parseInt(context.query.login, 10))) {
    context.redirect('/accounts/index')
  }
  if (typeof parseInt(context.query.server, 10) !== 'number' || isNaN(parseInt(context.query.server, 10))) {
    context.redirect('/accounts/index')
  }
}
