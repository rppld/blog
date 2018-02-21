import React, { Component } from "react"
import PropTypes from "prop-types"
import Loader from "../components/Loader"
import Helmet from "react-helmet"
import { Footer } from "../components/Menubar"
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
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
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
          title={`${data.site.siteMetadata.author}, ${
            data.site.siteMetadata.title
          }`}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            { name: "author", content: data.site.siteMetadata.author }
          ]}
        >
          <html lang="en" />
          <link rel="shortcut icon" type="image/png" href="/favicon-128.png" />
        </Helmet>
        <Loader show={this.state.loading} />
        {children()}
        <Footer email={data.site.siteMetadata.email} />
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
  query LayoutQuery {
    site {
      siteMetadata {
        author
        title
        email
        description
      }
    }
  }
`
