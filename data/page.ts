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
  about: {
    texts: string[];
  };
  work: {
    title: string;
    text: string;
    image: {
      url: string;
      padded?: boolean;
    };
    role: string;
    link: Link | null;
    fromYear: string;
    toYear: string | null;
  }[];
};

export const pageData: PageData = {
  title: "Philipp Rappold, Software Developer",
  description:
    "Design-minded software developer specialized in building large-scale JavaScript applications.",
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
  about: {
    texts: [
      "Hello, I’m Philipp. I’m an Austrian software developer living in the Netherlands. The moniker “rppld” is my online alias and the name of my consulting business.",
      "I studied design, yet turned to front-end development early on. I’m passionate about building large web applications and I’m a strong advocate for design systems and component-based UI development.",
      "In my spare time I enjoy playing tennis, gardening, and hanging out with friends or my two cats, Kain and Abel.",
    ],
  },
  work: [
    {
      title: "Restor",
      text: "Helped build a science-based, open data platform to support nature preservation and restoration efforts.",
      image: {
        url: "./restor.jpg",
        padded: true,
      },
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
      text: "Development of a marketplace providing enthusiasts with a platform for buying and selling pre-owned, luxury timepieces.",
      image: {
        url: "./montro.jpg",
      },
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
      image: {
        url: "./mollie.jpg",
        padded: true,
      },
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
      image: {
        url: "./ticketswap.jpg",
        padded: true,
      },
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
      image: {
        url: "./bolden.jpg",
        padded: true,
      },
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
      image: {
        url: "./rppld.jpg",
      },
      role: "Freelance UI designer/developer",
      link: null,
      fromYear: format(new Date("2013"), "yyyy"),
      toYear: null,
    },
    {
      title: "MetaLab",
      text: "Designed user interfaces on the consulting-team for well-known clients and internal products.",
      image: {
        url: "./metalab.jpg",
        padded: true,
      },
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
