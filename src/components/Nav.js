import Link from "next/link";
import { useRouter } from "next/router";

/**
 * Single source of truth for the site's nav destinations.
 * `href` is matched against the current route to hide the page
 * the user is already on. External links (like Read) never match
 * a Next.js pathname, so they always show.
 */
const NAV_ITEMS = [
  { key: "home", label: "Home", href: "/", icon: HomeIcon },
  {
    key: "read",
    label: "Read",
    href: "https://story.wormwoodsaga.com",
    external: true,
    icon: ReadIcon,
  },
  {
    key: "newsletter",
    label: "Newsletter",
    href: "/newsletter",
    icon: NewsletterIcon,
  },
  { key: "support", label: "Support", href: "/support", icon: SupportIcon },
];

function useNavItems() {
  const router = useRouter();
  return NAV_ITEMS.filter((item) => item.href !== router.pathname);
}

/* ---------- Icons ---------- */

function HomeIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 10.5L12 4l8.5 6.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 9v9.5c0 .55.45 1 1 1H10v-5.5a1 1 0 011-1h2a1 1 0 011 1v5.5h3.5c.55 0 1-.45 1-1V9"
      />
    </svg>
  );
}

function ReadIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.5c-1.6-1.3-3.9-2-6.5-2-.6 0-1 .4-1 1v11c0 .6.4 1 1 1 2.6 0 4.9.7 6.5 2 1.6-1.3 3.9-2 6.5-2 .6 0 1-.4 1-1v-11c0-.6-.4-1-1-1-2.6 0-4.9.7-6.5 2z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5v13" />
    </svg>
  );
}

function NewsletterIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 6.75A1.25 1.25 0 014.75 5.5h14.5a1.25 1.25 0 011.25 1.25v10.5a1.25 1.25 0 01-1.25 1.25H4.75a1.25 1.25 0 01-1.25-1.25V6.75z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.5l8 6.25 8-6.25"
      />
    </svg>
  );
}

function SupportIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.5s-7.5-4.6-9.7-9.1C.9 8.2 2.3 5 5.4 4.4c1.9-.4 3.7.5 4.6 2.1.9-1.6 2.7-2.5 4.6-2.1 3.1.6 4.5 3.8 3.1 7-2.2 4.5-9.7 9.1-9.7 9.1z"
      />
    </svg>
  );
}

/* ---------- Desktop header ---------- */
/* Place this as the first child inside your page's flex-col wrapper,
   right before <main>. Text-only links, matches the original design. */

export function NavHeader() {
  const items = useNavItems();

  return (
    <header className="hidden md:block shrink-0 w-full md:px-2 bg-slate-600 font-serif">
      <div className="flex max-w-4xl justify-between mx-auto px-2">
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            className="text-yellow-500 text-2xl font-semibold tracking-widest hover:text-white my-auto"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

/* ---------- Mobile bottom tab bar ---------- */
/* Place this as the last child inside your page's flex-col wrapper,
   right after <main> (and before Footer, if Footer shows on mobile too). */

export function NavTabBar() {
  const items = useNavItems();

  return (
    <nav
      className="md:hidden shrink-0 bg-slate-600 font-serif"
      aria-label="Primary"
    >
      <div className="flex justify-around items-center pt-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              className="flex flex-col items-center gap-0.5 px-4 py-1 text-yellow-500 hover:text-white"
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-semibold tracking-wide">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
