import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";
import { NavHeader, NavTabBar } from "../components/Nav";

export default function Support() {
  return (
    <div>
      <Head>
        <title>Support - Wormwood Saga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heropattern-topography-yellow-400 bg-gray-100 min-h-dvh w-full flex flex-col">
        <NavHeader />

        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <section className="flex flex-col max-w-5xl mx-auto justify-center pt-6 px-2 md:pt-20">
            <div className="my-auto p-2">
              <h1 className="font-serif font-semibold text-2xl text-center mb-2">
                <Link
                  href="https://buymeacoffee.com/isaactait"
                  className="text-indigo-400 underline hover:no-underline hover:text-indigo-500"
                >
                  Support The <span className="font-sans">Saga</span>{" "}
                  <span role="img" aria-label="vulcan salute">
                    &#128406;
                  </span>{" "}
                </Link>
              </h1>
              <Image
                src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1691976687/Novel/portrait_s6wbst.jpg"
                alt="author trail running portrait"
                width={300}
                height={450}
                className="rounded-xl mx-auto shadow-lg shadow-yellow-400/90"
              />
              <h1 className="font-serif font-semibold text-2xl text-center mt-2">
                Thank you for supporting{" "}
                <span className="font-sans">Wormwood Saga</span>
              </h1>
              <div className="backdrop-opacity-10 backdrop-invert bg-white/50 rounded-lg mt-2">
                <p className="font-serif text-slate-900 text-center p-2">
                  As an indie author this saga is 100% my own creation. The
                  average cost of a book online is $9.50 (they range between $4
                  and $15). Of course the author on those platforms has to pay
                  editors, designers, publishers, publicists, and the company
                  &quot;selling&quot; their book. As an indie author I have worn
                  all those hats in the publication of my book. It was a lot of
                  work but also very rewarding. So, thanks for being here. I
                  hope the saga has had (is having) a positive impact on you. I
                  would love it if you would support the saga, and if you feel
                  so inclined you can{" "}
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
            </div>
          </section>

          <div className="hidden md:block pb-2">
            <Footer />
          </div>
        </main>

        <NavTabBar />
      </div>
    </div>
  );
}
