import { format } from "date-fns";

type Link = {
  title?: string;
  text: string;
  href: string;
};

type PageData = {
  title: string;
  description: string;
  links: Link[];
  work: {
    title: string;
    text: string;
    imageUrl: string | null;
    role: string;
    link: Link;
    fromYear: string;
    toYear: string | null;
  }[];
};

export const pageData: PageData = {
  title: "Philipp Rappold, Software Developer",
  description:
    "Software developer with a background in design, specialized in building large-scale JavaScript applications.",
  links: [
    { title: "Twitter", text: "@rppld", href: "https://twitter.com/rppld" },
    {
      title: "GitHub",
      text: "github.com/rppld",
      href: "https://github.com/rppld",
    },
    {
      title: "LinkedIn",
      text: "linkedin.com/in/rppld",
      href: "https://www.linkedin.com/in/rppld/",
    },
  ],
  work: [
    {
      title: "Restor",
      text: "Helped build a science-based, open data platform to support nature preservation and restoration efforts.",
      imageUrl: "./restor.jpeg",
      role: "UI developer",
      link: {
        text: "restor.eco",
        href: "https://restor.eco/",
      },
      fromYear: format(new Date("2022"), "yyyy"),
      toYear: format(new Date("2023"), "yy"),
    },
    {
      title: "Montro",
      text: "Helped build a marketplace for pre-owned, high-end watches.",
      imageUrl: "./montro.jpeg",
      role: "UI developer",
      link: {
        href: "https://montro.com/en",
        text: "montro.com",
      },
      fromYear: format(new Date("2021"), "yyyy"),
      toYear: format(new Date("2022"), "yy"),
    },
    {
      title: "Mollie",
      text: "Enabled creative agencies and e-commerce platforms to integrate through Mollie’s partner program and drove the initiative to establish a design system to unify Mollie’s product portfolio.",
      imageUrl: "./mollie.jpeg",
      role: "UI developer",
      link: {
        href: "https://www.mollie.com/en",
        text: "mollie.com",
      },
      fromYear: format(new Date("2020"), "yyyy"),
      toYear: format(new Date("2021"), "yy"),
    },
    {
      title: "TicketSwap",
      text: "Initiated migration to universal front-end client and helped rebuild the web app from the ground up.",
      imageUrl: "./ticketswap.jpeg",
      role: "UI developer",
      link: {
        href: "https://www.ticketswap.com/",
        text: "ticketswap.com",
      },
      fromYear: format(new Date("2018"), "yyyy"),
      toYear: format(new Date("2020"), "yy"),
    },
    {
      title: "Bolden",
      text: "Worked on medium to large scale e–commerce projects in the Dutch music and fashion landscape.",
      imageUrl: "./bolden.jpeg",
      role: "UI designer/developer",
      link: {
        href: "https://www.bolden.nl/",
        text: "bolden.nl",
      },
      fromYear: format(new Date("2016"), "yyyy"),
      toYear: format(new Date("2018"), "yy"),
    },
    {
      title: "rppld.com",
      text: "Independently consulting clients in music, culture and advertising.",
      imageUrl: null,
      role: "Freelance UI designer/developer",
      link: {
        href: "https://www.rppld.com/",
        text: "rppld.com",
      },
      fromYear: format(new Date("2013"), "yyyy"),
      toYear: null,
    },
    {
      title: "MetaLab",
      text: "Designed user interfaces on the consulting-team for clients such as Planned Parenthood and internal products such as Ballpark.",
      imageUrl: "./metalab.jpeg",
      role: "UI designer",
      link: {
        href: "https://www.metalab.com/",
        text: "metalab.com",
      },
      fromYear: format(new Date("2012"), "yyyy"),
      toYear: format(new Date("2012"), "yy"),
    },
  ],
};
