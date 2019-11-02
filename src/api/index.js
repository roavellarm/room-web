import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

axios.interceptors.request.use(
  config => config,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('isAuthenticated')
      // window.location = '/'
    } else {
      return Promise.reject(error)
    }
  },
)

export default axios
