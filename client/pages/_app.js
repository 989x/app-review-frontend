import Layout from '../components/Outline/Layout'
import '../styles/globals.css'

import Head from "next/head"
import { ContextProvider } from '../context/Context'

function MyApp({ Component, pageProps }) {

  return (
    <> 
      {/* add contextProvider for login system */}
      <ContextProvider>
    
        <Head>
        
        </Head>
      
        <Layout>
          <Component {...pageProps} />
        </Layout>
    
      </ContextProvider>  
    </>
      
  )
}

export default MyApp
