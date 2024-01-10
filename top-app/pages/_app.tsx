import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My Top App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />

        {/* <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} /> */}
        <meta property="og:locale" content="en_EN" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
