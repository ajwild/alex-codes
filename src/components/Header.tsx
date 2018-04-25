import * as React from 'react'
import styled from 'styled-components'

import Segment from './Segment'

export default () => {
  const Subtitle = styled('h2')`
    margin-bottom: 0;
  `

  return (
    <Segment background="#fff">
      <h1>Alex Wild</h1>
      <Subtitle>Full Stack JS Developer</Subtitle>
      <Subtitle>Vancouver, BC, Canada</Subtitle>
    </Segment>
  )
}
