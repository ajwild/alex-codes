import * as React from 'react'
import { graphql } from 'gatsby'

import About from '../components/About'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
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

function IndexPage(props: IndexPageProps): React.ReactElement {
  return (
    <Layout>
      <About />
      <Timeline elements={props.data.allTimelineYaml.edges} />
      <Contact />
    </Layout>
  )
}
IndexPage.displayName = 'Index'

export default IndexPage
