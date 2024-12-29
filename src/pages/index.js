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
        <main className="grow place-content-center justify-between">
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
                With the demonic force vanquished life can return to normal and
                the world can begin to heal - but not for Lilli. The grim
                reality is that it has taken everything from her - everything
                except for their daughter.
              </h3>
              <hr />
              <h3 className="my-2">
                In a world devoid of love, goodness, and happiness only the
                horror of destruction, carnage, and chaos reign supreme.
                Compelled by a global catastrophe and an ancient malevolence
                Andor and Lilli escape to an austere landscape of craggy peaks,
                alpine lakes, snow, and wild animals. Here, they forge new
                connections with the land, each other, and an extra-dimensional
                task force deployed to help restore order, peace, and love to
                the cosmos.
              </h3>
              <h3 className="mb-2">
                As the saga unfolds the two young lovers not only grapple with
                their own survival but are thrust into the midst of an
                intergalactic battle between the ultimate good and the most
                heinous evil.
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
