import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="SOSP Logo"
            width={40}
            height={40}
          />

          <h1 className="text-2xl font-bold text-blue-600">
            SOSP
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden gap-8 text-gray-700 md:flex">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>

          <li>
            <a href="/projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>

          <li>
            <a href="#timeline" className="hover:text-blue-600">
              Timeline
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:text-blue-600">
              FAQ
            </a>
          </li>

          <li>
            <a href="/join" className="hover:text-blue-600">
              Join
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Join Now
        </button>
      </div>
    </nav>
  );
}