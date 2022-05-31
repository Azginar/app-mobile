const promiseBody = (condition, data, errorMessage = 'testError') => new Promise((resolve, reject) => (condition ? resolve(data) : reject(new Error(errorMessage))))
export default promiseBody
