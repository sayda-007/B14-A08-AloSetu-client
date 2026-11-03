import Image from "next/image";
import Link from "next/link";
import { unstable_cache } from "next/cache";
import "./Footer.css";

const getCurrentYear = unstable_cache(
  async () => new Date().getFullYear(),
  ["current-year"],
  { revalidate: 86400 }
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Upcoming Events", href: "/upcoming-events" },
];

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="site-footer" aria-label="AloSetu footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-brand-link" aria-label="AloSetu home">
            <Image
              src="/alosetu-logo-horizontal.svg"
              alt="AloSetu"
              width={220}
              height={70}
              priority
              className="footer-brand-image"
            />
          </Link>
          <p className="footer-brand-copy">
            Bringing people together through community service, shared action, and meaningful connections.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get Involved</h3>
          <p className="footer-involvement-copy">
            Every small contribution can help create a stronger community.
          </p>
          <Link href="/#events" className="footer-action-link">
            Explore Opportunities
          </Link>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="footer-divider" />
        <div className="footer-meta">
          <span>© {currentYear} AloSetu. All rights reserved.</span>
          <span>Made with care for stronger communities.</span>
        </div>
      </div>
    </footer>
  );
}
