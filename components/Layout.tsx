import * as React from 'react'
import Head from 'next/head'
import BaseStyles from './BaseStyles'
import Header from './Header'
import Footer from './Footer'

interface Props {
  title?: string
  description?: string
  headerProps?: {
    withBorder?: boolean
  }
}

const Layout: React.FunctionComponent<Props> = props => (
  <>
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description}></meta>
    </Head>
    <BaseStyles />
    <Header {...props.headerProps} />
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
