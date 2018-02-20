import React from "react"
import Intro from "../components/Intro"
import { Paragraph } from "../components/Paragraph"

const FillingPiecesPage = props => (
  <div>
    <Intro bgColor="#111">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 252 276"
        style={{ verticalAlign: "middle", fill: "#fff", width: "100%" }}
      >
        <path d="M0 72V60h108v24H24v48h72v24H24v60H0V72zm168 84v60h-24V60h60c26.508 0 48 21.488 48 48 0 26.508-21.492 48-48 48h-36zm0-72v48h36c13.254 0 24-10.746 24-24s-10.746-24-24-24h-36zM0 24V0h108v24H0zm144 252v-24h108v24H144z" />
      </svg>
    </Intro>
  </div>
)

export default FillingPiecesPage
