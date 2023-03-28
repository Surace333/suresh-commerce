import React from 'react';
import '@/styles/globals.css';
import { Layout } from '../components';
import { Toaster } from 'react-hot-toast';
import{ StateContext } from '../Context/StateContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
    <Layout>
      <Toaster/>
  <Component {...pageProps} />
  </Layout>
  </StateContext>
  )
}
