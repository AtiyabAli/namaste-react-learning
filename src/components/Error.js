import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  4;
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops1!!</h1>
      <p>something went wrong</p>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
