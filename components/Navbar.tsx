export default function Navbar() {
    return (
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="text-white hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }