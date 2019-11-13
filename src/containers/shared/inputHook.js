import { useState } from 'react'

export const useInput = initialValue => {
  const [fields, setFields] = useState(initialValue)

  return {
    fields,
    setFields,
    reset: () => setFields(''),
    bind: {
      fields,
      onChangeFields: e => {
        setFields({ ...fields, [e.target.name]: e.target.value })
      },
    },
  }
}
