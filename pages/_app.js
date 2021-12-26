import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>我的博客-BOBO</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
