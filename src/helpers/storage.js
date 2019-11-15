const key = 'database'

export function retrieveData() {
  const data = localStorage.getItem(key)
  return JSON.parse(data)
}

// export function saveData(data) {
//   return Object.keys(data).map(i => localStorage.setItem(i, data[i]))
// }
export function saveData(data) {
  localStorage.setItem(key, JSON.stringify(data))
}
