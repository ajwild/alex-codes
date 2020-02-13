import * as React from 'react'
import styled from 'styled-components'

interface SegmentProps {
  background?: string
  children: JSX.Element | JSX.Element[]
  name?: string
  width?: string
}

const Wrapper = styled('div')`
  overflow: hidden;
  background: ${(props: SegmentProps): string =>
    props.background || 'transparent'};
`

const Container = styled('div')`
  position: relative;
  z-index: 0;
  max-width: ${(props: SegmentProps): string => props.width || '60rem'};
  margin: 0 auto;
  padding: 3rem 1.5rem;
`

function SegmentComponent({
  background,
  children,
  name,
  width,
}: SegmentProps): React.ReactElement {
  return (
    <Wrapper background={background} name={name}>
      <Container width={width}>{children}</Container>
    </Wrapper>
  )
}
SegmentComponent.displayName = 'Segment'

export default SegmentComponent
