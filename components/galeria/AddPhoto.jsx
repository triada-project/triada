import Image from "next/image";
import { Lato } from "next/font/google";
import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddPhoto({ userData }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const userId = userData?.data?._id;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setFile(selectedFile);

      // Crear una URL de vista previa
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("profilePicture", file);

    try {
      const response = await fetch(`http://localhost:4000/images/${userId}`, {
        method: "POST",
        body: formData,
      });
      window.location.reload();
    } catch (error) {
      // Manejar el error de la petición
    }
  };

  return (
    <>
      <div className="flex justify-center gap-5 items-center">
        <div className="mt-5 ">
          <label
            htmlFor="archivo"
            className="bg-[#37474F] w-[196px] h-[196px] rounded-lg flex flex-col justify-center hover:bg-[#29FEFD] text-white py-2 px-4 rounded cursor-pointer items-center"
          >
            <svg
              width="32"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4Zm4.615 12.923h-3.692v3.692a.923.923 0 0 1-1.846 0v-3.692h-3.692a.923.923 0 0 1 0-1.846h3.692v-3.692a.923.923 0 0 1 1.846 0v3.692h3.692a.923.923 0 0 1 0 1.846Z"
                fill="#fff"
              />
            </svg>
            Seleccionar imagen
          </label>
          <input
            type="file"
            id="archivo"
            name="archivo"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div className="mt-5 " onClick={handleUpload}>
          <label className="bg-[#37474F] w-[196px] h-[196px] rounded-lg flex flex-col justify-center hover:bg-[#EE0075] text-white py-2 px-4 rounded cursor-pointer items-center">
            <svg
              width="32"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4Zm4.615 12.923h-3.692v3.692a.923.923 0 0 1-1.846 0v-3.692h-3.692a.923.923 0 0 1 0-1.846h3.692v-3.692a.923.923 0 0 1 1.846 0v3.692h3.692a.923.923 0 0 1 0 1.846Z"
                fill="#fff"
              />
            </svg>
            Subir imagen
          </label>
          <input type="file" id="archivo" name="archivo" className="hidden" />
        </div>
      </div>
    </>
  );
}
