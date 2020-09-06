import { css } from '@emotion/core'
import React from 'react'

type Props = {
  target: string
}

const test = css({
  color: `red`,
})

export const Component: React.FC<Props> = (props) => (
  <h1 className="text-5xl text-center text-accent-1">
    Hello, <span className="text-teal-600">{props.target}</span>
    Hello, <span css={css({ fontSize: `100px` })}>{props.target}</span>
    Hello, <span css={test}>{props.target}</span>
  </h1>
)

type ContainerProps = {
  target?: string
}

const Container: React.FC<ContainerProps> = (props) => {
  const target = props.target || 'world'

  return <Component target={target} />
}

Container.displayName = 'Greeting'

export default Container
