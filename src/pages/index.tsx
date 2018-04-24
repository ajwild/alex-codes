import * as React from 'react'
import Link from 'gatsby-link'

import Timeline from '../components/Timeline'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }

    allTimelineYaml: {
      edges: [
        {
          node: {
            date: string
            type: string
            title: string
            subtitle: string
            description: string
          }
        }
      ]
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }

  public render() {
    return (
      <div>
        <Timeline elements={this.props.data.allTimelineYaml.edges} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }

    allTimelineYaml {
      edges {
        node {
          date
          type
          title
          subtitle
          description
        }
      }
    }
  }
`
