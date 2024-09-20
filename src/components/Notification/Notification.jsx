import {RiUserSearchLine} from "react-icons/ri";

const Notification = ({text}) => {
  return (
    <div className="grid place-items-center mb-[32px] relative notice">
      <span className="flex flex-col gap-[8px] items-center mb-[48px]">
        <RiUserSearchLine size={52} />
        <p className=" text-[48px] font-mento block text-center">{text}</p>
      </span>
    </div>
  );
};
export default Notification;
