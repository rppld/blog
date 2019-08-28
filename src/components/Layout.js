import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import { BaseStyles } from '../theme'
import PageTransition from './PageTransition'

const Container = styled.div`
  position: relative;
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
        <Container>
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

          {!pageTransitions ? (
            <main {...getRootProps()}>{children}</main>
          ) : (
            <PageTransition {...props} {...getRootProps()}>
              {children}
            </PageTransition>
          )}

          <Footer email={data.site.siteMetadata.email} />
        </Container>
      )}
    />
  )
}

export default Layout
