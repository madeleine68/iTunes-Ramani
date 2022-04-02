import React from "react";
// import notFound from "../notFound.png";

const NoResult = ({ searchText }) => {
  return (
    <div className="no-result">
      <img src="/notFound.png" width="400px" height="400px" alt="Not Found" />
      <strong>{`no result for '${searchText}'`}</strong>
    </div>
  );
};

export default NoResult;