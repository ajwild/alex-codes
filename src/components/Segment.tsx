import * as React from 'react'
import styled from 'styled-components'

interface Segment {
  children: JSX.Element | JSX.Element[]
  background?: string
}

export default ({ children, background }: Segment) => {
  const Wrapper = styled('div')`
    background: ${background || 'transparent'};
  `

  const Container = styled('div')`
    position: relative;
    z-index: 0;
    max-width: 60rem;
    margin: 0 auto;
    padding: 1.5rem;
  `

  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}
