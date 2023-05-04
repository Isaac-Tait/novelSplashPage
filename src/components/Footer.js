import Image from "next/image";
import Link from "next/link";

import Obsidian from "../../public/obsidianLogo.svg";

const Footer = () => {
  return (
    <div className="md:flex items-center justify-between text-xs px-1 font-serif">
      {/* Copyright */}
      <div className="hidden md:block">
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
      </div>
      {/* Obsidian Logo */}
      <div className="flex justify-center mb-1">
        <Link
          href="https://github.com/Isaac-Tait/novelSplashPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Obsidian} height={20} width={20} alt={"GitHub"} />
        </Link>
      </div>
      {/* mountainTopCoding Plug */}
      <div className="hidden md:block">
        Another&nbsp;
        <Link
          href="https://mountaintopcoding.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          mountainTopCoding(&#127956;);
        </Link>{" "}
        project
      </div>
    </div>
  );
};

export default Footer;
