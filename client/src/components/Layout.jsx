import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />
      <div className="flex-grow bg-gray-100 p-6">
        {children}
      </div>
      {/* Footer */}
      <Footer />

    </div>
  );
}