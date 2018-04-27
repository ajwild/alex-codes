import * as React from 'react'

import Segment from '../components/Segment'

const NotFoundPage = () => (
  <Segment background="#eee">
    <h3>Page not found</h3>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <p>
      Why not take a look at the <a href="/">home page</a> instead.
    </p>
  </Segment>
)

export default NotFoundPage
