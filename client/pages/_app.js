import Layout from '../components/Layout'
import '../styles/globals.css'

import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    
    <Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </Head>
  )
}

export default MyApp
