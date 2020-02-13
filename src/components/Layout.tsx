import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'

interface LayoutComponentProps {
  children: React.ReactElement | React.ReactElement[]
}

function LayoutComponent({
  children,
}: LayoutComponentProps): React.ReactElement {
  return (
    <React.Fragment>
      <Helmet title="alex.codes" />
      <Header />
      {children}
    </React.Fragment>
  )
}
LayoutComponent.displayName = 'Layout'

export default LayoutComponent
