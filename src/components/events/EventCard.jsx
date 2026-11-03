import Image from "next/image";
import Link from "next/link";

const formatEventDate = (eventDate) => {
  if (!eventDate) return "Date to be announced";

  const parsedDate = new Date(eventDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Date to be announced";
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function EventCard({ event }) {
  const imageUrl = event?.imageUrl;
  const eventType = event?.eventType || "Community Initiative";
  const eventDate = formatEventDate(event?.eventDate);

  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#2b2421] shadow-[0_18px_40px_rgba(60,41,35,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#f5d887]/40">
      <div className="relative h-56 overflow-hidden border-b border-white/10 bg-[#352f2b]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={event?.title || "Community event"}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(245,216,135,0.28),_rgba(45,35,31,1)_60%)] p-6 text-center">
            <div className="space-y-2">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#f5d887]/70 bg-[#1d1916]/70 text-xl text-[#f5d887]">
                ✦
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f5d887]">
                Community Initiative
              </p>
            </div>
          </div>
        )}
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-[#f5d887]/40 bg-[#1d1916]/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f5d887] backdrop-blur-sm">
          {eventType}
        </div>
      </div>

      <div className="flex h-full flex-col gap-4 p-5">
        {event?.isPreview ? (
          <div className="rounded-full border border-[#f5d887]/40 bg-[#1d1916]/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f5d887]">
            DEVELOPMENT PREVIEW — NOT A REAL EVENT
          </div>
        ) : null}

        <div className="space-y-3">
          <h3 className="text-xl font-bold tracking-[-0.04em] text-[#f8f4ec]">
            {event?.title || "Community opportunity"}
          </h3>
          <p className="text-sm leading-6 text-[#e8ded1]">
            {event?.description || "A meaningful chance to contribute to a stronger neighborhood."}
          </p>
        </div>

        <div className="mt-auto space-y-3 text-sm text-[#e8ded1]">
          <div className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-0.5 text-[#f5d887]">⌖</span>
            <span>{event?.location || "Location to be announced"}</span>
          </div>
          <div className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-0.5 text-[#f5d887]">◌</span>
            <span>{eventDate}</span>
          </div>
        </div>

        <Link
          href={event?._id ? `/upcoming-events/${event._id}` : "/upcoming-events"}
          className="mt-2 inline-flex w-fit items-center rounded-full bg-[#c44b56] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ae3b4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c7f54] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d1916]"
        >
          View Event
        </Link>
      </div>
    </article>
  );
}
