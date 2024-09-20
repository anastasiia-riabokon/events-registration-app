const ParticipantCard = ({participant}) => {
  return (
    <>
      <p>{participant.fullName}</p>
      <p>{participant.email}</p>
    </>
  );
};
export default ParticipantCard;
