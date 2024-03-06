import React, { useState, useEffect } from "react";

import ErrorModal from "../../shared/UIElements/ErrorModal";
import Loadingspinner from "../../shared/UIElements/Loadingspinner";
import Triplist from "../components/Triplist";
import "./Mytrips.css";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

import { useSelector } from "react-redux";

const Mytrips = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  //const auth = useContext(AuthContext);
  const tripauth = useSelector((state) => state.auth); //리덕스를 이용한 상태관리

  const [loadedTrips, setLoadedTrips] = useState();

  useEffect(() => {
    const fetchTrips = async (event) => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/trips/user/${tripauth.userId}`,
          "GET",
          null,
          {
            Authorization: "Bearer " + tripauth.token,
          }
        );

        setLoadedTrips(responseData.trip);
      } catch (err) {
        alert("정보를 찾을 수 없습니다.");
      }
    };
    fetchTrips();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onclear={clearError} />
      {isLoading && <Loadingspinner />}
      {!isLoading && loadedTrips && !error && (
        <div className="center">
          <div>
            <div className="menubox-menu">내기록</div>
            <div className="center">
              <span className="mytrips-span" />
            </div>
            <Triplist items={loadedTrips} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Mytrips;
