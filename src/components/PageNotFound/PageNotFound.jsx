import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <Link to={path.homePage}>Bấm vào để quay về trang chủ</Link>
    </div>
  );
};

export default PageNotFound;
