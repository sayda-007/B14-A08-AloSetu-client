import EventDetails from "@/components/events/EventDetails";
import { devPreviewEvent } from "@/lib/dev-preview-events";

export const instant = false;

export const metadata = {
  title: "Event Details | AloSetu",
  description:
    "View the full details of an upcoming AloSetu community initiative and learn how you can get involved.",
};

export default async function EventDetailsPage({ params }) {
  const { id } = await params;

  const event =
    process.env.NODE_ENV === "development" && id === devPreviewEvent._id
      ? devPreviewEvent
      : null;

  return <EventDetails event={event} id={id} />;
}
