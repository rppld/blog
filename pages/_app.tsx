import React from 'react'
import type { AppProps } from 'next/app'
import { unregister } from 'next-offline/runtime'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    unregister()
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
