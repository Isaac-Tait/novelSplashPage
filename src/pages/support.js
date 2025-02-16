import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";

export default function Support() {
  return (
    <div className="heropattern-topography-yellow-400 bg-gray-100 flex flex-col min-h-screen overflow-y-auto">
      <header className="fixed top-0 w-full px-2 bg-slate-600 font-serif">
        <div className="flex max-w-4xl justify-between mx-auto">
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
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
          >
            FOB
          </Link>
          <Link
            href="/newsletter"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white my-auto"
          >
            Movement
          </Link>
        </div>
      </header>

      <section className="flex flex-col max-w-5xl mx-auto justify-center pt-8 md:pt-20">
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
            className="rounded-xl mx-auto shadow-lg shadow-yellow-400/90 ml-auto"
          />
          <h1 className="font-serif font-semibold text-2xl text-center">
            Thank you for supporting{" "}
            <span className="font-sans">Wormwood Saga</span>
          </h1>
          <div className="backdrop-opacity-10 backdrop-invert bg-white/50 rounded-lg">
            <p className="font-serif  text-slate-900 text-center">
              I chose to self publish my novel so that I could own 100% of my
              creation. The average cost of a book online is $9.50 (they range
              between $4 and $15). Of course the author on those platforms has
              to pay editors, designers, publishers, publicists, and the company
              &quot;selling&quot; their book. As an indie author I have worn all
              those hats in the publication of my book. It was a lot of work but
              also very rewarding. So, thanks for being here. I hope the saga
              has had (is having) a positive impact on you.{" "}
            </p>
            <p className="font-serif text-slate-900 text-center mt-4">
              Namaste
              <span role="img" aria-label="folded hands">
                &#128591;
              </span>{" "}
            </p>
          </div>
        </div>
      </section>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}
