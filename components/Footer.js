export default function Footer() {
  return (
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
  );
}
