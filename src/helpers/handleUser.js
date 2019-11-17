export function getUser() {
  const user = localStorage.getItem('currentUser')
  return JSON.parse(user)
}

export function saveUser(data) {
  localStorage.setItem('currentUser', JSON.stringify(data))
}
