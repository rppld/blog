import React from 'react'
import Layout from './src/components/Layout'
import { siteMetadata } from './gatsby-config'

const { pageTransitions = true, pageTransitionDuration = 350 } = siteMetadata

export const wrapPageElement = ({ element, props }, pluginOptions) => {
  return (
    <Layout
      {...props}
      pageTransitions={pageTransitions}
      pageTransitionDuration={pageTransitionDuration}
    >
      {element}
    </Layout>
  )
}

export const shouldUpdateScroll = (
  { routerProps: { location }, getSavedScrollPosition },
  pluginOptions
) => {
  if (location.action === 'PUSH') {
    window.setTimeout(
      () => window.scrollTo(0, 0),
      pageTransitions ? pageTransitionDuration : 0
    )
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      pageTransitions ? pageTransitionDuration : 0
    )
  }

  return false
}
