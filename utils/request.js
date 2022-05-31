/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON, status from the response
 */
function parseJSON (response) {
  return new Promise((resolve, reject) => {
    const statusMap = new Map()
      .set(204, () => resolve({
        status: response.status,
        ok: response.ok,
        json: {}
      }))
      .set(500, () => reject(new Error('500')))

    if (statusMap.has(response.status)) {
      return statusMap.get(response.status)()
    }
    return response
      .json()
      .then(json => resolve({
        status: response.status,
        ok: response.ok,
        json
      }))
      .catch(error => (statusMap.has(response.status) ? statusMap.get(response.status)() : reject(error)))
  })
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {Promise}           The request promise
 */
export default function request (url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(parseJSON)
      .then(({ status, json }) => {
        if (status >= 200 && status < 300) {
          return resolve(json)
        }
        // extract the error from the server's json
        return reject(json)
      })
      .catch(error => reject(error))
  })
}
