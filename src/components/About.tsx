import * as React from 'react'
import styled from 'styled-components'

import Segment from './Segment'

export default () => (
  <Segment background="#eee">
    <h3>Hello, how do you do?</h3>
    <p>
      My name is Alex Wild and I am a full stack JavaScript developer living in
      Vancouver, BC. I enjoy working as a full stack developer, from
      provisioning servers all the way up to getting the user interface
      pixel-perfect, as the variety of work keeps me motivated and there is
      always something new to learn. For front-end code I have recently been
      using React, and I have spent a number of years working with AngularJS.
      For back-end code I often use Node.js with the Express or Serverless
      frameworks.
    </p>
    <p>
      If you'd like to get in touch you can connect with me on{' '}
      <a href="https://www.linkedin.com/in/alexjwild/" target="_blank">
        LinkedIn
      </a>, or send me a message using the contact form below. You can also see
      what I've been up to on{' '}
      <a href="https://github.com/ajwild/" target="_blank">
        GitHub
      </a>.
    </p>
  </Segment>
)
