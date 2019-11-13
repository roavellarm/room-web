export default (fields, setFields) => {
  return e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }
}
