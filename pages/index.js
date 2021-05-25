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
        <h1 className="font-mono font-bold text-xl text-blue-300">
          Read{" "}
          <Link href="/posts/first-post">
            <a className="text-blue-600 hover:text-green-300">this page!</a>
          </Link>
        </h1>
      </main>

      <footer className="bg-gray-800 flex items-center justify-center w-full h-24 border-t border-blue-300"></footer>
    </Layout>
  );
}
