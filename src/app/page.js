import Image from "next/image";

const features = [
  {
    title: "Discover Opportunities",
    text: "Explore upcoming community-service initiatives and find meaningful ways to contribute.",
    icon: "✦",
  },
  {
    title: "Join the Community",
    text: "Connect with people who share your interest in helping local communities.",
    icon: "◎",
  },
  {
    title: "Start an Initiative",
    text: "Create a community-service event and invite others to participate.",
    icon: "▣",
  },
];

const gallery = [
  {
    title: "Community cleanup",
    src: "/images/community-gallery/community-cleanup.jpg",
  },
  {
    title: "Tree planting",
    src: "/images/community-gallery/tree-planting.jpg",
  },
  {
    title: "Donation and clothing drive",
    src: "/images/community-gallery/donation-drive.jpg",
  },
  {
    title: "Volunteers working together",
    src: "/images/community-gallery/volunteers.jpg",
  },
];

export default function Home() {
  return (
    <main className="homepage-shell flex-1 bg-[#1d1916] text-[#F8F4EC]">
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="rounded-[32px] border border-white/10 bg-[#2b2421] p-4 shadow-[0_24px_80px_rgba(60,41,35,0.08)] sm:p-6 lg:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-7 px-2 py-4 sm:px-4 lg:px-6">
              <span className="hero-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(196,75,86,0.2)] bg-[rgba(196,75,86,0.08)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]">
                Building kinder neighborhoods
              </span>

              <div className="space-y-4">
                <h1 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.06em] text-[#F8F4EC] sm:text-5xl xl:text-6xl">
                  Bring people together to create lasting community impact.
                </h1>
                <p className="hero-copy max-w-lg text-base leading-7 sm:text-lg">
                  AloSetu connects neighbors, volunteers, and local organizers around service, events, and meaningful action that strengthens every community.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#events"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(196,75,86,0.2)] transition hover:-translate-y-0.5 hover:bg-[#b53f4c]"
                >
                  Explore events
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#352f2b] px-6 py-3 text-sm font-semibold text-[#F8F4EC] transition hover:border-white/20 hover:bg-[#403935]"
                >
                  How it works
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-8 h-24 w-24 rounded-full bg-[rgba(245,216,135,0.45)] blur-2xl" />
              <div className="absolute -right-5 bottom-10 h-28 w-28 rounded-full bg-[rgba(179,207,195,0.45)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#1d1916_0%,#2b2421_100%)] p-3 shadow-[0_30px_80px_rgba(60,41,35,0.09)]">
                <Image
                  src="/images/hero-community.svg"
                  alt="Illustration of a community gathering together for service and volunteering"
                  width={800}
                  height={620}
                  priority
                  className="h-auto w-full rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5D887]">Why AloSetu</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#F8F4EC] sm:text-4xl">
            Service that grows with your community.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[26px] border border-white/10 bg-[#2b2421] p-6 shadow-[0_14px_38px_rgba(60,41,35,0.04)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(196,75,86,0.1)] text-xl font-bold text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#F8F4EC]">{feature.title}</h3>
              <p className="home-copy-secondary mt-3 text-sm leading-6">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="events" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5D887]">Recent events</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#F8F4EC] sm:text-4xl">
              Join the next wave of action.
            </h2>
          </div>
          <a href="#newsletter" className="text-sm font-semibold text-[#F5D887] underline-offset-4 hover:underline">
            Get reminders
          </a>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#2b2421] px-6 py-12 text-center shadow-[0_18px_42px_rgba(60,41,35,0.05)] sm:px-10">
          <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#F8F4EC] sm:text-3xl">
            New community initiatives are on the way.
          </h3>
          <p className="home-copy-secondary mx-auto mt-4 max-w-[600px] text-center text-base leading-7" style={{ marginInline: "auto" }}>
            Check back soon to discover upcoming opportunities to make a difference in your community.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5D887]">Community gallery</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#F8F4EC] sm:text-4xl">
            Moments of connection and care.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-[#2b2421] shadow-[0_18px_40px_rgba(60,41,35,0.05)]">
              <Image
                src={item.src}
                alt={item.title}
                width={640}
                height={420}
                className="h-[260px] w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-lg font-semibold text-[#F8F4EC]">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="newsletter" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,#1d1916_0%,#2b2421_100%)] p-6 shadow-[0_18px_40px_rgba(60,41,35,0.04)] sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5D887]">Stay connected</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#F8F4EC] sm:text-4xl">
                Get a weekly dose of community opportunities.
              </h2>
            </div>
            <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="h-12 w-full rounded-full border border-[rgba(48,41,35,0.12)] bg-white px-4 text-sm text-foreground outline-none ring-0 placeholder:text-[rgba(48,41,35,0.45)] focus:border-primary"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-primary px-5 text-sm font-semibold text-white transition hover:bg-[#b53f4c]"
              >
                Join now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
