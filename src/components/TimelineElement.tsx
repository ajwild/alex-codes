import * as React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import {
  Code as CodeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
} from '@material-ui/icons'

interface TimelineComponentProps {
  element: {
    date: string
    type: string
    title: string
    subtitle: string
    description: string
  }
}

const educationIconProps = {
  icon: <SchoolIcon />,
  iconStyle: {
    background: 'orange',
    color: '#fff',
  },
}

const projectIconProps = {
  icon: <CodeIcon />,
  iconStyle: {
    background: 'green',
    color: '#fff',
  },
}

const workIconProps = {
  icon: <WorkIcon />,
  iconStyle: {
    background: 'blue',
    color: '#fff',
  },
}

export default ({
  element: { date, type, title, subtitle, description },
}: TimelineComponentProps) => {
  const iconProps = {}

  switch (type) {
    case 'education': {
      Object.assign(iconProps, educationIconProps)
      break
    }
    case 'project': {
      Object.assign(iconProps, projectIconProps)
      break
    }
    case 'work': {
      Object.assign(iconProps, workIconProps)
      break
    }
  }

  return (
    <VerticalTimelineElement date={date} {...iconProps}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      {subtitle && (
        <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      )}
      <p>{description}</p>
    </VerticalTimelineElement>
  )
}
