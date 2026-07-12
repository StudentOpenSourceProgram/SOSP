import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const links = [
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Programs",
      path: "/programs"
    },
    {
      name: "Projects",
      path: "/projects"
    },
    {
      name: "Contact",
      path: "/contact"
    }
  ];

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="SOSP Logo"
            width={40}
            height={40}
          />

          <h1 className="text-2xl font-bold text-blue-600">
            SOSP
          </h1>
        </Link>


        {/* Navigation */}
        <ul className="hidden gap-8 text-gray-700 md:flex">

          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="hover:text-blue-600"
              >
                {link.name}
              </Link>
            </li>
          ))}

        </ul>


        {/* Button */}
        <Link
          href="/join"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Join Now
        </Link>

      </div>
    </nav>
  );
}