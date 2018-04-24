import * as React from 'react'
import {
  Button,
  Grid,
  Icon,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Send as SendIcon } from '@material-ui/icons'

const styles = (theme: any) => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  root: theme.mixins.gutters({
    paddingBottom: 16,
    paddingTop: 16,
  }),
  submitButton: {
    marginTop: theme.spacing.unit * 3,
  },
})

interface ContactFormProps {
  classes: {
    rightIcon: string
    root: string
    submitButton: string
  }
}

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
  showFormError?: boolean
  showFormSuccess?: boolean
}

interface ChangeEventProps {
  target: {
    name: any
    value: any
  }
}

enum SnackbarType {
  Error = 'ERROR',
  Success = 'SUCCESS',
}

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props)

    this.state = { ...this.getDefaultState() }
  }

  public render() {
    const { classes } = this.props
    const { formFields, showFormError, showFormSuccess } = this.state

    return (
      <Paper className={classes.root}>
        <Typography variant="headline">Contact</Typography>
        <form
          name="contact"
          data-netlify={true}
          data-netlify-honeypot="honeypot"
          onSubmit={this.handleSubmit}
        >
          <div className="hidden">
            <TextField
              fullWidth={true}
              id="contact-honeypot"
              label="Do not complete this field"
              name="honeypot"
              onChange={this.handleChange}
              type="text"
              value={formFields.honeypot}
            />
          </div>
          <Grid container={true} spacing={24}>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                fullWidth={true}
                id="contact-name"
                label="Name"
                name="name"
                onChange={this.handleChange}
                required={true}
                type="text"
                value={formFields.name}
              />
            </Grid>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                fullWidth={true}
                id="contact-email"
                label="Email"
                name="email"
                onChange={this.handleChange}
                required={true}
                type="email"
                value={formFields.email}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                fullWidth={true}
                id="contact-subject"
                label="Subject"
                name="subject"
                onChange={this.handleChange}
                required={true}
                type="text"
                value={formFields.subject}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                fullWidth={true}
                id="contact-message"
                label="Message"
                multiline={true}
                name="message"
                onChange={this.handleChange}
                required={true}
                rows={4}
                type="text"
                value={formFields.message}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <Button
                color="primary"
                disabled={this.state.sendingForm}
                type="submit"
                variant="raised"
              >
                Send
                <SendIcon className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={showFormSuccess}
          autoHideDuration={5000}
          onClose={this.handleClose(SnackbarType.Success)}
          message={<span>Message sent. Thanks!</span>}
        />
        <Snackbar
          open={showFormError}
          autoHideDuration={5000}
          onClose={this.handleClose(SnackbarType.Error)}
          message={<span>Error sending message. Please try again.</span>}
        />
      </Paper>
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
      showFormError: false,
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

  private handleClose = (snackbarType: SnackbarType) => {
    return (event: any, reason: string) => {
      if (reason === 'clickaway') {
        return
      }

      const stateUpdate: ContactFormState = {}

      switch (snackbarType) {
        case 'SUCCESS': {
          stateUpdate.showFormSuccess = false
          break
        }
        case 'ERROR': {
          stateUpdate.showFormError = false
          break
        }
        default: {
          return
        }
      }

      this.setState(stateUpdate)
    }
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const stateUpdateLoading: ContactFormState = { sendingForm: true }
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
          showFormError: true,
        }

        this.setState(stateUpdateComplete)
      })
  }
}

export default withStyles(styles)(ContactForm)
