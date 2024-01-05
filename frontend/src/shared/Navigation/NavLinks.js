import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

import "./NavLinks.css";

import { useDispatch, useSelector } from "react-redux";
import { reduxlogout } from "../redux/action/authAction";
const NavLinks = () => {
  //const auth = useContext(AuthContext);//context 사용 시
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <React.Fragment>
      {/*context 사용 시 {auth.isLoggedIn&&} 사용*/}
      {isLoggedIn && (
        <>
          <li>
            <NavLink to="/createtrip" className="otherbtn">
              추가하기
            </NavLink>
          </li>
          <li>
            <NavLink to="/mytrips" className="otherbtn">
              내기록
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="logoutbtn"
              onClick={() => {
                //auth.logout();
                dispatch(reduxlogout());
              }}
            >
              로그아웃
            </NavLink>
          </li>
        </>
      )}
      {!isLoggedIn && (
        <>
          <li>
            <NavLink to="/login" className="otherbtn">
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="otherbtn">
              회원가입
            </NavLink>
          </li>
        </>
      )}
    </React.Fragment>
  );
};

export default NavLinks;
