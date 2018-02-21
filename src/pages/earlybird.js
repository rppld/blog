import React from "react"
import Helmet from "react-helmet"
import { Header } from "../components/Menubar"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import { RouterLink } from "../components/Link"
import { Paragraph } from "../components/Paragraph"
import { Body } from "../components/Body"
import { Heading, FauxHeading } from "../components/Heading"

const EarlyBirdPage = props => (
  <div>
    <Helmet
      title={`${props.data.site.siteMetadata.author}, ${
        props.data.earlybirdPageJson.title
      }`}
    />

    <Header
      author={props.data.site.siteMetadata.author}
      title={props.data.earlybirdPageJson.title}
    />

    <Intro bgColor={props.data.earlybirdPageJson.coverBgColor}>
      <img
        src={props.data.earlybirdPageJson.coverImage.publicURL}
        alt="EarlyBird Logo"
        style={{ verticalAlign: "middle", width: "100%" }}
      />
    </Intro>

    <Body>
      <Heading inBody>EarlyBird</Heading>
    </Body>

    <Outro>
      <FauxHeading>
        Thanks for your interest in my work! Feeling some more? Check out the
        work I did for <RouterLink to="/fp">Filling Pieces</RouterLink>.
      </FauxHeading>
    </Outro>
  </div>
)

export default EarlyBirdPage

export const query = graphql`
  query EarlyBirdPageQuery {
    earlybirdPageJson {
      title
      coverImage {
        publicURL
      }
      coverBgColor
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`
