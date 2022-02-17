import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Plentina</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="flex flex-col items-start w-full max-h-screen min-w-full min-h-screen bg-gray-50 ">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
