import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="heropattern-topography-yellow-400 bg-gray-100 pt-2 h-screen">
      <header className="flex justify-between px-2 max-w-7xl mx-auto bg-slate-500 rounded-xl font-serif">
        <Link
          href="https://story.wormwoodsaga.com"
          target="__blank"
          className="text-yellow-500 text-xs md:text-2xl font-semibold tracking-widest hover:text-white"
        >
          Read the Story
        </Link>
        <Link
          href="https://www.buymeacoffee.com/Isaactait"
          target="__blank"
          className="text-yellow-500 text-xs md:text-2xl font-semibold tracking-widest hover:text-white"
        >
          Support the Author
        </Link>
        <Link
          href="https://mountaintopcoding.dev"
          target="__blank"
          className="text-yellow-500 text-xs md:text-2xl font-semibold tracking-widest hover:text-white"
        >
          Who Am I?
        </Link>
      </header>
      <main className="flex flex-col items-center justify-between p-4">
        <h1 className="font-semibold text-4xl text-center lg:text-6xl tracking-wider font-sans py-4 lg:py-8 xl:py-10">
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
        <h3 className="text-sm md:text-lg lg:text-xl font-medium tracking-wide text-center p-4 md:p-6 lg:p-10 font-mono">
          The saga is available to all. If you feel inclined you can{" "}
          <Link
            href="https://www.buymeacoffee.com/Isaactait"
            target="__blank"
            className="text-blue-400 hover:bg-slate-500 p-1 hover:text-white hover:rounded-xl"
          >
            buy me a coffee
          </Link>
          (so that I have the energy to keep working on publishing the saga)
        </h3>
      </main>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
