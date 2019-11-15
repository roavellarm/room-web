import axios from 'axios'
import { retrieveData } from '../helpers/storage'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.request.use(
  // config => config,
  config => {
    return {
      ...config,
      headers: { ...retrieveData() },
    }
  },

  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('isAuthenticated')
      // localStorage.removeItem('access-token')
      // localStorage.removeItem('client')
      // localStorage.removeItem('uid')
      // window.location = '/'
    } else {
      return Promise.reject(error)
    }
  },
)

export default axios
