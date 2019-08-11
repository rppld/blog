import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import { BaseStyles } from '../theme'
import PageTransition from './PageTransition'

function Layout(props) {
  function getRootProps() {
    return {
      className: 'siteRoot',
      id: 'main',
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              author
              email
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              { name: 'author', content: data.site.siteMetadata.author },
            ]}
          >
            <html lang="en" />
            <link
              rel="shortcut icon"
              type="image/png"
              href="/favicon-128.png"
            />
          </Helmet>
          <BaseStyles />
          <Header author={data.site.siteMetadata.author} />

          {props.pageTransitions ? (
            <PageTransition {...props} {...getRootProps()}>
              {props.children}
            </PageTransition>
          ) : (
            <main {...getRootProps()}>{props.children}</main>
          )}

          <Footer email={data.site.siteMetadata.email} />
        </>
      )}
    />
  )
}

export default Layout
