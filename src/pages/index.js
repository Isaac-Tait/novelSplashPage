import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="bg-blue-300 w-full flex justify-center rounded-xl">
          <h1 className="text-2xl font-black tracking-wider">Wormwood Saga</h1>
        </div>
        <div>
          <h3 className="text-lg font-medium tracking-wide">
            The saga is available to all to read. If you feel inclined you can{" "}
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
