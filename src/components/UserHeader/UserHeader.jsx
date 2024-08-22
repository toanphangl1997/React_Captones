import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../Icon/LogoIcon";
import { path } from "../../common/path";
import { useSelector } from "react-redux";
import { Avatar, Dropdown } from "antd";
import UserIcon from "../Icon/UserIcon";
import LogOutIcon from "../Icon/LogOutIcon";
import FormSearchProduct from "../Form/FormSearchProduct";
import WrapperSuggestJob from "../Wrapper/WrapperSuggestJob";

const items = [
  {
    label: (
      <Link className="flex space-x-2 items-center">
        <UserIcon />
        <span>Thông tin cá nhân</span>
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className="flex space-x-2 items-center">
        <LogOutIcon />
        <span>Đăng xuất</span>
      </Link>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
];
const UserHeader = () => {
  const { infoUser } = useSelector((state) => state.authSlice);

  const checkUserLogin = () => {
    return infoUser ? (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar className="cursor-pointer hover:bg-orange-500 duration-300">
          {infoUser.user.name.slice(0, 1)}
        </Avatar>
      </Dropdown>
    ) : (
      <>
        <Link
          to={path.signIn}
          className="py-2 px-4 rounded-md hover:bg-gray-200 duration-300"
        >
          sign in
        </Link>
        <Link
          to={path.signUp}
          className="py-2 px-4 text-green-500 border border-green-500 rounded-md bg-white duration-300 hover:text-white hover:bg-green-500"
        >
          join
        </Link>
      </>
    );
  };
  return (
    <header className="py-5">
      <div className="container">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo flex items-center space-x-5">
            <Link to={path.homePage}>
              <LogoIcon />
            </Link>
            <WrapperSuggestJob>
              <FormSearchProduct />
            </WrapperSuggestJob>
          </div>
          <nav className="header_navigate space-x-5">{checkUserLogin()}</nav>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;

// UseFormik và yup
// query param trong react
