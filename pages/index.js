import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
// import Date from "../components/date";

// import { getSortedPostsData } from '../lib/posts'

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mt-5 text-xl text-blue-100">
        <p>Hello ✌️,</p>
        <p>
          I'm James. A good developer, better human and aspiring freelancer.
        </p>
        <p>This is my blog, where I share what I know.</p>
      </section>

      <section className={"mt-5"}>
        <h2 className="font-mono text-yellow-300 text-2xl">Blog</h2>
        {/* <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <li className="" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
      </section>
    </Layout>
  );
}
