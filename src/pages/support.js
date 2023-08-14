import React from "react";
import { loadStripe } from "@stripe/stripe-js";

import Image from "next/image";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  });

  return (
    <form
      action="/api/checkout_sessions"
      method="POST"
      className="heropattern-topography-yellow-400 bg-gray-100 h-screen"
    >
      <section>
        <Image
          src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1691976687/Novel/portrait_s6wbst.jpg"
          alt="author trail running portrait"
          width="300"
          height="450"
          className="rounded-xl"
        />
        <div></div>
        <button
          type="submit"
          role="link"
          className="h-12 p-2 bg-indigo-500 rounded-xl text-slate-300 cursor-pointer font-semibold"
        >
          Donate to the Saga
        </button>
      </section>
      <style jsx>
        {`
          form {
            display: grid;
            place-content: center;
          }
          button {
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}
