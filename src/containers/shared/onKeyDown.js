export default ({ keyCode, onSubmit }) => {
  if (keyCode === 13) return onSubmit()
}
