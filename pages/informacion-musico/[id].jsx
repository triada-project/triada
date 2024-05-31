import React, { useEffect, useState } from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import { Avatar, Chip } from "@nextui-org/react";
import NavBar from "@/components/Navbar";
import check from "../../public/assets/svg/check.svg";
import Image from "next/image";
import CarouselVideos from "../../components/musicianLanding/CarouselVideos";
import CarouselFotos from "../../components/musicianLanding/CarouselFotos";
import AsideLeft from "@/components/musicianLanding/AsideLeft";
import Ranking from "@/components/Ranking/Ranking";
import EventForm from "@/components/musicianLanding/EventForm";
import info_FILL1 from "../../public/assets/svg/info_FILL1.svg";
import warning from "../../public/assets/images/warning.png";
import FooterMain from "@/components/footer/footer";
import { useRouter } from "next/router";
import useTokenStore from "@/stores/tokenStore";

const josefin = Josefin_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function MusicianDetail() {
  const router = useRouter();
  const { id: userId } = router.query;
  const [userData, setUserData] = useState(null);
  const tokenObject = useTokenStore((state) => state.tokenObject);

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
    if (userId) {
      fetch(`http://localhost:4000/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userId]);

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <main className="shadow-[15px_35px_60px_60px_rgba(0,0,0,0.3)] shadow-indigo-500/50 max-w-[1440px] m-auto bg-white">
        <NavBar />
        <div className="lg:ml-[80px] lg:mr-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-4 md:grid-rows-7 grid-flow-col">
            <div className="p-5 col-start-1 sm:col-span-2 md:col-span-1 flex justify-center">
              <Avatar
                src={userData.profilePicture.URLImage}
                alt="profile picture"
                className="w-80 h-60 rounded-lg shadow-xl"
              />
            </div>

            <main className="col-start-1 sm:col-start-3 sm:col-span-4 md:col-start-2 md:col-span-3 row-span-7 p-5">
              <div className="">
                <h1
                  className={`${josefin.className} text-black text-3xl font-semibold sm:mt-0 sm:text-[28px]`}
                >
                  {userData.name}
                </h1>
                <h3 className="text-[#455A64]">
                  {userData.city}, {userData.state}
                </h3>
                <div className="gap gap-1 flex flex-nowrap">
                  {userData.musicalGenre.map((nombre, index) => (
                    <Chip
                      key={index}
                      classNames={{
                        base: "bg-[#081540] h-[32px] mt-2",
                        content: "text-[#29FEFD]",
                      }}
                    >
                      {nombre}
                    </Chip>
                  ))}
                </div>
              </div>
              <div>
                <h2
                  className={`${josefin.className} text-[#37474F] font-semibold mt-5 sm:text-[20px]`}
                >
                  Descripción
                </h2>
                <p className={`${josefin.className} text-[#455A64]`}>
                  {userData.description}
                </p>
              </div>
              <div>
                <h2
                  className={`${josefin.className} text-[#37474F] font-semibold mt-5 sm:text-[20px]`}
                >
                  Eventos en los que toca
                </h2>
                <div className="gap gap-1 flex flex-nowrap">
                  {userData.eventType.map((nombre, index) => (
                    <Chip
                      key={index}
                      classNames={{
                        base: "bg-[#081540] h-[32px] mt-2",
                        content: "text-[#29FEFD]",
                      }}
                    >
                      {nombre}
                    </Chip>
                  ))}
                </div>
              </div>
              <div>
                <h2
                  className={`${josefin.className} text-[#37474F] font-semibold mt-5 sm:text-[20px]`}
                >
                  Requerimientos
                </h2>
                <div className="text-black">
                  <ul>
                    {userData.requirements.map((requirement, index) => {
                      return (
                        <div key={index} className="flex items-center mt-4">
                          <Image
                            src={check}
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <li className="ml-2">{requirement}</li>
                        </div>
                      );
                    })}
                  </ul>
                  <div className="border border-blue-700 bg-blue-100 rounded-md mt-5 flex">
                    <div>
                      <Image
                        src={info_FILL1}
                        alt="info"
                        width={20}
                        height={20}
                        className="ml-2 mt-2 mr-5"
                      />
                    </div>
                    <div>
                      <p className="text-blue-700 flex-auto text-center p-2">
                        Consulta con el artista si hay requerimientos
                        adicionales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2
                    className={`${josefin.className} text-[#37474F] font-semibold mt-5 sm:text-[20px]`}
                  >
                    Tiempo máximo de concierto
                  </h2>
                  <Chip
                    classNames={{
                      base: "bg-[#081540] h-[32px] mt-2",
                      content: "text-[#29FEFD]",
                    }}
                  >
                    {userData.maximumHoursEvent} horas
                  </Chip>
                </div>
                <div>
                  <h2
                    className={`${josefin.className} text-[#37474F] font-semibold mt-5 sm:text-[20px]`}
                  >
                    Costo por hora
                  </h2>
                  <Chip
                    classNames={{
                      base: "bg-[#081540] h-[32px] mt-2",
                      content: "text-[#29FEFD]",
                    }}
                  >
                    $ {userData.eventFee} MXN
                  </Chip>
                </div>
              </div>
              <div className="md:gap-4">
                <span>
                  <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                    Videos
                  </h2>

                  <CarouselVideos userData={userData} />
                </span>
                <span>
                  <h2 className="{`${josefin.classname} text-[#37474F] font-semibold mt-5 sm:text-[20px]">
                    Fotos
                  </h2>
                  <CarouselFotos userData={userData} />
                </span>
              </div>
              <div className="mt-5 shadow-xl">
                {tokenObject ? (
                  <EventForm
                    userData={userData}
                    tokenObject={tokenObject}
                    musicianId={userId}
                  />
                ) : (
                  <div className="border border-yellow-700 bg-yellow-100 rounded-md mt-5 flex">
                    <div>
                      <Image
                        src={warning}
                        alt="info"
                        width={20}
                        height={20}
                        className="ml-2 mt-2 mr-5"
                      />
                    </div>
                    <div>
                      <p className="text-yellow-700 flex-auto text-center p-2">
                        Regístrate o inicia sesión para poder contratar a este
                        músico.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </main>
            <div className="col-start-1 sm:col-span-2 md:col-span-1 p-5 sm:row-start-2 sm:row-span-9">
              <AsideLeft userData={userData} />
            </div>
          </div>
        </div>
        <FooterMain marginT={"mt-[100px]"} />
      </main>
    </>
  );
}
