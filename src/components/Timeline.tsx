import * as React from 'react'
import styled from 'styled-components'
import { MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

import Segment from './Segment'
import TimelineElement from './TimelineElement'

interface TimelineComponentProps {
  elements: [
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

export default ({ elements: timelineActivities }: TimelineComponentProps) => {
  const Timeline = styled('div')`
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 1.5rem;
      z-index: -1;
      width: 0.25rem;
      margin-left: -0.125rem;
      background: #eee;

      ${MIN_TABLET_MEDIA_QUERY} {
        left: 50%;
      }
    }
  `

  return (
    <Segment background="#ddd">
      <Timeline>
        {timelineActivities.map(activity => {
          return (
            <TimelineElement
              element={activity.node}
              key={activity.node.title}
            />
          )
        })}
      </Timeline>
    </Segment>
  )
}
