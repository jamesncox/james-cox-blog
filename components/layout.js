export default function Layout({ children }) {
  return (
    <div className="bg-gray-800 flex flex-col min-h-screen text-center">
      {children}
    </div>
  );
}
