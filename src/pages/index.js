import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="heropattern-topography-yellow-400 bg-gray-100 pt-2 flex flex-col min-h-screen overflow-y-scroll">
      <header className="fixed top-0 w-full px-2 bg-slate-600 font-serif">
        <div className="flex max-w-4xl justify-between mx-auto">
          <Link
            href="https://story.wormwoodsaga.com"
            target="__blank"
            className="text-yellow-500 text-base text-center md:text-2xl font-semibold tracking-widest hover:text-white"
          >
            Read the Saga
          </Link>
          <Link
            href="/newsletter"
            target="__blank"
            className="text-yellow-500 text-base text-center md:text-2xl font-semibold tracking-widest hover:text-white my-auto"
          >
            Newsletter
          </Link>
          <Link
            href="/support"
            target="__blank"
            className="text-yellow-500 text-base text-center md:text-2xl font-semibold tracking-widest hover:text-white"
          >
            Support the Author
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
          <h3 className="text-sm md:text-lg lg:text-xl font-medium tracking-wide text-center p-4 md:p-6 lg:p-10 font-mono text-slate-700">
            In a story as old as time Andor and Lilli meet and fall in love.
            However, as their love blossoms and then evolves a cosmic battle,
            that spans the multiverse, destined to unleash cataclysmic
            destruction upends their idyllic suburban &#34;American dream&#34;.
            Through the chaos they find themselves thrust into a fight for
            survival against the elements&nbsp;
            <span className="font-bold">and</span> an ancient evil. As they
            descend into the depths of lost hope, uncertainty, and a society
            plunged into the dark ages will they find the strength to survive
            and give the world a fighting chance for redemption?
          </h3>
        </div>
      </main>
      <div className="mt-auto pb-2">
        <Footer />
      </div>
    </div>
  );
}
