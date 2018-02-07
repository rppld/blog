import React, { Component } from "react"
import Observer from "@researchgate/react-intersection-observer"
import styled from "styled-components"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../style.css"

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
`

class TemplateWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showHeader: true
    }
  }

  handleChange = event => {
    this.setState(prevState => ({
      showHeader: event.isIntersecting ? false : true
    }))
  }

  render() {
    const { children, data } = this.props

    return (
      <Wrapper>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            { name: "author", content: data.site.siteMetadata.author }
          ]}
        />
        <Header show={this.state.showHeader} />
        <Observer onChange={this.handleChange} rootMargin="0% 0% -25%">
          <div>{children()}</div>
        </Observer>
        <Footer author={data.site.siteMetadata.author} />
      </Wrapper>
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
        author
        description
      }
    }
  }
`
