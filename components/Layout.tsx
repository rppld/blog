import * as React from 'react'
import Head from 'next/head'
import BaseStyles from './BaseStyles'
import Header from './Header'
import Footer from './Footer'

interface Props {
  title?: string
  description?: string
}

const Layout: React.FunctionComponent<Props> = (props) => (
  <>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description}></meta>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#BBEFFD" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-384x384.png?v=2"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/static/apple-touch-icon.png"
      />
      <link rel="preconnect" href="https://storage.googleapis.com" />
    </Head>
    <BaseStyles />
    <Header />
    <main>{props.children}</main>
    <Footer />

    <style jsx>{`
      main {
        background-color: white;
      }
    `}</style>
  </>
)

Layout.defaultProps = {
  title: 'Philipp Rappold—Developer',
  description:
    'Philipp Rappold is an information designer and front-end developer in Amsterdam, working at the intersection of design and technology. He takes photos for fun.',
}

export default Layout
