import React, { Component } from "react"
import PropTypes from "prop-types"
import Outro from "../components/Outro"
import Loader from "../components/Loader"
import Helmet from "react-helmet"
import { Header, Footer } from "../components/Menubar"
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
          author={data.site.siteMetadata.author}
          email={data.site.siteMetadata.email}
        />
        <Loader show={this.state.loading} />
        <div>{children()}</div>
        <Outro />
        <Footer
          author={data.site.siteMetadata.author}
          email={data.site.siteMetadata.email}
        />
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
        title
        email
        author
        description
      }
    }
  }
`
