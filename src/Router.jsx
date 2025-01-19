import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Spinner from "./components/Spinner/Spinner";
import { Suspense } from "react";
// import Login from "./pages/AuthPages/Login";
const Login = React.lazy(() => import("./pages/AuthPages/Login"));
// import Register from "./pages/AuthPages/Signin";
const Register = React.lazy(() => import("./pages/AuthPages/Signin"));
// import DashBoard from "./pages/dashboard/DashBoard";
const DashBoard = React.lazy(() => import("./pages/dashboard/DashBoard"));
// import Table from "./pages/Table/Table";
const Table = React.lazy(() => import("./pages/Table/Table"));
// import Profile from "./pages/Profile/Profile";
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
// import ErrorPage from "./components/ErrorPage";
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
// import Billing from "./pages/Billing/Billing";
const Billing = React.lazy(() => import("./pages/Billing/Billing"));
// import Header from "./components/header/Header";
const Header = React.lazy(() => import("./components/header/Header"));
const Routerr = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/table" element={<Table />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default Routerr;
