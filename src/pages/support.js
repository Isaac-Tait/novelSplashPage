import React from "react";
import { loadStripe } from "@stripe/stripe-js";

import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

function handleStripeCheckout() {
  stripePromise.then((stripe) => {
    fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((session) => {
        window.open(session.url, "_blank", "noopener,noreferrer");
      })
      .catch((error) => console.error("Stripe checkout error:", error));
  });
}
export default function PreviewPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you are ready.",
      );
    }
  });

  return (
    <div className="heropattern-topography-yellow-400 bg-gray-100 flex flex-col min-h-screen overflow-y-auto">
      <header className="fixed top-0 w-full px-2 bg-slate-600 font-serif">
        <div className="flex max-w-4xl justify-between mx-auto">
          <Link
            href="https://story.wormwoodsaga.com"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
          >
            Read
          </Link>
          <Link
            href="/"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/newsletter"
            target="__blank"
            className="text-yellow-500 text-sm text-center md:text-2xl font-semibold tracking-widest hover:text-white my-auto"
          >
            Newsletter
          </Link>
        </div>
      </header>

      <section className="flex flex-col max-w-5xl mx-auto justify-center pt-8 md:pt-20">
        <div className="flex flex-col items-center">
          <div className="flex justify-center w-full">
            <button
              type="button"
              className="p-2 md:w-1/4 mx-auto bg-indigo-500 rounded-xl text-slate-300 cursor-pointer font-semibold"
              onClick={handleStripeCheckout}
            >
              Support the saga
            </button>
          </div>
        </div>
        <div className="my-auto p-2">
          <h1 className="font-serif font-semibold text-2xl text-center">
            Greetings!{" "}
            <span role="img" aria-label="vulcan salute">
              &#128406;
            </span>{" "}
          </h1>
          <h1 className="font-serif font-semibold text-2xl text-center">
            Thank you for supporting{" "}
            <span className="font-sans">Wormwood Saga</span>
          </h1>
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1691976687/Novel/portrait_s6wbst.jpg"
            alt="author trail running portrait"
            width={300}
            height={450}
            className="rounded-xl mx-auto shadow-lg shadow-yellow-400/90 ml-auto"
          />
          <div className="backdrop-opacity-10 backdrop-invert bg-white/50 rounded-lg">
            <p className="font-serif  text-slate-900 text-center">
              I chose to self publish my novel so that I could own 100% of my
              creation. The average cost of a book online is $9.50 (they range
              between $4 and $15). Of course the author on those platforms has
              to pay editors, designers, publishers, publicists, and the company
              &quot;selling&quot; their book. As an indie author I have worn all
              those hats in the publication of my book. It was a lot of work but
              also very rewarding. So, thanks for being here. I hope the saga
              has had (is having) a positive impact on you.{" "}
            </p>
            <p className="font-serif text-slate-900 text-center mt-4">
              Namaste
              <span role="img" aria-label="folded hands">
                &#128591;
              </span>{" "}
            </p>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          button {
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>

      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}
