import React from "react"
import Helmet from "react-helmet"
import { Body } from "../components/Body"
import { Header } from "../components/Menubar"
import { Divider } from "../components/Divider"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import { RouterLink } from "../components/Link"
import { Paragraph } from "../components/Paragraph"
import { Heading, FauxHeading } from "../components/Heading"

const FpPage = props => (
  <div>
    <Helmet
      title={`${props.data.site.siteMetadata.author}, ${
        props.data.fpPageJson.title
      }`}
    />

    <Header
      author={props.data.site.siteMetadata.author}
      title={props.data.fpPageJson.title}
    />

    <Intro bgColor={props.data.fpPageJson.coverBgColor}>
      <img
        src={props.data.fpPageJson.coverImage.publicURL}
        alt="Filling Pieces Logo"
        style={{ verticalAlign: "middle", width: "100%" }}
      />
    </Intro>

    <Body>
      <Heading inBody>Filling Pieces Concepts</Heading>

      <Paragraph>
        During my time at Bolden one of my main clients was Amsterdam based
        footwear label <em>Filling Pieces</em>.
      </Paragraph>

      <Paragraph>
        Aside from porting their existing site which was based on OpenCart, over
        to Shopify, I have worked on some higher level concepts for a new
        e-commerce site.
      </Paragraph>

      <Divider />
    </Body>

    <Outro>
      <FauxHeading>
        Thanks for your interest in my work! Feeling some more? Check out this{" "}
        <RouterLink to="/earlybird">app</RouterLink> I'm working on.
      </FauxHeading>
    </Outro>
  </div>
)

export default FpPage

export const query = graphql`
  query FpPageQuery {
    fpPageJson {
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
