import {format} from "date-fns";
import {Link} from "react-router-dom";

const EventCard = ({event}) => {
  const {title, description, eventDate, organizer, _id} = event;
  return (
    <>
      <div>
        <h3 className="font-bold text-[20px] mb-[4px]">{title}</h3>
        <p className="font-gown mb-[8px]">{description}</p>
        <p className="font-gown text-right text-[12px] mb-[8px]">
          {format(eventDate, "dd MMMM yyyy")}
        </p>
        <p>{organizer}</p>
      </div>
      <div className="flex justify-between w-[80%]">
        <Link to={`/events/${_id}/register`} className="event_link btn-primary">
          Registration
        </Link>

        <Link to={`/events/${_id}/participants`} className="event_link btn-accent">
          View
        </Link>
      </div>
    </>
  );
};
export default EventCard;
