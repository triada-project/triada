import { useState } from "react";
import Camera from "../public/assets/svg/camera.svg";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Button, Avatar } from "@nextui-org/react";

const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function NewUpdateCard({ userData }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [asset, setAsset] = useState("");

  const handleAsset = (e) => {
    setAsset(e.target.files[0].name);
  };

  const userId = userData?.data?._id; // Obtener el ID del usuario
  console.log(userId);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setAsset(event.target.files[0].name);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("profilePicture", selectedFile);

    try {
      const response = await fetch(
        `https://api-triada-25cba881b624.herokuapp.com/images/profile-picture/${userId}`,
        {
          method: "POST",
          body: formData,
        }
      );
      window.location.reload();

      // if (response.ok) {
      //   const data = await response.json();

      //   // Actualizar userData (aquí debes decidir cómo actualizarlo)
      //   // Opción 1: Recargar los datos del usuario desde la API
      //   fetch(`/api/users/${userId}`)
      //     .then((res) => res.json())
      //     .then((data) => {
      //       // Reemplazar userData en el componente padre con la nueva data
      //     });

      //   // Opción 2: Actualizar userData localmente (solo si la respuesta de la API proporciona los datos completos)
      //   // setUserData({ ...userData, data: { ...userData.data, profilePicture: data } });
      // } else {
      //   // Manejar el error
      // }
    } catch (error) {
      // Manejar el error de la petición
    }
  };

  return (
    <section className=" w-[328px] h-[302px] mt-11 bg-[#FAFAFA] border-dashed border-2 border-[#DEDEDE] rounded-3xl flex flex-col items-center pt-8 lg:w-[228px]">
      <div className=" w-[168px] h-[168px] rounded-full border-1 border-[#CFD8DC] bg-[#FFFFFF] flex justify-center items-center mx-20 lg:mx-[42px]">
        {/* Mostrar la imagen actual del usuario */}
        {userData?.data?.profilePicture ? (
          <figure className=" w-[144px] h-[144px] rounded-full bg-[#424242] opacity-70 flex flex-col items-center pt-9 gap-2">
            <Image
              src={userData.data.profilePicture.URLImage}
              alt="Foto de perfil"
              width={114}
              height={114}
            />
            {/* <p
            href=""
            className={`text-sm text-white text-center w-24 ${lato.className}`}
          >
            Actualizar foto de perfil
          </p> */}
          </figure>
        ) : (
          <figure className="w-[144px] h-[144px] rounded-full bg-[#424242] opacity-70 flex flex-col items-center pt-9 gap-2">
            <Image src={Camera} className="w-6 h-6" />
            <p
              className={`text-sm text-white text-center w-24 ${lato.className}`}
            >
              Actualizar foto de perfil
            </p>
          </figure>
        )}
      </div>

      {/* Resto del componente ... */}
      {/* <div className="w-6/12 mx-auto bg-gray-800 text-white rounded-sm">
        <div className="flex items-center justify-between p-2">
          <h3 className="text-white">
            {asset ? asset : "Please, choice file"}
          </h3>
          <label htmlFor="file" className="cursor-pointer">
            <div className="bg-gray-400 gap-1.6 px-2 flex  items-center font-normal border-2 border-black">
              <span>Any text</span>
            </div>
            <input
              id="file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div> */}

      <input
        type="file"
        id="archivo"
        name="archivo"
        // className="hidden"
        onChange={handleFileChange}
      />
      <Button
        onClick={handleUpload}
        disabled={!selectedFile} // Deshabilitar si no hay archivo seleccionado
      >
        Guardar Imagen
      </Button>
    </section>
  );
}
