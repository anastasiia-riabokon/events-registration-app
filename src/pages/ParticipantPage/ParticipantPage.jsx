import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import ParticipantList from "../../components/ParticipantList/ParticipantList";
import {getAllParticipants, getFilterParticipants} from "../../redux/participants/operations";
import {
  selectFilterParticipants,
  selectIsLoading,
  selectParticipants,
} from "../../redux/participants/selectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import Notification from "../../components/Notification/Notification";

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

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/events">Go Back</Link>
      <h2>"Awesome Event" participants</h2>
      <SearchBar onSearch={handleSearch} />
      {participants.length === 0 && (
        <Notification text={"There are no participants for this event yet"} />
      )}
      {filter.length === 0 && participants.length !== 0 && isSearch && (
        <Notification text={"No participant found with this name or email"} />
      )}
      <ParticipantList items={filter.length ? filter : participants} />
    </div>
  );
};
export default ParticipantPage;
