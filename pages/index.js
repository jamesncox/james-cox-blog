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
      <section className="mt-5 font-mono font-bold text-xl text-blue-300">
        <p>Hello ✌️,</p>
        <p>
          I'm James. A good developer, better human and aspiring freelancer.
        </p>
        <p>This is my blog, where I share what I know.</p>
        <p>
          You can contact me on{" "}
          <a
            className="text-yellow-300 hover:text-green-300"
            href="https://twitter.com/MemRook"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            className="text-yellow-300 hover:text-green-300"
            href="https://www.linkedin.com/in/jamesnathanielcox/"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>

      <section className={"mt-5"}>
        <h2 className="text-yellow-300 text-2xl">Blog</h2>
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
      {/* <footer className="bg-gray-800 flex items-center justify-center w-full h-24 border-t border-blue-300"></footer> */}
    </Layout>
  );
}
