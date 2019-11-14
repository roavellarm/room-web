import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        'access-token': localStorage.getItem('access-token'),
        client: localStorage.getItem('client'),
        uid: localStorage.getItem('uid'),
      },
    }
  },

  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('access-token')
      localStorage.removeItem('client')
      localStorage.removeItem('uid')
      // window.location = '/'
    } else {
      return Promise.reject(error)
    }
  },
)

export default axios
