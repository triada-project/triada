import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { jwtDecode } from "jwt-decode"; // Importación correcta de jwt-decode

const TOKEN_KEY = "token";
const DEFAULT_PROFILE_PICTURE =
  "https://cdn-icons-png.flaticon.com/512/10892/10892514.png";

export default function UserLogOutNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(
    DEFAULT_PROFILE_PICTURE
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      setIsLoggedIn(true);
      try {
        const decodedToken = jwtDecode(token);
        setUserRole(decodedToken.role); // Asegúrate de que la ruta del role es correcta

        const userId = decodedToken._id; // Asegúrate de que la propiedad ID existe en tu token
        fetchUserProfile(userId);
      } catch (error) {}
    }
  }, []);

  const fetchUserProfile = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/users/${userId}`);
      const userData = await response.json();

      const profilePictureUrl =
        userData.data.profilePicture?.URLImage || DEFAULT_PROFILE_PICTURE;
      setProfilePictureUrl(profilePictureUrl);
    } catch (error) {}
  };

  // useEffect(() => {}, [userRole]);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownOpen]);

  const handleProfileClick = () => {
    if (userRole === "musico") {
      window.location.href = "/perfil-musico";
    } else if (userRole === "cliente") {
      window.location.href = "/perfil-cliente";
    }
  };

  return (
    <div id="userLogOutMenu" className={clsx("pl-8", { hidden: !isLoggedIn })}>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="transition-transform"
        >
          <img
            id="profilePicture"
            src={profilePictureUrl}
            alt="Avatar"
            className="rounded-full border-2 object-cover"
            style={{ width: "40px", height: "40px" }}
          />
        </button>
        {dropdownOpen && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg"
            role="menu"
          >
            <div className="pb-2 border-b border-gray-200">
              <p className=" px-4 py-1 font-semibold text-black">
                Sesión iniciada como
              </p>
              <p id="userEmail" className=" px-4 font-semibold text-black">
                zoey@mail.com
              </p>
              <button
                id="buttonPerfil"
                onClick={handleProfileClick}
                className="mt-2 w-full px-4 py-1 text-left text-blue-600 hover:bg-gray-100"
              >
                Ir a perfil
              </button>
            </div>
            <div className="py-2">
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  sessionStorage.removeItem("token");
                  location.reload();
                }}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
