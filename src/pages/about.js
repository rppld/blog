import React from "react"
import PropTypes from "prop-types"
import { Heading } from "../components/Heading"
import { Paragraph } from "../components/Paragraph"
import { Link } from "../components/Link"

const AboutPage = props => (
  <div>
    <Heading>Rppld.co</Heading>

    <Paragraph>
      I'm Philipp Rappold, an information designer and front-end developer in
      Amsterdam, working at the intersection of design and technology and taking
      photos for fun.
    </Paragraph>

    <Heading>Work</Heading>

    <Paragraph>
      While I'm not freelancing full-time, I still take on projects
      occasionally. If you think your idea is interesting,{" "}
      <Link href="mailto:hi@rppld.co">email me</Link>.
    </Paragraph>

    <Heading>Elsewhere</Heading>

    <Paragraph>
      You can follow me on <Link href="https://twitter.com/rppld">Twitter</Link>{" "}
      and{" "}
      <Link href="https://www.instagram.com/philipprappold/">Instagram</Link>.
    </Paragraph>
  </div>
)

AboutPage.propTypes = {
  show: PropTypes.bool
}

export default AboutPage
