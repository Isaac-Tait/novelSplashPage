import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-xs px-1 font-serif text-center">
      © 2010 - {new Date().getFullYear()}, Built with 🏳️‍🌈 by{" "}
      <Link
        href="https://mountaintopcoding.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 hover:text-amber-500"
      >
        mountainTopCoding(&#127956;);
      </Link>
    </div>
  );
};

export default Footer;
