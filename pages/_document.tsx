import * as React from 'react'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
