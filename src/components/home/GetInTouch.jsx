import React from "react";

const GetInTouch = ({ heading, message, email, phone }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, 
        <br></br>
        <a href={`mailto:${email}`}>{email}</a> <span>/</span>
        <a href={`tel:${phone}`}>{phone}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
