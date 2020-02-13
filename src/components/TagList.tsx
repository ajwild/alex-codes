import * as React from 'react'
import styled from 'styled-components'

import Tag from './Tag'

interface TagListProps {
  tags: string[]
}

const TagList = styled('ul')`
  margin-left: 0;
  list-style-type: none;

  &:after {
    content: '.';
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
`

function TagListComponent({ tags }: TagListProps): React.ReactElement {
  return (
    <TagList>
      {tags.map(tag => (
        <Tag key={tag} text={tag} />
      ))}
    </TagList>
  )
}
TagListComponent.displayName = 'TagList'

export default TagListComponent
