import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";
import { NavHeader, NavTabBar } from "../components/Nav";

export default function Substack() {
  return (
    <div>
      <Head>
        <title>Newsletter - Wormwood Saga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heropattern-topography-yellow-400 bg-gray-100 h-dvh w-full overflow-hidden flex flex-col">
        <NavHeader />

        <main className="flex-1 min-h-0 flex flex-col justify-center items-center px-2 overflow-hidden">
          <h1 className="shrink-0 font-semibold text-2xl text-center lg:text-6xl tracking-wider font-sans text-slate-600 md:mt-4 mb-4">
            Wormwood Saga
          </h1>
          <p className="max-w-6xl mx-auto text-sm md:text-lg lg:text-xl font-medium tracking-wide text-center md:p-6 lg:p-10 font-mono text-slate-700">
            I am actively publishing the saga, which is comprised of three
            books. Book I - Aiōn the first book was written in 2010, Book II -
            Asi was released February 2025, Book III - Annihilation was released
            August of 2026. I will be publishing a few chapters every week. To
            make sure you don&#39;t miss out you can follow along with{" "}
            <Link
              href="https://www.substack.mountaintopcoding.dev/"
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
        </main>

        <NavTabBar />

        <div className="hidden md:block shrink-0 pb-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
