import React from "react"
import Helmet from "react-helmet"
import { Body } from "../components/Body"
import { Header } from "../components/Menubar"
import { Divider } from "../components/Divider"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import { Link, RouterLink } from "../components/Link"
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
      <Heading inBody>Filling Pieces</Heading>

      <Paragraph>
        During my tenure at <Link href="https://www.bolden.nl/">Bolden</Link>{" "}
        one of my bigger projects was the site of Amsterdam-based footwear label{" "}
        <em>Filling Pieces</em>. They started out selling their products online
        using <em>OpenCart</em> as a platform, and even though OpenCart is a
        very capable tool, it kinda couldn't keep up with the pace the company
        was growing, which was especially true during the peak of an ongoing
        sale.
      </Paragraph>

      <Paragraph>
        In order to ensure smoother sale-ing (Get it? SALE-ing!), we went
        through the process of porting everything over to <em>Shopify</em>.
        Shopify is amazingly stable and easy to manage.
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
