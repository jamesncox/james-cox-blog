export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen text-center w-full">
      {children}
    </div>
  );
}
