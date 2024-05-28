import Camera from "../public/assets/svg/camera.svg";
import Image from "next/image";
import { Lato } from "next/font/google";
import ButtonPink from "./perfil-cliente/ButtonPink";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import axios from "axios";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function UpdateCardPicture() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

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
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64data = reader.result.split(",")[1];
      try {
        const response = await axios.post(
          "http://localhost:4000/images/profile-picture/${userId}",
          {
            file: {
              name: file.name,
              type: file.type,
              data: base64data,
            },
          }
        );
        console.log("File uploaded successfully:", response.data.url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <section className=" w-[328px] h-[302px] mt-11 bg-[#FAFAFA] border-dashed border-2 border-[#DEDEDE] rounded-3xl flex flex-col items-center pt-8 lg:w-[228px]">
      <div className=" w-[168px] h-[168px] rounded-full border-1 border-[#CFD8DC] bg-[#FFFFFF] flex justify-center items-center mx-20 lg:mx-[42px]">
        <div
          onClick={() => document.getElementById("archivo").click()}
          className="cursor-pointer"
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Vista previa"
              className="w-[144px] h-[144px] rounded-full object-cover"
            />
          ) : (
            <figure className="w-[144px] h-[144px] rounded-full bg-[#424242] opacity-70 flex flex-col items-center pt-9 gap-2">
              <Image src={Camera} className="w-6 h-6" alt="Icono de cámara" />
              <label
                htmlFor="archivo"
                className="text-sm text-white cursor-pointer"
              >
                Selecciona foto
              </label>
            </figure>
          )}
        </div>
        <input
          type="file"
          id="archivo"
          name="archivo"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <Button
        onClick={handleUpload}
        className={`bg-[#EF107D] text-white w-[150px] h-[50px] rounded text-base ${lato.className} mt-5 cursor-pointer`}
      >
        <label className=" text-sm text-white cursor-pointer">
          Cambiar foto de perfil
        </label>
      </Button>
    </section>
  );
}
