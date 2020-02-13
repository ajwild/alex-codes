import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'

class DefaultLayout extends React.PureComponent {
  public render() {
    return (
      <React.Fragment>
        <Helmet title="alex.codes" />
        <Header />
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default DefaultLayout
