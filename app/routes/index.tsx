import { useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunction } from "@remix-run/cloudflare";
import Container from "~/components/container";
import * as ResourceList from "~/components/resource-list";
import * as Grid from "~/components/grid";
import PageTitle from "~/components/page-title";
import Lede from "~/components/lede";
import { format } from "date-fns";

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

// Loaders provide data to components and are only ever called on the
// server, so you can connect to a database or run any server side
// code you want right next to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  const data: Data = {
    title:
      "Hi, I’m Philipp. I’m a UI developer with a background in information design, working at the intersection of design and technology. I’m currently building a marketplace for pre-owned, high-end watches at Montro.",
    description:
      "Before Montro I worked at Mollie, one of the fastest growing payment services in Europe.",
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
        text: "Montro",
        role: "Lead UI developer",
        href: "https://montro.com/en",
        fromYear: format(new Date("2021"), "yyyy"),
        toYear: null,
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
        role: "UI designer/developer",
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

  // https://remix.run/api/remix#json
  return data;
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Philipp Rappold – UI Developer",
    description:
      "Philipp Rappold is an information designer and UI developer in Amsterdam, working at the intersection of design and technology. He takes photos for fun.",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData<Data>();

  return (
    <div>
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
                    <ResourceList.ItemTitle>{link.text}</ResourceList.ItemTitle>
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
                    <ResourceList.ItemTitle>{link.text}</ResourceList.ItemTitle>
                    <ResourceList.ItemSpacer />
                    <ResourceList.ItemData>{link.handle}</ResourceList.ItemData>
                  </ResourceList.ItemLink>
                </ResourceList.Item>
              ))}
            </ResourceList.List>
          </Grid.Main>
        </Grid.Container>
      </Container>
    </div>
  );
}
