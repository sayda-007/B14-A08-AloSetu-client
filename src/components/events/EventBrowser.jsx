'use client';

import { useMemo, useState } from "react";
import EventCard from "./EventCard";

const EVENT_TYPES = [
  "All Event Types",
  "Community Cleanup",
  "Tree Plantation",
  "Donation Drive",
  "Winter Support",
  "Other",
];

export default function EventBrowser({ events = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All Event Types");

  const filteredEvents = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return events.filter((event) => {
      const matchesSearch =
        !normalizedQuery ||
        [event.title, event.location]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(normalizedQuery));

      const matchesType =
        selectedType === "All Event Types" || event.eventType === selectedType;

      return matchesSearch && matchesType;
    });
  }, [events, searchTerm, selectedType]);

  const hasEvents = events.length > 0;
  const showNoMatches = hasEvents && filteredEvents.length === 0;

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedType("All Event Types");
  };

  return (
    <main className="flex-1 bg-[#1d1916] text-[#f8f4ec]">
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5d887]">
            Make a difference together
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[#f8f4ec] sm:text-5xl xl:text-6xl">
            Discover Upcoming Events
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#e8ded1] sm:text-lg">
            Find meaningful opportunities to support your community, meet like-minded people,
            and turn small acts of kindness into lasting impact.
          </p>
        </div>

        <div className="mb-10 rounded-[28px] border border-white/10 bg-[#2b2421] p-4 shadow-[0_18px_40px_rgba(60,41,35,0.05)] sm:p-5">
          <div className="grid gap-4 md:grid-cols-[1.4fr_0.9fr]">
            <div className="flex flex-col gap-2">
              <label htmlFor="event-search" className="sr-only">
                Search by event title or location
              </label>
              <input
                id="event-search"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by event title or location..."
                className="h-12 w-full rounded-full border border-white/10 bg-[#352f2b] px-4 text-sm text-[#f8f4ec] placeholder:text-[#e8ded1]/70 outline-none transition focus:border-[#f5d887] focus:ring-2 focus:ring-[#f5d887]/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="event-type" className="sr-only">
                Filter by event type
              </label>
              <select
                id="event-type"
                value={selectedType}
                onChange={(event) => setSelectedType(event.target.value)}
                className="h-12 w-full rounded-full border border-white/10 bg-[#352f2b] px-4 text-sm text-[#f8f4ec] outline-none transition focus:border-[#f5d887] focus:ring-2 focus:ring-[#f5d887]/30"
              >
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-[#2b2421] text-[#f8f4ec]">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {!hasEvents ? (
          <div className="flex min-h-[420px] items-center justify-center px-2">
            <div className="max-w-xl rounded-[30px] border border-white/10 bg-[#2b2421] px-6 py-12 text-center shadow-[0_18px_42px_rgba(60,41,35,0.05)] sm:px-10">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#f5d887]/30 bg-[#352f2b] text-3xl text-[#f5d887]">
                ✦
              </div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#f8f4ec] sm:text-4xl">
                No Upcoming Events Yet
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#e8ded1]">
                New community initiatives are on the way. Check back soon to discover opportunities to make a difference.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#f8f4ec] sm:text-4xl">
                Community Opportunities
              </h2>
              <p className="mt-2 text-base text-[#e8ded1]">
                Explore upcoming initiatives that make it easier to show up for your neighbors and community.
              </p>
            </div>

            {showNoMatches ? (
              <div className="flex min-h-[280px] items-center justify-center px-2">
                <div className="max-w-xl rounded-[30px] border border-white/10 bg-[#2b2421] px-6 py-10 text-center shadow-[0_18px_42px_rgba(60,41,35,0.05)] sm:px-8">
                  <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#f8f4ec] sm:text-3xl">
                    No events match your search
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#e8ded1]">
                    Try adjusting your filters or search terms to find community opportunities that fit your interests.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#c44b56] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ae3b4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c7f54] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d1916]"
                  >
                    Reset filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredEvents.map((event) => (
                  <EventCard key={event._id || event.title} event={event} />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
