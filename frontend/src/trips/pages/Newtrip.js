import React, { useState, useEffect } from "react";

import { AuthContext } from "../../shared/context/auth-context";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import Loadingspinner from "../../shared/UIElements/Loadingspinner";
import { useNavigate } from "react-router-dom";
import Menubox from "../../shared/UIElements/Menubox";

import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./Newtrip.css";
import { useSelector } from "react-redux";

const contents = [
  {
    title: "제목",
    id: "title",
    type: "input",
    validate: [VALIDATOR_REQUIRE()],
  },
  {
    title: "대표 이미지",
    type: "image",
  },
  {
    title: "추가하기",
    type: "button",
    to: "/",
    className: "loginbtn",
    formtype: true,
  },
];

const Newtrip = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const navigate = useNavigate(); // useNavigate hook을 이 컴포넌트 내에서 사용
  const [inputdata, setInputdata] = useState({});

  //const auth = useContext(AuthContext);
  const tripauth = useSelector((state) => state.auth); //리덕스를 이용한 상태관리

  const [newtrip, setnewtrip] = useState(false);
  const [validatecheck, setValidatecheck] = useState({
    title: true,
    image: true,
  });

  const SubmitHandler = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("title", inputdata.title);
    formdata.append("image", inputdata.image);

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/trips`,
        "POST",
        formdata,
        {
          Authorization: "Bearer " + tripauth.token,
        }
      );

      setnewtrip(true);
    } catch (err) {}
  };
  useEffect(() => {
    if (newtrip) {
      navigate("/");
    }
  }, [newtrip]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading ? (
        <div className="center">
          <Loadingspinner asOverlay />
        </div>
      ) : (
        <div className="center">
          <Menubox
            className="create"
            menu={"여행 추가"}
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

export default Newtrip;
