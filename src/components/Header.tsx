import * as React from 'react'
import styled from 'styled-components'
import {
  MIN_MOBILE_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

import Segment from './Segment'

import portraitUrl from '../assets/portrait.svg'

const subtitleStyle = `
  margin-bottom: 0;
  font-weight: 300;
`

const RoleSubtitle = styled('h2')`
  ${subtitleStyle}
`

const LocationSubtitle = styled('h2')`
  ${subtitleStyle}
  font-size: 1.45rem;

  ${MIN_MOBILE_MEDIA_QUERY} {
    font-size: 1.93rem;
  }

  ${MIN_TABLET_MEDIA_QUERY} {
    font-size: 2.9rem;
  }
`

const Portrait = styled('img').attrs({ src: portraitUrl })`
  display: none;

  @media (min-width: 380px) {
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

  ${MIN_MOBILE_MEDIA_QUERY} {
    right: -6rem;
  }

  ${MIN_TABLET_MEDIA_QUERY} {
    right: -4.5rem;
  }
`

function HeaderComponent(): React.ReactElement {
  return (
    <Segment background="#fff">
      <h1>Alex Wild</h1>
      <RoleSubtitle>Full Stack JS Developer</RoleSubtitle>
      <LocationSubtitle>Zürich, Switzerland</LocationSubtitle>
      <Portrait />
    </Segment>
  )
}
HeaderComponent.displayName = 'Header'

export default HeaderComponent
