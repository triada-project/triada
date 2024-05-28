import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";

const TOKEN_KEY = "token";

export default function UserLogOutNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      console.log("este es el token", token);
      setIsLoggedIn(true);
    }
  }, []);

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

  return (
    <div id="userLogOutMenu" className={clsx("pl-8", { hidden: !isLoggedIn })}>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="transition-transform"
        >
          <img
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt="Avatar"
            className="rounded-full border-2"
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
                onClick={() => (window.location.href = "/perfil-musico")}
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
