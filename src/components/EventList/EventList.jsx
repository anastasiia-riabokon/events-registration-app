import EventCard from "../EventCard/EventCard";

const EventList = ({events}) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {events?.map((event) => (
        <li key={event._id} className="w-[394px]">
          <EventCard event={event} />
        </li>
      ))}
    </ul>
  );
};
export default EventList;
