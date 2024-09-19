import {format} from "date-fns";
import {Link} from "react-router-dom";

const EventCard = ({event}) => {
  const {title, description, eventDate, organizer} = event;
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{format(eventDate, "dd MMMM yyyy")}</p>
      <p>{organizer}</p>
      <span>
        <Link to="/register" className="btn">
          Registration
        </Link>

        <Link to="/participants" className="btn">
          View
        </Link>
      </span>
    </>
  );
};
export default EventCard;
