import React, { useState } from 'react'
import axios from 'axios'

export default () => {
  const [file, setFile] = useState([])

  const fileSelectedHandler = event => {
    return setFile(event.target.files[0])
  }

  const progressHandler = progressEvent => {
    console.log(
      'Upload Progress: ' +
        Math.round((progressEvent.loaded / progressEvent.total) * 100) +
        '%',
    )
  }

  const fileUploadHandler = () => {
    const url = 'Endpoint URL'
    const fd = new FormData()
    fd.append('imagetitle', file, file.name)
    axios.post(url, fd, { onUploadProgress: progressHandler }).then(res => {
      console.log(res)
    })
  }

  return (
    <>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </>
  )
}
