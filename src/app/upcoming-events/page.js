import EventBrowser from "@/components/events/EventBrowser";
import { devPreviewEvent } from "@/lib/dev-preview-events";

export const metadata = {
    title: "Upcoming Events | AloSetu",
    description:
        "Discover upcoming community initiatives and find meaningful opportunities to participate in local community-service events.",
};

export default function UpcomingEventsPage() {
    const events = process.env.NODE_ENV === "development" ? [devPreviewEvent] : [];

    return <EventBrowser events={events} />;
}
