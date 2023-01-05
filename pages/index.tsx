import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/container";
import * as ResourceList from "../components/resource-list";
import * as Grid from "../components/grid";
import PageTitle from "../components/page-title";
import Lede from "../components/lede";
import { format } from "date-fns";
import Link from "next/link";

type Data = {
  title: string;
  description: string;
  links: { text: string; handle: string; href: string }[];
  work: {
    text: string;
    role: string;
    href: string;
    fromYear: string;
    toYear: string | null;
  }[];
};

const data: Data = {
  title:
    "Hi, I’m Philipp. I’m a JavaScript developer with a background in information design. I’m currently building a science-based, open data platform for nature restoration and conservation.",
  description:
    "I’ve previously worked in design agencies, early-stage startups as well as established scale-ups such as Mollie, one of the fastest growing payment services in Europe.",
  links: [
    { text: "Twitter", handle: "@rppld", href: "https://twitter.com/rppld" },
    {
      text: "GitHub",
      handle: "github.com/rppld",
      href: "https://github.com/rppld",
    },
    {
      text: "LinkedIn",
      handle: "linkedin.com/in/rppld",
      href: "https://www.linkedin.com/in/rppld/",
    },
  ],
  work: [
    {
      text: "Restor",
      role: "Freelance UI developer",
      href: "https://restor.eco/",
      fromYear: format(new Date("2022"), "yyyy"),
      toYear: null,
    },
    {
      text: "Montro",
      role: "Lead UI developer",
      href: "https://montro.com/en",
      fromYear: format(new Date("2021"), "yyyy"),
      toYear: format(new Date("2022"), "yy"),
    },
    {
      text: "Mollie",
      role: "UI developer",
      href: "https://www.mollie.com/en",
      fromYear: format(new Date("2020"), "yyyy"),
      toYear: format(new Date("2021"), "yy"),
    },
    {
      text: "TicketSwap",
      role: "UI developer",
      href: "https://www.ticketswap.com/",
      fromYear: format(new Date("2018"), "yyyy"),
      toYear: format(new Date("2020"), "yy"),
    },
    {
      text: "Bolden",
      role: "UI designer/developer",
      href: "https://www.bolden.nl/",
      fromYear: format(new Date("2016"), "yyyy"),
      toYear: format(new Date("2018"), "yy"),
    },
    {
      text: "Rppld.com",
      role: "Freelance UI designer/developer",
      href: "https://rppld.com/",
      fromYear: format(new Date("2013"), "yyyy"),
      toYear: format(new Date("2016"), "yy"),
    },
    {
      text: "MetaLab",
      role: "UI designer",
      href: "https://www.metalab.com/",
      fromYear: format(new Date("2012"), "yyyy"),
      toYear: format(new Date("2012"), "yy"),
    },
  ],
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Philipp Rappold, JavaScript Engineer</title>
        <meta
          name="description"
          content="Philipp Rappold is a software engineer specialising in large-scale JavaScript applications. He takes photos for fun."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-12">
        <Container>
          <Grid.Container>
            <Grid.Main>
              <Link href="/" className="font-medium text-sm md:text-base">
                Philipp Rappold
              </Link>
            </Grid.Main>
          </Grid.Container>
        </Container>
      </header>

      <main>
        <Container>
          <Grid.Container>
            <Grid.Main>
              <PageTitle>{data.title}</PageTitle>
              <Lede>{data.description}</Lede>
            </Grid.Main>
          </Grid.Container>
        </Container>

        <Container className="mt-12">
          <Grid.Container>
            <Grid.Aside>
              <h2 className="text-base lg:text-lg font-medium opacity-30">
                Work
              </h2>
            </Grid.Aside>
            <Grid.Main>
              <ResourceList.List>
                {data.work.map((link) => (
                  <ResourceList.Item key={link.href}>
                    <ResourceList.ItemLink href={link.href}>
                      <ResourceList.ItemTitle>
                        {link.text}
                      </ResourceList.ItemTitle>
                      <ResourceList.ItemSpacer />
                      <ResourceList.ItemText>{link.role}</ResourceList.ItemText>
                      <ResourceList.ItemData>
                        {link.fromYear}—{link.toYear || "\u00a0\u00a0"}
                      </ResourceList.ItemData>
                    </ResourceList.ItemLink>
                  </ResourceList.Item>
                ))}
              </ResourceList.List>
            </Grid.Main>
          </Grid.Container>
        </Container>

        <Container className="mt-12">
          <Grid.Container>
            <Grid.Aside>
              <h2 className="text-base lg:text-lg font-medium opacity-30">
                Elsewhere
              </h2>
            </Grid.Aside>
            <Grid.Main>
              <ResourceList.List>
                {data.links.map((link) => (
                  <ResourceList.Item key={link.href}>
                    <ResourceList.ItemLink href={link.href}>
                      <ResourceList.ItemTitle>
                        {link.text}
                      </ResourceList.ItemTitle>
                      <ResourceList.ItemSpacer />
                      <ResourceList.ItemData>
                        {link.handle}
                      </ResourceList.ItemData>
                    </ResourceList.ItemLink>
                  </ResourceList.Item>
                ))}
              </ResourceList.List>
            </Grid.Main>
          </Grid.Container>
        </Container>
      </main>

      <footer className="py-12">
        <Container>
          <Grid.Container>
            <Grid.Main>
              <p className="opacity-30 text-sm md:text-base">
                &copy; {new Date().getFullYear()} rppld.com
              </p>
            </Grid.Main>
          </Grid.Container>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
