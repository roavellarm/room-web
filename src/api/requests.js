import axios from 'axios'

// Here goes all the Room-API endpoints
const baseUrl = 'http://api.github.com'

export const getAll = () => axios.get(`${baseUrl}/users`)
