import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>James' Blog</title>
        <link rel="icon" href="/favicon.ico/?v=2" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h1 className="font-mono font-bold text-xl">
          Read{" "}
          <Link href="/posts/first-post">
            <a className="text-blue-600">this page!</a>
          </Link>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
