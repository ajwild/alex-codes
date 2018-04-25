import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import './site.css'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>alex.codes</title>
          <link rel="stylesheet" href="//basehold.it/24" />
        </Helmet>
        <Header />
        {this.props.children()}
      </React.Fragment>
    )
  }
}

export default DefaultLayout
