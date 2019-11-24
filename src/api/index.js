import axios from 'axios'
import { retrieveData } from '../helpers/storage'
// import { updateUserSessionTime } from './user'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const onUpdateUserSessionTime = () => {
  const currentUser = localStorage.getItem('currentUser')
  if (currentUser) {
    // const { id } = JSON.parse(currentUser)
    // updateUserSessionTime(id)
  }
}

axios.interceptors.request.use(
  config => {
    onUpdateUserSessionTime()
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
