const BackgroundImage = ({
  src,
  width = 1440,
  height = 704,
  className = "",
  priority = false,
}) => {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`
        absolute
        inset-0
        h-full
        w-full
        object-cover
        ${className}
      `}
    />
  );
};
export default BackgroundImage;
