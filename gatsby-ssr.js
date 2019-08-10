import React from 'react'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }, pluginOptions) => {
  return <Layout {...props}>{element}</Layout>
}
