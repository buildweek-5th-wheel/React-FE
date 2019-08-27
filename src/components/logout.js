import React from "react";

const Logout = props => {
  const handleClick = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default Logout;
