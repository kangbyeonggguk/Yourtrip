import React, { useEffect, useState, useContext } from "react";

import Searchbar from "../../shared/UIElements/Searchbar";
import "./Trips.css";
import Guidebox from "../../shared/UIElements/Guidebox";
import Triplist from "../components/Triplist";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import Loadingspinner from "../../shared/UIElements/Loadingspinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import { useSelector } from "react-redux";

const Trips = () => {
  const { isLoading, error, sendRequest, clearError, setIsLoading } =
    useHttpClient();
  const [loadedTrips, setLoadedTrips] = useState();

  useEffect(() => {
    const fetchTrips = async (event) => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/trips`
        );

        setLoadedTrips(responseData.trips);
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
        <div>
          <Searchbar
            setdata={setLoadedTrips}
            setloading={setIsLoading}
            seterror={clearError}
          />
          <Guidebox text="다른 사람의 여행기록을 확인해 보세요." />
          <Triplist items={loadedTrips} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Trips;
