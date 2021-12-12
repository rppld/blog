import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import Container from "~/components/container";
import * as Grid from "~/components/grid";
import type { LinksFunction } from "remix";
import tailwindStylesUrl from "~/styles/tailwind.css";
import PageTitle from "./components/page-title";
import Lede from "./components/lede";

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesUrl }];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <Container>
          <PageTitle>There was an error</PageTitle>
          <Lede>{error.message}</Lede>
        </Container>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <Container>
          <PageTitle>
            {caught.status}: {caught.statusText}
          </PageTitle>
          <Lede>{message}</Lede>
        </Container>
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="bg-[#FAFAF7]">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="py-12">
        <Container>
          <Grid.Container>
            <Grid.Main>
              <Link to="/" className="font-medium text-sm md:text-base">
                Philipp Rappold
              </Link>
            </Grid.Main>
          </Grid.Container>
        </Container>
      </header>
      <main>{children}</main>
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
}
