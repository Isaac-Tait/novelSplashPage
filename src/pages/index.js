import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="bg-blue-300 w-full flex justify-center rounded-xl">
        <h1 className="text-2xl font-black tracking-wider">Wormwood Saga</h1>
      </div>
    </main>
  );
}
