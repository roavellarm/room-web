const key = 'database'

export function saveData(data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function retrieveData() {
  const data = localStorage.getItem(key)
  return JSON.parse(data)
}
