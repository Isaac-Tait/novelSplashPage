import Image from "next/image";
import Link from "next/link";

import Obsidian from "../public/obsidianLogo.svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-between text-xs">
      {/* Copyright */}
      <p className="">
        © 2010 - {new Date().getFullYear()}, Built with{" "}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>{" "}
        &&nbsp;
        <Link
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          TailwindCSS
        </Link>
        .
      </p>
      {/* Obsidian Logo */}
      <Link
        href="https://github.com/Isaac-Tait/novelSplashPage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Obsidian} height={20} width={20} alt={"GitHub"} />
      </Link>
      {/* mountainTopCoding Plug */}
      <p className="text-indigo-400">
        Another&nbsp;
        <Link
          href="https://mountaintopcoding.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          mountainTopCoding(&#127956;);
        </Link>{" "}
        project
      </p>
    </div>
  );
};

export default Footer;
