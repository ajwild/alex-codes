import * as React from 'react'
import styled from 'styled-components'
import { MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { MdSend as SendIcon } from 'react-icons/lib/md'

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

interface ChangeEventProps {
  target: {
    name: any
    value: any
  }
}

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
`

const SubmitIcon = styled(SendIcon)`
  margin-left: 0.75rem;
  color: #666;
`

const FormFeedback = styled('div')`
  text-align: center;
`

export default class ContactForm extends React.Component<
  any,
  ContactFormState
> {
  constructor(props: any) {
    super(props)

    this.state = { ...this.getDefaultState() }
  }

  public render() {
    const {
      formFields,
      showFormContentError,
      showFormDeliveryError,
      showFormSuccess,
    } = this.state

    return (
      <Segment background="#eee">
        <h3>Want to get in touch?</h3>
        <form
          name="contact"
          data-netlify={true}
          data-netlify-honeypot="honeypot"
          onSubmit={this.handleSubmit}
        >
          <div className="hidden">
            <TextField
              id="contact-honeypot"
              placeholder="Do not complete this field"
              name="honeypot"
              onChange={this.handleChange}
              type="text"
              value={formFields.honeypot}
            />
          </div>
          <NameField
            id="contact-name"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            required={true}
            type="text"
            value={formFields.name}
          />
          <EmailField
            id="contact-email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            required={true}
            type="email"
            value={formFields.email}
          />
          <TextField
            id="contact-subject"
            placeholder="Subject"
            name="subject"
            onChange={this.handleChange}
            required={true}
            type="text"
            value={formFields.subject}
          />
          <TextField
            id="contact-message"
            placeholder="Message"
            multiline={true}
            name="message"
            onChange={this.handleChange}
            required={true}
            rows={5}
            type="text"
            value={formFields.message}
          />
          <SubmitButton disabled={this.state.sendingForm} type="submit">
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

  private encode = ({ formFields }: ContactFormState): string => {
    return Object.keys(formFields)
      .map(
        key =>
          `${encodeURIComponent(key)}=${encodeURIComponent(formFields[key])}`
      )
      .join('&')
  }

  private getDefaultState(): ContactFormState {
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

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    const stateUpdate: ContactFormState = {
      formFields: {
        ...this.state.formFields,
        [name]: value,
      },
    }

    this.setState(stateUpdate)
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const { email, message, name, subject } = this.state.formFields
    if (!email || !message || !name || !subject) {
      const stateUpdateContentError: ContactFormState = {
        showFormContentError: true,
      }
      this.setState(stateUpdateContentError)
      return
    }

    const stateUpdateLoading: ContactFormState = {
      sendingForm: true,
      showFormContentError: false,
      showFormDeliveryError: false,
      showFormSuccess: false,
    }
    this.setState(stateUpdateLoading)

    fetch('/', {
      body: this.encode(this.state),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    })
      .then(() => {
        const stateUpdateComplete: ContactFormState = {
          ...this.getDefaultState(),
          showFormSuccess: true,
        }

        this.setState(stateUpdateComplete)
      })
      .catch(error => {
        const stateUpdateComplete: ContactFormState = {
          sendingForm: false,
          showFormDeliveryError: true,
        }

        this.setState(stateUpdateComplete)
      })
  }
}
