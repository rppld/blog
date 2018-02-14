import React from "react"
import Intro from "../components/Intro"
import { Paragraph } from "../components/Paragraph"
import { Link, RouterLink } from "../components/Link"

const IndexPage = props => (
  <Intro full>
    <Paragraph>
      Hi, I'm Philipp, an information designer in Amsterdam, working at the
      intersection of design and technology and taking{" "}
      <RouterLink to="/photos">photos</RouterLink> for fun. You can follow me on{" "}
      <Link href="https://twitter.com/rppld">Twitter</Link> and{" "}
      <Link href="https://www.instagram.com/philipprappold/">Instagram</Link>.
    </Paragraph>
  </Intro>
)

export default IndexPage
