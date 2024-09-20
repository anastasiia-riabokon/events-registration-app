import ParticipantCard from "../ParticipantCard/ParticipantCard";

const ParticipantList = ({items}) => {
  return (
    <ul className="flex flex-wrap gap-[12px]">
      {items.map((item) => (
        <li key={item._id} className="card bg-base-100 shadow-xl">
          <ParticipantCard participant={item} />
        </li>
      ))}
    </ul>
  );
};
export default ParticipantList;
