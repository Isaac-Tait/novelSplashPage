import Link from "next/link";

import Footer from "../components/Footer";

export default function Substack() {
  return (
    <div className="heropattern-topography-yellow-400 bg-gray-100 flex flex-col min-h-screen overflow-y-scroll">
      <header className="fixed top-0 w-full px-2 bg-slate-600 font-serif">
        <div className="flex max-w-4xl justify-between mx-auto px-2">
          <Link
            href="https://story.wormwoodsaga.com"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
          >
            Engage
          </Link>
          <Link
            href="/"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white my-auto"
          >
            FOB
          </Link>
          <Link
            href="/support"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
          >
            Backup
          </Link>
        </div>
      </header>
      <div className="grow place-content-center items-center">
        <p className="max-w-6xl mx-auto text-sm md:text-lg lg:text-xl font-medium tracking-wide text-center pt-8 md:p-6 lg:p-10 font-mono text-slate-700">
          I am actively publishing the saga, which is comprised of three books.
          Aion is the first book and Part II went live mid-February 2025. I will
          be publishing a few chapters every week. To make sure you don't miss
          out you can follow along with{" "}
          <Link
            href="https://substack.com/@biit"
            className="text-indigo-400 underline hover:no-underline hover:text-indigo-500"
          >
            Substack
          </Link>{" "}
          and/or{" "}
          <Link
            href="https://bsky.app/profile/enlightenednomad.bsky.social"
            className="text-indigo-400 underline hover:no-underline hover:text-indigo-500"
          >
            Bluesky
          </Link>
        </p>
      </div>

      <div className="mt-auto pb-2">
        <Footer />
      </div>
    </div>
  );
}
