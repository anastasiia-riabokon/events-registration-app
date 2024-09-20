const ParticipantCard = ({participant}) => {
  return (
    <span className="card-body">
      <p>{participant.fullName}</p>
      <p>{participant.email}</p>
    </span>
  );
};
export default ParticipantCard;
