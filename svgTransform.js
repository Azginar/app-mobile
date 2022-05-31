// file for correct load svg int tests
module.exports = {
  process () {
    return 'module.exports = {};'
  },
  getCacheKey () {
    return 'svgTransform'
  }
}
