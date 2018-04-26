import * as React from 'react'
import styled from 'styled-components'

interface TextField {
  id?: string
  label?: string
  multiline?: boolean
  name?: string
  onChange?: any
  placeholder?: string
  required?: boolean
  rows?: number
  type?: string
  value?: string
}

const formFieldStyle = `
  display: inline-block;
  width: 100%;
  padding: 0.75rem;
  border: none;
  line-height: 1.5;
`

const Input = styled('input')`
  ${formFieldStyle};
`

const TextArea = styled('textarea')`
  ${formFieldStyle} display: block;
`

export default ({ multiline, ...props }: TextField) => {
  if (multiline) {
    return <TextArea {...props} />
  }

  return <Input {...props} />
}
