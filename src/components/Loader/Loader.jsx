import {Watch} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#c6457416] bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <Watch color="#ec5439" />
    </div>
  );
};
export default Loader;
