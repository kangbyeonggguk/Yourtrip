import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ErrorModal from "../../shared/UIElements/ErrorModal";
import Loadingspinner from "../../shared/UIElements/Loadingspinner";
import Menubox from "../../shared/UIElements/Menubox";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./Login.css";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import { useDispatch } from "react-redux";
import { reduxlogin } from "../../shared/redux/action/authAction";
import { useSelector } from "react-redux";

const contents = [
  {
    title: "이메일",
    id: "email",
    type: "input",
    validate: [VALIDATOR_EMAIL()],
  },
  {
    title: "비밀번호",
    id: "password",
    type: "input",
    validate: [VALIDATOR_MINLENGTH(6)],
  },
  {
    title: "로그인",
    type: "button",
    to: "/",
    className: "loginbtn",
    formtype: true,
  },
  {
    title: "회원가입하기",
    type: "button",
    to: "/signup",
  },
];

const Login = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigate = useNavigate(); // useNavigate hook을 이 컴포넌트 내에서 사용
  const [inputdata, setInputdata] = useState({});
  //const auth = useContext(AuthContext); //context 사용 로그인 유지
  const dispatch = useDispatch(); //redux 사용 로그인 유지

  const [login, setLogin] = useState(false);
  const [validatecheck, setValidatecheck] = useState({
    email: true,
    password: true,
  });
  const SubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/login`,
        "POST",
        JSON.stringify({
          email: inputdata.email,
          password: inputdata.password,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      //auth.login(responseData.userId, responseData.token); //context사용 로그인 유지

      //redux 사용 로그인 유지
      const user = {
        userId: `${responseData.userId}`,
        token: `${responseData.token}`,
      };
      dispatch(reduxlogin(user.userId, user.token));

      setLogin(true);
    } catch (err) {
      alert("정보를 추가할 수 없습니다.");
    }
  };
  useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading || error ? (
        <div className="center">
          <Loadingspinner asOverlay />
        </div>
      ) : (
        <div className="center">
          <Menubox
            className="login"
            menu={"로그인"}
            contents={contents}
            onSubmit={SubmitHandler}
            setinput={setInputdata}
            input={inputdata}
            validatecheck={validatecheck}
            setValidatecheck={setValidatecheck}
          ></Menubox>
        </div>
      )}
    </React.Fragment>
  );
};
export default Login;
