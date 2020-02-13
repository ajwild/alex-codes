import * as React from 'react'
import { Link } from 'react-scroll'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Segment from './Segment'

function AboutComponent(): React.ReactElement {
  return (
    <Segment background="#eee">
      <h3>Hello, how do you do?</h3>
      <p>
        My name is Alex Wild and I am a full stack JavaScript developer living
        in Zürich, Switzerland. I enjoy working as a full stack developer, from
        provisioning servers all the way up to getting the user interface
        pixel-perfect, as the variety of work keeps me motivated. I am very keen
        to continue working with JavaScript, either building data-rich
        interactive web apps or APIs which solve complex problems, as the
        ecosystem is constantly evolving so there is always something new to
        learn.
      </p>
      <p>
        For front-end code I have recently been using Vue.js and React, and I
        have spent a number of years working with AngularJS. For back-end code I
        often use Node.js with the Express, Koa or Serverless frameworks. I have
        experience using Amazon Web Services and Google Cloud Platform, as well
        as working with Docker containers and provisioning bare-metal servers. I
        am also familiar with a variety of databases and file storage
        technologies.
      </p>
      <p>
        If you&apos;d like to get in touch you can connect with me on{' '}
        <OutboundLink
          href="https://www.linkedin.com/in/alexjwild/"
          target="_blank"
        >
          LinkedIn
        </OutboundLink>
        , or send me a message using the{' '}
        <Link to="contact" smooth={true}>
          contact form
        </Link>{' '}
        below. You can also see what I&apos;ve been up to on{' '}
        <OutboundLink href="https://github.com/ajwild/" target="_blank">
          GitHub
        </OutboundLink>
        .
      </p>
    </Segment>
  )
}
AboutComponent.displayName = 'About'

export default AboutComponent
