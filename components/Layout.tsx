import * as React from 'react'
import Head from 'next/head'
import BaseStyles from './BaseStyles'
import Header from './Header'
import Footer from './Footer'

interface Props {
  title?: string
  description?: string
}

const Layout: React.FunctionComponent<Props> = props => (
  <>
    <Head>
      <title>{props.title}</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-384x384.png?v=2"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={props.description}></meta>
    </Head>
    <BaseStyles />
    <Header />
    <main>{props.children}</main>
    <Footer />

    <style jsx>{`
      main {
        min-height: 100vh;
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
