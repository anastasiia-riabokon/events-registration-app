import EventCard from "../EventCard/EventCard";

const EventList = ({events}) => {
  return (
    <ul className="flex flex-wrap justify-center gap-x-[8px] gap-y-[24px] mb-[32px]">
      {events?.map((event) => (
        <li key={event._id} className="event_card h-[250px]">
          <EventCard event={event} />
        </li>
      ))}
    </ul>
  );
};
export default EventList;
