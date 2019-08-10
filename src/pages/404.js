import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import { Heading } from '../components/Heading'

function NotFoundPage(props) {
  return (
    <Layout location={props.location}>
      <Intro>
        <Heading>
          Eww, you just hit a route that doesn&#39;t exist{' '}
          <span role="img" aria-label="Emoji">
            🤔
          </span>{' '}
          But worry not, this <Link to="/">link</Link> will take you back to the
          homepage and you can start over.
        </Heading>
      </Intro>
    </Layout>
  )
}

export default NotFoundPage
