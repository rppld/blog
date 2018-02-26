import React from "react"
import Helmet from "react-helmet"
import Figure from "../components/Figure"
import { Body } from "../components/Body"
import { Header } from "../components/Menubar"
import { Divider } from "../components/Divider"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import { Link, RouterLink } from "../components/Link"
import { Paragraph } from "../components/Paragraph"
import { Heading, FauxHeading } from "../components/Heading"

const vfmkPage = props => (
  <div>
    <Helmet
      title={`${props.data.site.siteMetadata.author}, ${
        props.data.vfmkPageJson.title
      }`}
    />

    <Header
      author={props.data.site.siteMetadata.author}
      title={props.data.vfmkPageJson.title}
    />

    <Intro bgColor={props.data.vfmkPageJson.coverBgColor}>
      <img
        src={props.data.vfmkPageJson.coverImage.publicURL}
        alt="Filling Pieces Logo"
        style={{ verticalAlign: "middle", width: "100%" }}
      />
    </Intro>

    <Body>
      <Heading inBody>Verlag für moderne Kunst</Heading>

      <Paragraph>
        During the time I&rsquo;ve been working as a freelance developer I got
        to build the new website for the Austrian contemporary art book
        publisher <em>Verlag für moderne Kunst</em> in Vienna. View the live
        site in your browser:
      </Paragraph>

      <Paragraph>
        <Link href="https://vfmk.org" target="_blank">
          https://vfmk.org
        </Link>
      </Paragraph>

      <Paragraph>
        The store-section of the site should be able to handle three different
        types of products: Artbooks, limited art prints, as well as random
        physical goods such as bags, coffee mugs, or calendars. We started this
        project using <em>WordPress</em> as a CMS{" "}
        <span role="img" aria-label="Neutral face emoji">
          😐
        </span>, which was a client preference at the time. The{" "}
        <em>WooCommerce</em> extension should handle all e-commerce
        functionality{" "}
        <span role="img" aria-label="Neutral face emoji">
          😩
        </span>. The site also needed to be multi-language, so we went ahead and
        installed the <em>WPML</em> plugin, which ultimately turned the site
        into <strong>one. Slow. Mess!</strong>{" "}
        <span role="img" aria-label="Crying face emoji">
          😭
        </span>
      </Paragraph>

      <Paragraph>
        On the bright side: This moment should mark the last time I&rsquo;ve
        been touching any WordPress code.
      </Paragraph>

      <Heading inBody secondary>
        Craft CMS to the rescue
      </Heading>

      <Paragraph>
        At this point I had already some experience with this relatively new
        system called <em>Craft CMS</em> and they had just launched their own,
        first-party e-commerce plugin called <em>Craft Commerce</em>. I could
        convince the client to scrape together some more money and basically
        re-wrote the whole website for the new ecosystem, which turned out to be
        the right decision for both, my brain to not turn into jelly, and also
        for the client and content editors, because they immediately fell in
        love with Craft.
      </Paragraph>

      <Paragraph>
        During a Craft CMS meetup{" "}
        <Link href="https://twitter.com/brandonkelly" target="_blank">
          Brandon Kelly
        </Link>{" "}
        (from Pixel and Tonic, the creators of Craft CMS) later mentioned{" "}
        <Link href="https://vfmk.org" target="_blank">
          vfmk.org
        </Link>{" "}
        as a notable example for Craft Commerce websites which meant a lot and
        made me extra proud!
      </Paragraph>

      <Figure
        inBody
        bgColor="#00B0DF"
        padTop
        padRight
        padLeft
        sizes={props.data.vfmkPageJson.images.home.childImageSharp.sizes}
        sizesString="(min-width: 60em) 80vw, 100vw"
      />

      <Figure
        inBody
        bgColor="#79FCD3"
        padTop
        padRight
        padLeft
        padBottom
        sizes={props.data.vfmkPageJson.images.mobile.childImageSharp.sizes}
        sizesString="(min-width: 60em) 80vw, 100vw"
      />

      <Figure
        inBody
        bgColor="#F62900"
        padTop
        padRight
        padLeft
        sizes={props.data.vfmkPageJson.images.shop.childImageSharp.sizes}
        sizesString="(min-width: 60em) 80vw, 100vw"
      />

      <Paragraph>
        This project is further being maintained by design and development
        studio{" "}
        <Link href="http://www.bendlbrothers.com/" target="_blank">
          Bendl Brothers
        </Link>{" "}
        in Vienna.
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

export default vfmkPage

export const query = graphql`
  query vfmkPageQuery {
    vfmkPageJson {
      title
      coverImage {
        publicURL
      }
      coverBgColor
      images {
        home {
          childImageSharp {
            sizes(quality: 90) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
        mobile {
          childImageSharp {
            sizes(quality: 90) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
        shop {
          childImageSharp {
            sizes(quality: 90) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`
