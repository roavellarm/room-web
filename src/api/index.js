import axios from 'axios'
import { retrieveData } from '../helpers/storage'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: { ...retrieveData() },
    }
  },

  error => {
    if (error.response.status === 401) {
      localStorage.clear()
      // window.location = '/'
    } else {
      return Promise.reject(error)
    }
  },
)

export default axios
