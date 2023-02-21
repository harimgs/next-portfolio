import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Head>
        <title>{"HaRim's Portfolio"}</title>
        <meta name="description" content="Welcome to HaRim's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="mt-">{children}</div>
      <Footer />
    </div>
  );
}
