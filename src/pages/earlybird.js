import React from "react"
import Helmet from "react-helmet"
import { Header } from "../components/Menubar"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import { Divider } from "../components/Divider"
import { Link, RouterLink } from "../components/Link"
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

      <Paragraph>
        EarlyBird is a side-project I&rsquo;m working on together with{" "}
        <Link href="http://floriskoch.com/" target="_blank">
          Floris Koch
        </Link>, a friend and former colleague of mine.
      </Paragraph>

      <Paragraph>
        We&rsquo;re planning to create a new kind of marketplace, a community of
        buyers and sellers that&rsquo;s secure and that&rsquo;s both easy and
        fun to use. Think &ldquo;fleamarket&rdquo; – but as a web app, minus the
        fraud and the frustration.
      </Paragraph>

      <Heading inBody secondary>
        Under the hood
      </Heading>

      <Paragraph>
        EarlyBird is basically a React/Apollo front-end that interacts with a
        MongoDB storage through a GraphQL server. We tried to keep complexity
        and configuration of the whole setup at a minimum and used{" "}
        <Link href="https://github.com/facebook/create-react-app">
          create-react-app
        </Link>{" "}
        to scaffold the front-end as well as{" "}
        <Link href="https://github.com/graphcool/graphql-yoga">
          graphql-yoga
        </Link>{" "}
        for the server. Love how far these tools got us already!
      </Paragraph>

      <Heading inBody secondary>
        When can I kick the tires?
      </Heading>

      <Paragraph>
        The goal of this project was primarily just to get more comfortable with
        all the tools and utilities involved in building modern web
        applications, rather than creating yet another marketplace service
        really. That said, I do believe that there&rsquo;s room for this after
        doing a few rounds of brainstorming and getting more and more excited
        about the ideas we have for EarlyBird.
      </Paragraph>

      <Paragraph>
        There&rsquo;s a working prototype with a small set of features, but
        nothing like an ETA. We&rsquo;ve bought a bomb domain though and put up
        a site where you can sign up to get updates on our progress:{" "}
        <Link href="https://earlybird.lol">https://earlybird.lol</Link>{" "}
        <span role="img" aria-label="Party emoji">
          👯‍
        </span>
      </Paragraph>

      <Heading inBody secondary>
        Why &ldquo;EarlyBird&rdquo; doe?
      </Heading>

      <Paragraph>
        Okay, so when in 2016 the talented David DeSandro of{" "}
        <Link href="https://metafizzy.co/">Metafizzy</Link> ran his first
        installation of <Link href="http://logo.pizza/">Logo Pizza</Link>, I
        managed to snatch the first logo being sold for $40, with the idea in
        mind that I&rsquo;d someday use it for a side-project.
      </Paragraph>

      <Paragraph>
        After having this logo lying around for 2 years, I finally found a use
        for it and I needed and accompanying name. I&rsquo;d ask my girlfriend –
        who&rsquo;s also an amazing copywriter – if she can think of a name
        that&rsquo;s somewhat related to fleamarkets and birds and it took her{" "}
        <em>two minutes</em> to come up with &ldquo;EarlyBird&rdquo; – from
        &ldquo;the early bird catches the worm&rdquo; and the fact that you need
        to get to fleamarkets early in order to get your hands on the best
        stuff. She cray!{" "}
        <span role="img" aria-label="Worm emoji">
          🐛
        </span>
      </Paragraph>

      <Divider />
    </Body>

    <Outro>
      <FauxHeading>
        Thanks for your interest in my work! Feeling some more? Check out the
        work I did for{" "}
        <RouterLink to="/filling-pieces">Filling Pieces</RouterLink>.
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
