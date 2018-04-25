import * as React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div style={{ background: 'rebeccapurple' }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '2rem 1rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)
