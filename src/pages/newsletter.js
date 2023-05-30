import Link from "next/link";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="heropattern-topography-yellow-400 bg-gray-100 h-screen overflow-y-scroll">
      <header className="flex px-2 max-w-7xl mx-auto bg-slate-600 md:rounded-xl font-serif">
        <Link
          href="https://story.wormwoodsaga.com"
          target="__blank"
          className="text-yellow-500 text-base text-center md:text-2xl font-semibold tracking-widest hover:text-white"
        >
          Read The Story
        </Link>
        <Link
          href="/"
          target="__blank"
          className="text-yellow-500 text-base text-center md:text-2xl font-semibold tracking-widest hover:text-white my-auto"
        >
          Home
        </Link>
        <Link
          href="https://www.buymeacoffee.com/Isaactait"
          target="__blank"
          className="text-yellow-500 text-base text-center md:text-2xl font-semibold tracking-widest hover:text-white"
        >
          Support The Author
        </Link>
      </header>
      <div className="flex justify-center pt-8">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeKHGWCJ9qrkxEAYrDXj_OWEikxYPXon9n19iGXjDRALAhozA/viewform?embedded=true"
          width="640"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
