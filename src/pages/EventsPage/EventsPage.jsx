import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa6";
import {FaArrowLeft} from "react-icons/fa6";
import EventList from "../../components/EventList/EventList";
import {getAllEvents} from "../../redux/events/operations";
import {selectEvents, selectIsLoading} from "../../redux/events/selectors";
import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";

const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const isLoading = useSelector(selectIsLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [limit] = useState(Number(searchParams.get("limit")) || 12);

  useEffect(() => {
    setSearchParams({page, limit});
    dispatch(getAllEvents({page, limit}));
  }, [dispatch, page, limit, setSearchParams]);

  if (isLoading) return <Loader />;

  const handleNextClick = () => {
    page < events.totalPages && setPage((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    page > 1 && setPage((prev) => (prev -= 1));
  };

  return (
    <>
      <Title text={"Events"} />
      <EventList events={events.result} />
      <div className="flex flex-col items-center">
        <div className="mb-[4px]">
          <button
            type="button"
            onClick={handlePrevClick}
            disabled={page <= 1}
            className="arrow_btn mr-[18px]"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            disabled={page >= events.totalPages}
            className="arrow_btn"
          >
            <FaArrowRight />
          </button>
        </div>
        <p className="font-gown">
          {page} of {events.totalPages}
        </p>
      </div>
    </>
  );
};
export default EventsPage;
