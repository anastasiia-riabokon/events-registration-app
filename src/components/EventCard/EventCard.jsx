import {format} from "date-fns";
import {Link} from "react-router-dom";

const EventCard = ({event}) => {
  const {title, description, eventDate, organizer, _id} = event;
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{format(eventDate, "dd MMMM yyyy")}</p>
      <p>{organizer}</p>
      <span>
        <Link to={`/events/${_id}/register`} className="btn">
          Registration
        </Link>

        <Link to={`/events/${_id}/participants`} className="btn">
          View
        </Link>
      </span>
    </>
  );
};
export default EventCard;
