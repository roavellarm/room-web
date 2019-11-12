import axios from './'

export const sendFeedback = data => axios.post(`/feedback`, data)

// This:
// export function update(id, data) {
//   return axios.put(`/feedback/${id}`, data)
// }
// is the same as:
// export const update = (id, data) => axios.put(`/feedback/${id}`, data)
