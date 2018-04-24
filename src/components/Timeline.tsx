import * as React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'

import TimelineElement from './TimelineElement'

import 'react-vertical-timeline-component/style.min.css'
import './Timeline.css'

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

export default ({ elements: timelineActivities }: TimelineComponentProps) => (
  <VerticalTimeline>
    {timelineActivities.map(activity => {
      return (
        <TimelineElement element={activity.node} key={activity.node.title} />
      )
    })}
  </VerticalTimeline>
)
