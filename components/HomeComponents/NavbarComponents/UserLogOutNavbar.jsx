import React from "react";
import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import clsx from "clsx";

const TOKEN_KEY = "token";

export default function UserLogOutNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      console.log("este es el token", token);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <div
        id="userLogOutMenu"
        className={clsx("pl-8", { hidden: !isLoggedIn })}
      >
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem isReadOnly="true" className="h-14 gap-2">
              <p className="font-semibold">Sesión iniciada como</p>
              <p className="font-semibold">zoey@mail.com</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              <a
                onClick={() => {
                  localStorage.removeItem("token");
                  sessionStorage.removeItem("token");
                  location.reload();
                }}
              >
                Cerrar sesión
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}
