import React from "react";
import { Link } from "react-router-dom";

import logoArgentBank from "../assets/img/argentBankLogo.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-regular-svg-icons";

import { setLoggingOut } from "../features/auth/authSlice";
import { setUserProfile } from "../features/auth/userProfileSlice";
import { usePostProfileMutation } from "../features/api/apiSlice";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const UserProfile = useSelector((state) => state.user.userProfile);
  const [postProfile] = usePostProfileMutation();

  useEffect(() => {
    if (token) {
      postProfile(token)
        .unwrap()
        .then((data) => {
          dispatch(setUserProfile(data.body));
        });
    }
  }, [token]);

  const handleLogout = () => {
    dispatch(setloggingout());
  };

  return (
    <header>
      <nav className="flex items-center jsutify-between px-[20px] py-[5px]">
        <div className="flex items-center">
          <Link to="/">
            <h1>
              <img
                src={logoArgentBank}
                alt="Argent Bank Logo"
                className="w-[200px] max-w-full"
              />
            </h1>
          </Link>
        </div>
        <div className="mr-2 flex items-center gap-1.5">
          {token ? (
            <div>
              <Link
                to="/users"
                className="mr-4 whitespace-nowrap font-semibold hover:underline"
              >
                <FontAwesomeIcon icon={faCircleUser} className="mr-2" />{" "}
                {UserProfile.userName}
              </Link>
              <Link
                to="/"
                onClick={handleLogout}
                className="mr-2 whitespace-nowrap font-semibold hover:underline"
              >
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="mr-2"
                />
                Sign Out
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="mr-2 whitespace-nowrap font-semibold hover:underline"
            >
              <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
