import * as React from 'react'
import styled from 'styled-components'

import Segment from './Segment'

import portraitUrl from '../assets/portrait.svg'

export default () => {
  const Subtitle = styled('h2')`
    margin-bottom: 0;
  `

  const Portrait = styled('img').attrs({ src: portraitUrl })`
    display: none;

    @media (min-width: 420px) {
      display: block;
      position: absolute;
      bottom: 0;
      right: -4.5rem;
      z-index: -1;
      height: 90%;
      height: calc(100% - 1.5rem);
      width: auto;
      margin: 0;
    }
  `

  return (
    <Segment background="#fff">
      <h1>Alex Wild</h1>
      <Subtitle>Full Stack JS Developer</Subtitle>
      <Subtitle>Vancouver, BC, Canada</Subtitle>
      <Portrait />
    </Segment>
  )
}
