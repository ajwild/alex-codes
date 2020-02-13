import * as React from 'react'
import styled from 'styled-components'
import { MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { MdSend as SendIcon } from 'react-icons/md'

import Segment from './Segment'
import TextField from './TextField'

interface ContactFormState {
  formFields?: {
    email: string
    'form-name': string
    honeypot: string
    message: string
    name: string
    subject: string
    [prop: string]: string
  }
  sendingForm?: boolean
  showFormContentError?: boolean
  showFormDeliveryError?: boolean
  showFormSuccess?: boolean
}

const InvisibleField = styled(TextField)`
  display: block;
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
`

const NameField = styled(TextField)`
  ${MIN_TABLET_MEDIA_QUERY} {
    width: 48%;
    width: calc(50% - 0.75rem);
    margin-right: 2%;
    margin-right: calc(0.75rem);
  }
`

const EmailField = styled(TextField)`
  ${MIN_TABLET_MEDIA_QUERY} {
    width: 48%;
    width: calc(50% - 0.75rem);
    margin-left: 2%;
    margin-left: calc(0.75rem);
  }
`

const SubmitButton = styled('button')`
  display: flex;
  width: auto;
  margin: 0 auto;
  padding: 0.75rem 3rem;
  background: #ddd;
  border: none;
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    background-color: #ccc;
  }
`

const SubmitIcon = styled(SendIcon)`
  margin-left: 0.75rem;
  color: #666;
`

const FormFeedback = styled('div')`
  text-align: center;
`

function encode({ formFields }: ContactFormState): string {
  return Object.keys(formFields)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(formFields[key])}`
    )
    .join('&')
}

function getDefaultState(): ContactFormState {
  return {
    formFields: {
      email: '',
      'form-name': 'contact',
      honeypot: '',
      message: '',
      name: '',
      subject: '',
    },
    sendingForm: false,
    showFormContentError: false,
    showFormDeliveryError: false,
    showFormSuccess: false,
  }
}

function setupHandleChange(
  state: ContactFormState,
  setState: Function
): (event: React.ChangeEvent<HTMLElement>) => void {
  return function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const { name, value } = event.target

    const updatedState: ContactFormState = {
      ...state,
      formFields: {
        ...state.formFields,
        [name]: value,
      },
    }

    setState(updatedState)
  }
}

function setupHandleSubmit(
  state: ContactFormState,
  setState: Function
): (event: React.FormEvent<HTMLFormElement>) => void {
  return function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const { email, message, name, subject } = state.formFields
    if (!email || !message || !name || !subject) {
      const stateUpdateContentError: ContactFormState = {
        ...state,
        formFields: {
          ...state.formFields,
        },
        showFormContentError: true,
      }
      setState(stateUpdateContentError)
      return
    }

    const stateUpdateLoading: ContactFormState = {
      ...state,
      formFields: {
        ...state.formFields,
      },
      sendingForm: true,
      showFormContentError: false,
      showFormDeliveryError: false,
      showFormSuccess: false,
    }
    setState(stateUpdateLoading)

    fetch('/', {
      body: encode(state),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    })
      .then(() => {
        const stateUpdateComplete: ContactFormState = {
          ...getDefaultState(),
          showFormSuccess: true,
        }

        setState(stateUpdateComplete)
      })
      .catch(() => {
        const stateUpdateComplete: ContactFormState = {
          ...state,
          formFields: {
            ...state.formFields,
          },
          sendingForm: false,
          showFormDeliveryError: true,
        }

        setState(stateUpdateComplete)
      })
  }
}

function ContactComponent(): React.ReactElement {
  const [state, setState] = React.useState(getDefaultState())

  const {
    formFields,
    sendingForm,
    showFormContentError,
    showFormDeliveryError,
    showFormSuccess,
  } = state

  return (
    <Segment background="#eee" name="contact">
      <h3>Want to get in touch?</h3>
      <form
        name="contact-form"
        data-netlify={true}
        data-netlify-honeypot="honeypot"
        onSubmit={setupHandleSubmit(state, setState)}
      >
        <InvisibleField
          id="contact-honeypot"
          placeholder="Do not complete this field"
          name="honeypot"
          onChange={setupHandleChange(state, setState)}
          type="text"
          value={formFields.honeypot}
        />
        <NameField
          id="contact-name"
          placeholder="Name"
          name="name"
          onChange={setupHandleChange(state, setState)}
          required={true}
          type="text"
          value={formFields.name}
        />
        <EmailField
          id="contact-email"
          placeholder="Email"
          name="email"
          onChange={setupHandleChange(state, setState)}
          required={true}
          type="email"
          value={formFields.email}
        />
        <TextField
          id="contact-subject"
          placeholder="Subject"
          name="subject"
          onChange={setupHandleChange(state, setState)}
          required={true}
          type="text"
          value={formFields.subject}
        />
        <TextField
          id="contact-message"
          placeholder="Message"
          multiline={true}
          name="message"
          onChange={setupHandleChange(state, setState)}
          required={true}
          rows={5}
          type="text"
          value={formFields.message}
        />
        <SubmitButton disabled={sendingForm} type="submit">
          Send
          <SubmitIcon />
        </SubmitButton>
      </form>
      <FormFeedback>
        {showFormSuccess && <span>Message sent. Thanks!</span>}
        {showFormDeliveryError && (
          <span>Error sending message. Please try again.</span>
        )}
        {showFormContentError && <span>Please complete all fields.</span>}
        {!showFormSuccess &&
          !showFormContentError &&
          !showFormDeliveryError && <span>&nbsp;</span>}
      </FormFeedback>
    </Segment>
  )
}
ContactComponent.displayName = 'Contact'

export default ContactComponent
