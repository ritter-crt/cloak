import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react"
import GlobalStyle from "../styles";

export default function App({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <>
  <SessionProvider session={session}>
  <Layout>
    <GlobalStyle />
      <Component {...pageProps} />
      </Layout>
      </SessionProvider>
    </>
  )
}
