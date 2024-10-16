import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      This page not found
      <Link href="/">go back</Link>
    </div>
  );
};

export default Error;
