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
      <div className="heropattern-topography-yellow-400 bg-gray-100 h-dvh w-full overflow-hidden flex flex-col">
        <header className="shrink-0 w-full md:px-2 bg-slate-600 font-serif">
          <div className="flex max-w-4xl justify-between mx-auto px-2">
            <Link
              href="https://story.wormwoodsaga.com"
              target="_blank"
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

        <main className="flex-1 min-h-0 flex flex-col justify-center gap-2 px-2 overflow-hidden">
          <h1 className="shrink-0 font-semibold text-2xl text-center lg:text-5xl tracking-wider font-sans text-slate-600">
            Wormwood Saga
          </h1>

          <div className="shrink-0 bg-white opacity-70 rounded-lg mx-2">
            <h3 className="italic font-sans text-xs md:text-base lg:text-lg font-medium tracking-wide text-center font-mono text-slate-700 line-clamp-4 md:line-clamp-none px-2 py-1">
              A Spiritually Mystic Speculative Queer Multiverse Epic - prepare
              to embark on a saga that will take you on a mythical journey
              across realms and realities, where love and karma - woven into the
              very fabric of time - collide. As this Saga unfolds it will
              challenge long held dogmas rooted in hate, ignorance, and greed
              that have plagued our planet since it began.
            </h3>
          </div>

          <div className="relative flex-1 min-h-0 mx-auto w-full max-w-2xl">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1683218121/Andor_s_Mountain_refrry.jpg"
              alt="watercolor painting of Andor's mountain"
              fill
              sizes="(max-width: 768px) 90vw, 600px"
              className="object-contain rounded-xl"
            />
          </div>

          <div className="shrink-0 bg-white opacity-70 rounded-lg max-w-6xl mx-auto">
            <h3 className="text-xs md:text-base lg:text-lg font-medium tracking-wide text-center font-mono text-slate-700 line-clamp-3 md:line-clamp-none px-2 py-1">
              In a universe fractured by destruction, carnage, & despair, Andor
              and Lilli flee to an austere wilderness of towering peaks and
              untamed beauty. As castaways adrift in a world, haunted by a
              tenacious evil, they forge a new home. Meanwhile, in an alternate
              dimension, a mysterious extra-dimensional task force is busy
              tipping the scales of power to expose a ghastly evil, which has
              hidden in plain sight for far too long.
            </h3>
          </div>
        </main>

        <div className="shrink-0 pb-1">
          <Footer />
        </div>
      </div>
    </div>
  );
}
