import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import 'normalize.css'
import './site.css'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <React.Fragment>
        <Helmet title="alex.codes" />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '2rem 1rem',
          }}
        >
          {this.props.children()}
        </div>
      </React.Fragment>
    )
  }
}

export default DefaultLayout
