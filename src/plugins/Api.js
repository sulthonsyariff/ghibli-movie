// Provide axios instance to use same configuration across the whole project
import axios from 'axios'

// function ApiException (response) {
//   this.success = response.success
//   this.message = response.data
//   this.trace = response.trace
// }

export default (resource) => {
  const instance = axios.create()
  const token = localStorage.getItem('bts-token')
  instance.defaults.baseURL = 'https://ghibliapi.herokuapp.com'
  instance.defaults.headers.Accept = 'application/json'
  instance.defaults.headers['Content-Type'] = 'application/json'
  if (token) {
    instance.defaults.headers.Authorization = `Bearer ${token}`
  }
  instance.interceptors.response.use((response) => {
    // throw Api Exception
    // if (response.status !== 200) {
    //   throw new ApiException(response.data)
    // }

    // throw Api Exception
    // if (!response.data.success) {
    //   throw new ApiException(response.data)
    // }

    return Promise.resolve(response.data)
  })

  return {
    instance,

    get (payload) {
      return instance.get(`${resource}`, {
        params: payload
      })
    },

    post (payload) {
      return instance.post(`${resource}`, payload)
    },

    delete () {
      return instance.delete(`${resource}`)
    }

  }
}
