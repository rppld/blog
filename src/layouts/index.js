import React, { Component } from "react"
import PropTypes from "prop-types"
import Loader from "../components/Loader"
import Helmet from "react-helmet"
import Header from "../components/Header"
// import Footer from "../components/Footer"
import favicon from "../favicon.png"
import "../style.css"

class TemplateWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentWillUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState((prevState, props) => ({
        loading: true
      }))

      setTimeout(() => {
        this.setState((prevState, props) => ({
          loading: false
        }))
      }, 1000)
    }
  }

  render() {
    const { children, data } = this.props

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            { name: "author", content: data.site.siteMetadata.author }
          ]}
        >
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Header
          siteName={data.site.siteMetadata.name}
          email={data.site.siteMetadata.email}
        />
        <Loader show={this.state.loading} />
        <div>{children()}</div>
        {/* <Footer author={data.site.siteMetadata.author} /> */}
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        name
        title
        email
        author
        description
      }
    }
  }
`
