const Heading = ({ as: Tag = "h2", children, id, className = "" }) => {
  const styles = {
    h1: "text-3xl md:text-4xl lg:text-5xl font-bold text-heading-light sm:text-start text-center",
    h2: "text-2xl md:text-4xl font-medium sm:text-start text-center",
    h3: "text-base sm:text-lg md:text-3xl font-medium",
    h4: "text-xl md:text-2xl font-medium",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",
  };

  return (
    <Tag id={id} className={`${styles[Tag] || ""} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
