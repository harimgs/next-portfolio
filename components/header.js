import Image from "next/legacy/image";
import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width="180"
              height="52"
            ></Image>
            {/* <span className="ml-3 text-xl">{"HaRim's Portfolio"}</span> */}
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="/projects" className="mr-5 hover:text-gray-900">
              Projects
            </Link>
            <a className="mr-5 hover:text-gray-900">Contact Me</a>
          </nav>

          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}