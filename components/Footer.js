import Image from "next/image";
import Link from "next/link";

import Obsidian from "../public/obsidianLogo.svg";

const Footer = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center justify-between text-xs">
        <div className="w-1/3">
          <p className="">
            © 2010 - {new Date().getFullYear()}, Built with{" "}
            <Link
              href="https://nextjs.org/"
              className="text-indigo-500 hover:text-amber-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </Link>{" "}
            &&nbsp;
            <Link
              href="https://tailwindcss.com"
              className="text-indigo-500 hover:text-lime-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </Link>
            .
          </p>
        </div>
        <div className="w-1/3">
          <Link
            href="https://github.com/Isaac-Tait/novelSplashPage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Obsidian} height={20} width={20} alt={"GitHub"} />
          </Link>
        </div>
        <div className="w-1/3">
          <p className="">
            Another&nbsp;
            <Link
              href="https://mountaintopcoding.dev"
              className="text-indigo-500 hover:text-fuchsia-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              mountainTopCoding(&#127956;);
            </Link>{" "}
            project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;