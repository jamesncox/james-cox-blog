import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "James Cox 🐺";
export const siteTitle = "James' Blog";

export default function Layout({ children, home }) {
  return (
    <div className="bg-gray-800 flex flex-col min-h-screen text-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="">
        {home ? (
          <div className="mt-10">
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="font-bold font-mono mt-5 text-3xl text-yellow-300">
              {name}
            </h1>
          </div>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="">
              <Link href="/">
                <a className="">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className="w-full h-24 border-t border-blue-300 text-lg text-blue-100 flex flex-col justify-center mt-auto">
        <p>
          Contact me at{" "}
          <a
            className="text-yellow-300 hover:text-green-300"
            href="https://twitter.com/MemRook"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            className="text-yellow-300 hover:text-green-300"
            href="https://www.linkedin.com/in/jamesnathanielcox/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
        <p className="text-blue-300">
          Made with ❤️‍ by{" "}
          <a
            className="font-bold text-yellow-300 hover:text-green-300"
            href="https://www.jamescox.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            James Cox
          </a>
        </p>
        <p className="text-blue-300">
          {"Copyright © "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
