import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wormwood Saga - A Science Fiction Thriller by Isaac Tait</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heropattern-topography-yellow-400 bg-gray-100 pt-2 flex flex-col min-h-screen overflow-y-scroll">
        <header className="fixed top-0 w-full md:px-2 bg-slate-600 font-serif">
          <div className="flex max-w-4xl justify-between mx-auto px-2">
            <Link
              href="https://story.wormwoodsaga.com"
              target="__blank"
              className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
            >
              Engage
            </Link>
            <Link
              href="/newsletter"
              className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white my-auto"
            >
              Movement
            </Link>
            <Link
              href="/support"
              className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
            >
              Backup
            </Link>
          </div>
        </header>
        <main className="grow place-content-center justify-between">
          <h1 className="font-semibold text-4xl text-center lg:text-6xl tracking-wider font-sans p-2 text-slate-600 mt-4">
            Wormwood Saga
          </h1>
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683218121/Andor_s_Mountain_refrry.jpg"
            alt="watercolor painting of Andor's mountain"
            height={400}
            width={600}
            className="mx-auto rounded-xl"
          />
          <div className="bg-white opacity-70 rounded-lg">
            <div className="text-sm md:text-lg lg:text-xl font-medium tracking-wide text-center font-mono text-slate-700">
              <h3 className=" italic font-sans">
                A blend of Buddhist spirituality, Native American legend, and
                xtian mythology, this Speculative Queer Multiverse Epic takes
                readers on a mythical journey across realms and realities, where
                love and karma - woven into the very fabric of time - come to a
                head. Will it be enough to save the cosmos?
              </h3>
              <h3 className="my-2">
                In a universe fractured by destruction and despair, Andor and
                Lilli are forced to flee to an austere wilderness of towering
                peaks and untamed beauty. Amid alpine lakes and the snowbound
                wilds, they uncover a deeper connection — to the land, to each
                other, and to an enigmatic extra-dimensional task force.
                Together, they must battle an ancient evil, threatening not just
                everything they hold dear, but the entire universe!
              </h3>
            </div>
          </div>
        </main>
        <div className="mt-auto pb-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
