import { tikIcon } from "../../../constant";

const ActiveTikIcon = () => {
  return (
    <div
      className={`w-5 h-5 flex-center bg-research-logo-circle-bg rounded-full  `}
    >
      <img
        src={tikIcon}
        alt="RemoteRecruit logo"
        width={10}
        height={10}
        className="w-auto  mt-1"
      />
    </div>
  );
};

export default ActiveTikIcon;
