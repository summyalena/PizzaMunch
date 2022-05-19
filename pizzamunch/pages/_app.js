import '../styles/globals.css'
import Layout from '../comps/layout'
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  ) 
}

export default MyApp
