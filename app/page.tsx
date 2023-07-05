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
              <Image
                src="./rppld.svg"
                alt="rppld.com logo"
                width={32}
                height={32}
                className="rounded-full h-14 w-14 mb-24 -translate-x-[2px] -translate-y-[2px]"
              />

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
                        Discuss consulting inquiries or work opportunities? I’d
                        love to hear from you!
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
