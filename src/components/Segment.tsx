import * as React from 'react'
import styled from 'styled-components'

interface SegmentProps {
  background?: string
  children: JSX.Element | JSX.Element[]
  name?: string
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
  padding: 3rem 1.5rem;
`

export default ({ background, children, name }: SegmentProps) => (
  <Wrapper background={background} name={name}>
    <Container>{children}</Container>
  </Wrapper>
)
