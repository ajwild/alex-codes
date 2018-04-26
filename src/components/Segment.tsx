import * as React from 'react'
import styled from 'styled-components'

interface SegmentProps {
  children: JSX.Element | JSX.Element[]
  background?: string
}

const Wrapper = styled('div')`
  overflow: hidden;
  background: ${(props: SegmentProps) => props.background || 'transparent'};
`

const Container = styled('div')`
  position: relative;
  z-index: 0;
  max-width: 60rem;
  margin: 0 auto;
  padding: 1.5rem;
`

export default ({ children, background }: SegmentProps) => (
  <Wrapper background={background}>
    <Container>{children}</Container>
  </Wrapper>
)
