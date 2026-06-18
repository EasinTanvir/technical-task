import Image from "./Image";

const StatusIcon = ({ icon, alt = "", className = "", iconClassName = "" }) => {
  return (
    <div
      className={`
        w-5
        h-5
        flex-center
        rounded-full
        ${className}
      `}
    >
      <Image
        src={icon}
        alt={alt}
        width={10}
        height={10}
        className={`w-3 mt-1.5 ${iconClassName}`}
      />
    </div>
  );
};

export default StatusIcon;
