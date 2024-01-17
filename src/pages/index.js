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
              Read
            </Link>
            <Link
              href="/newsletter"
              className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white my-auto"
            >
              Newsletter
            </Link>
            <Link
              href="/support"
              className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
            >
              Support
            </Link>
          </div>
        </header>
        <main className="flex flex-col items-center justify-between p-4">
          <h1 className="font-semibold text-4xl text-center lg:text-6xl tracking-wider font-sans py-4 lg:py-8 xl:py-10 text-slate-600 mt-4">
            Wormwood Saga
          </h1>
          {/* sm breakpoint image */}
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683218121/Andor_s_Mountain_refrry.jpg"
            alt="watercolor painting of Andor's mountain"
            height={400}
            width={600}
            className="mx-auto rounded-xl block 2xl:hidden"
          />
          {/* 2xl breakpoint image */}
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683218121/Andor_s_Mountain_refrry.jpg"
            alt="watercolor painting of Andor's mountain"
            height={600}
            width={800}
            className="mx-auto rounded-xl hidden 2xl:block"
          />
          <div className="bg-white opacity-70 rounded-lg mt-2">
            <div className="text-sm md:text-lg lg:text-xl font-medium tracking-wide text-center p-4 md:p-6 lg:p-10 font-mono text-slate-700">
              <h3 className="mb-1 italic font-sans">
                &quot;In a vast multiverse filled with countless parallel
                universes, convergence is inevitable.&quot;
              </h3>
              <hr />
              <h3 className="my-2">
                On the realm known as Earth, Andor and Lilli paths intertwine,
                and they embark on a journey of life together. Through the
                crucibles of war, destruction, fear, and loss their bond is
                forged. As their love grows they find themselves thrust into an
                intergalactic struggle.
              </h3>
              <h3 className="mb-2">
                Meanwhile, in the realm known by some as Sukhavati, an ancient
                malevolence begins to stir, threatening to not only overtake the
                Kingdom but the heart of the cosmos itself.
              </h3>
              <h3 className="">
                As the two universes collide and the saga unfolds Lilli and
                Andor love must adapt and overcome if they are to make it
                through the carnage and chaos. Through this journey the two
                young lovers find themselves thrust into a harrowing battle for
                survival, as they grapple with the forces of evil that seek to
                engulf not just their realm but the entire cosmos.
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
