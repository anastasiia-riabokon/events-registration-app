import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa6";
import {FaArrowLeft} from "react-icons/fa6";
import EventList from "../../components/EventList/EventList";
import {getAllEvents} from "../../redux/events/operations";
import {selectEvents, selectIsLoading} from "../../redux/events/selectors";

const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const isLoading = useSelector(selectIsLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    dispatch(getAllEvents({page}));
    setSearchParams({page});
  }, [dispatch, page]);

  if (isLoading) return <div>Loading...</div>;

  const handleNextClick = () => {
    page < events.totalPages && setPage((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    page > 1 && setPage((prev) => (prev -= 1));
  };

  return (
    <div>
      <h2>Events</h2>
      <EventList events={events.result} />
      <div>
        <button type="button" onClick={handlePrevClick} disabled={page <= 1}>
          <FaArrowLeft />
        </button>
        <button type="button" onClick={handleNextClick} disabled={page >= events.totalPages}>
          <FaArrowRight />
        </button>
      </div>
      <p>
        {page} of {events.totalPages}
      </p>
    </div>
  );
};
export default EventsPage;
