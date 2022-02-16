import Layout from '../components/Outline/Layout'
import '../styles/globals.css'

import Head from "next/head"

function MyApp({ Component, pageProps }) {

  

  return (
    <>
    
    <Head>
    
    </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
    </>
      
  )
}

export default MyApp
