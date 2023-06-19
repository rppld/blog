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

export default function Home() {
  return (
    <div>
      <header className="py-12">
        <Container>
          <PageGrid.Container>
            <PageGrid.Main>
              <p className="font-medium text-sm">Philipp Rappold</p>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>
      </header>

      <main className="space-y-24">
        <Container>
          <PageGrid.Container>
            <PageGrid.Main className="space-y-4">
              <TypographyH1>Hello, I’m Philipp</TypographyH1>
              <TypographyLead>{pageData.description}</TypographyLead>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>

        <Container>
          <PageGrid.Container>
            <PageGrid.Aside>
              <TypographyH2>Work</TypographyH2>
            </PageGrid.Aside>
            <PageGrid.Main>
              <ul className="grid md:grid-cols-2 gap-8">
                {pageData.work.map((item) => (
                  <ResourceList.Item className="flex" key={item.title}>
                    <Card>
                      <CardHeader>
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 text-zinc-300 -translate-x-[2px] -translate-y-[2px]">
                          {item.imageUrl ? (
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              width={200}
                              height={200}
                              className="h-12 w-12 rounded-full"
                            />
                          ) : (
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
                            >
                              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                              <path d="M10 6h4" />
                              <path d="M10 10h4" />
                              <path d="M10 14h4" />
                              <path d="M10 18h4" />
                            </svg>
                          )}
                        </div>
                        <CardTitle>
                          {item.link ? (
                            <ResourceList.ItemLink href={item.link.href}>
                              {item.title}
                            </ResourceList.ItemLink>
                          ) : (
                            item.title
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{item.text}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <p>
                          {item.fromYear}—{item.toYear || "\u00a0\u00a0"}
                        </p>
                      </CardFooter>
                    </Card>
                  </ResourceList.Item>
                ))}

                <li className="flex">
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
                        >
                          <circle cx="12" cy="12" r="4" />
                          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                        </svg>
                      </div>
                      <CardTitle className="text-white">
                        <ResourceList.ItemLink
                          className="bg-black/90 hover:bg-black border-black/20 lg:opacity-1 lg:scale-100"
                          href="mailto:philipp@rppld.com"
                        >
                          Get in touch
                        </ResourceList.ItemLink>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-white opacity-80 space-y-4">
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
              <TypographyH2>Elsewhere</TypographyH2>
            </PageGrid.Aside>
            <PageGrid.Main>
              <ResourceList.List>
                {pageData.links.map((item) => (
                  <ResourceList.Item key={item.href}>
                    <ResourceList.ItemLink href={item.href}>
                      <ResourceList.ItemTitle>
                        {item.title}
                      </ResourceList.ItemTitle>
                      <ResourceList.ItemSpacer />
                      <ResourceList.ItemData>{item.text}</ResourceList.ItemData>
                    </ResourceList.ItemLink>
                  </ResourceList.Item>
                ))}
              </ResourceList.List>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>
      </main>

      <footer className="py-12">
        <Container>
          <PageGrid.Container>
            <PageGrid.Main>
              <p className="opacity-30 text-sm">
                &copy; {new Date().getFullYear()} Philipp Rappold
              </p>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>
      </footer>
    </div>
  );
}
