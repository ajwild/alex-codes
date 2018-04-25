import * as React from 'react'
import { Paper, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'

const styles = (theme: any) => ({
  root: theme.mixins.gutters({
    paddingBottom: 16,
    paddingTop: 16,
  }),
})

interface AboutProps {
  classes: {
    root: string
  }
}

const About = ({ classes }: AboutProps) => (
  <Paper className={classes.root}>
    <Typography variant="display4">Hello,</Typography>
    <Typography variant="display3">how do you do?</Typography>
    <Typography variant="subheading">
      My name is Alex Wild, I live in Vancouver, and I am a full stack
      JavaScript developer.
    </Typography>
  </Paper>
)

export default withStyles(styles)(About)
