const ErrorMessage = () => {
  return (
    <>
      <h3>NO DATA FOUND</h3>
      <img
        style={{
          display: "block",
          width: "70%",
          height: "70%",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={process.env.PUBLIC_URL + "/error.gif"}
        alt="Error"
      />
    </>
  );
};

export default ErrorMessage;
