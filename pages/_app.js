import Layout from "@/components/Layout";
import GlobalStyle from "../styles";

import { SWRConfig } from "swr";


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
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </>
  );
}
