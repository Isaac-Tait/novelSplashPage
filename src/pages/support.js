import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";
import { NavHeader, NavTabBar } from "../components/Nav";

export default function Support() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Support - Wormwood Saga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heropattern-topography-yellow-400 bg-gray-100 h-dvh w-full overflow-hidden flex flex-col">
        <NavHeader />

        <main className="flex-1 min-h-0 flex flex-col justify-center gap-2 px-2 pb-16 md:pb-0 overflow-hidden">
          <h1 className="shrink-0 font-serif font-semibold text-lg text-slate-600 md:text-2xl text-center">
            <Link
              href="https://buymeacoffee.com/isaactait"
              className="underline hover:no-underline hover:text-indigo-500"
            >
              Support <span className="font-sans">Wormwood Saga</span>{" "}
            </Link>
          </h1>

          <div className="relative flex-1 min-h-0 mx-auto w-full max-w-2xl overflow-hidden rounded-xl">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1691976687/Novel/portrait_s6wbst.jpg"
              alt="author trail running portrait"
              fill
              sizes="(max-width: 768px) 70vw, 300px"
              className="object-cover"
              priority
            />
          </div>

          {/* Desktop: text shown inline, same as before */}
          <div className="hidden md:block shrink-0 backdrop-opacity-10 backdrop-invert bg-white/50 rounded-lg max-w-5xl mx-auto">
            <p className="font-serif text-slate-900 text-center p-2">
              As an indie author this saga is 100% my own creation. The average
              cost of a book online is $9.50 (they range between $4 and $15). Of
              course the author on those platforms has to pay editors,
              designers, publishers, publicists, and the company
              &quot;selling&quot; their book. As an indie author I have worn all
              those hats in the publication of my book. It was a lot of work but
              also very rewarding. So, thanks for being here. I hope the saga
              has had (is having) a positive impact on you. I would love it if
              you would support the saga, and if you feel so inclined you can{" "}
              <Link
                href="https://buymeacoffee.com/isaactait"
                className="text-indigo-400 underline hover:no-underline hover:text-indigo-500"
              >
                do so here
              </Link>
            </p>
            <p className="font-serif text-slate-900 text-center pb-2">
              Namaste
              <span role="img" aria-label="folded hands">
                &#128591;
              </span>{" "}
            </p>
          </div>

          {/* Mobile: tab that opens the drawer */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden shrink-0 mx-auto mb-1 flex items-center gap-1.5 rounded-full bg-slate-600 px-4 py-1.5 text-yellow-500 font-serif text-sm font-semibold tracking-widest hover:text-white"
          >
            Why Support
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

        <NavTabBar />

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
              Why Support
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

          <div className="px-4 py-4 pb-20 space-y-4">
            <div className="bg-white opacity-70 rounded-lg">
              <p className="font-serif text-sm text-slate-900 text-center px-2 py-2">
                As an indie author this saga is 100% my own creation. The
                average cost of a book online is $9.50 (they range between $4
                and $15). Of course the author on those platforms has to pay
                editors, designers, publishers, publicists, and the company
                &quot;selling&quot; their book. As an indie author I have worn
                all those hats in the publication of my book. It was a lot of
                work but also very rewarding. So, thanks for being here. I hope
                the saga has had (is having) a positive impact on you. I would
                love it if you would support the saga, and if you feel so
                inclined you can{" "}
                <Link
                  href="https://buymeacoffee.com/isaactait"
                  className="text-indigo-400 underline hover:no-underline hover:text-indigo-500"
                >
                  do so here
                </Link>
              </p>
              <p className="font-serif text-sm text-slate-900 text-center pb-2">
                Namaste
                <span role="img" aria-label="folded hands">
                  &#128591;
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
