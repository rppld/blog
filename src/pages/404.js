import React from "react"
import Intro from "../components/Intro"
import { Heading } from "../components/Heading"
import { RouterLink } from "../components/Link"

const NotFoundPage = () => (
  <Intro>
    <Heading>
      Eww, you just hit a route that doesn&#39;t exist{" "}
      <span role="img" aria-label="Emoji">
        🤔
      </span>{" "}
      But worry not, this <RouterLink to="/">link</RouterLink> will take you
      back to the homepage and you can start over.
    </Heading>
  </Intro>
)

export default NotFoundPage
