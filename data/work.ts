import { format } from "date-fns";
import { Data } from "./index";

export const data: Data["work"] = [
  {
    title: "Mollie",
    text: "Returned in September 2023. More details to follow.",
    image: {
      url: "./mollie.jpg",
    },
    role: "UI engineer",
    link: {
      href: "https://www.mollie.com/en",
      text: "mollie.com",
    },
    fromYear: format(new Date("2023"), "yyyy"),
    toYear: null,
  },
  {
    title: "Restor",
    text: "Helped build a science-based, open data platform to support nature preservation and restoration efforts.",
    image: {
      url: "./restor.jpg",
    },
    role: "UI engineer",
    link: {
      text: "restor.eco",
      href: "https://restor.eco/",
    },
    fromYear: format(new Date("2022"), "yyyy"),
    toYear: format(new Date("2023"), "yy"),
  },
  {
    title: "Montro",
    text: "Contributed to building a marketplace providing enthusiasts with a platform for buying and selling pre-owned, luxury timepieces.",
    image: {
      url: "./montro.jpg",
    },
    role: "UI engineer",
    link: {
      href: "https://montro.com/en",
      text: "montro.com",
    },
    fromYear: format(new Date("2021"), "yyyy"),
    toYear: format(new Date("2022"), "yy"),
  },
  {
    title: "Mollie",
    text: "As part of the partnerships team, I worked on enabling creative agencies and e-commerce platforms to integrate through Mollie’s partner program.",
    image: {
      url: "./mollie.jpg",
    },
    role: "UI engineer",
    link: {
      href: "https://www.mollie.com/en",
      text: "mollie.com",
    },
    fromYear: format(new Date("2020"), "yyyy"),
    toYear: format(new Date("2021"), "yy"),
    contributions: [
      "Worked with the design team to establish a company-wide design system and lead the initial technical implementation.",
      "Added the first commits to what would later become [Mollie’s internal component library](https://blog.mollie.com/creating-scalable-and-manageable-design-system-components-58d3ce682272).",
      "Built tooling to maintain design-tokens within Figma and developed pipelines to consume them in the different front-end clients.",
      "Built the [demo website for Mollie Checkout](https://demo.mollie.com/en).",
      "Integrated two-factor authentication within the Mollie dashboard and authentication pages.",
      "Added support for payment links within [Mollie’s mobile app](https://www.mollie.com/products/mobile).",
      "Created and extended partner insights dashboards.",
    ],
  },
  {
    title: "TicketSwap",
    text: "In a team of front-end engineers, I contributed to building a platform for buying and selling second-hand tickets for events worldwide.",
    image: {
      url: "./ticketswap.jpg",
    },
    role: "UI engineer",
    link: {
      href: "https://www.ticketswap.com/",
      text: "ticketswap.com",
    },
    fromYear: format(new Date("2018"), "yyyy"),
    toYear: format(new Date("2020"), "yy"),
    contributions: [
      "Initiated the migration to a universal front-end client and helped rebuild the web app from the ground up.",
      "Introduced an open-source [component library](https://github.com/TicketSwap/solar) and [icon library](https://github.com/TicketSwap/comets).",
      "Established documentation for best practices in JavaScript testing and accessible components.",
      "Collaborated with design-team to improve handoff and asset management.",
      "Mentored junior and medior front-end developers.",
    ],
  },
  {
    title: "Bolden",
    text: "Worked on medium to large scale e–commerce projects in the Dutch music and fashion landscape.",
    image: {
      url: "./bolden.jpg",
    },
    role: "UI designer/engineer",
    link: {
      href: "https://www.bolden.nl/",
      text: "bolden.nl",
    },
    fromYear: format(new Date("2016"), "yyyy"),
    toYear: format(new Date("2018"), "yy"),
  },
  {
    title: "rppld.com",
    text: "Independently consulting clients in music, culture, advertising and technology.",
    image: {
      url: "./rppld.svg",
    },
    role: "Freelance UI designer/developer",
    link: null,
    fromYear: format(new Date("2013"), "yyyy"),
    toYear: null,
  },
  {
    title: "MetaLab",
    text: "Designed user interfaces on the consulting-team for industry clients as well as internal products.",
    image: {
      url: "./metalab.jpg",
    },
    role: "UI designer",
    link: {
      href: "https://www.metalab.com/",
      text: "metalab.com",
    },
    fromYear: format(new Date("2012"), "yyyy"),
    toYear: format(new Date("2012"), "yy"),
  },
];
