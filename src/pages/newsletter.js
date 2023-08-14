import Link from "next/link";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="heropattern-topography-yellow-400 bg-gray-100 flex flex-col min-h-screen overflow-y-scroll">
      <header className="fixed top-0 w-full px-2 bg-slate-600 font-serif">
        <div className="flex max-w-4xl justify-between mx-auto px-2">
          <Link
            href="https://story.wormwoodsaga.com"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
          >
            Read
          </Link>
          <Link
            href="/"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white my-auto"
          >
            Home
          </Link>
          <Link
            href="/support"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
          >
            Support
          </Link>
        </div>
      </header>
      <p className="text-sm md:text-lg lg:text-xl font-medium tracking-wide text-center pt-8 md:p-6 lg:p-10 font-mono text-slate-700">
        Once I have wrapped up the first part of the Saga{" "}
        <span className="italic text-sm">
          (Spring 2023 - I am currently writing Book Two)
        </span>
        . I am also envisioning several novella side stories to compliment the
        saga. To be sure you do not miss any new content when they are released
        please complete the form below. I will only contact you regarding
        Wormwood Saga - I promise.
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
      <div className="mt-auto pb-2">
        <Footer />
      </div>
    </div>
  );
}
