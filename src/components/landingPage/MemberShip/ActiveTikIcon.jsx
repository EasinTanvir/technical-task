import { tikIcon } from "../../../constant";

const ActiveTikIcon = () => {
  return (
    <div
      className={`w-4.5 h-4.5 flex-center bg-research-logo-circle-bg rounded-full  `}
    >
      <img
        src={tikIcon}
        alt="RemoteRecruit logo"
        width={10}
        height={10}
        className="w-3 mt-1"
      />
    </div>
  );
};

export default ActiveTikIcon;
