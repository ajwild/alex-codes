import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import {
  FaGraduationCap as EducationIcon,
  FaBuildingO as WorkIcon,
  FaCode as ProjectIcon,
} from 'react-icons/lib/fa'

import TagList from './TagList'

interface TimelineComponentProps {
  element: {
    date: string
    description: string
    subtitle?: string
    tags?: string[]
    title: string
    type?: string
  }
}

const TimelineElement = styled('div')`
  position: relative;
  margin-bottom: 1.5rem;
  margin-left: 1.5rem;
  padding: 1.5rem;
  background: #fff;

  &:before {
    content: '';
    position: absolute;
    top: 1.5rem;
    left: -0.75rem;
    right: auto;
    height: 0;
    width: 0;
    border-top: 0.75rem solid transparent;
    border-bottom: 0.75rem solid transparent;
    border-left: none;
    border-right: 0.75rem solid #fff;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  ${MIN_TABLET_MEDIA_QUERY} {
    width: 45%;
    width: calc(50% - 3rem);

    .icon-wrapper {
      position: absolute;
      top: 0.75rem;
      height: 3rem;
      width: 3rem;
    }

    h6 {
      position: absolute;
      top: 1.5rem;
      width: 100%;
    }

    :nth-of-type(odd) {
      margin-left: 0;

      &:before {
        left: auto;
        right: -0.75rem;
        border-left: 0.75rem solid #fff;
        border-right: none;
      }

      .icon-wrapper {
        left: 106%;
        left: calc(100% + 1.5rem);
      }

      h6 {
        left: 130%;
        left: calc(100% + 6rem);
      }
    }

    :nth-of-type(even) {
      margin-left: 55%;
      margin-left: calc(50% + 3rem);

      .icon-wrapper {
        right: 106%;
        right: calc(100% + 1.5rem);
      }

      h6 {
        right: 130%;
        right: calc(100% + 6rem);
        text-align: right;
      }
    }
  }
`

const TimelineIconWrapper = styled('div').attrs({ className: 'icon-wrapper' })`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: #666;

  ${MIN_TABLET_MEDIA_QUERY} {
    padding: 0.75rem;
    background-color: #fff;
    border-radius: 50%;
  }
`

const TimelineTitle = styled('h4')`
  margin-right: 3rem;
`

const TimelineSubtitle = styled('h5')`
  margin-bottom: 0;

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-bottom: 1.5rem;
  }
`

const TimelineDate = styled('h6')`
  ${MIN_TABLET_MEDIA_QUERY} {
    color: #333;
  }
`

const markdownLinkRenderer = ({ children, href }: any) => {
  const targetBlankFlag = '{target_blank}'
  if (href.indexOf(targetBlankFlag) === href.length - targetBlankFlag.length) {
    return (
      <OutboundLink href={href.replace(targetBlankFlag, '')} target="_blank">
        {children}
      </OutboundLink>
    )
  }

  return <a href={href}>{children}</a>
}

const TimelineDescription = styled(ReactMarkdown).attrs({
  renderers: {
    link: markdownLinkRenderer,
  },
})`
  margin-bottom: 1.5rem;
`

export default ({
  element: { date, description, subtitle, tags, title, type },
}: TimelineComponentProps) => {
  let TimelineIcon

  switch (type) {
    case 'education': {
      TimelineIcon = EducationIcon
      break
    }
    case 'project': {
      TimelineIcon = ProjectIcon
      break
    }
    case 'work': {
      TimelineIcon = WorkIcon
      break
    }
  }

  return (
    <TimelineElement>
      {TimelineIcon && (
        <TimelineIconWrapper>
          <TimelineIcon />
        </TimelineIconWrapper>
      )}
      <TimelineTitle>{title}</TimelineTitle>
      {subtitle && <TimelineSubtitle>{subtitle}</TimelineSubtitle>}
      <TimelineDate>{date}</TimelineDate>
      <TimelineDescription source={description} />
      {tags && tags.length > 0 && <TagList tags={tags} />}
    </TimelineElement>
  )
}
