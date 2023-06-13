import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Noticias MundoCode</title>
        <link rel="icon" type="image/png" href="/notidev-logo.png" />
        <meta
          name="Description"
          content="Recibe noticias sobre progrmacion y tecnología actual."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
