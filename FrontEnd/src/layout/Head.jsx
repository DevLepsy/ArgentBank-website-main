import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logoArgentBank from "../assets/img/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedIn, setLoggedOut } from "../features/auth/authSlice";
import { setUserProfile } from "../features/auth/userProfileSlice";
import { usePostProfileMutation } from "../features/api/apiSlice";

const Head = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.isLoggedIn);
  const userProfile = useSelector((state) => state.userProfile);
  const [postProfile, { isError }] = usePostProfileMutation();

  useEffect(() => {
    if (token) {
      postProfile(token)
        .unwrap()
        .then((data) => {
          dispatch(setUserProfile(data));
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
          // Optionnel : Gérer l'état d'erreur dans l'application (par ex., afficher une notification)
        });
    }
  }, [token, postProfile, dispatch]);

  const handleLogout = () => {
    dispatch(setLoggedOut());
    // Optionnel : Rediriger l'utilisateur ou afficher une notification après la déconnexion
  };

  return (
    <header className="flex items-center justify-between px-[20px] py-[5px]">
      <Link to="/">
        <img
          src={logoArgentBank}
          alt="logo Argent Bank"
          className="w-[200px] max-w-full"
        />
      </Link>
      <div className="mr-2 flex items-center gap-1.5">
        {token ? (
          <div>
            <Link
              to="/users"
              className="mr-4 whitespace-nowrap font-semibold hover:underline"
            >
              <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
              {userProfile?.userName || "User"}
            </Link>
            <Link
              to="/"
              onClick={handleLogout}
              className="whitespace-nowrap font-semibold hover:underline"
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
            to="/signin"
            className="whitespace-nowrap font-semibold hover:underline"
          >
            <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Head;
