
import EventBrowser from "@/components/events/EventBrowser";

export const metadata = {
    title: "Upcoming Events | AloSetu",
    description:
        "Discover upcoming community initiatives and find meaningful opportunities to participate in local community-service events.",
};

export default function UpcomingEventsPage() {
    return <EventBrowser events={[]} />;
}
