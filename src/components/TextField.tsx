import * as React from 'react'
import styled from 'styled-components'

interface TextField {
  id?: string
  label?: string
  multiline?: boolean
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void
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
  background-color: #fff;
  border: none;
  box-shadow: none;
  outline: none;
  line-height: 1.5;
`

const Input = styled('input')`
  ${formFieldStyle}
`

const TextArea = styled('textarea')`
  ${formFieldStyle}
  display: block;
`

function TextFieldComponent({
  multiline,
  ...props
}: TextField): React.ReactElement {
  if (multiline) {
    return <TextArea {...props} />
  }

  return <Input {...props} />
}
TextFieldComponent.displayName = 'TextField'

export default TextFieldComponent
