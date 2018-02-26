import React from "react"
import Helmet from "react-helmet"
import { Header } from "../components/Menubar"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import { Divider } from "../components/Divider"
import { Paragraph } from "../components/Paragraph"
import { Link, RouterLink } from "../components/Link"
import { Body } from "../components/Body"
import { Heading, FauxHeading } from "../components/Heading"

const AboutPage = props => (
  <div>
    <Helmet
      title={`${props.data.site.siteMetadata.author}, ${
        props.data.aboutPageJson.title
      }`}
    />

    <Header
      author={props.data.site.siteMetadata.author}
      title={props.data.aboutPageJson.title}
    />

    <Intro bgColor={props.data.aboutPageJson.coverBgColor}>
      <img
        src={props.data.aboutPageJson.coverImage.publicURL}
        alt="Avatar"
        style={{
          verticalAlign: "middle",
          maxWidth: "100vw",
          maxHeight: "100vh"
        }}
      />
    </Intro>

    <Body>
      <Heading inBody>Rppld.co</Heading>

      <Paragraph>
        I'm Philipp Rappold, an information designer and front-end developer in
        Amsterdam, working at the intersection of design and technology and
        taking photos for fun. IBM Plex by Bold Monday, Dutch studio, I love
        Holland, GREATTT
      </Paragraph>

      <Heading inBody secondary>
        Work
      </Heading>

      <Paragraph>
        While I'm not freelancing full-time, I still take on projects
        occasionally. If you think your idea is interesting,{" "}
        <Link href="mailto:hi@rppld.co">email me</Link>.
      </Paragraph>

      <Heading inBody secondary>
        Elsewhere
      </Heading>

      <Paragraph>
        You can follow me on{" "}
        <Link href="https://twitter.com/rppld">Twitter</Link> and{" "}
        <Link href="https://www.instagram.com/philipprappold/">Instagram</Link>.
      </Paragraph>

      <Divider />
    </Body>

    <Outro>
      <FauxHeading>
        Thanks for your interest in my work! Feeling some more? Check out the
        work I did for <RouterLink to="/fp">Filling Pieces</RouterLink>.
      </FauxHeading>
    </Outro>
  </div>
)

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    aboutPageJson {
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
