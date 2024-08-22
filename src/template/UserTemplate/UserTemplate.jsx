import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import UserFooter from "../../components/UserFooter/UserFooter";
import { Outlet } from "react-router-dom";
import { path } from "../../common/path";

const UserTemplate = () => {
  return (
    <>
      {/* header  */}
      <UserHeader />
      {/* main  */}
      <main>
        <Outlet />
      </main>
      {/* footer  */}
      <UserFooter />
    </>
  );
};

export default UserTemplate;
