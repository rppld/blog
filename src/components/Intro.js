import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { device } from '../theme'

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props => props.bgColor};
  padding-left: var(--space-8);
  padding-right: var(--space-8);

  @media ${device.mobileLg} {
    padding-left: var(--space-16);
    padding-right: var(--space-16);
  }

  @media ${device.tablet} {
    padding-left: var(--space-32);
    padding-right: var(--space-32);
  }

  img {
    max-width: 50vmin;
  }

  h1 {
    margin: 0;
  }
`

function Intro(props) {
  return (
    <Container bgColor={props.bgColor}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.15 }}
      >
        {props.children}
      </motion.div>
    </Container>
  )
}

export default Intro
