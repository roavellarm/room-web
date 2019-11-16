import axios from 'axios'
import { retrieveData } from '../helpers/storage'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.post['token-type'] = 'Bearer'
axios.defaults.headers.post['content-type'] = 'application/json; charset=utf-8'

axios.interceptors.request.use(
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
