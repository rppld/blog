import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Loader from '../components/Loader'
import Helmet from 'react-helmet'
import { Footer } from '../components/Menubar'
import { GlobalStyles } from '../constants'

export default class TemplateWrapper extends Component {
  state = {
    loading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ loading: true }, () =>
        setTimeout(() => {
          this.setState({ loading: false })
        }, 1000)
      )
    }
  }

  render() {
    const { children } = this.props

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
            <GlobalStyles />
            <Loader show={this.state.loading} />
            {children}
            <Footer email={data.site.siteMetadata.email} />
          </>
        )}
      />
    )
  }
}
