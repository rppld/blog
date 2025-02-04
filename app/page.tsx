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
import { data } from "../data";
import { TypographyLead } from "../components/typography-lead";
import { TypographyH2 } from "../components/typography-h2";
import { cn, markdownToHtml } from "../lib/utils";
import { TypographyP } from "../components/typography-p";
import { TypographyMono } from "../components/typography-mono";
import { TypographySmall } from "../components/typography-small";
import markdownStyles from "./markdown-styles.module.css";
import { IconInbox } from "../components/icon-inbox";

const linkTextClassName =
  "group-hover:text-sky-400 dark:group-hover:text-sky-500 transition-colors whitespace-nowrap";

export default function Home() {
  return (
    <div>
      <main className="space-y-24 pt-5 lg:pt-8">
        <Container>
          <PageGrid.Container>
            <PageGrid.Main>
              <svg
                width="32"
                height="32"
                viewBox="0 0 80 80"
                className="rounded-full h-14 w-14 mb-24 -translate-x-2 text-black dark:text-white"
              >
                <path
                  fill="currentColor"
                  d="m7.878 61.477-2.524 1.622L8.6 68.146l2.523-1.623-3.244-5.046ZM42 33l2.507 1.648L42 33Zm10 7 2.846.949A3 3 0 0 0 52 37v3Zm1.342 29.683 2.683-1.341-2.683-5.367-2.684 1.342 2.684 5.366ZM9.5 64a648.194 648.194 0 0 0 1.625 2.522l.005-.003.014-.01.053-.034.192-.125a117.326 117.326 0 0 0 3.32-2.294 153.018 153.018 0 0 0 8.647-6.687c6.786-5.644 15.167-13.614 21.151-22.721l-5.014-3.296c-5.516 8.393-13.385 15.923-19.974 21.404a147.108 147.108 0 0 1-8.305 6.422 111.557 111.557 0 0 1-3.125 2.16c-.074.05-.129.085-.164.108l-.039.025-.008.005h-.001c0 .001 0 0 0 0L9.5 64Zm35.007-29.352C49.21 27.49 44.582 19 37 19v6c2.418 0 4.79 2.856 2.493 6.352l5.014 3.296ZM37 19c-6.657 0-12 5.343-12 12h6c0-3.343 2.657-6 6-6v-6ZM25 31c0 3.376 1.39 6.531 4.303 8.758C32.126 41.917 36.102 43 41 43v-6c-4.102 0-6.626-.917-8.053-2.008C31.61 33.969 31 32.624 31 31h-6Zm16 12H52v-6H41v6Zm13.176 15.885c2.31.66 4.598.608 6.709-.187 2.09-.786 3.813-2.227 5.152-4.04C68.677 51.088 70 45.876 70 40h-6c0 5.124-1.177 8.912-2.788 11.092-.785 1.062-1.625 1.684-2.44 1.99-.796.3-1.758.373-2.948.033l-1.648 5.77ZM70 40C70 22.851 59.123 7 40 7v6c14.877 0 24 12.149 24 27h6ZM40 7C20.877 7 10 22.851 10 40h6c0-14.851 9.123-27 24-27V7ZM10 40c0 17.149 10.877 33 30 33v-6c-14.877 0-24-12.149-24-27h-6Zm39.154-.949c-.995 2.984-2.177 6.961-2.026 10.574.077 1.858.512 3.834 1.689 5.563 1.21 1.78 3.025 3.03 5.359 3.697l1.648-5.77c-1.166-.333-1.727-.832-2.047-1.303-.354-.52-.607-1.295-.655-2.437-.1-2.387.718-5.41 1.724-8.426l-5.692-1.898ZM40 73c6.188 0 11.185-2.238 13.342-3.317l-2.684-5.366C48.815 65.238 44.812 67 40 67v6Z"
                />
              </svg>

              <TypographyH1>Philipp Rappold</TypographyH1>
              <TypographyLead>{data.page.description}</TypographyLead>
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
                {data.work.map((item) => (
                  <ResourceList.Item
                    className={cn(
                      "flex",
                      typeof item.contributions !== "undefined"
                        ? "md:col-span-2"
                        : "undefined"
                    )}
                    key={item.title}
                  >
                    <Card>
                      <CardHeader>
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md text-zinc-300 -translate-x-[2px] -translate-y-[2px]">
                          <Image
                            src={item.image.url}
                            alt={`The logo of ${item.title}`}
                            width={200}
                            height={200}
                            className="rounded-full h-12 w-12"
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
                        {typeof item.contributions === "undefined" ? null : (
                          <ul className="list-disc px-8 mt-4 font-bold md:text-lg dark:text-white tracking-tight">
                            {item.contributions.map(async (contribution) => (
                              <li
                                key={contribution}
                                className={markdownStyles["markdown"]}
                                dangerouslySetInnerHTML={{
                                  __html: await markdownToHtml(contribution),
                                }}
                              />
                            ))}
                          </ul>
                        )}
                      </CardContent>
                      <CardFooter>
                        <TypographyMono>
                          {item.fromYear}—{item.toYear || "\u00a0\u00a0"}
                        </TypographyMono>
                        <TypographyMono className={linkTextClassName}>
                          {item.link ? <p>{item.link.text}</p> : null}
                        </TypographyMono>
                      </CardFooter>
                    </Card>
                  </ResourceList.Item>
                ))}

                <ResourceList.Item className="flex">
                  <Card>
                    <CardHeader>
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 text-black -translate-x-[2px] -translate-y-[2px]">
                        <IconInbox className="w-9 h-9" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-white dark:text-black">
                        <ResourceList.ItemLink
                          className="bg-black dark:bg-white/95 dark:group-hover:bg-white"
                          href="mailto:philipp@rppld.com"
                        >
                          Get in touch
                        </ResourceList.ItemLink>
                      </CardTitle>
                      <CardDescription className="text-white/60 dark:text-black/60">
                        Discuss consulting inquiries or work opportunities?
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <TypographyMono
                        className={cn(
                          "text-white/60 dark:text-black/60",
                          linkTextClassName
                        )}
                      >
                        philipp[at]rppld.com
                      </TypographyMono>
                    </CardFooter>
                  </Card>
                </ResourceList.Item>
              </ul>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>

        <Container>
          <PageGrid.Container>
            <PageGrid.Aside>
              <TypographyH2>About</TypographyH2>
            </PageGrid.Aside>
            <PageGrid.Main>
              <div className="space-y-8">
                {data.about.texts.map((text) => (
                  <TypographyP
                    key={text}
                    className="text-black dark:text-white"
                  >
                    {text}
                  </TypographyP>
                ))}
              </div>

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-4 mt-8 -ml-3 -mr-3 lg:-ml-4 lg:-mr-4 -mb-3 lg:-mb-4">
                <li className="col-span-2 sm:col-span-1">
                  <Image
                    src="/philipp.jpg"
                    alt="A portrait of myself"
                    className="rounded-xl max-w-full"
                    width={1200}
                    height={1600}
                  />
                </li>
                <li>
                  <Image
                    src="/kain.jpg"
                    alt="My cat Kain"
                    className="rounded-xl max-w-full"
                    width={1600}
                    height={1200}
                  />
                </li>
                <li>
                  <Image
                    src="/garden.jpg"
                    alt="A flower blooming in my garden"
                    className="rounded-xl max-w-full"
                    width={1200}
                    height={1600}
                  />
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
                {data.elsewhere.map((item) => (
                  <ResourceList.Item key={item.href} className="items-center">
                    <ResourceList.ItemTitle>
                      <ResourceList.ItemLink href={item.href}>
                        {item.title}
                      </ResourceList.ItemLink>
                    </ResourceList.ItemTitle>
                    <ResourceList.ItemSpacer />
                    <ResourceList.ItemData className={linkTextClassName}>
                      {item.text}
                    </ResourceList.ItemData>
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
              <p>
                <TypographySmall>{data.page.smallprint}</TypographySmall>
              </p>
            </PageGrid.Main>
          </PageGrid.Container>
        </Container>
      </footer>
    </div>
  );
}
