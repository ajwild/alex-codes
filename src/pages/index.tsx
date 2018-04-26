import * as React from 'react'

import About from '../components/About'
import Contact from '../components/Contact'
import Timeline from '../components/Timeline'

interface IndexPageProps {
  data: {
    allTimelineYaml: {
      edges: [
        {
          node: {
            date: string
            description: string
            subtitle?: string
            tags?: string[]
            title: string
            type?: string
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
      <React.Fragment>
        <About />
        <Timeline elements={this.props.data.allTimelineYaml.edges} />
        <Contact />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allTimelineYaml {
      edges {
        node {
          date
          description
          subtitle
          tags
          title
          type
        }
      }
    }
  }
`
