const key = 'database'

export function retrieveData() {
  return JSON.parse(localStorage.getItem(key))
}

export function saveObject(object) {
  return Object.keys(object).map(i => localStorage.setItem(i, object[i]))
}

export function saveData(data) {
  if (data['access-token']) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
