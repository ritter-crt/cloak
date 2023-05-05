import { SWRConfig } from 'swr';
import { SessionProvider } from 'next-auth/react';

import Layout from '../components/Layout';
import { GlobalStyle } from '../styles';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <GlobalStyle />
          <SWRConfig value={{ fetcher }}>
            <Component {...pageProps} />
          </SWRConfig>
        </Layout>
      </SessionProvider>
    </>
  );
}
