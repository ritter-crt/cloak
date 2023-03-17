import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";
import GlobalStyle from "../styles";

import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
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
