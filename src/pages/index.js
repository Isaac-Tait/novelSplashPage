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
                A Spiritually Mystic Speculative Queer Multiverse Epic that will
                take you on a mythical journey across realms and realities,
                where love and karma - woven into the very fabric of time -
                collide. As this Saga unfolds it will challenge long held dogmas
                rooted in hate, anger, and greed that have plagued our planet
                since its inception.
              </h3>
              <h3 className="my-2">
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
        </main>
        <div className="mt-auto pb-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
