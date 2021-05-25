import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1 className="text-xl font-bold text-green-600">First Post</h1>
      <h2>
        <Link href="/">
          <a className="font-mono font-bold text-xl text-blue-600">
            Back to home
          </a>
        </Link>
      </h2>
    </Layout>
  );
}
