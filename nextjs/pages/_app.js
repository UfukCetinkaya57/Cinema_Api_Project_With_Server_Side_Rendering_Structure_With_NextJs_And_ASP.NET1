import '../styles/globals.css';
import Layout from '../layout/Layout';
import axios from 'axios';
import https from 'https';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
