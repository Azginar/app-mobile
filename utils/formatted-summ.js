export default function numberFormat (number, decimals, decPoint, thousandsSep) {
  const tmpNumber = (`${number}`).replace(/[^0-9+\-Ee.]/g, '')
  const n = !isFinite(+tmpNumber) ? 0 : +tmpNumber
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  let s = ''
  // eslint-disable-next-line func-names
  const toFixedFix = function (tmpN, tmpPrec) {
    // eslint-disable-next-line no-restricted-properties
    const k = Math.pow(10, prec)
    return `${(Math.round(tmpN * k) / k)
      .toFixed(tmpPrec)}`
  }
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`)
    .split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || ''
    // eslint-disable-next-line no-mixed-operators
    s[1] += new Array(prec - s[1].length + 1)
      .join('0')
  }
  return s.join(dec)
}
