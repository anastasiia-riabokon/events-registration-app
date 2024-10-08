import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa6";
import ParticipantList from "../../components/ParticipantList/ParticipantList";
import {getAllParticipants, getFilterParticipants} from "../../redux/participants/operations";
import {
  selectFilterParticipants,
  selectIsLoading,
  selectParticipants,
} from "../../redux/participants/selectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import Notification from "../../components/Notification/Notification";
import Loader from "../../components/Loader/Loader";
import Title from "../../components/Title/Title";

const ParticipantPage = () => {
  const dispatch = useDispatch();
  const participants = useSelector(selectParticipants);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilterParticipants);
  const {id} = useParams();
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    dispatch(getAllParticipants(id));
  }, [dispatch, id]);

  const handleSearch = ({fullName, email}) => {
    setIsSearch(true);
    dispatch(getFilterParticipants({id, fullName, email}));
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <Link to="/events" className="goBack_link">
        <FaArrowLeft />
        Go Back
      </Link>
      <Title text={"'Awesome Event' participants"} />

      <div className="flex gap-[20px]">
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-col w-full">
          {filter.length === 0 && participants.length !== 0 && isSearch && (
            <Notification text={"No participant found with this name or email"} />
          )}
          <ParticipantList items={filter.length ? filter : participants} />
          {participants.length === 0 && (
            <Notification text={"There are no participants for this event yet"} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ParticipantPage;
