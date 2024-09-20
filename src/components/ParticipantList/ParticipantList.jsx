import ParticipantCard from "../ParticipantCard/ParticipantCard";

const ParticipantList = ({items}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          <ParticipantCard participant={item} />
        </li>
      ))}
    </ul>
  );
};
export default ParticipantList;
