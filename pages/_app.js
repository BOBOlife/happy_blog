import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>我的博客-BOBO</title>
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
