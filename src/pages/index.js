import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Wormwood Saga - A Science Fiction Thriller by Isaac Tait</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heropattern-topography-yellow-400 bg-gray-100 h-dvh w-full overflow-hidden flex flex-col">
        {/* Desktop nav only — mobile nav lives in the bottom tab bar */}
        <header className="hidden md:block shrink-0 w-full md:px-2 bg-slate-600 font-serif">
          <div className="flex max-w-4xl justify-between mx-auto px-2">
            <Link
              href="https://story.wormwoodsaga.com"
              target="_blank"
              className="text-yellow-500 text-2xl font-semibold tracking-widest hover:text-white"
            >
              Read
            </Link>
            <Link
              href="/newsletter"
              className="text-yellow-500 text-2xl font-semibold tracking-widest hover:text-white my-auto"
            >
              Newsletter
            </Link>
            <Link
              href="/support"
              className="text-yellow-500 text-2xl font-semibold tracking-widest hover:text-white"
            >
              Support
            </Link>
          </div>
        </header>

        <main className="flex-1 min-h-0 flex flex-col justify-center gap-2 px-2 overflow-hidden">
          <h1 className="shrink-0 font-semibold text-2xl text-center lg:text-6xl tracking-wider font-sans text-slate-600 md:mt-4">
            Wormwood Saga
          </h1>

          {/* Desktop: text shown inline, same as before */}
          <div className="hidden md:block shrink-0 bg-white opacity-70 rounded-lg mx-4">
            <h3 className="italic font-sans text-lg lg:text-xl font-medium tracking-wide text-center font-mono text-slate-700 px-2 py-1">
              A Spiritually Mystic Speculative Queer Multiverse Epic - prepare
              to embark on a saga that will take you on a mythical journey
              across realms and realities, where love and karma - woven into the
              very fabric of time - collide. As this Saga unfolds it will
              challenge long held dogmas rooted in hate, ignorance, and greed
              that have plagued our planet since it began.
            </h3>
          </div>

          {/* Photo: dominant on mobile, same relative sizing on desktop */}
          <div className="relative flex-1 min-h-0 mx-auto w-full max-w-2xl overflow-hidden rounded-xl">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683218121/Andor_s_Mountain_refrry.jpg"
              alt="watercolor painting of Andor's mountain"
              fill
              sizes="(max-width: 768px) 92vw, 600px"
              className="object-cover"
              priority
            />
          </div>

          {/* Desktop: second paragraph shown inline */}
          <div className="hidden md:block shrink-0 bg-white opacity-70 rounded-lg max-w-6xl mx-auto">
            <h3 className="text-lg lg:text-xl font-medium tracking-wide text-center font-mono text-slate-700 px-2 py-1">
              In a universe fractured by destruction, carnage, & despair, Andor
              and Lilli flee to an austere wilderness of towering peaks and
              untamed beauty. As castaways adrift in a world, haunted by a
              tenacious evil, they forge a new home. Meanwhile, in an alternate
              dimension, a mysterious extra-dimensional task force is busy
              tipping the scales of power to expose a ghastly evil, which has
              hidden in plain sight for far too long.
            </h3>
          </div>

          {/* Mobile: tab that opens the drawer */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden shrink-0 mx-auto mb-1 flex items-center gap-1.5 rounded-full bg-slate-600 px-4 py-1.5 text-yellow-500 font-serif text-sm font-semibold tracking-widest hover:text-white"
          >
            About the Saga
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </main>

        {/* Mobile bottom tab bar — replaces top nav, sits in the thumb zone */}
        <nav
          className="md:hidden shrink-0 bg-slate-600 font-serif"
          aria-label="Primary"
        >
          <div className="flex justify-around items-center pt-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]">
            <Link
              href="https://story.wormwoodsaga.com"
              target="_blank"
              className="flex flex-col items-center gap-0.5 px-4 py-1 text-yellow-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.5c-1.6-1.3-3.9-2-6.5-2-.6 0-1 .4-1 1v11c0 .6.4 1 1 1 2.6 0 4.9.7 6.5 2 1.6-1.3 3.9-2 6.5-2 .6 0 1-.4 1-1v-11c0-.6-.4-1-1-1-2.6 0-4.9.7-6.5 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.5v13"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wide">Read</span>
            </Link>
            <Link
              href="/newsletter"
              className="flex flex-col items-center gap-0.5 px-4 py-1 text-yellow-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.5 6.75A1.25 1.25 0 014.75 5.5h14.5a1.25 1.25 0 011.25 1.25v10.5a1.25 1.25 0 01-1.25 1.25H4.75a1.25 1.25 0 01-1.25-1.25V6.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6.5l8 6.25 8-6.25"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wide">
                Newsletter
              </span>
            </Link>
            <Link
              href="/support"
              className="flex flex-col items-center gap-0.5 px-4 py-1 text-yellow-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.5s-7.5-4.6-9.7-9.1C.9 8.2 2.3 5 5.4 4.4c1.9-.4 3.7.5 4.6 2.1.9-1.6 2.7-2.5 4.6-2.1 3.1.6 4.5 3.8 3.1 7-2.2 4.5-9.7 9.1-9.7 9.1z"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wide">
                Support
              </span>
            </Link>
          </div>
        </nav>

        <div className="hidden md:block shrink-0 pb-2">
          <Footer />
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 max-h-[75vh] overflow-y-auto rounded-t-2xl bg-gray-100 heropattern-topography-yellow-400 shadow-xl transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="sticky top-0 flex items-center justify-between bg-slate-600 px-4 py-3 font-serif">
            <span className="text-yellow-500 text-lg font-semibold tracking-widest">
              About the Saga
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="text-yellow-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="px-4 py-4 space-y-4">
            <div className="bg-white opacity-70 rounded-lg">
              <h3 className="italic font-sans text-sm font-medium tracking-wide text-center font-mono text-slate-700 px-2 py-2">
                A Spiritually Mystic Speculative Queer Multiverse Epic - prepare
                to embark on a saga that will take you on a mythical journey
                across realms and realities, where love and karma - woven into
                the very fabric of time - collide. As this Saga unfolds it will
                challenge long held dogmas rooted in hate, ignorance, and greed
                that have plagued our planet since it began.
              </h3>
            </div>
            <div className="bg-white opacity-70 rounded-lg">
              <h3 className="text-sm font-medium tracking-wide text-center font-mono text-slate-700 px-2 py-2">
                In a universe fractured by destruction, carnage, & despair,
                Andor and Lilli flee to an austere wilderness of towering peaks
                and untamed beauty. As castaways adrift in a world, haunted by a
                tenacious evil, they forge a new home. Meanwhile, in an
                alternate dimension, a mysterious extra-dimensional task force
                is busy tipping the scales of power to expose a ghastly evil,
                which has hidden in plain sight for far too long.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
