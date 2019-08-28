import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import { BaseStyles } from '../theme'
import PageTransition from './PageTransition'

const Content = styled.div`
  min-height: 100vh;
`

function Layout({ pageTransitions, children, ...props }) {
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
              tagline
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
          <Header
            author={data.site.siteMetadata.author}
            tagline={data.site.siteMetadata.tagline}
          />

          <Content>
            {pageTransitions ? (
              <PageTransition {...props} {...getRootProps()}>
                {children}
              </PageTransition>
            ) : (
              <main {...getRootProps()}>{children}</main>
            )}
          </Content>

          <Footer email={data.site.siteMetadata.email} />
        </>
      )}
    />
  )
}

export default Layout
