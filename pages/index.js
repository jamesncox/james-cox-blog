import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>James' Blog</title>
        <link rel="icon" href="/favicon.ico/?v=2" />
      </Head>

      <main className="flex-1">
        <h1 className="font-mono font-bold text-xl">
          Read{" "}
          <Link href="/posts/first-post">
            <a className="text-blue-600">this page!</a>
          </Link>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </Layout>
  );
}
