import AddPhoto from "./AddPhoto";
import CardPics from "./CardPics";
import React, { useState, useEffect } from "react";
import useTokenStore from "@/stores/tokenStore";
import useSelectedStateStore from "@/stores/selectedStateStore";
import { Spinner } from "@nextui-org/react";

export default function GalleryPhotos() {
  const [userData, setUserData] = useState(null);
  const tokenObject = useTokenStore((state) => state.tokenObject);
  const setSelectedState = useSelectedStateStore(
    (state) => state.setSelectedState
  );

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        tokenFromLocalStorage.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      useTokenStore.setState({ tokenObject: payloadObject });
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/users/${tokenObject?._id}`
        );
        const data = await response.json();
        setUserData(data); // Almacena los datos del usuario
        setSelectedState(data.data.state);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Manejo de errores
      }
    };

    if (tokenObject) {
      fetchData();
    }
  }, [tokenObject]);

  if (!tokenObject) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Cargando..." color="secondary" labelColor="secondary" />
      </div>
    );
  }
  return (
    <>
      <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
        Fotos
      </h2>
      <div className="gap-4">
        <AddPhoto userData={userData} />
        <CardPics userData={userData} />
      </div>
    </>
  );
}
