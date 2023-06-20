import Container from "../components/container";
import * as ResourceList from "../components/resource-list";
import * as PageGrid from "../components/page-grid";
import { TypographyH1 } from "../components/typography-h1";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";
import Image from "next/image";
import { pageData } from "../data/page";
import { TypographyLead } from "../components/typography-lead";
import { TypographyH2 } from "../components/typography-h2";
import { cn } from "../lib/utils";
import { TypographyP } from "../components/typography-p";

export default function Home() {
  return (
    <div>
      <main className="space-y-24 pt-3 md:pt-5 lg:pt-8">
        <Container>
          <PageGrid.Container>
            <PageGrid.Main>
              <TypographyH1>Philipp Rappold</TypographyH1>
              <TypographyLead>{pageData.description}</TypographyLead>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>

        <Container>
          <PageGrid.Container>
            <PageGrid.Aside>
              <TypographyH2>Work and contributions</TypographyH2>
            </PageGrid.Aside>
            <PageGrid.Main>
              <ul className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {pageData.work.map((item) => (
                  <ResourceList.Item className="flex" key={item.title}>
                    <Card>
                      <CardHeader>
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md text-zinc-300 -translate-x-[2px] -translate-y-[2px]">
                          <Image
                            src={item.image.url}
                            alt={item.title}
                            width={200}
                            height={200}
                            className={cn(
                              "rounded-full",
                              item.image.padded ? "h-12 w-12" : "w-full h-full"
                            )}
                          />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle>
                          {item.link ? (
                            <ResourceList.ItemLink href={item.link.href}>
                              {item.title}
                            </ResourceList.ItemLink>
                          ) : (
                            item.title
                          )}
                        </CardTitle>
                        <CardDescription>{item.text}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <p>
                          {item.fromYear}—{item.toYear || "\u00a0\u00a0"}
                        </p>
                        {item.link ? <p>{item.link.text}</p> : null}
                      </CardFooter>
                    </Card>
                  </ResourceList.Item>
                ))}

                <li className="group flex">
                  <Card>
                    <CardHeader>
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 text-black -translate-x-[2px] -translate-y-[2px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-9 h-9"
                        >
                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                        </svg>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-white">
                        <ResourceList.ItemLink
                          className="bg-black"
                          href="mailto:philipp@rppld.com"
                        >
                          Get in touch
                        </ResourceList.ItemLink>
                      </CardTitle>
                      <CardDescription className="text-white/60">
                        Discuss consulting inquiries or work opportunities? I’d
                        love to hear from you!
                      </CardDescription>
                    </CardContent>
                  </Card>
                </li>
              </ul>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>

        <Container>
          <PageGrid.Container>
            <PageGrid.Aside>
              <TypographyH2>About</TypographyH2>
            </PageGrid.Aside>
            <PageGrid.Main className="space-y-8">
              {pageData.about.texts.map((text) => (
                <TypographyP key={text} className="text-black">
                  {text}
                </TypographyP>
              ))}
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>

        <Container>
          <PageGrid.Container>
            <PageGrid.Aside>
              <TypographyH2>Elsewhere</TypographyH2>
            </PageGrid.Aside>
            <PageGrid.Main>
              <ResourceList.List>
                {pageData.links.map((item) => (
                  <ResourceList.Item key={item.href} className="items-center">
                    <ResourceList.ItemTitle>
                      <ResourceList.ItemLink href={item.href}>
                        {item.title}
                      </ResourceList.ItemLink>
                    </ResourceList.ItemTitle>
                    <ResourceList.ItemSpacer />
                    <ResourceList.ItemData>{item.text}</ResourceList.ItemData>
                  </ResourceList.Item>
                ))}
              </ResourceList.List>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>
      </main>

      <footer className="py-24">
        <Container>
          <PageGrid.Container>
            <PageGrid.Main>
              <p className="text-md text-black/30">{pageData.smallprint}</p>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>
      </footer>
    </div>
  );
}
