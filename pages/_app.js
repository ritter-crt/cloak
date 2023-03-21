import Layout from "@/components/Layout";
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
          <SessionProvider session={pageProps.session}> 
            <Component {...pageProps} />
          </SessionProvider>
        </SWRConfig>
      </Layout>
    </>
  );
}

// const { data: session } = useSession()
// if(session) {
//   return <>
//     Signed in as {session.user.email} <br/>
//     <button onClick={() => signOut()}>Sign out</button>
//   </>
// }
// return <>
//   Not signed in <br/>
//   <button onClick={() => signIn()}>Sign in</button>
// </>
