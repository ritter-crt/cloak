import Layout from "@/src/components/Layout";
import GlobalStyle from "../styles";

import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <SWRConfig value={{ fetcher }}>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </SWRConfig>
      </Layout>
    </>
  );
}
