// import Image from "next/image";
import Link from "next/link";

import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="heropattern-topography-yellow-400 bg-gray-100 pt-2 h-screen">
      <header className="flex justify-between px-2 max-w-7xl mx-auto bg-slate-500 rounded-xl">
        <Link
          href="https://story.wormwoodsaga.com"
          target="__blank"
          className="text-yellow-500 text-2xl font-semibold tracking-widest hover:text-white"
        >
          Read the Story
        </Link>
        <Link
          href="https://www.buymeacoffee.com/Isaactait"
          target="__blank"
          className="text-yellow-500 text-2xl font-semibold tracking-widest hover:text-white"
        >
          Support the Author
        </Link>
        <Link
          href="https://mountaintopcoding.dev"
          target="__blank"
          className="text-yellow-500 text-2xl font-semibold tracking-widest hover:text-white"
        >
          Who Am I?
        </Link>
      </header>
      <main className="flex flex-col items-center justify-between p-24">
        <div>
          <h3 className="text-lg font-medium tracking-wide">
            The saga is available to all. If you feel inclined you can{" "}
            <Link
              href="https://www.buymeacoffee.com/Isaactait"
              target="__blank"
              className="text-blue-400 hover:bg-slate-500 p-1 hover:text-white hover:rounded-xl"
            >
              buy me a coffee (so that I have the energy to keep the saga going)
            </Link>
            .
          </h3>
        </div>
      </main>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
