import * as React from 'react'
import styled from 'styled-components'

interface TagProps {
  text: string
}

const Tag = styled('li')`
  display: inline-block;
  position: relative;
  float: left;
  margin: 0.125rem 0.75rem 0.125rem 0.625rem;
  padding: 0.25rem 0.75rem 0.25rem 0.5rem;
  background-color: #eee;
  font-size: 0.75rem;
  line-height: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.625rem;
    right: auto;
    height: 0;
    width: 0;
    border-top: 0.625rem solid transparent;
    border-bottom: 0.625rem solid transparent;
    border-left: none;
    border-right: 0.625rem solid #eee;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: -0.25rem;
    right: auto;
    height: 0.25rem;
    width: 0.25rem;
    background-color: #fff;
    border-radius: 50%;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export default ({ text }: TagProps) => <Tag>{text}</Tag>
