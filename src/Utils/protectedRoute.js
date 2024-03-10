import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  UnautherizedResponseClear,
  getUserRequest,
} from "../redux/GetUser/GetUserActions";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getUserLoading, getUserResponse, unautherizedResponse } = useSelector(
    (state) => state.getUserReducer
  );

  useEffect(() => {
    if (getUserLoading) return;
    dispatch(getUserRequest());
  }, [children]);

  useEffect(() => {
    if (unautherizedResponse?.message === "Invalid Token") {
      navigate("/login");
    }
    dispatch(UnautherizedResponseClear());
  }, [unautherizedResponse]);

  if (getUserResponse?.type === "success") {
    const name =
      getUserResponse?.data?.user?.first_name +
      getUserResponse?.data?.user?.last_name;

    return React.cloneElement(children, {
      userId: getUserResponse?.data?.user._id,
      companyId: getUserResponse?.data?.user.company_id,

      name,
      email: getUserResponse?.data?.user.email,
      user: getUserResponse?.data?.user,
      permission: getUserResponse?.data?.user?.permission?.reference_keys,
    });
  } else if (getUserResponse && !getUserLoading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.element,
};
