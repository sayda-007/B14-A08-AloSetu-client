import EventBrowser from "../../components/events/EventBrowser";

export const metadata = {
  title: "Upcoming Events | AloSetu",
  description:
    "Explore upcoming community initiatives, volunteer opportunities, and local service events organized by AloSetu.",
};

export default function UpcomingEventsPage() {
  return <EventBrowser events={[]} />;
}
