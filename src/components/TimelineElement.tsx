import * as React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import WorkIcon from '@material-ui/icons/Work'

interface TimelineComponentProps {
  element: {
    date: string
    type: string
    title: string
    subtitle: string
    description: string
  }
}

export default ({
  element: { date, type, title, subtitle, description },
}: TimelineComponentProps) => {
  const workProps = {
    icon: <WorkIcon />,
    iconStyle: {
      background: 'rgb(33, 150, 243)',
      color: '#fff',
    },
  }

  return (
    <VerticalTimelineElement date={date} {...workProps}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  )
}
