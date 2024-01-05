import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainNavigation from "./shared/Navigation/MainNavigation";

import Loadingspinner from "./shared/UIElements/Loadingspinner";
//import { AuthContext } from "./shared/context/auth-context";
//import { useAuth } from "./shared/hooks/auth-hook";

import { useSelector, useDispatch } from "react-redux";
import { reduxlogout } from "./shared/redux/action/authAction";

const Trips = React.lazy(() => import("./trips/pages/Trips"));
const Memos = React.lazy(() => import("./trips/pages/Memos"));
const Login = React.lazy(() => import("./user/pages/Login"));
const Signup = React.lazy(() => import("./user/pages/Signup"));
const Newtrip = React.lazy(() => import("./trips/pages/Newtrip"));
const EditTrip = React.lazy(() => import("./trips/pages/EditTrip"));
const Addmemo = React.lazy(() => import("./trips/pages/Addmemo"));
const Editmemo = React.lazy(() => import("./trips/pages/Editmemo"));
const Mytrips = React.lazy(() => import("./trips/pages/Mytrips"));

function App() {
  //const { token, login, logout, userId } = useAuth();
  //1시간 이후 자동 로그아웃
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let logoutTimer;
  useEffect(() => {
    if (auth.token && auth.tokenExpirationDate) {
      const remainingTime =
        new Date(auth.tokenExpirationDate).getTime() - new Date().getTime();

      logoutTimer = setTimeout(() => {
        dispatch(reduxlogout());
      }, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [auth.token, auth.tokenExpirationDate, dispatch]);

  const PrivateRoute = ({ element }) => {
    const istoken = auth.token !== null;
    if (istoken) {
      return element;
    } else {
      return <Navigate to="/login" />;
    }
  };
  const PublicRoute = ({ element }) => {
    const istoken = auth.token === null;
    if (istoken) {
      return element;
    } else {
      return <Navigate to="/" />;
    }
  };
  return (
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: !!token,
    //     token: token,
    //     userId: userId,
    //     login: login,
    //     logout: logout,
    //   }}
    // >

    <BrowserRouter>
      <MainNavigation />
      <main>
        <Suspense
          fallback={
            <div className="center">
              <Loadingspinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" exact element={<Trips />} />
            <Route path="/:tripId/memos/:day" exact element={<Memos />} />
            <Route
              path="/login"
              exact
              element={<PublicRoute element={<Login />} />}
            />
            <Route
              path="/signup"
              exact
              element={<PublicRoute element={<Signup />} />}
            />
            <Route
              path="/createtrip"
              exact
              element={<PrivateRoute element={<Newtrip />} />}
            />
            <Route
              path="/:tripId/edittrip"
              exact
              element={<PrivateRoute element={<EditTrip />} />}
            />
            <Route
              path="/mytrips"
              exact
              element={<PrivateRoute element={<Mytrips />} />}
            />
            <Route
              path="/:tripId/memos/:day/addmemo"
              exact
              element={<PrivateRoute element={<Addmemo />} />}
            />
            <Route
              path="/:tripId/memos/:day/:memoid/editmemo"
              exact
              element={<PrivateRoute element={<Editmemo />} />}
            />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>

    // </AuthContext.Provider>
  );
}

export default App;
