import axios from './'

export const getUserOrgs = () => axios.get(`/org`)
