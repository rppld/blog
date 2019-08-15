import React from 'react'
import styled from '@emotion/styled'
import { device } from '../theme'
import { easeInOutCubic } from '../utils'
import { useViewportScroll, useTransform, motion } from 'framer-motion'

export function GridItem({ children, ...props }) {
  const [viewportHeight, setViewportHeight] = React.useState(0)
  const [elementTop, setElementTop] = React.useState(0)
  const ref = React.useRef(null)
  const { scrollY } = useViewportScroll()

  const scale = useTransform(
    scrollY,
    [elementTop - viewportHeight * 2, elementTop],
    [0.9, 1],
    {
      ease: easeInOutCubic,
    }
  )

  React.useLayoutEffect(() => {
    const element = ref.current
    setViewportHeight(element.offsetHeight)
    setElementTop(element.offsetTop)
  }, [ref])

  return (
    <ItemContainer {...props}>
      <motion.div ref={ref} style={{ width: '100%', scale }}>
        {children}
      </motion.div>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media ${device.tablet} {
    grid-column: ${props =>
      props.size === 'small'
        ? 'span 2'
        : props.size === 'medium'
        ? 'span 3'
        : 'span 5'};
  }

  a {
    background-color: transparent;
    border: 0;
    text-decoration: none;
  }
`

export const Grid = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
  }

  @media ${device.laptop} {
    grid-gap: 4rem;
  }
`
