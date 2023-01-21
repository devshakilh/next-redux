import Layout from '../Components/Layout'

import { hrefastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import '../styles/globals.css'
import '../pages/detailspage/detailspage.css'
function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp



