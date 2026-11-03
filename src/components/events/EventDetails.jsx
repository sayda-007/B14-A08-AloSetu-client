import Image from "next/image";
import Link from "next/link";

const formatEventDate = (eventDate) => {
  if (!eventDate) return "Date to be announced";

  const parsedDate = new Date(eventDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Date to be announced";
  }

  return parsedDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function EventDetails({ event }) {
  if (!event) {
    return (
      <main className="flex-1 bg-[#1d1916] text-[#f8f4ec]">
        <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#e8ded1]">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="font-medium text-[#f8f4ec] transition hover:text-[#f5d887]">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/upcoming-events" className="font-medium text-[#f8f4ec] transition hover:text-[#f5d887]">
                Upcoming Events
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#e8ded1]">Event Details</span>
            </div>
          </nav>

          <div className="rounded-[30px] border border-white/10 bg-[#2b2421] px-6 py-12 text-center shadow-[0_18px_42px_rgba(60,41,35,0.05)] sm:px-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#f5d887]/30 bg-[#352f2b] text-3xl text-[#f5d887]">
              ✦
            </div>
            <h1 className="text-3xl font-black tracking-[-0.04em] text-[#f8f4ec] sm:text-4xl">
              Event details are not available yet.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#e8ded1]">
              Once community initiatives are published, their full details will appear here.
            </p>
            <Link
              href="/upcoming-events"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#c44b56] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ae3b4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c7f54] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d1916]"
            >
              Return to Upcoming Events
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const eventDate = formatEventDate(event.eventDate);
  const organizerEmail = event.creatorEmail || "";

  return (
    <main className="flex-1 bg-[#1d1916] text-[#f8f4ec]">
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#e8ded1]">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="font-medium text-[#f8f4ec] transition hover:text-[#f5d887]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/upcoming-events" className="font-medium text-[#f8f4ec] transition hover:text-[#f5d887]">
              Upcoming Events
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#e8ded1]">Event Details</span>
          </div>
        </nav>

        <article className="overflow-hidden rounded-[30px] border border-white/10 bg-[#2b2421] shadow-[0_18px_42px_rgba(60,41,35,0.05)]">
          {event.isPreview ? (
            <div className="border-b border-[#f5d887]/30 bg-[#352f2b] px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5d887] sm:px-6">
              DEVELOPMENT PREVIEW — NOT A REAL EVENT
            </div>
          ) : null}

          <div className="relative h-72 w-full overflow-hidden bg-[#352f2b] sm:h-80 lg:h-[420px]">
            {event.imageUrl ? (
              <Image
                src={event.imageUrl}
                alt={event.title || "Community event"}
                fill
                sizes="(max-width: 767px) 100vw, 1200px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(245,216,135,0.28),_rgba(45,35,31,1)_60%)] p-6 text-center">
                <div className="space-y-3">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#f5d887]/70 bg-[#1d1916]/70 text-2xl text-[#f5d887]">
                    ✦
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f5d887]">
                    Community Initiative
                  </p>
                </div>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1d1916]/85 via-[#1d1916]/40 to-transparent p-5 sm:p-6 lg:p-8">
              <div className="mb-3 inline-flex items-center rounded-full border border-[#f5d887]/40 bg-[#1d1916]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f5d887] backdrop-blur-sm">
                {event.eventType || "Community Initiative"}
              </div>
              <h1 className="max-w-3xl text-3xl font-black tracking-[-0.05em] text-[#f8f4ec] sm:text-4xl lg:text-5xl">
                {event.title || "Community opportunity"}
              </h1>
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[1.4fr_0.6fr] lg:p-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#e8ded1]">
                  <div className="inline-flex items-center gap-2">
                    <span aria-hidden="true" className="text-[#f5d887]">◌</span>
                    <span>{eventDate}</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span aria-hidden="true" className="text-[#f5d887]">⌖</span>
                    <span>{event.location || "Location to be announced"}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-black tracking-[-0.04em] text-[#f8f4ec] sm:text-3xl">
                  About this initiative
                </h2>
                <p className="text-base leading-8 text-[#e8ded1]">
                  {event.description || "More details will be shared once this community initiative is published."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-[#352f2b] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f5d887]">
                    Event Type
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#f8f4ec]">
                    {event.eventType || "Community Initiative"}
                  </p>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-[#352f2b] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f5d887]">
                    Location
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#f8f4ec]">
                    {event.location || "Location to be announced"}
                  </p>
                </div>
              </div>

              {organizerEmail ? (
                <div className="rounded-[22px] border border-white/10 bg-[#352f2b] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f5d887]">
                    Organizer Contact
                  </p>
                  <a
                    href={`mailto:${organizerEmail}`}
                    className="mt-3 inline-flex text-base font-medium text-[#f8f4ec] transition hover:text-[#f5d887]"
                  >
                    {organizerEmail}
                  </a>
                </div>
              ) : null}
            </div>

            <aside className="lg:pt-6">
              <div className="rounded-[26px] border border-white/10 bg-[#352f2b] p-5 shadow-[0_18px_42px_rgba(60,41,35,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5d887]">
                  Join Event
                </p>
                <p className="mt-4 text-base leading-7 text-[#e8ded1]">
                  Sign in to join this community initiative.
                </p>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#c44b56] px-5 py-3 text-sm font-semibold text-white opacity-70 cursor-not-allowed"
                >
                  Join Event
                </button>
              </div>
            </aside>
          </div>
        </article>
      </section>
    </main>
  );
}
