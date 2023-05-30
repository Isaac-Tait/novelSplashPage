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
      <p className="text-sm md:text-lg lg:text-xl font-medium tracking-wide text-center p-4 md:p-6 lg:p-10 font-mono text-slate-700">
        Once I have wrapped up the first part of the Saga (I am still working on
        Part IV) I am also envisioning several novella side stories to
        compliment the saga. To be sure you do not miss any new content when
        they are released please complete the form below. I will only contact
        you regarding Wormwood Saga - I promise.
      </p>
      <div className="flex justify-center pt-2">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeKHGWCJ9qrkxEAYrDXj_OWEikxYPXon9n19iGXjDRALAhozA/viewform?embedded=true"
          width="640"
          height="850"
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
