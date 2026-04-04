export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white mt-10">
        
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          
          {/* Left */}
          <p className="text-sm">
            © {new Date().getFullYear()} Finance Dashboard. All rights reserved.
          </p>
  
          {/* Right */}
          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="https://github.com/Adarshkryadav13"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-kumar-yadav-96a959347/"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>
  
        </div>
  
      </footer>
    );
  }